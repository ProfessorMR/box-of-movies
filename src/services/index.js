import { SERVER_URL } from "@/src/utils/data";

const ACCESS_TOKEN = process.env.NEXT_PUBLIC_ACCESS_TOKEN

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
export async function getDetailSeries(id) {
  try {
    const response = await fetch(`${SERVER_URL}/tv/${id}?language=en-US`, {
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

export async function getDetailMovie(id) {
  try {
    const response = await fetch(`${SERVER_URL}/movie/${id}?language=en-US`, {
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

export async function getCreditsSeries(id) {
  try {
    const response = await fetch(
      `${SERVER_URL}/tv/${id}/credits?language=en-US`,
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

export async function getCreditsMovie(id) {
  try {
    const response = await fetch(
      `${SERVER_URL}/movie/${id}/credits?language=en-US`,
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
