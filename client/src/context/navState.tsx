import React, {createContext, FC, PropsWithChildren, useState} from 'react';

interface IValue {
    isNavbarMenuOpen: boolean;
    toggleMenuMode: () => void; //Боковая менюшка
    toggleUnauthorizedUserMenuMode: (isUserAuth : boolean) => void;
    handleLoginClick: () => void;
    handleLoginClose: () => void;
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    handleRegisterClick: () => void;
    handleRegisterClose: () => void;
    showRegisterModal: boolean;
    setShowRegisterModal: React.Dispatch<React.SetStateAction<boolean>>;
    isUnauthorizedUserMenuOpen: boolean;
    setUnauthorizedUserMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setAuthorizedUserMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isUserAuth: boolean;
    setUserAuth: React.Dispatch<React.SetStateAction<boolean>>;
    isAuthorizedUserMenuOpen : boolean;
    // toggleAuthorizedUserMenuMode: () => void;
}

export const MenuContext = createContext<IValue>({
    isAuthorizedUserMenuOpen: false,
    isUnauthorizedUserMenuOpen: false,
    setUnauthorizedUserMenuOpen(value: ((prevState: boolean) => boolean) | boolean): void {
    },
    setAuthorizedUserMenuOpen(value: ((prevState: boolean) => boolean) | boolean): void {
    },
    /*toggleAuthorizedUserMenuMode(): void {
    },*/
    isUserAuth: false,
    setUserAuth(value: ((prevState: boolean) => boolean) | boolean): void {
    },
    isNavbarMenuOpen: true,
    toggleMenuMode: () => {
    },
    toggleUnauthorizedUserMenuMode: (isUserAuth) => {
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
    }
});

const NavState: FC<PropsWithChildren> = ({children}) => {
    const [isNavbarMenuOpen, setToggleNavbarMenu] = useState(false);

    function toggleMenuMode() {
        setToggleNavbarMenu(!isNavbarMenuOpen);
    }

    // const [isUserMenuOpen, setUserMenu] = useState<boolean>(false)
    const [showModal, setShowModal] = useState(false);
    const [showRegisterModal, setShowRegisterModal] = useState(false);
    const [isUnauthorizedUserMenuOpen, setUnauthorizedUserMenuOpen] = useState(false)
    const [isUserAuth, setUserAuth] = useState<boolean>(true)
    const [isAuthorizedUserMenuOpen, setAuthorizedUserMenuOpen] = useState<boolean>(false)


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

    function toggleUnauthorizedUserMenuMode(isUserAuth : boolean) {
        if (isUserAuth)
            setAuthorizedUserMenuOpen(!isAuthorizedUserMenuOpen)
        else
            setUnauthorizedUserMenuOpen(!isUnauthorizedUserMenuOpen);
    }



    return (
        <MenuContext.Provider value={{
            isNavbarMenuOpen,
            toggleMenuMode,
            toggleUnauthorizedUserMenuMode,
            showModal,
            handleLoginClick,
            setShowModal,
            handleLoginClose,
            handleRegisterClick,
            handleRegisterClose,
            showRegisterModal,
            setShowRegisterModal,
            setUnauthorizedUserMenuOpen,
            isUnauthorizedUserMenuOpen,
            isUserAuth,
            setUserAuth,
            isAuthorizedUserMenuOpen,
            setAuthorizedUserMenuOpen

        }}>{children}</MenuContext.Provider>
    );
};


export default NavState;