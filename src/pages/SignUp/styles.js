import styled from 'styled-components';

export const Container = styled.div`
  max-width:1000px;
  width:100%;
  background-color:#fff;
  border-radius:5px;
  margin:40px auto;
  padding:10px;
  display:flex;
  justify-content:center;
  form { 
      max-width:800px;
      width:100%;
  }
`;

export const Row = styled.div `
    display:flex;
    justify-content:${({align='center'}) => align };
    align-items:center;
    width:100%;
    margin-top:25px;
    select {
        background-color:#fff;
        width:50%;
        border:1px solid #ccc;
        border-radius:4px;
        margin-left:4px;
        padding:5px 10px;
    }
    input {
        margin-left:5px;
    }
    i { 
        margin:0px 8px;
    }
`


