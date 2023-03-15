import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {styled as muiStyled, alpha} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import {Container} from "@mui/material";
import {useContext, useEffect, useRef} from "react";
import {MenuContext} from "../context/navState";
import HamburgerButton from "./HamburgerButton";
import {SideMenu} from "./SideBar";
import styled from "styled-components";
import useOnClickOutside from "../hooks/onClickOutside";
import bebraLogo from "../bebra.png"
import {NavLink} from "react-router-dom";
import {AccountCircle} from "@mui/icons-material";


const Search = muiStyled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));
const SearchIconWrapper = muiStyled('div')(({theme}) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));
const StyledInputBase = muiStyled(InputBase)(({theme}) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const Logo = styled.img`
  max-height: 45px;
  max-width: 64px;
  @media ${props => props.theme.media.phone} {
    display: none;
  }
`


const LogoTitle = styled.div`
  display: block;
  flex-grow: 1;
  font-size: 24px;
  @media ${props => props.theme.media.phone} {
    display: none;
  }
`


const Header = () => {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const node = useRef<HTMLDivElement>(null);
    const menuButtonRef = useRef<HTMLDivElement>(null);
    const {isMenuOpen, toggleMenuMode} = useContext(MenuContext);
    useOnClickOutside(node, menuButtonRef, () => {
        console.log('я в функции открытия')
        // Only if menu is open
        if (isMenuOpen) {
            console.log('Закрываю меню')
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
                            <IconButton
                                className={'menu-container'}
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                className={'menu'}
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={open}
                                onClose={handleClose}
                            >
                                <MenuItem className={''} onClick={handleClose}>Личный кабинет</MenuItem>
                                <MenuItem className={''} onClick={handleClose}>Избранное</MenuItem>
                                <MenuItem className={''} onClick={handleClose}>Выйти</MenuItem>
                            </Menu>
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