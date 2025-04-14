import style from "./menu2.module.css";

export function Menu({ onShowForm, onShowMap, onGoHome }) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${style.navBar}`}>
      <div className="container-fluid justify-content-center">
        <button className="btn btn-outline-light m-2" onClick={onGoHome}>Início</button>
        <button className="btn btn-outline-light m-2" onClick={onShowForm}>Formulário</button>
        <button className="btn btn-outline-light m-2" onClick={onShowMap}>Localização</button>
      </div>
    </nav>
  );
}
