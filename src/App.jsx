import './App.css'

function App() {
  return(
    <div className='app'>
    <h1 className='shadow-sm'>Calculator</h1>
    <table>
      {/*first row */}
      
      <tr>
        <td colSpan={4} style={{border: "1px solid black", textAlign: "end"}}>
          <h2>0</h2>
        </td>
      </tr>
      
      {/*second row */}
      <tr>
        <td> <button type="button" class="btn btn-primary w-100 p-3">C</button> </td>
        <td> <button type="button" class="btn btn-primary w-100 p-3">/</button> </td>
        <td> <button type="button" class="btn btn-primary w-100 p-3">*</button> </td>
        <td> <button type="button" class="btn btn-primary w-100 p-3">-</button> </td>
      </tr>
      {/*Three row */}
      <tr>
        <td> <button type="button" class="btn btn-primary w-100 p-3">7</button> </td>
        <td> <button type="button" class="btn btn-primary w-100 p-3">8</button> </td>
        <td> <button type="button" class="btn btn-primary w-100 p-3">9</button> </td>
        <td rowSpan={2}> <button type="button" class="btn btn-primary w-100 p-5">+</button> </td>
      </tr>
      {/*Four row */}
      <tr>
        <td> <button type="button" class="btn btn-primary w-100 p-3">6</button> </td>
        <td> <button type="button" class="btn btn-primary w-100 p-3">5</button> </td>
        <td> <button type="button" class="btn btn-primary w-100 p-3">4</button> </td>
      </tr>
      {/*five row */}
      <tr>
        <td> <button type="button" class="btn btn-primary w-100 p-3">3</button> </td>
        <td> <button type="button" class="btn btn-primary w-100 p-3">2</button> </td>
        <td> <button type="button" class="btn btn-primary w-100 p-3">1</button> </td>
        <td rowSpan={2}> <button type="button" class="btn btn-primary w-100 p-5">=</button> </td>
      </tr>
      {/*Six row */}

      <tr>
      <td colSpan={1}> <button type="button" class="btn btn-primary w-100 p-3">DEL</button> </td>
        <td> <button type="button" class="btn btn-primary w-100 p-3">0</button> </td>
        <td> <button type="button" class="btn btn-primary w-100 p-3">.</button> </td>
      </tr>

    </table>
    </div>
  )

  
}

export default App
