


import "./styles.css"

import image1 from '../../images/image1.svg'

import { Header } from '../Header'


export function Hero() {
    
    return (

      <div id="hero" >

         <div id="image" >
            <img src={image1} alt="um homem em um espaço decorado" />
         </div>

         <Header/>

      </div>

    )   
   
}
