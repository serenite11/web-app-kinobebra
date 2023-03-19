import styled, {css} from "styled-components";
import {INavBarProps} from "./SideBar";

export const UserMenu = styled.div<INavBarProps>`
  width: calc(100% + 49px);
  height: 65px;
  margin-top: 10px;
  position: absolute;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: #294421;
  //background-color: rgba(255, 255, 255, 0.15); /* значение для прозрачности фона */
  display: flex;
  flex-direction: column;
  justify-content: center; /* выравнивание по горизонтали */
  align-items: center; /* выравнивание по вертикали */
  transform: translateY(-150px);
  opacity: 0;
  transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);

  ${props =>
    props.open &&
    css`
            transform: translateY(0);
            opacity: 1;
            z-index: 1;
          `}
  &:hover {
    border: 1px solid;
    //background-color: rgba(255, 255, 255, 0.2); /* значение для прозрачности фона */
    cursor: pointer;
  }

}
`