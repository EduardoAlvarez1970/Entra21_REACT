
import styled from 'styled-components';

import image1 from '../../images/image1.svg'

import { Header } from '../Header'

const Wrapper = styled.div`
    width: 592px;
    height: 607px;
    left: 344px;
    margin: auto;
`;

const Image = styled.div`
    width: 348px;
    height: 223px;
    left: 474px;
    margin: auto;
`;


export function Hero() {
    
    return (
    <>
        <Wrapper >
         <Image>
           <img src={image1} alt="um homem em um espaço decorado" />
        </Image>
        </Wrapper>
        <Header/>
    </>

    )   
   
}
