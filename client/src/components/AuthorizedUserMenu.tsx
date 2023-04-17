import styled, {css} from "styled-components";
import {INavBarProps} from "./SideBar";
import React, {FC} from 'react';
import {Link} from "react-router-dom";

interface IAuthorizedUserMenuProps {
    open: boolean;
    setUserAuth: React.Dispatch<React.SetStateAction<boolean>>;
    setAuthorizedUserMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AuthorizedUserMenuStyle = styled.div<INavBarProps>`
  right: 24px;
  row-gap: 10px;
  width: 250px;
  margin-top: 10px;
  position: absolute;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: ${props => props.color || props.theme.colors.primary};
  //background-color: rgb(41, 68, 33);
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
  transform: translateY(-350px);
  opacity: 0;
  z-index: 1;
  padding: 10px 0;

  ${props =>
          props.open &&
          css`
            transform: translateY(0);
            opacity: 1;
            z-index: 1;
          `}
  &:hover {
    outline: 1px solid;
    //background-color: rgba(255, 255, 255, 0.2); /* значение для прозрачности фона */
    cursor: pointer;
  }

}
`

export const UserMainInfo = styled.div`
  display: flex;
  width: 100%;
`

export const UserAvatar = styled.img`
  max-width: 100%;
  border-radius: 100px;
  width: 75px;
`


const AuthorizedUserMenu:FC<IAuthorizedUserMenuProps> = ({open,setUserAuth, setAuthorizedUserMenuOpen}) => {

    const handleLogout = () => {
        setUserAuth(false)
        setAuthorizedUserMenuOpen(false)
    }

    return (
        <AuthorizedUserMenuStyle color={'#1d0b72'} open={open} className={'userMenu'}>
            <UserMainInfo>
                <div className={'userWelcome'}>
                    <div>Здравстуйте,</div>
                    <div>userName</div>
                </div>
                <div>
                    <UserAvatar
                        src={'https://www.kindpng.com/picc/m/78-785975_icon-profile-bio-avatar-person-symbol-chat-icon.png'}/>
                </div>
            </UserMainInfo>
            <Link onClick={() => setAuthorizedUserMenuOpen(false)} to={'/me/home'}>Личный кабинет</Link>
            <Link onClick={() => setAuthorizedUserMenuOpen(false)} to={'/favorites'}>Избранное</Link>
            <Link to={'/'} onClick={handleLogout}>Выйти</Link>
        </AuthorizedUserMenuStyle>
    );
};

export default AuthorizedUserMenu;