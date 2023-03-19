import React, {createContext, FC, PropsWithChildren, useState, Dispatch} from 'react';

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

}

export const MenuContext = createContext<IValue>({

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

});

const NavState: FC<PropsWithChildren> = ({children}) => {
    const [isMenuOpen, toggleMenu] = useState(false);
    const [isUserMenuOpen, setUserMenu] = useState<boolean>(false)
    const [showModal, setShowModal] = useState(false);
    const [showRegisterModal, setShowRegisterModal] = useState(false);

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
            setShowRegisterModal
        }}>{children}</MenuContext.Provider>
    );
};


export default NavState;