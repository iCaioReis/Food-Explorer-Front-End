import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    > input {
        height: 48px;
        width: 100%;
        padding: 16px 14px;

        border: none;
        border-radius: 8px;

        background-color: ${({theme}) => theme.COLORS.DARK_900};

        &::placeholder {
            color: ${({theme}) => theme.COLORS.LIGHT_500};
            font-family: "Roboto", sans-serif;
            font-weight: 400;
            font-style: normal;
            font-size: 16px;
            line-height: 100%;
        }
    }
`;