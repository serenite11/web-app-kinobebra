import React, {createContext, FC, PropsWithChildren, useState} from 'react';

interface IValue{
    isMenuOpen : boolean;
    toggleMenuMode : () => void;
    isUserMenuOpen : boolean;
    toggleUserMenuMode : () => void;
}
export const MenuContext = createContext({
    isMenuOpen: true,
    toggleMenuMode: () => {},
    isUserMenuOpen: false,
    toggleUserMenuMode: () => {},
});

const NavState:FC<PropsWithChildren> = ({ children }) => {
    const [isMenuOpen, toggleMenu] = useState(false);
    const [isUserMenuOpen, setUserMenu]=useState<boolean>(true)

    function toggleMenuMode() {
        toggleMenu(!isMenuOpen);
    }

    function toggleUserMenuMode() {
        setUserMenu(!isUserMenuOpen);
    }

    return (
        <MenuContext.Provider value={{ isMenuOpen, toggleMenuMode, isUserMenuOpen,toggleUserMenuMode }}>{children}</MenuContext.Provider>
);
};



export default NavState;