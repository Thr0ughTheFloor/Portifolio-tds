import React from "react";
import Style from './banner.module.css'
import videoBanner from '../assets/images/bannerVideo.mp4'

function Banner(){
    return(
        <>
        <section className={Style.s1}>
            <div className={Style.banner}>
                <video src={videoBanner} autoPlay muted loop></video>
            </div>
        </section>
        </>
    )
}

export default Banner