import React, {FC} from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";

const Movie = styled.div`
  width: 243px;
  height: 426px;
  background-color: black;
  display: flex;
  flex-direction: column;
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
  max-height: 80%;
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
`

const Date = styled.div`
`

const Rating = styled.div`
`


export interface IMovieInfo {
    "name": String,
    "genre": String[],
    "producersId": Number[],
    "posterUrl": string,
    "creationYear": Number | Date,
    "rating": Number,
    "cast": String[],
    "id": Number
}


const MovieListItem: FC<IMovieInfo> = (props) => {
    return (
        <NavLink to={`/${props.id}`} className={'movieLink'}>
            <Movie>
                <Poster src={props.posterUrl}/>
                <Title>{props.name}</Title>
                <AdditionalInfo>
                    <div>{props.creationYear.toString()}</div>
                    <div>{props.rating.toString()}</div>
                </AdditionalInfo>
            </Movie>
        </NavLink>
    );
};

export default MovieListItem;