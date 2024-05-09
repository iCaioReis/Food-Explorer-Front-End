import { Container, Logo } from "./styles";

import { Input } from "../Input";
import { Button } from "../Button";

import logoImg from "../../assets/logo.png";

export function Header(){
    return(
        <Container>
            <Logo>
                <img src={logoImg} alt="Logo de um exágono azul" />
                <h1>food explorer</h1>
            </Logo>

            <Input placeholder={"Busque por pratos ou ingredientes"}/>

            <Button title={"Pedidos(0)"}/>
        </Container>
    );
}