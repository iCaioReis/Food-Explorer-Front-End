import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

`;

export const Content = styled.div`
  max-width: 1122px;
  
  margin: 0 auto;
    
  position: relative;

  > h1 {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    margin-bottom: 24px;
  }

  .menu {
    width: 100%;
    height: 462px;
    overflow: hidden;

    display: flex;
    gap: 27px;
  }
  
  .nav-button-prev {
    transform: translate(0, -50%);
    position: absolute;
    margin-top: auto;
    z-index: 1;
    top: 50%;

    margin-left: 30px;

    background: none;

    border: none;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  .nav-button-next {
    transform: translate(0, -50%);
    position: absolute;
    margin-top: auto;
    z-index: 1;
    top: 50%;
    right: 0;

    padding: 10px;

    margin-right: 30px;

    background: none;

    border: none;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
  
  .nav-button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  .gradient-left {
    position: absolute;
    z-index: 1;
    width: 277px;
    height: 462px;
  
    background: linear-gradient(90deg, rgba(0,10,15,1) 20%, rgba(0,10,15,0.27) 100%);
  }

  .gradient-right {
    position: absolute;
    z-index: 1;
    width: 277px;
    height: 462px;

    top: 70px;
    right: 0;
  
    background: linear-gradient(270deg, rgba(0,10,15,1) 20%, rgba(0,10,15,0.27) 100%);
  }

`;