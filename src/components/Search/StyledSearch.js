import styled from "styled-components";
export const StyledSearch = styled.form`
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
  > div {
    position: relative;
  }
  max-width: 500px;
  width: 100%;
  font-size: 1.2rem;
  font-family: inherit;
  color: #333;
  font-weight: 600;
  text-align: center;

  button,
  input {
    border: rgb(211, 211, 211) 3px solid;
    display: inline-block;
    padding: 0.5rem 2rem;

    font-size: 1.2rem;
    font-family: inherit;
    color: #333;
    font-size: 1.7rem;
    font-weight: 600;
  }

  button {
    border-left: none;
    background: darkslategrey;
    color: white;
    cursor: pointer;
  }
  input {
    flex-grow: 1;
    border-right: none;
    transition: 0.2s all cubic-bezier(0.175, 0.885, 0.32, 1.275);
    outline: none;
    &:focus {
      /* transition: 1.3 all; */
      border-top: 3px solid darkslategrey;
    }
  }
`;
