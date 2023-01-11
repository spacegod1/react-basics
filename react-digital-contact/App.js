import React from 'react';
import Photo from './components/Photo';
import Profile from './components/Profile';
import Footer from './components/Footer';
import Info from './components/Info';

function App() {
    return (
        <div className='app'>
        <Photo />
        <Profile />
        <Info />
        <Footer />
        </div>
    )
}

export default App;