import styled from "styled-components";

export const Container = styled.header`
    background-color: ${({ theme }) => theme.COLORS.DARK_600};
    height: 104px;
`;

export const Content = styled.div`
    max-width: 1122px;
    height: 104px;

    margin: 0 auto;

    display: flex;
    align-items: center;
    

     input {
       
    }

    > button {
        width: 216px;
    }
`;

export const Logo = styled.div`

    width: 197px;

    display: flex;
    gap: 20px;
    align-items: center;

    > h1 {
        font-family: "Roboto", sans-serif;
        font-weight: 700;
        font-style: normal;
        font-size: 28px;
        white-space: nowrap
    }
`;