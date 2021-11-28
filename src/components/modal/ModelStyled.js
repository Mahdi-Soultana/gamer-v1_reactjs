import styled from "styled-components";
import { useScreenShotDetails } from "../../hooks/useQueryGame";
import { AnimatePresence, motion } from "framer-motion";
export const Backdrop = styled(motion.div)`
  position: fixed;
  background-color: #2727273b;
  width: 100%;
  z-index: 3;
  min-height: 100vh;
  cursor: pointer;
  top: 0rem;
  left: 0%;
`;

export const ModelStyledC = styled(motion.aside)`
  position: fixed;
  background-color: #ffffff;
  width: 97%;
  max-width: 900px;
  min-height: 40vh;
  height: 99%;
  margin: 0 auto;
  top: 0.3rem;
  left: 17%;
  transform: translateX(-50%);
  border-radius: 1em;
  box-shadow: 0 0 16px #333;
  overflow-y: auto;
  z-index: 4;
  ///content
  header {
    display: flex;
    align-items: center;
    flex-flow: row wrap;
    justify-content: space-between;
    ul {
      padding: 2rem;
      display: flex;
      align-items: center;
      flex-flow: row wrap;
      justify-content: space-between;
      li {
        padding: 1rem;
        margin: 0 1rem;
        border-bottom: #333 solid 3px;
      }
    }
  }
  .title {
    padding: 1rem;
    font-size: 2rem;
    font-weight: 500;
  }
  span {
    display: inline-block;
    border-radius: 2em;
    padding: 0.5rem 1.2rem;
    background-color: darkcyan;
    width: 70px;
    box-shadow: 1px 1px 6px #333;
    font-size: 1.2rem;
    font-weight: 600;
    letter-spacing: 1.7px;
    margin: 1rem;
    color: whitesmoke;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  display: grid;
  width: 100%;
  .hero {
    width: 100%;
    height: 500px;

    border-bottom: #b3b3b3 solid 1px;
  }
  .description {
    font-size: 1rem;
    line-height: 1.5;
    font-weight: 400;

    padding: 3rem;
  }
  .screens {
    display: block;
    width: 100%;
    height: auto;
    padding: 0rem;
    li {
      padding: 0rem;
      /* border-bottom: #333 solid 1px; */
    }
    img {
      height: 300px;
      width: 100%;
      padding: 0rem;
    }
  }
  h3 {
    margin-left: 2rem;
    font-size: 1.2rem;
  }
`;

function ModelStyled({ data: dataGame }) {
  const {
    id,
    name,
    description_raw: description,
    rating,
    background_image,
    released,
    website,
    parent_platforms,
    tags,
  } = dataGame;
  const { data } = useScreenShotDetails(id);

  return (
    <ModelStyledC
      // layoutId={"card_" + id.toString()}
      exit={{
        opacity: 0,
      }}
      animate={{ opacity: 1, y: "0%" }}
      initial={{ opacity: 0, y: 100 }}
    >
      <header>
        <motion.div layoutId={"title_" + id.toString()} className="title">
          {name}
        </motion.div>
        <div className="platforme">
          <ul>
            {parent_platforms.map((item) => (
              <li key={item.platform.id}>{item.platform.name}</li>
            ))}
          </ul>
        </div>
      </header>
      <h3>Rating :</h3>
      <span>{rating}</span>
      <motion.div layoutId={"hero_" + id.toString()} className="hero">
        <img src={background_image} alt={name} />
      </motion.div>
      <p className="description">{description}</p>

      <ul className="screens">
        {data?.results.map((img) => (
          <li key={img.id}>
            <img src={img.image} alt={"imgs" + img.id} />
          </li>
        ))}
      </ul>
    </ModelStyledC>
  );
}

export default ModelStyled;
