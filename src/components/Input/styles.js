import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    gap: 1rem;
    display: flex;
    flex-direction: column;
    

    > span {
        color: ${({theme}) => theme.COLORS.LIGHT_400};
    }
`;

export const Content = styled.div`
    width: 100%;
    padding: 0 1rem;
    display: flex;
    align-items: center;

    border-radius: 8px;

    background-color: ${({theme}) => theme.COLORS.DARK_900};

    > input {
        width: 100%;
        height: 3rem;
        padding: 1rem .875rem;

        border: none;
        
        background-color: ${({theme}) => theme.COLORS.DARK_900};
       
        color: ${({theme}) => theme.COLORS.LIGHT_100};

        &::placeholder {
            color: ${({theme}) => theme.COLORS.LIGHT_500};
        }
    }
`;