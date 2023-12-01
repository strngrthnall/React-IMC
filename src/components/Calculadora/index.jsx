import { useState } from 'react'

import {
  container,
  forms,
  formContainer,
  form,
  answerContainer,
  resultStyle,
  veredictStyle
} from './Calculadora.module.css'


const Calculadora = () => {
  const [height, setHeight] = useState(0)
  const [weight, setWeight] = useState(0)
  const result = (parseFloat(weight) / (parseFloat(height) ** 2)).toFixed(2)

  let veredict = 'Peso normal'

  const handleResults = () => {

    if (result < 17) {
      veredict = 'Muito abaixo do peso'
    } else if (result >= 17 && result <= 18.49) {
      veredict = 'Abaixo do peso'
    } else if (result >= 18.5 && result <= 24.99) {
      veredict = 'Peso normal'
    } else if (result >= 25 && result <= 29.99) {
      veredict = 'Acima do peso'
    } else if (result >= 30 && result <= 34.99) {
      veredict = 'Obesidade I'
    } else if (result >= 35 && result <= 39.99) {
      veredict = 'Obesidade II (severa)'
    } else if (result >= 40) {
      veredict = 'Obesidade III (mórbida)'
    }

    console.log("Aqui")

    if (result != 'NaN') {
      return <h1 className={resultStyle}>{ result }</h1>
    } else {
      return <h1 className={resultStyle}>0.00</h1>
    }
  }
  
  
  const resultColor = () => {
    if (veredict === 'Muito abaixo do peso'
      || veredict === 'Obesidade I' ) {
      return '#ff6348'
    } else if (veredict === 'Abaixo do peso'
      || veredict === 'Acima do peso' ) {
      return '#ffa502'
    } else if (veredict === 'Obesidade II (severa)') {
      return '#ff6b81'
    } else if (veredict === 'Obesidade III (mórbida)') {
      return '#ff4757'
    } else {
      return '#2ed573'
    }
  }
  
  
  return (
    <div className={container}>
      <div className={forms}>
        <div className={formContainer}>
          <h2>Altura</h2>
          <input
            className={form}
            type="number"
            onChange={({target}) => (setHeight(target.value))}
          />
        </div>
        <div className={formContainer}>
          <h2>Peso</h2>
          <input
            className={form}
            type="number"
            onChange={({target}) => (setWeight(target.value))}
          />
        </div>      
      </div>
      <div className={answerContainer}>
        <h2>Seu IMC é:</h2>
        { handleResults() }
      </div>
      <div className={veredictStyle}>
        <h1 style={{
          color: resultColor()
        }}>{veredict}</h1>
      </div>
    </div>
  )
}

export default Calculadora