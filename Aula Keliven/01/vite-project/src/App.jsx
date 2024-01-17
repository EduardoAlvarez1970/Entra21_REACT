import { useState } from 'react'

import { useSpring, animated} from 'react-spring'



function App() {

  const [quadrado, setQuadrado] = useState(false);
    
  const propiedadesAnimacao = useSpring({
    marginLeft: quadrado ? '50%' : '0%',
    backgroundColor: quadrado ? 'red' : 'lightblue',
   });



  return (

    <div style={{
      display:'flex',
      width: '100vw',
      flexDirection: 'column',
      justyfyContent: 'center',
      alignItems: 'center'
    }}>


      <button onClick={() => setQuadrado(!quadrado)}>Alterars</button>

      <animated.div
      style={{
        width: '100px',
        height: '100px',
        backgroundColor: 'lightblue',
        margin: '20px 0',

        ...propiedadesAnimacao,

      }}>
        Nosso Conteudo
      </animated.div>
    </div>

  

  )
}

export default App
