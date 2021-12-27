let token = process.env.REACT_APP_TOKEN;

let BaseUrl = "https://api.rawg.io/api/games?key=" + token;

function formatDate(date) {
  let d = new Date(date || new Date().getTime());

  let ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
  let mo = new Intl.DateTimeFormat("en", { month: "2-digit" }).format(d);
  let da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);

  return `${ye}-${mo}-${da}`;
}

const lastYear = new Date().getFullYear();

export const PopularGamesUrl = `${BaseUrl}&dates=${formatDate(
  `${lastYear}-01-01`,
)},${formatDate()},&page_size=12`;
export const newGamesUrl = `${BaseUrl}&search=the&ordering=added&page_size=12`;

export const FeaturedGamesUrl = `${BaseUrl}&search=run&ordering=-rating&page_size=12`;

BaseUrl = "https://api.rawg.io/api/games";

export const GamesDetailsUrl = (id) => `${BaseUrl}/${id}?key=${token}`;

export const GamesScreenShotsUrl = (id) =>
  `${BaseUrl}/${id}/screenshots?key=${token}`;
export const GamesSearchUrl = (search) =>
  `${BaseUrl}?key=${token}&search=${search}`;
