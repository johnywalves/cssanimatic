var end = {
  transform: "rotate(90deg)",
  height: "30rem",
  width: "40rem",
  "box-shadow": "0.25rem 0.25rem 0.25rem 0.25rem var(--shadowBox)",
};

var start = {
  transform: "",
  height: "20rem",
  width: "20rem",
  "box-shadow": "1rem 1rem 1rem 0px var(--shadowBox)",
};

function mouseEnter() {
  var property = document.querySelector("#form-transitions .property").value;
  var box = document.getElementById("box");
  if (property === "all") {
    box.style.transform = "scale(1.2)";
  } else {
    box.style[property] = end[property];
  }
}

function mouseLeave() {
  var property = document.querySelector("#form-transitions .property").value;
  var box = document.getElementById("box");
  if (property === "all") {
    box.style.transform = "";
  } else {
    box.style[property] = start[property];
  }
}

function changeTransitions() {
  var property = document.querySelector("#form-transitions .property").value;
  var delay = document.querySelector("#form-transitions .delay").value;
  var duration = document.querySelector("#form-transitions .duration").value;
  var func = document.querySelector("#form-transitions .function").value;

  var css =
    property + " " + duration / 1000.0 + "s " + delay / 1000.0 + "s " + func;

  var detailedHtml =
    "transition-delay: " +
    delay / 1000.0 +
    "s;<br />" +
    "transition-duration: " +
    duration / 1000.0 +
    "s;<br />" +
    "transition-property: " +
    property +
    ";<br />" +
    "transition-timing-function: " +
    func +
    ";";

  document.getElementById("box").style.transition = css;
  document.querySelector(".painel-transitions .simple").innerHTML =
    "transition: " + css + ";";
  document.querySelector(
    ".painel-transitions .detailed"
  ).innerHTML = detailedHtml;
}
