import { wind } from "./getElem";

function addWind(ans) {
  wind.textContent = ans.current.wind_kph + " kph";
}

export { addWind };
