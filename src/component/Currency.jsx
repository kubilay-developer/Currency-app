import React from 'react'
import { useState } from 'react'
import { IoMdArrowForward } from "react-icons/io";
import axios from 'axios';
import "../css/currency.css"

function Currency() {

  let token = "fca_live_FXhn90pUyFbfVTdrOWM2D7FM3b9wcfnXrzIYN0tO";
  let baseUrl = "https://api.freecurrencyapi.com/v1/latest";

  const [amount, setAmount] = useState("")
  const [fromCurrency, setFromCurrency] = useState("USD")
  const [toCurrency, setToCurrency] = useState("")
  const [result, setResult] = useState("")

  async function Reverse() {
    const response = await axios.get(
      `${baseUrl}?apikey=${token}&base_currency=${fromCurrency}`)

    const resultChange = (response.data.data[toCurrency] * amount).toFixed(2)
    setResult(resultChange)

  }



  return (

    <div>
      <div className='currency-main'>


        <h3 className='title'> Döviz Uygulaması</h3>

        <div className='page'>
          <input
            placeholder='Miktarı Yazın'
            value={amount}
            className="amount-input"
            id='amount'
            type="number"
            onChange={(e) => setAmount(e.target.value)}
          />

          <select
            className="first-currency-option"
            onChange={(e) => setFromCurrency(e.target.value)}>

            <option>USD</option>
            <option>TRY</option>
            <option>EUR</option>
            <option value="GBP">STERLİN</option>
          </select>

          <IoMdArrowForward style={{
            fontSize: "45px", marginRight: "8px", marginBottom: "-13px", color: "red", backgroundColor: "black"
          }} />

          <select
            className="second-currency-option"
            onChange={(e) => setToCurrency(e.target.value)}>
            <option>SEÇİNİZ</option>
            <option>TRY</option>
            <option>USD</option>
            <option>EUR</option>
            <option value="GBP">STERLİN</option>
          </select>


          <input
            placeholder='Kur Karşılığı'
            value={result}
            id='result'
            onChange={(e) => setResult(e.target.value)}
            type='text'
            className="result-input"
          />
        </div>
        <div>
          <button
            className='button'
            onClick={Reverse} >
            ÇEVİR
          </button>
        </div>

      </div>
    </div>


  )
}

export default Currency