import { Container, Content, Logo } from "./styles";

import { IoIosSearch } from "react-icons/io";
import { PiSignOut } from "react-icons/pi";
import { PiReceipt } from "react-icons/pi";

import { Input } from "../Input";
import { Button } from "../Button";

import logoImg from "../../assets/logo.png";

export function Header() {
    return (
        <Container>
            <Content>
                <Logo>
                    <img src={logoImg} alt="Logo de um exágono azul" />
                    <h1>food explorer</h1>
                </Logo>

                <Input 
                    placeholder={"Busque por pratos ou ingredientes"}
                    icon={IoIosSearch}
                />

                <Button 
                    title={"Pedidos(0)"}
                    icon={PiReceipt}
                />

                <PiSignOut size={66}/>
            </Content>
        </Container>
    );
}