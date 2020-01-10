import styled from 'styled-components';

export const Container = styled.div`
  max-width:1000px;
  width:100%;
  margin:auto;
  .recent-ads-list{
      width:100%;
      display:flex;
      justify-content:space-between;
      .adItem {
          width:27%;
      }
  }
 
`;

export const SearchArea = styled.div`
    width:100%;
    padding:20px 15px;
    display:flex;
    margin-top:25px;
    background-color:#6e0ad6;
    border-radius:8px;
    color:#fff;
    input {
        border:none;
        padding:15px;
        outline:none;
        flex:3;
        border-radius:3px;
    }
    select {
        background-color:#fff;
        border-radius:3px;
        border:none;
        outline:none;
        flex:1;
     }
     button{
        flex:1;
        background-color:#2eb82e;
        border:none;
        border-radius:3px;
        color:#fff;
        font-weight:bold;
        font-size:18px;
        cursor:pointer;
        &:hover{
            background-color:#1e7b1e;
        }
     }
     input,button,select {
         margin-right:10px;
     }

`

export const CategoriesArea = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    height:60px;
    margin-top:15px;
    padding-bottom:15px;

`

export const CategorieIcon = styled.div`
    display:flex;
    align-items:center;
    img {
        margin-right:8px;
    }
    &:hover {
        color:#999;
    }
`

export const NewsAds = styled.div`
    width:100%;
    background-color:#fff;
    padding-top:5px;
    padding-bottom:25px;
`