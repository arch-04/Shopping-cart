import { Outlet, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import style from '../styles/app.module.css'


function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cartItemsCount, setCartItemCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = selectedCategory === 'all'
          ? await fetch('https://fakestoreapi.com/products')
          : await fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [selectedCategory])

  const removeItem = (index) => {
    setCartItems(prevItems => {
      const updatedItems = prevItems.filter((_, i) => i !== index);
      setCartItemCount(updatedItems.length);
      return updatedItems;
    });
  };

  return (
    <div className={style.appContainer}>
      <div className={style.homeHeader}>
        <h1>Fast Shop</h1>
        <div className={style.links}>
          <Link to="/" className={style.link}>Home</Link>
          <Link to="/shop" className={style.link}>Shop</Link>
          <div className={style.cartContainer}>
            <p className={style.cart}>{cartItemsCount}</p>
            <Link to="/cart" className={style.link}>
              <span className="material-symbols-outlined">shopping_cart</span>
            </Link>
          </div>
        </div>
      </div>
      <Outlet context={{ products, loading, cartItems, cartItemsCount, removeItem, setSelectedCategory, setCartItemCount, setCartItems }} />
    </div>
  )
};

export default App
