import Style from './footer.module.css'
import facebook from '../assets/images/facebook.png'
import instagram from '../assets/images/instagram.png'
import soundcloud from '../assets/images/soundcloud.png'

function MeuFooter(){
    return(
        <>
        <footer>
            <section className={Style.footerSection}>
            <div className={Style.Container_ig}>
                <a href="https://www.instagram.com/changingwalls/"><img src={instagram} alt="instagram-logo" /></a>
            </div>
            <div className={Style.Container_fb}>
                <a href="https://www.facebook.com/305man/"><img src={facebook} alt="instagram-logo" /></a>
            </div>
            <div className={Style.Container_sc}>
                <a href="https://www.soundcloud.com/djsubbb/"><img src={soundcloud} alt="soundcloud-logo" /></a>
            </div>
 
            </section>
        </footer>
        </>
    )
}

export default MeuFooter