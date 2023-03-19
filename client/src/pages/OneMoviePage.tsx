import React, {FC, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {styled as muiStyled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import styled from "styled-components";
import data from "../mock/movies.json"
import {IMovieInfo} from "../components/MovieListItem";
import producers from "../mock/producers.json";

const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  align-items: center;
  row-gap: 15px;


`
const MovieTitle = styled.div`
  font-size: 36px;
  font-weight: 600;
  text-align: center;
`
const MovieCreationYear = styled.div`
  color: #cbcbcb;

  &:hover {
    color: white;
    cursor: pointer;
  }
`


const MovieTags = styled.div`
  display: flex;
  column-gap: 5px;
  color: #cbcbcb;

  & > div:hover {
    color: white;
    cursor: pointer;
  }
`

const MovieProducer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px;
`

const MovieProducerList = styled.div`
  display: flex;
  column-gap: 1rem;

  
`

const MovieProducerInfo = styled.div`
  width: 64px;
  height: 64px;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: grey;
`

const MovieProducerInfoContainer = styled.div`
  display: flex;
  text-align: center;
  width: 100px;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    background-color: rgba(254, 255, 253, 0.6);
  }
`

const MovieProducerImg = styled.img`
  border-radius: 10px;
  width: 56px;
  height: 56px;
`

const MovieActors = styled.div`

`


const Poster = styled.img`
  max-width: 100%;
  border-radius: 10px;
`

interface IProducer {
    id: number;
    name: string;
    imageUrl: string;
}

const OneMoviePage: FC = () => {
    function findProducersByIds(producersIds: number[]) {
        return producers.filter(producer => producersIds.includes(producer.id));
    }

    const {id} = useParams();
    const [movie, setMovie] = useState<IMovieInfo | undefined>({
        "name": "Аватар: Путь воды",
        "genre": ["фантастика", "фэнтези", "боевик", "приключения"],
        "producersId": [1],
        "posterUrl": "",
        "creationYear": 2022,
        "rating": 7.8,
        "cast": [
            "Сэм Уортингтон",
            "Зои Салдана",
            "Сигурни Уивер",
            "Стивен Лэнг",
            "Кейт Уинслет"
        ],
        "id": 6464616946156464
    })
    const [movieProducers, setMovieProducers] = useState<IProducer[]>([]);
    useEffect(() => {
        if (id) {
            const foundMovie = data.find(movie => movie.id === +id);
            if (foundMovie) {
                setMovie(foundMovie);
                const foundProducers = findProducersByIds(foundMovie.producersId);
                // @ts-ignore
                setMovieProducers(foundProducers);
            }
        }
    }, [id]);
    return (
        <Box sx={{flexGrow: 1}}>
            {movie && (
                <Grid className={'mainGrid'} container spacing={2}>
                    <Grid className={'posterGrid'} xs={12} md={6}>
                        <Poster src={movie.posterUrl}/>
                    </Grid>
                    <Grid md={6}>
                        <MovieInfo>
                            <MovieTitle>
                                {movie.name}
                            </MovieTitle>
                            <MovieCreationYear>
                                {movie.creationYear.toString()}
                            </MovieCreationYear>
                            <MovieTags>
                                {movie.genre.map((tag) => (
                                    <div>{tag}</div>
                                ))}
                            </MovieTags>
                            <MovieProducer>
                                {movie.producersId.length < 2 ? 'Продюсер' : 'Продюсеры'}
                                <MovieProducerList>
                                    {movieProducers.map(producer => (
                                        <MovieProducerInfoContainer>
                                            <MovieProducerInfo>
                                                <MovieProducerImg src={producer.imageUrl}/>
                                            </MovieProducerInfo>
                                            {producer.name}
                                        </MovieProducerInfoContainer>
                                    ))}
                                </MovieProducerList>
                            </MovieProducer>
                        </MovieInfo>
                    </Grid>
                </Grid>
            )}
        </Box>
    );
};

export default OneMoviePage;