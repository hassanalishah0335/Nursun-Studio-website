import React from 'react';
import Hero from '../Hero';
import CardSection from '../CardSection';
import IdeaSection from '../IdeaSection';


const Home = () => {
  return (
    <>
        <Hero 
        src = '/resource/videos/video-1.mp4'
        text = 'Pitch Desk'
        />
        <CardSection />
        <IdeaSection />
    </>
  )
}

export default Home
