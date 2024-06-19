import style from "../styles/shop.module.css"
import { Link, useOutletContext } from "react-router-dom";

function Shop() {
    const {products, loading, cartItems, setSelectedCategory, setCartItemCount, setCartItems} = useOutletContext();

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
        setCartItemCount(cartItems.length + 1);
        console.log(product)
    }

    return (
        <div className={style.shopContent}>
            <div className={style.productsLinks}>
                <Link onClick={() => setSelectedCategory('all')}>All</Link>
                <Link onClick={() => setSelectedCategory('men\'s clothing')}>Mens Clothing</Link>
                <Link onClick={() => setSelectedCategory('women\'s clothing')}>Womens Clothing</Link>
                <Link onClick={() => setSelectedCategory('jewelery')}>Jewelery</Link>
                <Link onClick={() => setSelectedCategory('electronics')}>Electronics</Link>
            </div>
            {loading ? (
                <div className={style.loadingContainer}>
                    <p>Loading...</p>
                </div>
            ) : (<div className={style.shopCardsContainer}>
                {products.map(product => (
                    <div key={product.id} className={style.shopCards}>
                        <img src={product.image} alt={product.title} className={style.productImage} />
                        <h2 className={style.productTitle}>{product.title}</h2>
                        <div className={style.productOrder}>
                            <p className={style.productPrice}>{product.price}$</p>
                            <button className={style.productButton} onClick={() => addToCart(product)}>Buy</button>
                        </div>
                    </div>
                ))}
            </div>
            )}
        </div>
    )
}

export default Shop;