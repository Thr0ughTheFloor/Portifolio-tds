import Style from "./Contact.module.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { Menu } from "./components/Menu2";
import { useState } from 'react'

function Contact() {
  const defaultPhoneNumber = "5541991380423";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showSection, setShowSection] = useState("form"); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleZap = () => {
    const { name, email, message } = formData;

    const urlZAPZAP = `https://api.whatsapp.com/send?phone=${defaultPhoneNumber}&text=
    Nome:%20${name}%0D%0A
    Email:%20${email}%0D%0A
    Mensagem:%20${message}%0D%0A`;

    window.open(urlZAPZAP, "_blank");
  };

  const position = [-25.376819, -49.210545];

  return (
    <>
      <Menu
        onShowForm={() => setShowSection("form")}
        onShowMap={() => setShowSection("map")}
        onGoHome={() => (window.location.href = "/")}
      />
      <main className={Style.MainContact}>
        {showSection === "form" && (
          <section className={Style.s1}>
            <h2>CONTATO</h2>
            <input placeholder='Insira seu nome' type="text" name='name' value={formData.name} onChange={handleChange} required />
            <br /><br />
            <input placeholder='Insira seu email' type="email" name='email' value={formData.email} onChange={handleChange} required />
            <br /><br />
            <textarea placeholder='Insira mensagem' name='message' value={formData.message} onChange={handleChange} cols="30" rows="10" required></textarea>
            <button onClick={handleZap}>Enviar mensagem</button>
          </section>
        )}

        {showSection === "map" && (
          <section className={Style.s2}>
            <h2>Onde me encontrar</h2>
            <div className={Style.Localizacao}>
              <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ width: "100%", height: "500px" }}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                  <Popup>
                    Aqui estou!
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
            <p>Rua Arnoldo Wolff Gaensly, 536 - Atuba Curitiba - PR</p>
          </section>
        )}
      </main>
    </>
  );
}

export default Contact