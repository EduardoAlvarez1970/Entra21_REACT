
import image1 from '../../images/image1.svg'

import { Header } from '../Header'

import { Image } from './Image.js'
import { Wrapper } from './Wrapper.js'


export function Hero() {
    
    return (
    <>
        <Wrapper >

              <Image>
                <img src={image1} alt="um homem em um espaço decorado" />
              </Image>

              <Header/>

        </Wrapper>
       
    </>

    )   
   
}
