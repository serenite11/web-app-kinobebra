import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import SearchIcon from '@mui/icons-material/Search';
import {Container} from "@mui/material";
import {useContext, useRef} from "react";
import {MenuContext} from "../context/navState";
import HamburgerButton from "./HamburgerButton";
import {SideMenu} from "./SideBar";
import useOnClickOutside from "../hooks/onClickOutside";
import bebraLogo from "../bebra.png"
import {NavLink} from "react-router-dom";
import {Search, SearchIconWrapper, StyledInputBase} from "./SearchBar";
import {Logo} from "./Logo";







const Header = () => {

    const node = useRef<HTMLDivElement>(null);
    const menuButtonRef = useRef<HTMLDivElement>(null);
    const {isMenuOpen, toggleMenuMode} = useContext(MenuContext);
    useOnClickOutside(node, menuButtonRef, () => {
        if (isMenuOpen) {
            toggleMenuMode();
        }
    });

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
                            <div className={'fff'}>

                                <NavLink to={'/'}
                                         className={({isActive}) => (isActive ? 'active' : 'inactive')}>Главная</NavLink>
                                <NavLink to={'/news'}
                                         className={({isActive}) => (isActive ? 'active' : 'inactive')}>Новинки</NavLink>
                                <NavLink to={'/movies'}
                                         className={({isActive}) => (isActive ? 'active' : 'inactive')}>Фильмы</NavLink>
                                <NavLink to={'/series'}
                                         className={({isActive}) => (isActive ? 'active' : 'inactive')}>Сериалы</NavLink>
                            </div>

                            <Search>
                                <SearchIconWrapper>
                                    <SearchIcon/>
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Поиск…"
                                    inputProps={{'aria-label': 'search'}}
                                />
                            </Search>
                        </Toolbar>
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