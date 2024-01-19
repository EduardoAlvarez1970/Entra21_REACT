
import React, { useEffect, useState, useReducer, useCallback } from 'react'


import './App.css'

const tarefaReducer = (estado, acao) => {

  switch(acao.type) {
    case 'ADD_TASK':
      return[...estado, acao.playload];
    case 'COMPLETED':
      atualizarTarefa[acao.playload].completed = true;
      return atualizarTarefa;
    case 'DELETE':
      return estado.filter((_, index) => index !== acao.playload);
  }
}



function App() {
   // criando a tarefa com estado vazio
  const [novaTarefa, setNovaTarefa] = useState('');

  // criando o estado da lista de tarefas como reducer
  const [listaTarefas, setListatarefas] = useReducer(tarefaReducer, []);

  // salvando as tarefas no armazento locaçstorage
  useEffect(() => {
    localStorage.setItem('listaTarefas', JSON.stringify(listatarefas));
  }, [listaTarefas]);

   // carregando as tarefas no armazento locaçstorage
   useEffect(() => {
    const tarefasArmazenadas = JSON.parse(localStorage.getItem('listaTarefas'))
   }
   )

  const adicionar = useCallback((index) => {

    if(novaTarefa.trim() !== '')
    false}){
      dispatch({type: })
    }

  })





  
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
