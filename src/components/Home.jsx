import { Link } from "react-router-dom"
import ListWorks from "./ListWorks"

const Home = () => {
  return (
    <div className="home">
      <h1>
       Hola soy Maria Victoria y soy desarroladora de web en Bilbao.Ofrezco mis servicios de diseño web <strong>programación y desarollo</strong>,  en todo tipo de proyectos web.
      </h1>
      <h2 className="title">
        Te ayudo a crear tu sitio o aplicación web a tu medida , y a tener mas visibilidad y relevancia en internet. <Link to="/contacto"> Contacta conmigo.</Link> 
      </h2> 
      <section>
        <h2 className="heading"> Algunos de mis proyectos</h2>
        <p>Estos son algunos de mis trabajos de desarrollo web.</p>
        <div className="works">
          <ListWorks limite="3"/>
        </div>
      </section>
    </div>
  )
}

export default Home


