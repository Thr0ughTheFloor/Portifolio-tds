import React from 'react'
import Style from './carousel.module.css'

import img01 from '../assets/images/Calendula-15.png'
import img02 from '../assets/images/Calendula-3.png'
import img03 from '../assets/images/SynthLixo.jpg'
import img04 from '../assets/images/roomAbleton.jpg'

function Carousel(){
    return(
        <>
        <section className={Style.s2}>
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={img01} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={img02} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={img03} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={img04} className="d-block w-100" alt="..." />
                </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section>
        
        </>
    )
}

export default Carousel 