
import styled from "styled-components";

const Tittle = styled.h1`
    width: 562px;
    height: 112px;
    top: 295px;
    left: 365px;
    font-family: Inter;
    font-size: 49px;
    font-weight: 400;
    line-height: 56px;
    letter-spacing: 0em;
    text-align: center;
    color: #000000;

    span {
      font-family: Inter;
      font-size: 49px;
      font-weight: 700;
      line-height: 56px;
      letter-spacing: 0em;
      text-align: center;
      color: blue;
  }
`;

const Paragraph = styled.p`
    width: 592px;
    height: 168px;
    top: 439px;
    left: 344px;
    font-family: Open Sans;
    font-size: 14px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: center;
    color:  #7D7987;

    span {
      font-family: Open Sans;
      font-size: 14px;
      font-weight: 700;
      line-height: 28px;
      letter-spacing: 0em;
      text-align: center;
      color: blue;
  }
`;

const Container = styled.div`
    width: 592px;
    height: 312px;
    top: 295px;
    left: 344px;

`;

export function Header() {

  return (

    <>

    <Container>

     <Tittle>Transformando <span>espaço</span>, Criando <span>história</span></Tittle>

     <Paragraph>Nós criamos ambientes exclusívos e únicos, com muito bom gosto e profissionalismo,
        investimos tempo e <span>dedicação no seu projeto.</span> Nosso compromisso vai além de simplesmente decorar.<br></br><br></br>


       Tenha <span>ambientes limpos</span> e bem decorados, transmitindo elegância  e finesse para todo aquele que estiver
        ali. Sua história visual começa aqui!</Paragraph>

    </Container>
    
    </>

      
  )

}