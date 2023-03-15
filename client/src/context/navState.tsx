import React, {createContext, FC, PropsWithChildren, useState} from 'react';

interface IValue{
    isMenuOpen : boolean;
    toggleMenuMode : () => void
}
export const MenuContext = createContext({
    isMenuOpen: true,
    toggleMenuMode: () => {},
});

const NavState:FC<PropsWithChildren> = ({ children }) => {
    const [isMenuOpen, toggleMenu] = useState(false);


    function toggleMenuMode() {
        toggleMenu(!isMenuOpen);
    }

    return (
        <MenuContext.Provider value={{ isMenuOpen, toggleMenuMode }}>{children}</MenuContext.Provider>
);
};



export default NavState;