"use client"

import { createContext,useContext,useState } from "react"

//create search context
export const SearchContext=createContext()


//context provider
export const SearchContextProvider=({children})=>{
    const[searchActive,setSearchActive]=useState(false)

    return(
        <SearchContext.Provider value={{searchActive,setSearchActive}}>
            {children}
        </SearchContext.Provider>
    )

};

export const useSearchContext=()=>useContext(SearchContext);