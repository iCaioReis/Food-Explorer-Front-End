import { Container, Content } from './styles';

export function Input ({ icon: Icon, title,...rest}){
    return (
        <Container>
            {title && <span className='roboto_small_regular'>{title}</span>}
            <Content>
                {Icon && <Icon size={20}/> }
                <input {...rest} className='roboto_small_regular'/>
            </Content>
        </Container>
    )
} 