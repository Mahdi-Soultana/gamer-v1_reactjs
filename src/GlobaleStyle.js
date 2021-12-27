import { createGlobalStyle } from "styled-components";

const GlobleStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500&family=Neucha&display=swap');
  *,*::after,*::before{
      box-sizing: border-box;
      margin: 0;
      padding: 0;
  }
  html{
      font-size:78.5%;
  }

  body{

      font-family: 'Montserrat', sans-serif;
      background-color: #f8f8f8;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
&::-webkit-scrollbar {
  width: 11px;               /* width of the entire scrollbar */
}
&::-webkit-scrollbar-track {
  background-color: #e7e7e7;
       cursor: pointer;   /* color of the tracking area */
}
&::-webkit-scrollbar-thumb {
  background-color: #d3d3d3;    /* color of the scroll thumb */
  border-radius: 30em;       /* roundness of the scroll thumb */

  cursor: pointer;

  &:hover{
       cursor: pointer;
       background-color: #252423;
  } /* creates padding around scroll thumb */
}
  }
  img{
       width:100%;
       height:100%;
       display:inline-block;
       vertical-align: center;
       object-fit: cover;
  }
  ul {
       list-style: none;
  }
  a {
       text-decoration: none;
       color: inherit;
  }
  .container{
      max-width:1050px;
      width:100%;
      margin: 0 auto;

  }
  h1{
      font-size:3rem;
    font-family: 'Neucha', cursive;
    margin: 1rem 0;
    color:#333;
    }
    h2{
      font-size:1.5rem;

  }
    h3{
      font-size:1rem;

  }
  .loading {
    position: absolute;
    top: 25%;
    right: 1rem;
    transform: translateY(-50%);
    font-size: 1.7rem;
    /* background: #333; */

    animation: rotate 0.9s linear infinite forwards;
    &.close {
      animation-play-state: paused;
      font-size: 2rem;
      cursor: pointer;

      &:hover {
        background: red;
        fill: white;
      }
    }
  }
  @keyframes rotate {
    from {
      transform: rotateZ(0);
    }
    to {
      transform: rotateZ(360deg);
    }
  }
  .backdrop{
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-color:rgba(0,0,0,.2);
    z-index:8;
    position:fixed;
  }
  @media(max-width:700px){
    html{
      font-size:50%;
    }
  }
  main{
    padding:2rem;
  }
`;
export default GlobleStyles;
