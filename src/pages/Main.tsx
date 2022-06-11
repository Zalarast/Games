import { Link } from "react-router-dom"
import "../CSS/Main.css"
export default function Main () {
    return (<div className="Main">
        <h1 className="title">Welcome</h1>
        <Link to="/Saper" className="item">Сапёр</Link>
        <Link to="/PoleChudes" className="item">Поле чудес</Link>
    </div>)
}