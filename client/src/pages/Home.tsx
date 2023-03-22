import React, {FC, PropsWithChildren} from 'react';
import styled from "styled-components";
import data from "../mock/movies.json"


import MovieList from "../components/MovieList";

interface HomePageProps {
    color?: string
}

const MainPage = styled.main`
  background-color: ${props => props.color || props.theme.colors.primary};
  color: white;
  margin-top: 1rem;
`
const CategoryTitle = styled.div`
  font-size: 48px;

  @media ${props => props.theme.media.phone} {
    text-align: center;
  }
  
`

const Home: FC<PropsWithChildren<HomePageProps>> = (props, {children}) => {
    return (
        <MainPage {...props}>
            <CategoryTitle>
                ПОПУЛЯРНО СЕЙЧАС
            </CategoryTitle>
            <MovieList/>
            <CategoryTitle>
                ПЛОТНЫЕ БОЕВИКИ
            </CategoryTitle>
            <MovieList/>
        </MainPage>
    );
};

export default Home;