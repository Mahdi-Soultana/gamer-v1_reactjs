import React from "react";
import styled from "styled-components";
import { useQuery } from "react-query";

export const VideoStyels = styled.div`
  height: 80vh;
  width: 100%;
  @media (max-width: 700px) {
    height: 40vh;
  }
  padding: 1rem;
  border-radius: 0.6em;
  postion: relative;
  text-align: center;
  video {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 2em;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  }
`;
const VideoSection = styled.section`
  padding: 1rem;

  h3 {
    background-color: red;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
    border-radius: 6em;
    padding: 0.4rem 1rem;

    display: inline-block;
    color: white;
    margin-bottom: 1rem;
  }
`;
function Video({ id }) {
  let { data, isLoading } = useQuery(
    "video" + id,
    async () =>
      await fetch(
        `https://api.rawg.io/api/games/${id}/movies?key=104da59e492c4b12b219b40df1c319c4`,
      )
        .then((resp) => resp.json())
        .catch((e) => {
          console.log("somehig wroooong wih your fetch Fn" + e);
        }),
  );

  return (
    <VideoSection>
      <h1>Video Preview: </h1>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <VideoStyels>
            {!data?.results[0]?.data?.max && (
              <h3>No Video Found For this Game !</h3>
            )}
            <video poster={data?.results[0]?.preview} controls>
              <source src={data?.results[0]?.data?.max} />
              <source src={data?.results[0]?.data["480"]} />
              Your browser does not support the video tag.
            </video>
          </VideoStyels>
        </>
      )}
    </VideoSection>
  );
}

export default Video;
