import styled from "styled-components";

export const Container = styled.div`
    width: 305px;
    height: 462px;

    background-color: ${({ theme }) => theme.COLORS.DARK_200};

    border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 15px;

    position: relative;

    > svg {
        position: absolute;
        right: 16px;
        top: 16px;
    }

    > img {
        width: 176px;
        height: 176px;

        margin: 24px auto 0;
    }

    > div {
        display: flex;
        justify-content: center;

        > button {
            width: 98px;
        }
    }
`;

export const Amount = styled.div`
    display: flex;

    align-items: center;

    > button {
        background: none;
        border: none;

        width: 24px;
        height: 24px;

        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};

    }
`;