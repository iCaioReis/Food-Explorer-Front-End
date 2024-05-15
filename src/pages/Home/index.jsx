import { Container, Banner } from "./styles";

import { Header } from "../../components/Header";

export function Home(){
    return(
        <Container>
            <Header/>
            <Banner/>
        </Container>
    );
}