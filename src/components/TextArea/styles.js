import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 0 14px;
    display: flex;
    align-items: center;

    border-radius: 8px;

    background-color: ${({theme}) => theme.COLORS.DARK_900};

    > textarea {
        width: 100%;
        padding: 16px 14px;

        resize: none;

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