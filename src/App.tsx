import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { Header } from './components/header/header';
import { MainSlider } from './components/main-slider/main-slider';
import { Navigation } from './components/navigation/navigation';
import { EventsPage } from './pages/events-page';
import { NewsPage } from './pages/news-page';
import { RepresentativeOfficesPage } from './pages/representative-offices-page';

function App() {
    return (
        <div className="main">
            <div className="banner">
                banner
            </div>
            <Header/>
            <MainSlider/>
            <Routes>
                <Route path="news" element={<NewsPage/>}/>
                <Route path="events" element={<EventsPage/>}/>
                <Route path="offices" element={<RepresentativeOfficesPage/>}/>
            </Routes>
            <Navigation/>
        </div>
    );
}

export default App;
