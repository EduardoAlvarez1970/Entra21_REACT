
import line from '../../images/line1.svg'

import { Menu } from '../Menu'

import { Linea } from './Linea.js'
import { Foot } from './Foot.js'


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