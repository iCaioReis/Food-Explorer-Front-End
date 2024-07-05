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
                <h1 className='roboto_giant_bold'>food explorer</h1>
            </Logo>
            <Form>
                <h1 className='poppins_400_medium'>Crie sua conta</h1>

                <div>
                    <span className='roboto_small_regular'>Seu nome</span>
                    <Input placeholder="Exemplo: Maria da Silva" />
                </div>
                
                <div>
                    <span className='roboto_small_regular'>Email</span>
                    <Input placeholder="Exemplo: exemplo@exemplo.com.br" />
                </div>
                
                <div>
                    <span className='roboto_small_regular'>Senha</span>
                    <Input placeholder="No mínimo 6 caracteres" />
                </div>
                
                <Button title={"Criar Conta"}/>

                <ButtonText title={"Já tenho uma conta"}/>
            </Form>
        </Container>
    )
}