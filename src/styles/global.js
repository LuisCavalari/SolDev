import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap');
    * {
       
        padding:0;
        box-sizing:border-box;
    }
    body {
        margin:0;
        font-family:'Open Sans',sans-serif;
        -webkit-font-smoothing: antialiased;
       -moz-osx-font-smoothing: grayscale;
       background-color:#eee;
    }
    body,html, #root {
        height:100%;
    }
    a {
        color:#000;
        text-decoration:none;
        
    }


`