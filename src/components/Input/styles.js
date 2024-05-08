import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    > input {
        width: 100%;
        height: 48px;
        padding: 16px 14px;

        border: none;
        border-radius: 8px;

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