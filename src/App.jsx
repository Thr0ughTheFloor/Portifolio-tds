import Style from './App.module.css'
import { Menu } from './components/menu'
import { useState } from 'react'
import Banner from './components/banner'
import { Carousel } from './components/carousel'
import { Carousel_Artwork } from './components/carousel'
import { Intro } from './components/introInfo'
import { Info } from './components/introInfo'
import face1 from "./assets/images/face1.png";
import face2 from "./assets/images/face2.png";
import symbol from "./assets/images/symbol.png";
import truth from "./assets/images/truth.png";
import witch from "./assets/images/witch.png";
import email from "./assets/images/mail.png"
import whatsapp from "./assets/images/whatsapp.png"
import { InfoResto } from './components/info.jsx';
import { InfoMusica } from './components/info.jsx';
import { InfoTech } from './components/info.jsx';
import Contatos from './components/contato.jsx'



function App() {
  return (
    <>
      <Menu option01='Inicio' option02='Info' option03='Contato' />
      <main>
        <section className={Style.BannerSection}>
          <Banner />
        </section>
        <section className={Style.s2}>
          <div className={Style.divImg1}>
            <img src={face1} alt="" id={Style.draws} style={{ userSelect: 'none', pointerEvents: 'none', position: 'static', marginTop: '15%', marginBottom: '5%' }} />
          </div>
          
          <div id="s2" className={Style.info_div}>
            <Intro />
            <div className={Style.divImg2}>
              <img src={face2} alt="" id={Style.draws} style={{ width: '20%', position: 'static', marginTop: '15%', marginBottom: '5%' }} />
            </div>
            <Info />
          </div>

          <div className={Style.Container_infoResto}>
            <h3>Conhecimento</h3>
            <InfoResto />
            <div className={Style.divImg3}>
              <img src={symbol} alt="" id={Style.draws} style={{ width: '25%', position: 'static', marginTop: '15%', marginBottom: '5%' }} />
              <img src={witch} alt="" id={Style.draws} style={{ width: '25%', position: 'static', marginTop: '15%', marginBottom: '5%' }} />
              <img src={truth} alt="" id={Style.draws} style={{ width: '40%', position: 'static', marginTop: '15%', marginBottom: '5%' }} />
            </div>
            <div className={Style.Container_infoMusica}>
            <h3>Música</h3>
            <div className={Style.CarouselClass}>
              <Carousel />
            </div>
              <InfoMusica />
            </div>
          </div>
          <div className={Style.Container_infoArt}>
            <h3>Arte Digital</h3>
            <Carousel_Artwork/>
          </div>
          <div className={Style.Container_infoTech}>
          <h3>Tecnologia e programação</h3>
          <InfoTech/>
          </div>
        </section>
        <section className={Style.s3}>
          <Contatos/>
        </section>
      </main>
    </>
  );
}

export default App
