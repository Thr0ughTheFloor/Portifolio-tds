import Style from "./introInfo.module.css";
import pfp from "../assets/images/Calendula-1.png";


export const Intro = () => {

    return(
        <>
        <section className={Style.Container1_info}>
         <div className={Style.container_img}>
            <img src={pfp} alt="Foto de perfil"/>
        </div>
        <div className={Style.container_p}>
            <p className={Style.text1}>Prazer, meu nome é Fábio, também conhecido como <u>Evalacuner</u> ou só Cuner, 
                20 anos de experiência de vida, nascido e criado em Curitiba, Paraná. </p><br />
            <p className={Style.text2}>Estudante do curso Técnico de Desenvolvimento de Sistemas no Senai. 
                Aspirante a Engenheiro Eletrônico, às vezes produtor músical, às vezes programador, 
                às vezes desenhista, às vezes editor de vídeo e fotos.</p><br />
        </div>
        </section>
        </>
    )
}

export const Info = () => {
    return(
        <>
        <section className={Style.Container2_info}>
        <div className={Style.container_p1}>
        <p id={Style.text3}>
             Como artista, eu gosto de me aventurar pela profundidade dos sentimentos e sensações humanas, 
            principalmente a melancolia, o pânico, a solidão e o vazio, tentando expor os diferentes “subgêneros” 
            desses sentimentos, amo textura e procuro sempre utilizá-la em todos os meus trabalhos artísticos. 
            </p><br/>
            <p id={Style.text4}>
            Como programador iniciante, gosto muito de back-end e linguagens de baixo nível, como C, e de alto nível como Java,. 
            Gosto de desafios, procuro estar me habituando e sempre atento ao complexo e imparável mundo da tecnologia. 
            </p><br />
        </div>
        </section>
        </>
    )
}

