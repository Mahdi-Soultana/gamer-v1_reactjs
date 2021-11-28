import { gamesAction } from "../redux/slices/games";
import { detailsAction } from "../redux/slices/details";
import {
  newGamesUrl,
  PopularGamesUrl,
  FeaturedGamesUrl,
  GamesDetailsUrl,
  GamesScreenShotsUrl,
} from "../BaseURL";
import useQuerFetch from "./useQueryFetch";

// ****
///
const usePopupalrGame = () =>
  useQuerFetch(
    "popular",
    "get_popular_game",
    PopularGamesUrl,
    gamesAction.setPopularGame,
  );
//
const useFeaturedGame = () =>
  useQuerFetch(
    "featured_game",
    "get_featured_game",
    FeaturedGamesUrl,
    gamesAction.setFeaturedGame,
  );
//
const useNewGame = () =>
  useQuerFetch(
    "newest_game",
    "get_newest_game",
    newGamesUrl,
    gamesAction.setNewGame,
  );
//
const useGameDetails = (id) =>
  useQuerFetch(
    "game_details",
    "get_details_game",
    GamesDetailsUrl(id),
    detailsAction.setGameDetails,
    id,
    "by_ID",
  );
const useScreenShotDetails = (id) =>
  useQuerFetch(
    "game_details_screens",
    "get_details__screens_game",
    GamesScreenShotsUrl(id),
    null,
    id,
    "Screen",
  );

export {
  usePopupalrGame,
  useFeaturedGame,
  useNewGame,
  useGameDetails,
  useScreenShotDetails,
};
