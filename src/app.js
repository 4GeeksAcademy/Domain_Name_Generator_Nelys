/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let extension = [".com", ".es"];

  let miDominio = "";

  for (let pronounIndex = 0; pronounIndex < pronoun.length; pronounIndex++) {
    for (let adjIndex = 0; adjIndex < adj.length; adjIndex++) {
      for (let nounIndex = 0; nounIndex < noun.length; nounIndex++) {
        for (
          let extensionIndex = 0;
          extensionIndex < extension.length;
          extensionIndex++
        ) {
          miDominio +=
            pronoun[pronounIndex] +
            adj[adjIndex] +
            noun[nounIndex] +
            extension[extensionIndex] +
            "\n";
        }
      }
    }
  }
  console.log(miDominio);
};
