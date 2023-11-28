
import line from '../../images/line1.svg'

import { Menu } from '../Menu'

import { Linea, Foot } from './styles.js'


export function Footer() {

    return (

        <>
         <Foot>

           <Linea src={line} alt="linha divisora" />

           <Menu/>

        </Foot>
        
        </>  
       
    )
       
}