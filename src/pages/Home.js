import React from 'react'

import Hero from '../components/Hero'
import About from '../components/About'
import Contact from '../components/Contact'
import Weather from '../components/Weather'
import Places from '../components/Places'
import Culture from '../components/Culture'

export default function Home () {
    return <>
    <div>Welcome to oujda</div>
    <Hero />
    <About />
    <Weather />
    <Places />
    <Culture />
    <Contact />
    </>
}