import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <>
    <h2>Lamentablemente esta ruta no existe</h2>
    <Link to="/">
    <img src="src/assets/img/NotFound.png" alt="pizza carita muy triste" className="mx-auto d-block"  style={{ width: "32rem" }}/>
    </Link>
    </>
  )
}

export default NotFound