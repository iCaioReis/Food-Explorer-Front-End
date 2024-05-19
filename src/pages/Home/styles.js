import styled from "styled-components";

export const Container = styled.div`

`;

export const Banner = styled.div`
    width: 1120px;
    height: 260px;

    margin: 164px auto 0;

    border-radius: 8px;

    background: rgb(9,30,38);
    background: linear-gradient(0deg, rgba(9,30,38,1) 0%, rgba(0,19,28,1) 100%, rgba(0,212,255,1) 100%);

    position: relative;

    text-align: right;
    
    > img {
        position: absolute;
        top: -146px;
        left: -55px;
    }

    > h1 {
        font-family: "Poppins", sans-serif;
        font-weight: 400;
        font-size: 40px;
        line-height: 140%;

        position: relative;
        top: 88px;
        right: 100px;
    }
    p {
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 16px;

        position: relative;
        top: 88px;
        right: 100px;
    }
`;

export const SectionFood = styled.div`
    margin-top: 50px;
`;