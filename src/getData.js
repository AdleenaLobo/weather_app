//88dd8521b0244edeac3154324230811  api key
import { addPlace } from "./placeName";
import { addCondition } from "./status";
import { addTemperature } from "./temp";
import { addWind } from "./windData";
import { addPrecip } from "./precipitation";
import { addPressure } from "./pressure";
import { addImg } from "./pictureCondition";

let ans;
async function data(val) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=88dd8521b0244edeac3154324230811&q=${val}`,
      { mode: "cors" }
    );
    if (await response.ok) {
      ans = await response.json();
      console.log(ans);
    } else {
      console.log("error");
    }

    addPlace(await ans);
    addCondition(await ans);
    addTemperature(await ans);
    addWind(await ans);
    addPrecip(await ans);
    addPressure(await ans);
    addImg(await ans);
  } catch (error) {
    console.log("error: " + error);
  }
}

export { data };
