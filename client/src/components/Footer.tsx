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
  color: black;
  & div{
    color: black;
  }
`

const DescBlock = styled.div`
  color: black;
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
  
  & a{
    color: black;
  }
  
`


const Footer = () => {
    return (
        <FooterBlock>
            <DescBlock>Сайт сделан под 3 бутылки пива Дольганом и Вадимом</DescBlock>
            <LinkBlock>
                <a href={'https://github.com/serenite11/web-app-kinobebra'} target={'_blank'}>Репозиторий</a>
                <a>Контакты</a>
                <a>Донаты на пивко</a>
                <a>Разоблачение Азлагора</a>
            </LinkBlock>
            <div style={{marginTop: '10px'}}>v0.1.9.1</div>
        </FooterBlock>
    );
};

export default Footer;