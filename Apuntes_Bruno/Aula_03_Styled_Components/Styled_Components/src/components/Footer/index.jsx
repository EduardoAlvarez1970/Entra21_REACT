
import styled from 'styled-components';

import line from '../../images/line1.svg'

import { Menu } from '../Menu'

const Foot = styled.footer`
    width: 592px;
    height: 36px;
    top: 651px;
    left: 340px;
    border: 1px;
`;

const Linea = styled.img`
    width: 568px;
    top: 651px;
    left: 364px;
    border: none;
    color: #ECEFF2;
`;


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