import React from "react";
import { Link } from "react-router-dom";
import "../CSS/PoleChudes.css";

export default function PoleChudes() {
  const [word, setWord] = React.useState("");
  const [step, setStep] = React.useState(0);
  const handleChangeWord = (e: React.ChangeEvent<HTMLInputElement>) =>
    setWord(e.target.value);
  const startGame = () => {
    if (!word) {
      alert("Слово не указано");
    } else {
      setStep(1);
    }
  };
  const findChar = () => {
    const elem = document.querySelectorAll("[id^='А']");
    if (elem.length > 0) {
      for (const e of elem) {
        e.className += " find";
      }
    } else {
      alert("Такой буквы нет");
    }
  };
  return (
    <div className="PoleChudes">
      <h1 className="title">Поле чудес</h1>
      {step === 0 && (
        <div className="changeWord">
          <h2 className="subTitle">Укажите слово</h2>
          <input onChange={handleChangeWord} type="password" />
          <button onClick={startGame}>Играть</button>
        </div>
      )}
      {step === 1 && (
        <div className="guessWord">
          <div className="word">
            {word.split("").map((val, i) => (
              <span key={i} className="charBox">
                <span className="char" id={val}>
                  {val}
                </span>
              </span>
            ))}
          </div>
          <input />
          <button onClick={findChar}>Ввод</button>
        </div>
      )}

      <Link to="/" className="backToMenu">
        Вернуться на главную
      </Link>
    </div>
  );
}
