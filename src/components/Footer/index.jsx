import { Container, Content } from "./styles";

import logoImg from "../../assets/logo_light.png";

export function Footer(){
    return(
        <Container>
            <Content>
                <div>
                    <img src={logoImg} alt="Logo food explorer"/>
                    <h1 className="roboto_bigger_bold">food explorer</h1>
                </div>
            
                <p className="roboto_smaller_regular">© 2023 - Todos os direitos reservados.</p>
            </Content>
        </Container>
    )
}