import { DOMSelectors } from "./DOM";
import { genres } from "./genre";

const key = "298075655132777";

const query = async function () {
  try {
    const response = await fetch(
      `https://www.superheroapi.com/api.php/298075655132777/80`
    );
    const data = await response.json();
    data.biography.forEach((superhero) => {
      DOMSelectors.grid.insertAdjacentHTML(
        "beforeend",
        `
      <section class="movie-grid">
      <div class="movie-card">
      <div class="movie-card-front">
        <img src="https://image.tmdb.org/t/p/w300/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg" alt="" class="poster" />
      </div>
      <div class="movie-card-back">
        <h3 class="movie-card-header">${superhero[fullName]}</h3>
        <div class="score-box">
          <p class="user-score">${superhero.publisher}</p>
          <p class="user-score">8.4</p>
        </div>

        <div class="release-box">
          <p class="release-date">First Appearance</p>
          <p class="release-date">${superhero[firstAppearance]}</p>
        </div>

        <div class="movie-genres">
          <li class="movie-genre">Sci-Fi</li>
          <li class="movie-genre">Fantasy</li>
          <li class="movie-genre">Horror</li>
        </div>
      </div>
    </div>
    </section>`
      );
    });
  } catch (error) {
    console.log(error);
    alert("The code isn't working");
  }
};
query();
