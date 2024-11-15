export const SERVER_URL = "https://api.themoviedb.org/3";
export const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

export const DROPDOWN_DATA = {
  results: {
    tv: [
      {
        btn_name: "انتخاب سال",
        inside_dropdown: Array.from(
          { length: 2024 - 2000 + 1 },
          (_, i) => 2000 + i
        ),
      },
      {
        btn_name: "ژانر سریال",
        inside_dropdown: [
          "Action & Adventure",
          "Animation",
          "Comedy",
          "Crime",
          "Documentary",
          "Drama",
          "Family",
          "Kids",
          "Mystery",
          "News",
          "Reality",
          "Sci-Fi & Fantasy",
          "Soap",
          "Talk",
          "War & Politics",
          "Western",
        ],
      },
      {
        btn_name: "میانگین نمره",
        inside_dropdown: Array.from({ length: 10 }, (_, i) => i + 1),
      },
    ],
    movies: [
      {
        btn_name: "انتخاب سال",
        inside_dropdown: Array.from(
          { length: 2024 - 1990 + 1 },
          (_, i) => 1990 + i
        ),
      },
      {
        btn_name: "ژانر فیلم",
        inside_dropdown: [
          "Action",
          "Adventure",
          "Animation",
          "Comedy",
          "Crime",
          "Documentary",
          "Drama",
          "Family",
          "Fantasy",
          "History",
          "Horror",
          "Music",
          "Mystery",
          "Romance",
          "Science Fiction",
          "TV Movie",
          "Thriller",
          "War",
          "Western",
        ],
      },
      {
        btn_name: "میانگین نمره",
        inside_dropdown: Array.from({ length: 10 }, (_, i) => i + 1),
      },
    ],
  },
};
