import { temperature } from "./getElem";

function addTemperature(ans) {
  temperature.innerHTML = `${ans.current.temp_c} <sup>o</sup>C`;
}

export { addTemperature };
