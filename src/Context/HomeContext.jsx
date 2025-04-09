import React, { createContext, useEffect, useState } from "react";
// Create a context for managing home-related data
export const HomeContext = createContext()
// Import property data from a local file
import { properties } from "../data";

const HomeContextProvider = ({children}) => {
 // State to store all available homes
    const [homes, setHomes] = useState(properties)
    
// Helper function to check if a filter value is still default
    const isDefault = (value) => value === "default";

    // States for filtering homes based on user selection
    // Stores selected country
    const [country, setCountry] = useState("default")
    const [property, setProperty] = useState("default") // Stores selected property type
    const [price, setPrice] = useState("default")
    // Stores filtered homes based on user selection
    const [filteredHouses, setFilteredHouses] = useState([])

    // Function to filter homes based on user selection
    const handleSearch = () => {
        // Extract min and max price from the selected price range
        const [minPrice, maxPrice] = price !== "default" ? price.split("-").map(Number) : [0, Infinity]

        // Filter homes based on selected criteria
        const newHouses = homes.filter((house) => {
            // Convert price string to a number
            const housePrice = parseInt(house.price)

            // Return house if all filters match
            if(
                house.country === country &&
                house.property === property &&
                housePrice >= minPrice &&
                housePrice <= maxPrice
            ) {
                return house
            }

            
            // Return all houses if no filters are selected (default values)
            if (isDefault(country) && isDefault(property) && isDefault(price)) {
                return house;
            }

            // Return houses where only the country filter is selected
            if (!isDefault(country) && isDefault(property) && isDefault(price)) {
                return house.country === country;
            }

            // Return houses where only the property filter is selected
            if (!isDefault(property) && isDefault(country) && isDefault(price)) {
                return house.property === property;
            }

            // Return houses where only the price range filter is selected
            if (!isDefault(price) && isDefault(property) && isDefault(country)) {
                return housePrice >= minPrice && housePrice <= maxPrice;
            }

            // Return houses where both country and property filters are selected
            if (!isDefault(country) && !isDefault(property) && isDefault(price)) {
                return house.country === country && house.property === property;
            }

            // Return houses where both country and price filters are selected
            if (!isDefault(country) && isDefault(property) && !isDefault(price)) {
                return house.country === country && housePrice >= minPrice && housePrice <= maxPrice;
            }

            // Return houses where both property and price filters are selected
            if (isDefault(country) && !isDefault(property) && !isDefault(price)) {
                return house.property === property && housePrice >= minPrice && housePrice <= maxPrice;
            }

            return false; // Exclude house if no conditions are met
        })

        // Update filtered houses state
        setFilteredHouses(newHouses)
    }

        // Effect to set default filtered houses if none are selected
    useEffect(()=> {
        if(filteredHouses.length === 0) setFilteredHouses(homes.slice(0, 6))  // Show first 6 homes initially
    }, [homes, filteredHouses]) // Runs when 'homes' or 'filteredHouses' changes
    

    return (
        <HomeContext.Provider value={{homes, country, setCountry, price, setPrice, property, setProperty, handleSearch, filteredHouses}}>
            {children}
        </HomeContext.Provider>
    )
}

export default HomeContextProvider