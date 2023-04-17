import React, {FC} from 'react';
import styled, {css} from "styled-components";
import {IMovieInfo} from "../types/Movies";
import {Link} from "react-router-dom";

interface IFavoriteListBlockProps {
    posterUrl : string;
}

const MoviePoster = styled.img`
  max-width: 100%;
  width: 100px;
  border-radius: 10px;
`
const MovieMainInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-size: 28px;
  flex: 35% 0 0;
  @media ${props => props.theme.media.phoneAndTablet} {
    flex: 60% 0 0;
    font-size: 20px;
    font-weight: 600;
  }
  @media ${props => props.theme.media.phone} {
    flex: 100% 0 0;
  }
`

const MovieTitle = styled.div`
  @media ${props => props.theme.media.phone} {
    background-color: #0000006e;
  }
`
const MovieProducer = styled.div`
  @media ${props => props.theme.media.phone} {
    background-color: #0000006e;
  }
`

const MovieSecondInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-size: 28px;
  flex: 35% 0 0;
  @media ${props => props.theme.media.phoneAndTablet} {
    display: none;
  }
`

const MovieCreationYear = styled.div`

`

const MovieRating = styled.div`

`
const DeleteFavoriteButton = styled.button`
  flex: 30% 0 0;
  background: none;
  border: none;
  font-size: 26px;
  @media ${props => props.theme.media.tablet} {
    font-size: 18px;
    font-weight: 600;
    flex: 40% 0 0;
  }
  @media ${props => props.theme.media.phone} {
    display: none;
    flex: 0% 0 0;
  }
`

const FavoriteListItemBlock = styled.div<IFavoriteListBlockProps>`
  margin-top: 20px;
  height: 150px;
  width: 100%;
  border-radius: 25px;
  border: 1px solid white;
  display: flex;
  flex-wrap: nowrap; /* чтобы элементы не переносились на новую строку */
  justify-content: space-between; /* чтобы элементы были выровнены по краям */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
  transition: transform 0.3s ease;

  ${props =>
          props.posterUrl &&
          css`
            background-image: url(${props.posterUrl});
          `}
  &:hover {
    transform: scale(1.05);
  }

  & > div {
    text-decoration: none !important;
  }
`

const FavoriteListItem: FC<IMovieInfo> = (props) => {


    return (
        // <Link to={`/${props.id}`}>
            <FavoriteListItemBlock posterUrl = {props.posterUrl}>
                <MovieMainInfo>
                    <MovieTitle>{props.name}</MovieTitle>
                    {/*<MovieProducer></MovieProducer>*/}
                </MovieMainInfo>
                <MovieSecondInfo>
                    <MovieCreationYear>{props.creationYear.toString()}</MovieCreationYear>
                    <MovieRating>{props.rating.toString()}</MovieRating>
                </MovieSecondInfo>
                    <DeleteFavoriteButton>
                        Удалить из избранного
                    </DeleteFavoriteButton>
            </FavoriteListItemBlock>
        // </Link>
    );
};

export default FavoriteListItem;