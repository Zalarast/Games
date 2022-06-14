import React from "react";
import { Link } from "react-router-dom";
import "../CSS/PoleChudes.css";

export default function PoleChudes() {
  const [word, setWord] = React.useState("");
  const [chars, setChars] = React.useState("");
  const [charMacth, setCharMacth] = React.useState<string[]>([]);
  const [step, setStep] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const handleChangeWord = (e: React.ChangeEvent<HTMLInputElement>) =>
    setWord(e.target.value);

  const startGame = () => {
    if (!word) {
      alert("Слово не указано");
    } else {
      setStep(1);
    }
  };

  const endGame = () => {
    if (word) 
      if (count === word.length) {
        setTimeout(() => {
          alert("Вы выйграли!");
          setWord("");
          setCharMacth([]);
          setCount(0);
          setStep(0);
        }, 100);
    }
  };

  const handleChangeChar = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length === 1 || e.target.value.length === 0)
      setChars(e.target.value);
  };

  const findChar = () => {
    if (chars) {
      if (!charMacth.includes(chars)) {
        if (word.includes(chars)) {
          setCharMacth((char) => [...char, chars]);
          setCount(
            (count) =>
              count +
              word.split("").filter((char) => char === chars && char).length
          );
          setChars("");
        } else {
          alert("Такой буквы нет");
        }
      } else {
        alert("Буква уже имеется");
        setChars("");
      }
    } else alert("Буква не указана");
  };

  // eslint-disable-next-line
  React.useEffect(() => endGame(), [count]);

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
                {charMacth.includes(val) && val}
              </span>
            ))}
          </div>
          <input onChange={handleChangeChar} value={chars} />
          <button onClick={findChar}>Ввод</button>
        </div>
      )}

      <Link to="/" className="backToMenu">
        Вернуться на главную
      </Link>
    </div>
  );
}
