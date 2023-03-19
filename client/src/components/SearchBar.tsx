import {alpha, styled as muiStyled} from '@mui/material/styles';

import InputBase from "@mui/material/InputBase";
import React, {useContext} from 'react';
import SearchIcon from "@mui/icons-material/Search";
import {Link} from "react-router-dom";
import {MenuContext} from "../context/navState";
import {UserMenu} from "./UserMenu";

interface ISearchBarProps {
    inputRef: React.RefObject<HTMLInputElement>;
    loginButtonRef: React.RefObject<HTMLDivElement>
    registerButtonRef: React.RefObject<HTMLDivElement>
    handleLoginClick: () => void;
    handleRegisterClick: () => void;
}


export const Search = muiStyled('div')(({theme}) => ({
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
export const SearchIconWrapper = muiStyled('div')(({theme}) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));
export const StyledInputBase = muiStyled(InputBase)(({theme}) => ({
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

const SearchBar = ({inputRef, loginButtonRef, handleLoginClick,registerButtonRef,handleRegisterClick}: ISearchBarProps) => {
    const {isUserMenuOpen, toggleUserMenuMode} = useContext(MenuContext)
    return (
        <Search className={'search'}>
            <SearchIconWrapper>
                <SearchIcon/>
            </SearchIconWrapper>
            <StyledInputBase
                placeholder="Поиск…"
                inputProps={{'aria-label': 'search'}}
            />
            <div ref={inputRef}>
                <UserMenu open={isUserMenuOpen} className={'userMenu'}>
                    <div onClick={() => {
                        handleLoginClick()
                        toggleUserMenuMode()
                    }
                    }
                         ref={loginButtonRef}>Авторизация
                    </div>
                    <div onClick={() => {
                        handleRegisterClick()
                        toggleUserMenuMode()
                    }
                    }
                         ref={registerButtonRef}>Регистрация
                    </div>
                </UserMenu>
            </div>
        </Search>
    );
};

export default SearchBar;