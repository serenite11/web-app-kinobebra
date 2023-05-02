import React, {useEffect, useState} from 'react'
import './App.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Container} from "@mui/material";
import Home from "./pages/Home";
import NavState from "./context/navState";
import styled from "styled-components";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OneMoviePage from "./pages/OneMoviePage";
import NewMovies from "./pages/NewMovies";
import AllMovies from "./pages/AllMovies";
import AllSeries from "./pages/AllSeries";
import PersonalPage from "./pages/PersonalPage";
import FavoriteList from "./pages/FavoriteList";
import {checkAuth} from "./http/userApi";
import {useDispatch} from "react-redux";
import {setUserAuth, setUserData} from "./store/features/UserSlice";


const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

function App() {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        checkAuth().then(data => {
            dispatch(setUserData(data))
            dispatch(setUserAuth(true))
        }).finally(() => setLoading(false))

    }, [])

    return (
        <NavState>
            <Router>
                <Header/>
                {loading
                    ? (<h1>ЗАГРУЗКА..</h1>)
                    : (
                        <AppWrapper>
                            <Container className={'wrapper'}>
                                <Routes>
                                    <Route path="/" element={<Home/>}/>
                                    <Route path="/:id" element={<OneMoviePage/>}/>
                                    <Route path="/news" element={<NewMovies/>}/>
                                    <Route path="/movies" element={<AllMovies/>}/>
                                    <Route path="/series" element={<AllSeries/>}/>
                                    <Route path="/me/*" element={<PersonalPage/>}/>
                                    <Route path="/favorites" element={<FavoriteList/>}/>
                                </Routes>
                            </Container>
                            <Footer/>
                        </AppWrapper>
                    )
                }
            </Router>
        </NavState>
    )
}

export default App
