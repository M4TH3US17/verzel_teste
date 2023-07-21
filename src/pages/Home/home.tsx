import React, {useEffect, useContext } from 'react';
import './home.css'
import NavBar from '../../componentes/NavBar/navbar';
import HomeCarros from './HomeCarros/homeCarros';
import { useNavigate } from 'react-router-dom';
import GlobalContext from '../../utils/GlobalContext';

const Home = () => {
    let navigate = useNavigate();
    const { estaAutenticado, setEstaAutenticado } = useContext(GlobalContext);

    useEffect(() => { if(estaAutenticado == false) navigate("/login") }, []);

    return (<>
    <NavBar/>
    <HomeCarros/>
    </>);
};

export default Home;