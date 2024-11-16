export const SERVER_URL = "https://api.themoviedb.org/3";
export const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

export const DROPDOWN_DATA = {
  results: {
    tv: [
      {
        name: "year",
        btn_name: "انتخاب سال",
        inside_dropdown: Array.from(
          { length: 2024 - 2000 + 1 },
          (_, i) => 2000 + i
        ),
      },
      {
        name: "genre",
        btn_name: "ژانر سریال",
        inside_dropdown: [
          { id: 10759, name: "Action & Adventure" },
          { id: 16, name: "Animation" },
          { id: 35, name: "Comedy" },
          { id: 80, name: "Crime" },
          { id: 99, name: "Documentary" },
          { id: 18, name: "Drama" },
          { id: 10751, name: "Family" },
          { id: 10762, name: "Kids" },
          { id: 9648, name: "Mystery" },
          { id: 10763, name: "News" },
          { id: 10764, name: "Reality" },
          { id: 10765, name: "Sci-Fi & Fantasy" },
          { id: 10766, name: "Soap" },
          { id: 10767, name: "Talk" },
          { id: 10768, name: "War & Politics" },
          { id: 37, name: "Western" },
        ],
      },
      {
        name: "voteAvg",
        btn_name: "میانگین نمره",
        inside_dropdown: Array.from({ length: 10 }, (_, i) => i + 1),
      },
    ],
    movies: [
      {
        name: "year",
        btn_name: "انتخاب سال",
        inside_dropdown: Array.from(
          { length: 2024 - 1990 + 1 },
          (_, i) => 1990 + i
        ),
      },
      {
        name: "genre",
        btn_name: "ژانر فیلم",
        inside_dropdown: [
          { id: 28, name: "Action" },
          { id: 12, name: "Adventure" },
          { id: 16, name: "Animation" },
          { id: 35, name: "Comedy" },
          { id: 80, name: "Crime" },
          { id: 99, name: "Documentary" },
          { id: 18, name: "Drama" },
          { id: 10751, name: "Family" },
          { id: 14, name: "Fantasy" },
          { id: 36, name: "History" },
          { id: 27, name: "Horror" },
          { id: 10402, name: "Music" },
          { id: 9648, name: "Mystery" },
          { id: 10749, name: "Romance" },
          { id: 878, name: "Science Fiction" },
          { id: 10770, name: "TV Movie" },
          { id: 53, name: "Thriller" },
          { id: 10752, name: "War" },
          { id: 37, name: "Western" },
        ],
      },
      {
        name: "voteAvg",
        btn_name: "میانگین نمره",
        inside_dropdown: Array.from({ length: 10 }, (_, i) => i + 1),
      },
    ],
  },
};
