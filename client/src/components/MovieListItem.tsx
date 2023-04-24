import React, {FC} from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {IMovieInfo} from "../types/Movies";

const Movie = styled.div`
  width: 243px;
  height: 426px;
  background-color: black;
  border-radius: 10px;
  @media ${props => props.theme.media.phone} {
    width: 75%;
    height: 500px;
  }

  &:hover {
    & img {
      transform: translateY(-5px);
      transition: all 0.25s ease-in-out;
    }

    cursor: pointer;
  }

`
const Poster = styled.img`
  width: 100%;
  height: 80%;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
`
const Title = styled.div`
  text-align: center;
  align-self: center;
  font-size: 18px;
`
const AdditionalInfo = styled.div`
  display: flex;
  justify-content: space-around;
  justify-self: end;
  flex-grow: 1;
  align-items: center;
  font-size: 18px;
  width: 100%;
`


const MovieListItem: FC<IMovieInfo> = (props) => {
  return (
    <Movie>
      <NavLink to={`/${props.id}`} className={'movieLink'}>
        <Poster src={props.posterUrl}/>
        <Title>{props.name}</Title>
        <AdditionalInfo>
          <div>{props.creationYear.toString()}</div>
          <div>{props.rating.toString()}</div>
        </AdditionalInfo>
      </NavLink>
    </Movie>
  );
};

export default MovieListItem;