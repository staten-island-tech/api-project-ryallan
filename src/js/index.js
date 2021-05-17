//import { DOMSelectors } from "./DOM";
//import { genres } from "./genre";

const key = "https://superheroapi.com/api/4026085827461072";

const query = async function () {
  try {
    const response = await fetch(
      "https://superheroapi.com/api/4026085827461072/search/batman"
    );
    const data = await response.json();
    console.log(data)
    data.results.forEach((superhero) => {
      //DOMSelectors.grid.insertAdjacentHTML("beforeend", "");
      console.log(superhero);
    });
    
  } catch (error) {
    console.log(error);
    alert("Something is Wrong");
  }
};
query();

