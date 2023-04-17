import React from 'react';
import { NavLink, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import ProfileInfoBlock from "./ProfileInfo";
import ReviewsPage from "./ReviewsPageBlock";
import SubscriptionPage from "./SubscriptionPage";

const PersonalPageContainer = styled.div`
  text-align: center;
  font-size: 36px;
`;

const PersonalPageMenu = styled.div`
  display: flex;
  column-gap: 10px;
  font-size: 20px;

  @media ${props => props.theme.media.phoneAndTablet} {
      justify-content: space-between;
  }
  @media ${props => props.theme.media.phone}{
    flex-direction : column;
  }

  & a:hover{
    color:white;
  }
  
  & a {
    text-decoration: none;
    @media ${props => props.theme.media.phoneAndTablet} {
        font-size: 28px;
    }
  }

  
  
`;

const PersonalPage = () => {
    return (
        <PersonalPageContainer>
            <div>Личный кабинет</div>
            <PersonalPageMenu>
                <NavLink
                    to={'/me/home'}
                    className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                >
                    Профиль
                </NavLink>
                <NavLink
                    to={'/me/reviews'}
                    className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                >
                    Мои отзывы
                </NavLink>
                <NavLink
                    to={'/me/subscription'}
                    className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                >
                    Подписка
                </NavLink>
            </PersonalPageMenu>
            <Routes>
                <Route path="/home" element={<ProfileInfoBlock />} />
                <Route path="/reviews" element={<ReviewsPage />} />
                <Route path="/subscription" element={<SubscriptionPage />} />
            </Routes>
        </PersonalPageContainer>
    );
};

export default PersonalPage;
