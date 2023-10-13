import React, { createContext, useContext, useState } from 'react';

const IdsContext = createContext();

export const useIds = () => {
  return useContext(IdsContext);
};

export const IdsProvider = ({ children }) => {
    const [IDProvincia, setIDProvincia] = useState(null);
    const [IDMunicipio, setIDMunicipio] = useState(null);

    return (
    <IdsContext.Provider value={{ IDProvincia, setIDProvincia, IDMunicipio, setIDMunicipio }}>
        {children}
    </IdsContext.Provider>
    );
};
