import React, { createContext, useState } from 'react';

export const SearchContext = createContext();

const binarySearch = (array, target) => {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const midValue = array[mid].title.toLowerCase();

        if (midValue === target.toLowerCase()) {
            return mid;
        } else if (midValue < target.toLowerCase()) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
};

export const SearchProvider = ({ children }) => {
    const [search, setSearch] = useState("");
    const [products, setProducts] = useState([]);

    const searchProduct = (target) => {
        const sortedProducts = [...products].sort((a, b) => a.title.localeCompare(b.title));
        const index = binarySearch(sortedProducts, target);
        return index !== -1 ? sortedProducts[index] : null;
    };

    const recommendProducts = (product) => {
        if (!product) return [];
        // Simple recommendation based on category
        return products.filter(p => p.category === product.category && p.id !== product.id);
    };

    return (
        <SearchContext.Provider value={{ search, setSearch, products, setProducts, searchProduct, recommendProducts }}>
            {children}
        </SearchContext.Provider>
    );
};
