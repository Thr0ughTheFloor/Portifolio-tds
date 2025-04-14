import Style from './info.module.css'
import logo from '../assets/images/github-logo.png'

export const InfoResto = () => {
    return(
        <>
        <div className={Style.container_text1}>
            <h4>Produção musical e mixagem de áudio</h4>
            <p>[██████████████-----] 75%</p>
            <br />
            <h4>Edição de imagem e vídeo</h4>
            <p>[██████--------------] 40%</p>
            <br />
            <h4>Desenho</h4>
            <p>[████----------------] 30%</p>
            <br />
            <h4>Eletrônica</h4>
            <p>[██------------------] 10%</p>
            <br />
            <h4>Back-end</h4>
            <p>[███-----------------] 15%</p>
            <br />
            <h4>Front-end</h4>
            <p>[█-------------------] 7%</p><br />
        </div>
        </>
    )
}

export const InfoMusica = () => {
    return(<>
    <div className={Style.container_text2}>
        <p>Produtor musical desde os 13 anos, me formei acadêmicamente pela escola 
                Yellow DJ Academy em produção musical, já fiz parte de uma banda chamada 
                Fumantes Inc., na qual fui tecladista, sintetista, produtor e fui Técnico 
                de Som durante nossos shows. Atualmente faço músicas solos, geralmente música 
                eletrônica e instrumentais, e também trabalho com Sound Design.</p><br />
        </div>
    </>)
}

export const InfoTech = () => {
    return(
        <>
        <div className={Style.container_text3}>
        <p>
        Sempre gostei de programação e desenvolvimento em geral, mas comecei a estudar mais sobre em 2024,
        quando ingressei no curso de TDS pelo SENAI, você pode ver alguns dos meus trabalhos no meu github
        </p>

        <a href="https://github.com/Thr0ughTheFloor/" target="_blank" rel="noopener noreferrer">
             <img src={logo} alt="Logo" style={{ backgroundColor: 'transparent', width: '200px', filter: 'invert(1)'}} />
        </a>
        </div>   
        </>
    )
}