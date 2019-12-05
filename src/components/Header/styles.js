import styled from 'styled-components';

export const HeaderArea = styled.div`
    background-color:#fff;
    height:60px;
    border-bottom:1px solid #ccc;
    .container {
        max-width: 1000px;
        margin:auto;
        height:100%;
        display:flex;
        align-items:center;
        justify-content:space-between;
    }
    .logo{
        flex:1;
        display:flex;
        justify-content:center;
        align-items:center;
        .logo-text{
            font-weight:bold;
            letter-spacing:2px;
            font-size:27px;
        }
        .logo-text:nth-child(1){
            color:#6e0ad6;
        }
        .logo-text:nth-child(2){
            color:greenyellow;
        }
        .logo-text:nth-child(3){
            color:orange;
        }
    }
`;

export const Nav = styled.nav`
    ul {
        margin:0;
        padding:0;
        list-style:none;
    }

    li {
        display:inline-block;
        margin-right:10px;
        font-size:17px;
        padding:8px;
        transition:all 200ms linear;
        border-radius:7px;
        a { color:inherit; }
        &:hover{
            background-color:#6e0ad6;
            color:#fff;
            
        }
    }
    li.bg-orange {
        background-color:#e57706;
        color:#fff;
        &:hover{
            opacity:0.6;
        }
    }
`
