import { SERVER_URL } from "@/src/utils/data";

const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MGU1NzJmMTFiODYyZGJkNjY5YmE5ZTRjMTkyNDFhMCIsIm5iZiI6MTczMTUwOTQ5NS42MzMxNTYsInN1YiI6IjY3MmI0MTJjZDBjMDcyYWQ0OGY1NDk0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ELnM6ZEvUli3zk7dp9_kEhx2cWIIoW-JtGexsUm5ZBw";

export async function getPopSeries() {
  try {
    const response = await fetch(
      `${SERVER_URL}/tv/popular?language=en-US&page=1`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("!Error");
    }

    const data = response.json();

    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export async function getTopSeries() {
  try {
    const response = await fetch(
      `${SERVER_URL}/tv/top_rated?language=en-US&page=1`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("!Error");
    }

    const data = response.json();

    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export async function getPopMovies() {
  try {
    const response = await fetch(
      `${SERVER_URL}/movie/popular?language=en-US&page=1`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("!Error");
    }

    const data = response.json();

    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export async function getTopMovies() {
  try {
    const response = await fetch(
      `${SERVER_URL}/movie/top_rated?language=en-US&page=1`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("!Error");
    }

    const data = response.json();

    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export async function getGenreMovies() {
  try {
    const response = await fetch(`${SERVER_URL}/genre/movie/list?language=en`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error("!Error");
    }

    const data = response.json();

    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export async function getGenreSeries() {
  try {
    const response = await fetch(`${SERVER_URL}/genre/tv/list?language=en`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error("!Error");
    }

    const data = response.json();

    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export async function searchSeriesOrMovies(searchName) {
  try {
    const response = await fetch(
      `${SERVER_URL}/search/multi?query=${searchName}&include_adult=false&language=en-US&page=1`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("!Error");
    }

    const data = response.json();

    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export async function advancedFilterSeries({
  page = 1,
  year = "",
  genre = "",
  voteAvg = "",
}) {
  try {
    const response = await fetch(
      `${SERVER_URL}/discover/tv?language=en-US&page=${page}&first_air_date_year=${year}
      &with_genres=${genre}&vote_average.gte=${voteAvg}`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("!Error");
    }

    const data = response.json();

    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export async function advancedFilterMovies({
  page = 1,
  year = "",
  genre = "",
  voteAvg = "",
}) {
  try {
    const response = await fetch(
      `${SERVER_URL}/discover/movie?language=en-US&page=${page}&primary_release_year=${year}
      &with_genres=${genre}&vote_average.gte=${voteAvg}`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("!Error");
    }

    const data = response.json();

    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}
