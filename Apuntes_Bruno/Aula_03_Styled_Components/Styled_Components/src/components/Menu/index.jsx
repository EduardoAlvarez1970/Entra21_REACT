
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 592px;
    height: 28px;
    top: 659px;
    left: 340px;
    text-decoration: none;
`;

const Link = styled.a`
    font-family: Open Sans;
    font-size: 14px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: center;
    padding: 6px 28px;
    color: #FF9900;
`;







export function Menu() {

    return (
    
       <Wrapper>
            <Link target="_blank" href="">Instagram</Link>
            <Link target="_blank" href="">Fale conosco</Link>
       </Wrapper>

    )
}