import './App.css'
import { useState } from 'react'

const buttonClass = "btn btn-primary w-100 p-5"  /*Con la clase se manda a llamar en todos los botones la configuración del boton */
const buttonsClasses = "btn btn-primary w-100 p-3"  /*Con la clase se manda a llamar en todos los botones la configuración del boton */

function App() {

  const [screen, setScreen] = useState('0')

  const handleButtonClick = (e) => {
    const {value} = e.target;
    if (value === 'C'){
      setScreen('0')
      return;
    }
    console.log('click')
    if (screen === '0'){
    setScreen(value)
    } else { 
      setScreen(`${screen}${value}`)
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
        <td> <button type="button" className={buttonsClasses}value="C" onClick={(e) => handleButtonClick(e)}>C</button> </td>
        <td> <button type="button" className={buttonsClasses}>/</button> </td>
        <td> <button type="button" className={buttonsClasses}>*</button> </td>
        <td> <button type="button" className={buttonsClasses}>-</button> </td>
      </tr>
      {/*Three row */}
      <tr>
        <td> <button type="button" className={buttonsClasses}value="7" onClick={(e) => handleButtonClick(e)}>7</button> </td>
        <td> <button type="button" className={buttonsClasses}value="8" onClick={(e) => handleButtonClick(e)}>8</button> </td>
        <td> <button type="button" className={buttonsClasses}value="9" onClick={(e) => handleButtonClick(e)}>9</button></td> 
        <td rowSpan={2}> <button type="button" className={buttonClass}>+</button> </td>
      </tr>
      {/*Four row */}
      <tr>
        <td> <button type="button" className={buttonsClasses}value="6" onClick={(e) => handleButtonClick(e)}>6</button> </td>
        <td> <button type="button" className={buttonsClasses}value="5" onClick={(e) => handleButtonClick(e)}>5</button> </td>
        <td> <button type="button" className={buttonsClasses}value="4" onClick={(e) => handleButtonClick(e)}>4</button> </td>
      </tr>
      {/*five row */}
      <tr>
        <td> <button type="button" className={buttonsClasses}value="3" onClick={(e) => handleButtonClick(e)}>3</button> </td>
        <td> <button type="button" className={buttonsClasses}value="2" onClick={(e) => handleButtonClick(e)}>2</button> </td>
        <td> <button type="button" className={buttonsClasses}value="1" onClick={(e) => handleButtonClick(e)}>1</button> </td>
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
