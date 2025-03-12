import React from 'react'
import Adicao from './components/Adicao'
import Subtracao from './components/Subtracao'
import Multiplicacao from './components/Multiplicacao'
import Divisao from './components/Divisao'

const App = () => {
  return (
    <div>
     <Adicao num1={4} num2={6} />

     <Subtracao num1={10} num2={5} />

     <Multiplicacao num1={2} num2={8} />

     <Divisao num1={9} num2={3} />
    </div>
  )
}

export default App