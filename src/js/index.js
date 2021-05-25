import { DOMSelectors } from "./DOM";
//import { genres } from "./genre";

const key = "https://superheroapi.com/api/4026085827461072";

const query = async function () {
  try {
    const response = await fetch(
      "https://superheroapi.com/api/4026085827461072/search/superman"
    );
    const data = await response.json();
    console.log(data)
    data.results.forEach((superhero) => {
      DOMSelectors.grid.insertAdjacentHTML("beforeend", `<div class="superhero-card">
      <div class="superhero-front">
      <h2>${superhero.publisher}</h2>
       <img
         src= "https://www.superherodb.com/pictures2/portraits/10/100/791.jpg"
         alt=""
         class="poster"
       />
     </div>
     <div class="superhero-card-back">
          <h3 class="superhero-card-header">Superhero</h3>
          <div class="full-name">
            <p class="whole-name">Full Name</p>
            <p class="whole-name">Clark Kent</p>
          </div>`);
      console.log(superhero);
    });
    
  } catch (error) {
    console.log(error);
    alert("Something is Wrong");
  }
};
query();


