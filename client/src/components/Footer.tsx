import React from 'react';
import styled from "styled-components";


const FooterBlock = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: white;
  min-height:128px;
  flex: 0 0 auto;
  flex-wrap: wrap;
  margin-top: 20px;
`

const DescBlock = styled.div`
  @media ${props => props.theme.media.phone}{
    display:none;
  }
`

const LinkBlock = styled.div`
  text-decoration: underline;
  display: flex;
  column-gap: 10px;
  @media ${props => props.theme.media.phone}{
    flex-direction: column;
    align-items: center;
    row-gap: 10px;
  }
`


const Footer = () => {
    return (
        <FooterBlock>
            <DescBlock>Сайт сделан под 3 бутылки пива Дольганом и Вадимом</DescBlock>
            <LinkBlock>
                <a>Репозиторий</a>
                <a>Контакты</a>
                <a>Донаты на пивко</a>
                <a>Разоблачение Азлагора</a>
            </LinkBlock>
            <div style={{marginTop: '10px'}}>v0.1.7</div>
        </FooterBlock>
    );
};

export default Footer;