import { Container } from './styles';

export function ButtonText ({ title, ...rest}){
    return(
        <Container 
            type='link'
            {...rest}
        >
            {title}
        </Container>
    )
};