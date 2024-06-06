import React, { createContext, useState, useContext } from "react";

const FilterPriceContext = createContext();

export function FilterPriceProvider({ children }) {
    const [filterPrice, setFilterPrice] = useState({ title: "", value: "" });

    return (
        <FilterPriceContext.Provider value={{ filterPrice, setFilterPrice }}>
            {children}
        </FilterPriceContext.Provider>
    );
}
export const useFilterPrice = () => {
    return useContext(FilterPriceContext);
};
export default FilterPriceContext;