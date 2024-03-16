class Movie {
    constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
    getPG(movieArray) {
      const pgMovies = [];
      for (let i = 0; i < movieArray.length; i++) {
        if (movieArray[i].rating === "PG") {
          pgMovies.push(movieArray[i]);
        }
      }
      return pgMovies;
    }
  }
  const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
  const movies = [
    casinoRoyale,
    new Movie("Finding Nemo", "Pixar", "PG"),
    new Movie("The Godfather", "Paramount Pictures", "R")
  ];
  const pgMovies = casinoRoyale.getPG(movies);
  for(let i = 0; i < pgMovies.length; i++)
  {
    console.log(pgMovies[i]);
  }
  