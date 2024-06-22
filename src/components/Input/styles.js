import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    gap: 16px;
    display: flex;
    flex-direction: column;
    

    > span {
        color: ${({theme}) => theme.COLORS.LIGHT_400};
    }
`;

export const Content = styled.div`
     width: 100%;
    padding: 0 14px;
    display: flex;
    align-items: center;

    border-radius: 8px;

    background-color: ${({theme}) => theme.COLORS.DARK_900};

    > input {
        width: 100%;
        height: 48px;
        padding: 16px 14px;

        border: none;
        
        background-color: ${({theme}) => theme.COLORS.DARK_900};

        font-size: 16px;
        font-weight: 400;
        font-family: "Roboto", sans-serif;
        color: ${({theme}) => theme.COLORS.LIGHT_100};

        &::placeholder {
            color: ${({theme}) => theme.COLORS.LIGHT_500};
        }
    }
`;