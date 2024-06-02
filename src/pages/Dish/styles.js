import styled from "styled-components";

export const Container = styled.div`

`;

export const Content = styled.div`
    max-width: 1122px;
    margin: 24px auto 0;
    
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    > a {
        display: flex;
        align-items: center;
        gap: 11px;

        color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    > div {
        margin-top: 42px;

        display: flex;
        justify-content: space-between;

        img {
            width: 400px;
            height: 400px;
        }

        > div {
            max-width: 660px;

            display: flex;
            flex-direction: column;
            gap: 24px;
        }
    }
`;
export const Ingredients = styled.div`
    display: flex;
    gap: 12px;

    > span {
        background-color: ${({ theme }) => theme.COLORS.DARK_1000};

        border-radius: 5px;

        padding: 4px 8px;
    }
`;