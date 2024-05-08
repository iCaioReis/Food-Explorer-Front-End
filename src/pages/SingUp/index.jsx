import { Container, Form, Logo} from './styles';
import logoImg from '../../assets/logo.png'

import { Input } from "../../components/Input";
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

export function SignUp(){
    return(
        <Container>
            <Logo>
                <img src={logoImg} alt="Logo de um exágono azul" />
                <h1>food explorer</h1>
            </Logo>
            <Form>
                <h1>Crie sua conta</h1>

                <span>Seu nome</span>
                <Input 
                    placeholder="Exemplo: Maria da Silva"
                />
                <span>Email</span>
                <Input 
                    placeholder="Exemplo: exemplo@exemplo.com.br"
                />
                <span>Senha</span>
                <Input 
                    placeholder="No mínimo 6 caracteres"
                />

                <Button title={"Criar Conta"}/>

                <ButtonText title={"Já tenho uma conta"}/>
            </Form>
        </Container>
    )
}