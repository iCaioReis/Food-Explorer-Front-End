import { Link } from "react-router-dom"

import logoImg from '../../assets/logo.png';

import { Container, Form, Logo} from './styles';

import { Input } from "../../components/Input";
import { Button } from '../../components/Button';

export function SignIn(){
    return(
        <Container>
            <Logo>
                <img src={logoImg} alt="Logo de um exágono azul" />
                <h1 className='roboto_giant_bold'>food explorer</h1>
            </Logo>
            <Form>
                <h1 className='poppins_400_medium'>Faça login</h1>

                <div>
                    <span className='roboto_small_regular'>Email</span>
                    <Input 
                        placeholder="Exemplo: exemplo@exemplo.com.br"
                    />
                </div>

                <div>
                    <span className='roboto_small_regular'>Senha</span>
                    <Input 
                        placeholder="No mínimo 6 caracteres"
                    />
                </div>

                <Button title={"Entrar"}/>

                <Link className="poppins_100_medium" to={"/register"}> Criar uma conta </Link>
            </Form>
        </Container>
    )
}