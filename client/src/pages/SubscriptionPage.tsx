import React from 'react';
import styled from "styled-components";

const SubscriptionInfo = styled.div`
  box-sizing: border-box;
  margin-top: 15px;
  width: 100%;
  backdrop-filter: brightness(75%);
  border-radius: 25px;
  display: flex;
  font-size: 24px;
  -webkit-box-align: center;
  align-items: center;
  padding: 50px 10px;
  gap: 10px;

  @media ${props => props.theme.media.phoneAndTablet} {
    flex-direction: column;
    padding: 15px 0;
  }

`
const SubscriptionMainInfo = styled.div`
  flex: 40% 0 0;
`
const SubscriptionName = styled.div`
  justify-items: flex-start;
`
const SubscriptionDate = styled.div`
  font-size: 18px;
  color: #b7b7b7;
`
const SubscriptionPrice = styled.div`
  flex: 25% 0 0;

  padding: 5px;
  background-color: orange;
  border-radius: 10px;

  @media ${props => props.theme.media.phoneAndTablet} {
    background: none;
  }
  
`
const UnsubscriptionButton = styled.div`
  flex-grow: 1;
  justify-self: center;
  padding: 5px;
  background-color: orange;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    text-shadow: 0 0 4px #fff;
    background-color: purple;
  }

`


const SubscriptionPage = () => {
    return (
        <SubscriptionInfo>
            <SubscriptionMainInfo>
                <SubscriptionName>
                    Подписка ОптоПремиум
                </SubscriptionName>
                <SubscriptionDate>
                    Оформлена до 23.04.2023
                </SubscriptionDate>
            </SubscriptionMainInfo>
            <SubscriptionPrice>390р/мес</SubscriptionPrice>
            <UnsubscriptionButton>Отменить подписку</UnsubscriptionButton>
        </SubscriptionInfo>
    );
};

export default SubscriptionPage;