/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["our", "her", "the", "them"];
  let adj = ["amazing", "disgusting", "incredible", "unbelievable"];
  let place = ["lab", "kitchen", "mall", "island"];
  let extension = [".com", ".net", ".ve", ".gob"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < place.length; k++) {
        for (let l = 0; l < extension.length; l++) {
          console.log(pronoun[i] + adj[j] + place[k] + extension[l]);
        }
      }
    }
  }
};
