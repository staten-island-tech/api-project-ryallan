import { DOMSelectors } from "./DOM";
import { genres } from "./genre";

const key = "298075655132777";

const query = async function () {
  try {
    const response = await fetch(
      `https://www.superheroapi.com/api.php/298075655132777/80`
    );
    const data = await response.json();
    console.log("data blahblahblah");
  } catch (error) {
    console.log(error);
    alert("bro your code aint working");
  }
};
query();
