import React from "react";
import { screen , render, getByRole } from "@testing-library/react";
import HomePage from "../HomePage";
import { describe, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";

describe('HomePage rendering', () => {
    beforeEach(() => {
        render(
            <MemoryRouter>
                <HomePage />
            </MemoryRouter>
        );
    });

    it("renders all headings", () => {
       const elements = screen.getAllByText(/Fast Shop/i);
       expect(elements.length).toBe(2);
    })

    it("renders all links", () => {
        const links = screen.getAllByRole('link')
        
        links.forEach(link => {
            expect(link).toBeInTheDocument();
        })
    })

    it("renders the paragraph", () => {
        const element = screen.getByText(/explore our latest products and deals/i)
        expect(element).toBeInTheDocument();
    })

    it("renders the button", () => {
        const element = screen.getByRole("button", {name: "Shop"})
        expect(element).toBeInTheDocument();
    })
});