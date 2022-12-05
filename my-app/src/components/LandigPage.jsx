import React from 'react';
import Card from './Card';

const LandingPage = () => {
    return (
        <div className="container">
            <Card img="https://www.abc.net.au/news/image/10425506-3x2-940x627.jpg" title="Cancha 1" description="Cancha de futbol 5" />
            <Card img="https://www.abc.net.au/news/image/10425506-3x2-940x627.jpg" title="Cancha 2" description="Cancha de futbol 7" />
            <Card img="https://www.abc.net.au/news/image/10425506-3x2-940x627.jpg" title="Cancha 3" description="Cancha de futbol 11" />
        </div>
    );
}

export default LandingPage;

