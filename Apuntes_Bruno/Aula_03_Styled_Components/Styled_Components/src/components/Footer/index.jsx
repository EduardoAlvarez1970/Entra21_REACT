
import "./styles.css"

import line from '../../images/line1.svg'

import { Menu } from '../Menu'


export function Footer() {

    return (

       <div id="footer">

          <img id="line" src={line} alt="linha divisora" />

          <Menu/>


       </div>
       
    )
       
}