import React from 'react'
import './App.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Container} from "@mui/material";
import Home from "./pages/Home";
import NavState from "./context/navState";
import styled from "styled-components";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OneMoviePage from "./pages/OneMoviePage";

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

function App() {

    return (
        <NavState>
            <Router>
                <Header/>
                <AppWrapper>
                        <Container className={'wrapper'}>
                    <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/:id" element={<OneMoviePage/>}/>
                    </Routes>
                        </Container>
                    <Footer/>
                </AppWrapper>
            </Router>
        </NavState>
    )
}

export default App
