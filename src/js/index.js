import { DOMSelectors } from "./DOM";

const key = "https://superheroapi.com/api/4026085827461072";

const query = async function () {
  try {
    const response = await fetch(
      "https://superheroapi.com/api/4026085827461072/search/spider-man"
    );
    const data = await response.json();
    console.log(data)
    data.results.forEach((superhero) => {
      DOMSelectors.grid.insertAdjacentHTML("beforeend", `<div class="superhero-card">
      <div class="superhero-front">
       <img
         src= "${superhero.image.url}"
         alt=""
         class="poster"
       />
     </div>
     <div class="superhero-card-back">
          <h3 class="superhero-card-header">${superhero.name}</h3>
          <div class="full-name">
            <p class="whole-name">Alignment</p>
            <p class="whole-name">${superhero.biography.alignment}</p>
          </div>`);
      console.log(superhero);
    });
    
  } catch (error) {
    console.log(error);
    alert("Something is Wrong");
  }
};
query();


