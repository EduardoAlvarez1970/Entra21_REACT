import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'



function App() {

  const [carregando, setCarregando] = useState (true);


  //crienado um atraso na nossa pagina

  useEffect(() => {
    const tempo = setTimeout(() => {

      setCarregando(false);

    }, 5000); // tem um atraso de 5 seg

 

  return () => clearTimeout(tempo);
  }, []);
  

return (
  <div style = {{
  textAlign: 'center',
  marginTop: '50%',
  marginLeft: '800px',
  fontSize: '30px'
  
  }}>
    { carregando ? <motion.div>Loading....</motion.div> : <p>Conteudo carregado</p>}

  </div>
 );
}
export default App
