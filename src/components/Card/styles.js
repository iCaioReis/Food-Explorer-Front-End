import styled from "styled-components";

export const Container = styled.div`
    width: 300px;
    height: 462px;

    background-color: ${({ theme }) => theme.COLORS.DARK_200};

    border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 15px;

    position: relative;

    > img {
        width: 176px;
        height: 176px;

        margin: 24px auto 0;
    }

    > svg {
        position: absolute;
        right: 16px;
        top: 16px;
    }

    > h1{
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    > P {
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }

    > h2 {
        color: ${({ theme }) => theme.COLORS.CAKE_200};
    }
    
    > div {
        display: flex;
        justify-content: center;
        gap: 16px;

        > button {
            width: 98px;
        }
    }
`;

export const Amount = styled.div`
    display: flex;

    align-items: center;

    gap: 14px;

    > button {
        background: none;
        border: none;

        width: 24px;
        height: 24px;

        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};

    }
`;