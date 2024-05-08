import { Container, Form, Logo} from './styles';
import logoImg from '../../assets/logo.png'

import { Input } from "../../components/Input";
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

export function SignIn(){
    return(
        <Container>
            <Logo>
                <img src={logoImg} alt="Logo de um exágono azul" />
                <h1>food explorer</h1>
            </Logo>
            <Form>
                <h1>Faça login</h1>

                <span>Email</span>
                <Input 
                    placeholder="Exemplo: exemplo@exemplo.com.br"
                />
                <span>Senha</span>
                <Input 
                    placeholder="No mínimo 6 caracteres"
                />

                <Button title={"Entrar"}/>

                <ButtonText title={"Criar uma conta"}/>
            </Form>
        </Container>
    )
}