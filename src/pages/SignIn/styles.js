import styled from 'styled-components';

export const Container = styled.div`
  max-width:1000px;
  margin:auto;
  background-color:#fff;
  padding:8px;
  margin-top:15px;
  margin-bottom:15px;
  height:calc(100vh - 121px);
  border-radius:4px;
  form {
    width:100%;
    display:flex;
    flex-direction:column;
    .input-area{
      display:flex;
      justify-content:center;
      align-items:center;
      width:100%;
    }
    label{
      margin-right:10px;
    }
  }
`
