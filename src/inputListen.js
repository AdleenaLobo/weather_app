import { inputtag, search } from "./getElem";
import { data } from "./getData";

let value;
function listenInput() {
  inputtag.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      getInputValue();
    }
  });

  search.addEventListener("click", getInputValue);
}

function getInputValue() {
  value = inputtag.value;
  value = value.toLowerCase();
  data(value);
}

export { listenInput };
