import React from 'react';
import styled from "styled-components";

const SubscriptionInfo = styled.div`
  margin-top: 15px;
  width: 100%;
  height: 200px;
  backdrop-filter: brightness(75%);
  border-radius: 25px;
  display: flex;
  font-size: 24px;
  align-items: center;
`
const SubscriptionMainInfo = styled.div`
  flex : 40% 0 0;
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
`
const UnsubscriptionButton = styled.div`
  flex-grow: 1;
  justify-self: center;
  
  &:hover{
    cursor: pointer;
    text-shadow: 0 0 4px #fff;
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