import { Link } from "react-router-dom";
import "../CSS/NotFound.css";

export default function NotFound() {
  return (
    <div className="NotFound">
      <h1 className="title">Упс, ничего не найдено</h1>
      <Link to="/" className="backToMenu">Вернуться на главную</Link>
    </div>
  );
}
