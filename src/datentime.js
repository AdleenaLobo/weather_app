import { date, time } from "./getElem";

let common;
function datesntime(ans) {
  common = ans.location.localtime;
  common = common.split(" ");
  date.textContent = "date: " + common[0] + " ,";
  time.textContent = " time: " + common[1];
  console.log(common);
}

export { datesntime };
