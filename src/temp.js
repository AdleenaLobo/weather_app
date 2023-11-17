import { temperature } from "./getElem";

function addTemperature(ans, temp) {
  if (temp == "celsius" || temp == null) {
    temperature.innerHTML = `${ans.current.temp_c} <sup>o</sup>C`;
  } else if (temp == "farenheit") {
    temperature.innerHTML = `${ans.current.temp_f} <sup>o</sup>F`;
  }
}

export { addTemperature };
