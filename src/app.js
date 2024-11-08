/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#domains").innerHTML = generateDomain();
};

let generateDomain = () => {
  let pronoun = ["our", "her", "the", "them"];
  let adj = ["amazing", "disgusting", "incredible", "unbelievable"];
  let place = ["lab", "kitchen", "mall", "island"];
  let extension = [".com", ".net", ".ve", ".gob"];

  let domsHTML = "<ul>";

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < place.length; k++) {
        for (let l = 0; l < extension.length; l++) {
          let a = pronoun[i];
          let b = adj[j];
          let c = place[k];
          let d = extension[l];

          let completeDomain = a + b + c + d;

          domsHTML += "<li>" + completeDomain + "</li>";
        }
      }
    }
  }
  return domsHTML;
};
