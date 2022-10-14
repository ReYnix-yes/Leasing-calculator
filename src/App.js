import axios from "axios";
import React, { useState } from "react";
import checkValue from "./components/UI/checkValue";
import "./components/styles/styles.css"

function App() {

  let [termInputValue, setTermInputValue] = useState(60);
  let [autoInputValue, setAutoInputValue] = useState(3300000);
  let [percentValue, setPercentValue] = useState(13)
  let [contributionValue, setContributionValue] = useState(411000)

  // const clearedAutoValue = autoInputValue.replace(/\D/g,'');

  const addContributionValue = function (event) {
    setContributionValue(event.target.value)
  }
  contributionValue = (autoInputValue * percentValue) / 100;
  const [isLoadingAnswer, setLoadingAnswer] = useState(false);

  const monthPay = Math.round((autoInputValue - contributionValue) * ((0.035 * Math.pow((1 + 0.035), termInputValue)) / (Math.pow((1 + 0.035), termInputValue) - 1)));
  const fullPrice = contributionValue + termInputValue * monthPay;

  async function sendRequest() {
    let jsonForm = JSON.stringify(
      {
        "car_coast": autoInputValue,
        "initail_payment": contributionValue,
        "initail_payment_percent": percentValue,
        "lease_term": termInputValue,
        "total_sum": fullPrice,
        "monthly_payment_from": monthPay
      }
    );
    axios.post('https://jsonplaceholder.typicode.com/users', jsonForm, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    setLoadingAnswer(true);
    const response = await axios.post('https://hookb.in/jeNJrNgKgdu9n2Q93Zq3')
    console.log(response.data)
    setLoadingAnswer(false);
  }
  checkValue();




  function changeAutoBg() {
    setTimeout(() => {
      document.getElementById('input__auto').addEventListener('focus', () => {
        document.getElementById('auto__container').style.backgroundColor = 'rgba(0,0,0,0)';
      }, 100)
    })

  }
  changeAutoBg();
  function rechangeAutoBg() {
    setTimeout(() => {
      document.getElementById('input__auto').addEventListener('focusout', () => {
        document.getElementById('auto__container').style.backgroundColor = '#F3F3F4';
      }, 100)
    })
  }
  rechangeAutoBg();
  function changeTermBg() {
    setTimeout(() => {
      document.getElementById('input__term').addEventListener('focus', () => {
        document.getElementById('term__container').style.backgroundColor = 'rgba(0,0,0,0)';
      }, 100)
    })
  }
  changeTermBg();
  function rechangeTermBg() {
    setTimeout(() => {
      document.getElementById('input__term').addEventListener('focusout', () => {
        document.getElementById('term__container').style.backgroundColor = '#F3F3F4';
      }, 100)
    })
  }
  rechangeTermBg();

  function changePercentmBg() {
    setTimeout(() => {
      document.getElementById('input__percent').addEventListener('focus', () => {
        document.getElementById('percent__container').style.backgroundColor = 'rgba(0,0,0,0)';
      }, 100)
    })
  }
  changePercentmBg();
  function rechangePercentmBg() {
    setTimeout(() => {
      document.getElementById('input__percent').addEventListener('focusout', () => {
        document.getElementById('percent__container').style.backgroundColor = '#F3F3F4';
      }, 100)
    })
  }
  rechangePercentmBg();


  return (
    <div className="calc__container">
      <div className="calc__body">
        <h1 id="calc__header">Рассчитайте стоимость <br /> автомобиля в лизинг</h1>
        <div className="inputs">
          <div id="calc__input__first" className="calc__input">
            <p id='input__text'>Стоимость автомобиля</p>
            <div>
              <div id="auto__container" className="input__container">
                {isLoadingAnswer
                  ? [...document.getElementsByTagName('input')].forEach(i => i.setAttribute('disabled', 'disabled'))
                  : [...document.getElementsByTagName('input')].forEach(i => i.removeAttribute('disabled'))
                }
                <input
                  type="text"
                  className="input__style"
                  name="input"
                  id="input__auto"
                  value={autoInputValue}
                  onChange={e => setAutoInputValue(e.target.value).toLocaleString('ru')}
                />
                <div id="auto__elem" className="input__elem">&#x20bd;</div>
                <div className="slider">
                  <input
                    type="range"
                    name="input"
                    className="input__range"
                    id="input__range__auto"
                    min="1000000"
                    max="6000000"
                    value={autoInputValue}
                    onChange={e => setAutoInputValue(e.target.value)}
                  />
                </div>
              </div>

            </div>
          </div>
          <div className="calc__input">
            <p id='input__text'>Первоночальный взнос</p>
            <div id="percent__container" className="input__container">
              <input
                type="text"
                className="input__style"
                name="input"
                id="input__сontribution"
                value={contributionValue}
                onChange={addContributionValue}
                disabled
              />
              <input
                type="text"
                className="input__style"
                name="input"
                id="input__percent"
                value={percentValue}
                onChange={e => setPercentValue(e.target.value)}
              />
              <input
                type="range"
                name="input"
                className="input__range"
                id="input__range__сontribution"
                min="10"
                max="60"
                value={percentValue}
                onChange={e => setPercentValue(e.target.value)}
              />




            </div>
          </div>

          <div id="calc__input__term__last" className="calc__input">
            <p id='input__text'>Срок лизинга</p>
            <div id="term__container" className="input__container">
              <input
                type="text"
                className="input__style"
                name="input"
                id="input__term"
                value={termInputValue}
                onChange={e => setTermInputValue(e.target.value)}
              />
              <div className="input__elem">мес.</div>
              <input
                type="range"
                name="input"
                className="input__range"
                id="input__range__term"
                min="1"
                max="60"
                value={termInputValue}
                onChange={e => setTermInputValue(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="sum">
          <div id="sum__container">
            <div id='calc__sum__first' className="calc__sum">
              <div className="calc__sum__text">Сумма договора лизинга</div>
              <h2 className="sum__style" id="sum__value">{fullPrice.toLocaleString('ru')}&#x20bd; </h2>
            </div>

            <div className="calc__sum">
              <div className="calc__sum__text">Ежемесечный платёж от</div>
              <h2 className="sum__style" id="calc__payMonth">{monthPay.toLocaleString('ru')}&#x20bd; </h2>
            </div>
          </div>

          <div className="calc__button__container">
            <button name="input" id="calc__button" onClick={sendRequest}>
              Оставить заявку
            </button>
          </div>
        </div>
      </div>
    </div>

  );
}
export default App;