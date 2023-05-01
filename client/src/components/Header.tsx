import React, {useContext, useRef} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import {Container} from "@mui/material";
import {MenuContext} from "../context/navState";
import HamburgerButton from "./HamburgerButton";
import {SideMenu} from "./SideBar";
import {useOnClickOutside, useOnClickOutsideForAuthorizedMenu, useOnClickOutsideForMenu} from "../hooks/onClickOutside";
import bebraLogo from "../bebra.png"
import {Link, NavLink} from "react-router-dom";
import SearchBar from "./SearchBar";
import {Logo} from "./Logo";
import UserIcon from "./UserIcon";
import LoginPage from "../pages/LoginPage";
import FavoriteListIcon from "./FavoriteListIcon";
import AuthorizedUserMenu from "./AuthorizedUserMenu";
import RegisterPage from "../pages/RegisterPage";
import {useSelector} from "react-redux"
import {selectUserInfo} from "../store/features/UserSlice";

const Header = () => {
  const userMenuRef = useRef<HTMLInputElement>(null);
  const node = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLDivElement>(null);
  const userMenuButtonRef = useRef<HTMLDivElement>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);
  const loginButtonRef = useRef<HTMLDivElement>(null);
  const registerModalContentRef = useRef<HTMLDivElement>(null);
  const registerButtonRef = useRef<HTMLDivElement>(null);
  const authorizedUserMenuRef = useRef<HTMLDivElement>(null);
  const userInfo = useSelector(selectUserInfo)
  const isUserAuth = userInfo.isUserAuth
  const {
    isNavbarMenuOpen,
    toggleMenuMode,
    toggleUnauthorizedUserMenuMode,
    showModal,
    handleLoginClick,
    setShowModal,
    handleLoginClose,
    handleRegisterClose,
    handleRegisterClick,
    showRegisterModal,
    setShowRegisterModal,
    isUnauthorizedUserMenuOpen,
    setUnauthorizedUserMenuOpen,
    isAuthorizedUserMenuOpen,
    setAuthorizedUserMenuOpen
  } = useContext(MenuContext);

  useOnClickOutside(node, menuButtonRef, () => {
    if (isNavbarMenuOpen) {
      toggleMenuMode();
    }
  });

  useOnClickOutsideForMenu(userMenuRef, userMenuButtonRef, () => {
    if (isUnauthorizedUserMenuOpen) {
      toggleUnauthorizedUserMenuMode(isUserAuth);
    }
  })

  useOnClickOutsideForAuthorizedMenu(authorizedUserMenuRef, userMenuButtonRef, () => {
    if (isAuthorizedUserMenuOpen) {
      toggleUnauthorizedUserMenuMode(isUserAuth)
    }
  })


  return (
    <>
      <Box sx={{flexGrow: 0}}>
        <AppBar className={'navbar'}>
          <Container style={{position: "relative"}}>
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
              {isUserAuth && <Link to={'/favorites'}><FavoriteListIcon/></Link>}
              <SearchBar
                inputRef={userMenuRef}
                loginButtonRef={loginButtonRef}
                registerButtonRef={registerButtonRef}
                handleRegisterClick={handleRegisterClick}
                handleLoginClick={handleLoginClick}
                isUserAuth={isUserAuth}
              />
              <div ref={userMenuButtonRef}>
                <UserIcon isAuth={isUserAuth}/>
              </div>
            </Toolbar>
            {isUserAuth ?
              <div ref={authorizedUserMenuRef}>
                <AuthorizedUserMenu open={isAuthorizedUserMenuOpen}
                                    setAuthorizedUserMenuOpen={setAuthorizedUserMenuOpen
                                    }
                                    name={userInfo.userInfo.name}
                />
              </div>
              : <>
                <LoginPage
                  handleLoginClose={handleLoginClose}
                  modalContentRef={modalContentRef}
                  showModal={showModal}
                  setShowModal={setShowModal}
                  loginButtonRef={loginButtonRef}
                />
                <RegisterPage handleRegisterClose={handleRegisterClose}
                              registerButtonRef={registerButtonRef}
                              registerModalContentRef={registerModalContentRef}
                              setShowModal={setShowRegisterModal}
                              showModal={showRegisterModal}
                />
              </>
            }
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