import styled from 'styled-components';

export const BreadCrumb = styled.div`
    margin-bottom:10px;
    a{
        color:#0000FF;
        margin:0 5px;
        &:hover{
            text-decoration:underline;
        }
    }
`

export const Loading = styled.div`
    width:100%;
    height:${({ height }) => height}px;
    
    animation: linear-move 500ms infinite;
    animation-direction:alternate;
    animation-timing-function:ease;
   
    @keyframes linear-move  {
       
        0%{
            background: linear-gradient(90deg, rgba(200,200,200) 0%, rgba(240,240,240)0%, rgba(200,200,200) 100%);
        }

        10%{
            background: linear-gradient(90deg, rgba(200,200,200) 0%, rgba(240,240,240) 10%, rgba(200,200,200) 100%);

        }
        20%{
            background: linear-gradient(90deg, rgba(200,200,200) 0%, rgba(240,240,240) 20%, rgba(200,200,200) 100%);
        }
        30%{
            background: linear-gradient(90deg, rgba(200,200,200) 0%, rgba(240,240,240) 30%, rgba(200,200,200) 100%);

        }
        40%{
            background: linear-gradient(90deg, rgba(200,200,200) 0%, rgba(240,240,240) 40%, rgba(200,200,200) 100%);

        }


        50%{
            background: linear-gradient(90deg, rgba(200,200,200) 0%, rgba(240,240,240) 50%, rgba(200,200,200) 100%);
        }

        60%{
            background: linear-gradient(90deg, rgba(200,200,200) 0%, rgba(240,240,240) 60%, rgba(200,200,200) 100%);

        }

        70%{
            background: linear-gradient(90deg, rgba(200,200,200) 0%, rgba(240,240,240) 70%, rgba(200,200,200) 100%);
        }
        80%{
            background: linear-gradient(90deg, rgba(200,200,200) 0%, rgba(240,240,240) 80%, rgba(200,200,200) 100%);
        }
        90%{
            background: linear-gradient(90deg, rgba(200,200,200) 0%, rgba(240,240,240) 90%, rgba(200,200,200) 100%);

        }
       
        100%{
            background: linear-gradient(90deg, rgba(200,200,200) 0%, rgba(240,240,240) 100%, rgba(221,221,211,1) 100%);

        }
      
    }

`


export const PageArea = styled.div`
      width:100%;
      display:flex;
      min-height:320px;
`
export const Container = styled.div`
  max-width:1000px;
  margin:15px auto;
  display:flex;
  flex-direction:column;



  .box {
      background-color:#fff;
      border-radius:5px;
      box-shadow:0px 0px 4px #999;
      margin-bottom:20px;
      display:flex;
  }
  .box--padding {
      padding:10px;
  }

  .left-side {
      flex:1;
      margin-right:20px;
      height:100px;
      .ad-info {
          flex:1;
      }
      
      .ad-name{
          margin-bottom:10px;
      }
      .ad-image{
            width:320px;
            height:320px;
            margin-right:15px;
            .each-slide img{
                display:flex;
                justify-content:center;
                align-items:center;
                height:320px;
                margin-right:20px;
            }
      }
  }
  .right-side {
      width:250px;
      min-height:100px;
      .price {
          font-size:24px;
      }
      .price span {
          color:blue;
          font-size:24px;
          font-weight:bold;
      }.contact-box{
          
          background-color:blue;
          a{
              color:#fff;
          }
          padding:8px 10px;
          text-align:center;
          border-radius:4px;
          display:flex;
          justify-content:center;
          align-items:center;
          font-weight:bold;
          cursor:pointer;
          &:hover{
              opacity:0.7;
          }
      }
      .user-info small{
          display:block;
          color:#999;
          margin-top:10px;
      }


  }
`;

export const OthersArea = styled.div`
  .list {
    margin-top:15px;    
    display:flex;   
   }
   .adItem{
       width:25%;
   }
`