
import React, { useEffect, useState, useReducer, useCallback } from 'react';
import { dispatch } from 'react-redux';


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

    default:
      return estado;  
  }
}



function App() {
   // criando a tarefa com estado vazio
  const [novaTarefa, setNovaTarefa] = useState('');

  // criando o estado da lista de tarefas como reducer
  const [listaTarefas, setListatarefas] = useReducer(tarefaReducer, []);

  // salvando as tarefas no armazento locaçstorage
  useEffect(() => {
    localStorage.setItem('listaTarefas', JSON.stringify(listaTarefas));
  }, [listaTarefas]);

   // carregando as tarefas no armazento locaçstorage
   useEffect(() => {
    const tarefasArmazenadas = JSON.parse(localStorage.getItem('listaTarefas'))
   }
   )

  const adicionar = useCallback(() => {

    if(novaTarefa.trim() !== '')
    {
      dispatch({type: 'ADD_TASK', playload : { text: novaTarefa, completed: false} });
      setNovaTarefa('');
    }
  },[novaTarefa, dispatch] )
 

  
  return (
    
      <div>
        <h1>Lista de Tarefas</h1>

        <div>
          <input
           type="text"
           placeholder="Nova tarefa"
           value={novaTarefa}
           onChange={(e) => setNovaTarefa(e.target.value)}
        />
          <button onClick={adicionar}>Adicionar</button>
        </div>
        <div>
          <ul>
            {listaTarefas.map((tarefa, index) => (
              <li key ={index}>
                <p style = {{textDecoration: tarefa.completed ? line-through: "none"}}></p>
              </li>
            ))}
          </ul>
        </div>
        
        
      </div>
      
  )
}

export default App
