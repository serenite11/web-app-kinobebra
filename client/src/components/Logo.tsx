import styled from "styled-components";

export const Logo = styled.img`
  max-height: 45px;
  max-width: 64px;
  @media ${props => props.theme.media.phoneAndTablet} {
    display: none;
  }
`

export const LogoTitle = styled.div`
  display: block;
  flex-grow: 1;
  font-size: 24px;
  @media ${props => props.theme.media.phone} {
    display: none;
  }
`