import { conditionImg } from "./getElem";

function addImg(ans) {
  conditionImg.src = "https:" + ans.current.condition.icon;
}

export { addImg };
