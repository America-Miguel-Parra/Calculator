import './App.css'
import { useState } from 'react'

const buttonClass = "btn btn-primary w-100 p-5"  /*Con la clase se manda a llamar en todos los botones la configuración del boton */
const buttonsClasses = "btn btn-primary w-100 p-3"  /*Con la clase se manda a llamar en todos los botones la configuración del boton */

function App() {

  const [screen, setScreen] = useState('0')

  const handleButtonClick = () => {   /*Funcion que hace que funcione el boton 9*/
    if(screen === '0') {
      setScreen('9')
    } else {
      setScreen(`${screen}9`)
    }
  }

  const handleButtonClick8 = () => {   /*Funcion que hace que funcione el boton 9*/
    if(screen === '0') {
      setScreen('8')
    } else {
      setScreen(`${screen}8`)
    }
  }

  const handleButtonClick7 = () => {   /*Funcion que hace que funcione el boton 9*/
    if(screen === '0') {
      setScreen('7')
    } else {
      setScreen(`${screen}7`)
    }
  }
  
  return(
    <div className='app'>
    <h1 className='shadow-sm'>Calculator</h1>
    <table>
      {/*first row */}
      
      <tr>
        <td colSpan={4} style={{border: "1px solid black", textAlign: "end"}}>
          <h2>{screen}</h2>
        </td>
      </tr>
      
      {/*second row */}
      <tr>
        <td> <button type="button" className={buttonsClasses}>C</button> </td>
        <td> <button type="button" className={buttonsClasses}>/</button> </td>
        <td> <button type="button" className={buttonsClasses}>*</button> </td>
        <td> <button type="button" className={buttonsClasses}>-</button> </td>
      </tr>
      {/*Three row */}
      <tr>
        <td> <button type="button" className={buttonsClasses}onClick={handleButtonClick7}>7</button> </td>
        <td> <button type="button" className={buttonsClasses}onClick={handleButtonClick8}>8</button> </td>
        <td> <button type="button" className={buttonsClasses}onClick={handleButtonClick}>9</button></td> 
        <td rowSpan={2}> <button type="button" className={buttonClass}>+</button> </td>
      </tr>
      {/*Four row */}
      <tr>
        <td> <button type="button" className={buttonsClasses}>6</button> </td>
        <td> <button type="button" className={buttonsClasses}>5</button> </td>
        <td> <button type="button" className={buttonsClasses}>4</button> </td>
      </tr>
      {/*five row */}
      <tr>
        <td> <button type="button" className={buttonsClasses}>3</button> </td>
        <td> <button type="button" className={buttonsClasses}>2</button> </td>
        <td> <button type="button" className={buttonsClasses}>1</button> </td>
        <td rowSpan={2}> <button type="button" className={buttonClass}>=</button> </td>
      </tr>
      {/*Six row */}

      <tr>
      <td colSpan={1}> <button type="button" className={buttonsClasses}>DEL</button> </td>
        <td> <button type="button" className={buttonsClasses}>0</button> </td>
        <td> <button type="button" className={buttonsClasses}>.</button> </td>
      </tr>

    </table>
    </div>
  )

  
}

export default App
