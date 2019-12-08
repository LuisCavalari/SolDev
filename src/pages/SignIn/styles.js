import styled from 'styled-components';



export const Container = styled.div`
  max-width:1000px;
  margin:auto;
  background-color:#fff;
  padding:10px;
  padding-bottom:20px;
  margin-top:48px;
  border-radius:4px;
  display:flex;
  align-items:center;
  flex-direction:column;
  form {
    max-width:500px;
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin-top:15px;
    .checkbox {
      display:flex;
      justify-content:flex-start;
      align-items:center;
      width:100%;
      margin-top:15px;
      input {
        width:auto;
        
        margin-left:15px;
      }
    }
    .input-area{
      display:flex;
      justify-content:center;
      align-items:center;
      margin-top:25px;
      width:100%;
      input {
        width:100%;
        margin-left:5px;
      }
    }
    
  }
  button {
    
    width:100%;
    margin:auto;
    margin-top:25px;
  }
  .row-between{
    display:flex;

    width:100%;
    justify-content:space-between
  }
  a {
    color:#6e0ad6;
    &:hover {
      text-decoration:underline;
    }
    margin-top:10px;
  }

`
