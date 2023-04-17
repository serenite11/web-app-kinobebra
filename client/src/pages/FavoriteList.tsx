import React from 'react';
import styled from "styled-components";
import data from "../mock/movies.json"
import close from "../White_x_in_red_rounded_square.svg.png"
import FavoriteListItem from "./FavoriteListItem";

const FavoriteListContainer = styled.div`
    text-align: center;
`
const PageTitle = styled.div`
  font-size: 36px;
`
const MovieTypePanel = styled.div`
  display: flex;
  column-gap: 10px;
  @media ${props => props.theme.media.phoneAndTablet} {
    justify-content: center ;
  }
`
const MovieTypeButton = styled.button`
  font-size: 16px;
  background: none;
  border-radius: 10px;
  padding: 7px;
  border: 1px solid white;

  &:hover {
    cursor: pointer;
    background-color: #640089;
  }

`

/*const PosterContainer = styled.div`
  flex: 20% 0 0; /!* первый элемент будет занимать 20% доступного места *!/
`*/




const FavoriteList = () => {


    return (
        <FavoriteListContainer>
            <PageTitle>
                Моё избранное
            </PageTitle>
            <MovieTypePanel>
                <MovieTypeButton>
                    Всё подряд
                </MovieTypeButton>
                <MovieTypeButton>
                    Фильмы
                </MovieTypeButton>
                <MovieTypeButton>
                    Сериалы
                </MovieTypeButton>
            </MovieTypePanel>
            {data.map((movie) => <FavoriteListItem key={movie.id}
                                  name={movie.name}
                                  genre={movie.genre}
                                  producersId={movie.producersId}
                                  posterUrl={movie.posterUrl}
                                  creationYear={movie.creationYear}
                                  rating={movie.rating}
                                  cast={movie.cast}
                                  id={movie.id}/>
            ) }
        </FavoriteListContainer>
    );
};

export default FavoriteList;