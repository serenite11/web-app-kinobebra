import React, {createContext, FC, PropsWithChildren, useState} from 'react';

interface IValue {
    isMenuOpen: boolean;
    toggleMenuMode: () => void;
    isUserMenuOpen: boolean;
    toggleUserMenuMode: () => void;
    handleLoginClick: () => void;
    handleLoginClose: () => void;
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    handleRegisterClick: () => void;
    handleRegisterClose: () => void;
    showRegisterModal: boolean;
    setShowRegisterModal: React.Dispatch<React.SetStateAction<boolean>>;
    isAuthorizedUserMenuOpen: boolean;
    setAuthorizedUserMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isUserAuth: boolean;
    setUserAuth: React.Dispatch<React.SetStateAction<boolean>>;


}

export const MenuContext = createContext<IValue>({
    isUserAuth: false, setUserAuth(value: ((prevState: boolean) => boolean) | boolean): void {
    },

    isMenuOpen: true,
    toggleMenuMode: () => {
    },
    isUserMenuOpen: false,
    toggleUserMenuMode: () => {
    },
    showModal: false,
    handleLoginClick: () => {
    },
    handleLoginClose(): void {
    },
    setShowModal(value: ((prevState: boolean) => boolean) | boolean): void {
    },
    showRegisterModal: false,
    handleRegisterClick: () => {
    },
    handleRegisterClose(): void {
    },
    setShowRegisterModal(value: ((prevState: boolean) => boolean) | boolean): void {
    },
    isAuthorizedUserMenuOpen: false,
    setAuthorizedUserMenuOpen(value: ((prevState: boolean) => boolean) | boolean): void {
    }


});

const NavState: FC<PropsWithChildren> = ({children}) => {
    const [isMenuOpen, toggleMenu] = useState(false);
    const [isUserMenuOpen, setUserMenu] = useState<boolean>(false)
    const [showModal, setShowModal] = useState(false);
    const [showRegisterModal, setShowRegisterModal] = useState(false);
    const [isAuthorizedUserMenuOpen, setAuthorizedUserMenuOpen] = useState(false)
    const [isUserAuth, setUserAuth] = useState<boolean>(false)

    function toggleMenuMode() {
        toggleMenu(!isMenuOpen);
    }

    const handleRegisterClick = () => {
        setShowRegisterModal(true);
    };

    const handleRegisterClose = () => {
        setShowRegisterModal(false);
    };

    const handleLoginClick = () => {
        setShowModal(true);
    };

    const handleLoginClose = () => {
        setShowModal(false);
    };

    function toggleUserMenuMode() {
        if (isUserAuth)
            setAuthorizedUserMenuOpen(!isAuthorizedUserMenuOpen)
        else
            setUserMenu(!isUserMenuOpen);
    }

    return (
        <MenuContext.Provider value={{
            isMenuOpen,
            toggleMenuMode,
            isUserMenuOpen,
            toggleUserMenuMode,
            showModal,
            handleLoginClick,
            setShowModal,
            handleLoginClose,
            handleRegisterClick,
            handleRegisterClose,
            showRegisterModal,
            setShowRegisterModal,
            setAuthorizedUserMenuOpen,
            isAuthorizedUserMenuOpen,
            isUserAuth,
            setUserAuth
        }}>{children}</MenuContext.Provider>
    );
};


export default NavState;