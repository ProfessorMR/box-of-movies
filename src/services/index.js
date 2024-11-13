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
