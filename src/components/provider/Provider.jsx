import React, { createContext, useContext, useState } from 'react';

const SelectedItemIdContext = createContext();

const SelectItemIdProvider = ({ children }) => {
    const [selectedItemId, setSelectedItemId] = useState();

    return (
        <SelectedItemIdContext.Provider value={{ selectedItemId, setSelectedItemId }}>
            {children}
        </SelectedItemIdContext.Provider>
    );
};


const useUserSelectedItemId = () => useContext(SelectedItemIdContext)


export {SelectItemIdProvider, useUserSelectedItemId}