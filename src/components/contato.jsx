import Style from './contato.module.css'
import Contact from '../Contact'

function Contatos(){ 

    return(
        <>
        <div className={Style.Container_contact}>
          <h3> Contato </h3>
          </div>
          <div className={Style.Container_button}>
          <button onClick={() => (window.location.href = "/Contact")}>
              Fale comigo!
          </button>
          </div>
        </>
    )
}

export default Contatos