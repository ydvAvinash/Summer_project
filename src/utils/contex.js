import { createContext, useState } from "react";

export const Context = createContext();

const AppContex = ({ children}) => {
    return(
        <Context.Provider>
            {children}
        </Context.Provider>
    )
}

export default AppContex;