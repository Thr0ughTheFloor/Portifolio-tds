import Style from './App.module.css'
import { Menu } from './components/menu'
import { useState } from 'react'
import  Banner  from './components/banner'
import Carousel from './components/carousel'

function App() {
  return (
    <>
    <Menu/>
    <main>
    <Banner/>
    <Carousel/>
    </main>
    </>
  );
}

export default App
