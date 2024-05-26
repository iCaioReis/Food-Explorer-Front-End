import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

`;

export const Content = styled.div`
    max-width: 1122px;
    margin: 0 auto;

    display: flex;
    align-items: center;
  
    .menu {
    height: 400px;
    overflow: hidden;
    width: 100%;
    box-sizing: border-box;

    display: flex;
  }
  
  .menu-item {
    width: 304px;
    height: 462px;
    
    border: 1px solid #ccc;
    margin: 5px 0;
    padding: 10px;
    box-sizing: border-box;
  }
  
  .nav-button {
    background-color: #fff;
    border: 1px solid #ccc;
    cursor: pointer;
    padding: 10px;
    margin: 5px;
  }
  
  .nav-button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;