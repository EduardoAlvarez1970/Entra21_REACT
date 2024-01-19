
import React, { useEffect, useState, useReducer, useCallback } from 'react'


import './App.css'

const tarefaReducer = (estado, acao) => {

  


}








function App() {
   // criando a tarefa com estado vazio
  const [novaTarefa, setNovaTarefa] = useState('');

  // criando o estado da lista de tarefas como reducer
  const [listaTarefas, setListatarefas] = useReducer()

  
  return (
    <>
      <div>
        <h1>Lista de Tarefas</h1>

        <div>
          <input
           type="text"
           placeholder="Nova tarefa" />

          <button>Adicionar</button>

        </div>
        
        
      </div>
      
    </>
  )
}

export default App
