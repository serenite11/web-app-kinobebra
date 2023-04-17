import React, {FC} from 'react';
import styled from "styled-components";
import data from "../mock/movies.json"
import MovieListItem from "./MovieListItem";
import ImageSlider from "./ImageSlider";

const MovieListEl = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-between;
  @media ${props => props.theme.media.phone} {
    justify-content: center;
  }
`

const MovieList: FC = () => {
    return (
                <ImageSlider>
                    {data.map((item) => (
                        <MovieListItem key = {item.id} name={item.name}
                                       genre={item.genre}
                                       producersId={item.producersId}
                                       posterUrl={item.posterUrl}
                                       creationYear={item.creationYear}
                                       rating={item.rating}
                                       cast={item.cast}
                                       id={item.id}/>
                    ))}
                </ImageSlider>
    );
};

export default MovieList;