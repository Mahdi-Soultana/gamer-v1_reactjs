import { motion } from "framer-motion";
import { ModelStyledC, Rating } from "./StyledModel";
import ScrennShotModel from "./ScreenShotModel/ScrennShotModel";
import PlatformDetails from "./PlatformDetails/PlatformDetails";
import TagsDetails from "./TagsDetails/TagsDetails";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { GrValidate } from "react-icons/gr";
import Related from "./related/Related";
function ModelStyled({ data: dataGame }) {
  const {
    id,
    name,
    description_raw: description,
    rating,
    background_image,
    released,
    // website,
    parent_platforms,
    tags,
  } = dataGame;

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
        <PlatformDetails data={parent_platforms} />
      </header>
      <Rating>
        <div className="released">
          <h4>{<GrValidate />}Released : </h4>
          <time dateTime={released}>{released}</time>
        </div>
        <h3>
          Rating : <div>{ConvertRatingToStars(rating)}</div>
        </h3>
        <span>{rating}</span>
      </Rating>
      <motion.div layoutId={"hero_" + id.toString()} className="hero">
        <img src={background_image} alt={name} />
      </motion.div>

      <p className="description">{description}</p>

      <ScrennShotModel id={id} />
      <TagsDetails tags={tags} />
      <Related name={name} />
    </ModelStyledC>
  );
}

export default ModelStyled;
export function ConvertRatingToStars(rating) {
  const ratingRound = Math.round(rating);
  let stars = [];
  for (let i = 0; i < 5; i++) {
    if (i <= ratingRound) {
      stars.push(<AiFillStar key={i} />);
    } else {
      stars.push(<AiOutlineStar key={i} />);
    }
  }
  return stars;
}
