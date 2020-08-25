var end = {
  all: "translateX(-50%) scale(1.2)",
  transform: "translateX(-50%) rotate(90deg)",
  height: "30rem",
  width: "40rem",
  "box-shadow": "0.25rem 0.25rem 0.25rem 0.25rem var(--shadowBox)",
};

function changeTransitions() {
  var infinity = document.querySelector("#check-action").checked;

  var property = document.querySelector("#form-transitions .property").value;
  var delay = document.querySelector("#form-transitions .delay").value;
  var duration = document.querySelector("#form-transitions .duration").value;
  var func = document.querySelector("#form-transitions .function").value;
  var box = document.getElementById("box");

  var styleAnimations = document.getElementById("style-animations");
  var styleTransitions = document.getElementById("style-transitions");

  var delaySec = delay / 1000.0;
  var durationSec = duration / 1000.0;

  var prop = property !== "all" ? property : "transform";
  if (infinity) {
    styleAnimations.innerHTML =
      "@keyframes animaframes { to { " + prop + ": " + end[property] + " } }";
    styleTransitions.innerHTML = "";
    box.style.animation =
      "animaframes " + durationSec + "s " + delaySec + "s linear infinite";
  } else {
    styleAnimations.innerHTML = "";
    styleTransitions.innerHTML =
      "#box:hover { " + prop + ": " + end[property] + "; }";
    box.style.animation = "";
  }

  var css =
    property +
    " " +
    durationSec +
    "s " +
    (delaySec !== 0 ? delaySec + "s " : "") +
    func;

  var detailedHtml =
    "transition-delay: " +
    delaySec +
    "s;<br />" +
    "transition-duration: " +
    durationSec +
    "s;<br />" +
    "transition-property: " +
    property +
    ";<br />" +
    "transition-timing-function: " +
    func +
    ";";

  box.style.transition = css;
  document.querySelector(".simple").innerHTML = "transition: " + css + ";";
  document.querySelector(".detailed").innerHTML = detailedHtml;
}

window.onload = changeTransitions;
