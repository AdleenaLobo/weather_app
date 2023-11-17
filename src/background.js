import { body } from "./getElem";

function addBackground(ans) {
  if (
    ans.current.condition.code == "1000" ||
    ans.current.condition.code == "1030"
  ) {
    body.style.backgroundImage = "url(../assets/clear.jpg)";
  } else if (
    ans.current.condition.code == "1003" ||
    ans.current.condition.code == "1006"
  ) {
    body.style.backgroundImage = "url(../assets/cloudy.jpg)";
  } else {
    body.style.backgroundImage = "url(../assets/snowrain.jpg)";
  }
}

export { addBackground };
