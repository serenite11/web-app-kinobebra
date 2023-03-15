import React, {FC, PropsWithChildren, useContext} from 'react';
import styled, {css, ThemedStyledProps} from 'styled-components';
import { MenuContext } from '../context/navState';
import arrow from '../arrow.svg';
import {NavLink} from "react-router-dom";

interface IComponent{
    open : boolean;
}

const Menu = styled.nav<IComponent>`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 293;
  display: block;
  height: 100%;
  width: 400px;
  max-height: 100vh;
  max-width: 100%;
  margin-top: 0;
  padding-top: 100px;
  padding-right: 0;
  align-items: stretch;
  background-color: ${props => props.color || props.theme.colors.primary};
  transform: translateX(-100%);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  

  &{
    
  }
  
  ${props =>
          props.open &&
          css`
      transform: translateX(0);
    `}
`;

export const MenuLink = styled.a`
  position: relative;
  display: block;
  text-align: left;
  max-width: 100%;
  padding-top: 25px;
  padding-bottom: 25px;
  padding-left: 16%;
  background-image: url(${arrow});
  background-position: 88% 50%;
  background-size: 36px;
  background-repeat: no-repeat;
  background-color: ${props => props.color || props.theme.colors.primary};
  transition: background-position 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  text-decoration: none;
  color: #fff;
  font-size: 32px;
  line-height: 120%;
  font-weight: 500;

  :hover {
    background-position: 90% 50%;
  }
`;

export const SideMenu:FC<PropsWithChildren> = ({ children }) => {
    const { isMenuOpen } = useContext(MenuContext);

    return <Menu open={isMenuOpen}>{children}</Menu>;
};


SideMenu.defaultProps = {
    children: (
        <>
            <MenuLink href="/">Главная</MenuLink>
            <MenuLink href="/articles">Новинки</MenuLink>
            <MenuLink href="/about">Фильмы</MenuLink>
            <MenuLink href="/contact">Сериалы</MenuLink>
        </>
    ),
};