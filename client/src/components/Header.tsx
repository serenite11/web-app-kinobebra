import * as React from 'react';
import {RefObject, useContext, useRef} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import {Container} from "@mui/material";
import {MenuContext} from "../context/navState";
import HamburgerButton from "./HamburgerButton";
import {SideMenu} from "./SideBar";
import {useOnClickOutside, useOnClickOutsideForMenu} from "../hooks/onClickOutside";
import bebraLogo from "../bebra.png"
import {NavLink} from "react-router-dom";
import SearchBar from "./SearchBar";
import {Logo} from "./Logo";
import UserIcon from "./UserIcon";
import LoginPage from "../pages/LoginPage";


const Header = () => {
    const userMenuRef = useRef<HTMLInputElement>(null);
    const node = useRef<HTMLDivElement>(null);
    const menuButtonRef = useRef<HTMLDivElement>(null);
    const userMenuButtonRef = useRef<HTMLDivElement>(null);
    const modalContentRef = useRef<HTMLDivElement>(null);
    const loginButtonRef = useRef<HTMLDivElement>(null);

    const {
        isMenuOpen,
        toggleMenuMode,
        isUserMenuOpen,
        toggleUserMenuMode,
        showModal,
        handleLoginClick,
        setShowModal,
        handleLoginClose
    } = useContext(MenuContext);

    useOnClickOutside(node, menuButtonRef, () => {
        if (isMenuOpen) {
            toggleMenuMode();
        }
    });
    useOnClickOutsideForMenu(userMenuRef, userMenuButtonRef, () => {
        console.log('Проверяю открыто ли меню')
        if (isUserMenuOpen) {
            console.log('Оно открыто, закрываю!')
            toggleUserMenuMode();
        }
    })


    return (
        <>
            <Box sx={{flexGrow: 0}}>
                <AppBar className={'navbar'}>
                    <Container>
                        <Toolbar className={'header'}>
                            <div ref={menuButtonRef}>
                                <HamburgerButton/>
                            </div>
                            <NavLink to={'/'}>
                                <Logo src={bebraLogo}/>
                            </NavLink>
                            <div className={'navMenu'}>
                                <NavLink to={'/'}
                                         className={({isActive}) => (isActive ? 'active' : 'inactive')}>Главная</NavLink>
                                <NavLink to={'/news'}
                                         className={({isActive}) => (isActive ? 'active' : 'inactive')}>Новинки</NavLink>
                                <NavLink to={'/movies'}
                                         className={({isActive}) => (isActive ? 'active' : 'inactive')}>Фильмы</NavLink>
                                <NavLink to={'/series'}
                                         className={({isActive}) => (isActive ? 'active' : 'inactive')}>Сериалы</NavLink>
                            </div>
                            <SearchBar
                                inputRef={userMenuRef}
                                loginButtonRef={loginButtonRef}
                                handleLoginClick={handleLoginClick}
                            />
                            <div ref={userMenuButtonRef}>
                                <UserIcon/>
                            </div>
                        </Toolbar>
                        <LoginPage
                            handleLoginClose={handleLoginClose}
                            modalContentRef={modalContentRef}
                            showModal = {showModal}
                            setShowModal = {setShowModal}
                            loginButtonRef={loginButtonRef}
                        />
                    </Container>
                </AppBar>
            </Box>
            <nav ref={node} className={'sideMenu'}>
                <SideMenu/>
            </nav>
        </>
    );
};

export default Header;