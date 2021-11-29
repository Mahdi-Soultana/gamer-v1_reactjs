import React from "react";
import styled from "styled-components";
import { BsFillQuestionOctagonFill } from "react-icons/bs";
import { searchAction } from "../../../redux/slices/search";
import { detailsAction } from "../../../redux/slices/details";
import { useDispatch } from "react-redux";
export const Tags = styled.section`
  padding: 1rem;
  h2 {
    display: flex;
    justify-content: flex-start;
    margin: 2rem;
    align-items: center;
    span {
      margin-left: 1rem;
      font-size: 1.6rem;
    }
  }
  ul {
    display: flex;
    justify-content: center;

    align-items: flex-end;
    flex-flow: row wrap;
  }

  li {
    padding: 0.5rem 1rem;
    border-radius: 10em;
    margin: 0.5rem;
    background: orangered;
    color: white;
    font-size: 1.4rem;
    cursor: pointer;
    &:hover {
      background: orange;
      opacity: 0.76;
    }
  }
`;

function TagsDetails({ tags }) {
  const dispatch = useDispatch();
  return (
    <Tags>
      <h2>
        Tags :{" "}
        <span>
          <BsFillQuestionOctagonFill />
        </span>
      </h2>
      <ul>
        {tags.map((tag) => (
          <li
            key={tag.id}
            title={tag.name}
            onClick={() => {
              dispatch(searchAction.setSearch(tag.name));
              dispatch(detailsAction.setDetailsId(""));
              dispatch(detailsAction.setGameDetails({}));
            }}
          >
            {tag.name}
          </li>
        ))}
      </ul>
    </Tags>
  );
}

export default TagsDetails;
