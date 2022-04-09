export default function selectionFilter({ series, films }) {
  return {
    series: [
      {
        title: "Documentaries",
        data: series.filter((item) => item.genre === "documentaries"),
      },
      {
        title: "Comedies",
        data: series.filter((item) => item.genre === "comedies"),
      },
      {
        title: "Feel Good",
        data: series.filter((item) => item.genre === "feel-good"),
      },
      {
        title: "Crime",
        data: series.filter((item) => item.genre === "crime"),
      },
    ],
    films: [
      {
        title: "Drama",
        data: films.filter((item) => item.genre === "drama"),
      },
      {
        title: "Thriller",
        data: films.filter((item) => item.genre === "thriller"),
      },
      {
        title: "Children",
        data: films.filter((item) => item.genre === "children"),
      },
      {
        title: "Suspense",
        data: films.filter((item) => item.genre === "suspense"),
      },
      {
        title: "Romance",
        data: films.filter((item) => item.genre === "romance"),
      },
    ],
  };
}