import { Container } from "./styles";

import logoImg from "../../assets/logo_light.png";

export function Footer(){
    return(
        <Container>
            <div>
                <img src={logoImg} alt="Logo food explorer"/>
                <h1>food explorer</h1>
            </div>
            
            <p>© 2023 - Todos os direitos reservados.</p>
        </Container>
    )
}