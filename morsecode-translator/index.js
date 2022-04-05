const crypt = new Map([
  ["a", "._"],
  ["b", "_..."],
  ["c", "_._."],
  ["d", "_.."],
  ["e", "."],
  ["f", ".._."],
  ["g", "__."],
  ["h", "...."],
  ["i", ".."],
  ["j", ".___"],
  ["k", "_._"],
  ["l", "._.."],
  ["m", "__"],
  ["n", "_."],
  ["o", "___"],
  ["p", ".__."],
  ["q", "__._"],
  ["r", "._."],
  ["s", "..."],
  ["t", "_"],
  ["u", ".._"],
  ["v", "..._"],
  ["w", ".__"],
  ["x", "_.._"],
  ["y", "_.__"],
  ["z", "__.."],
  [" ", "/"],
]);

const reversed = new Map([
  ["._", "a"],
  ["_...", "b"],
  ["_._.", "c"],
  ["_..", "d"],
  [".", "e"],
  [".._.", "f"],
  ["__.", "g"],
  ["....", "h"],
  ["..", "i"],
  [".___", "j"],
  ["_._", "k"],
  ["._..", "l"],
  ["__", "m"],
  ["_.", "n"],
  ["___", "o"],
  [".__.", "p"],
  ["__._", "q"],
  ["._.", "r"],
  ["...", "s"],
  ["_", "t"],
  [".._", "u"],
  ["..._", "v"],
  [".__", "w"],
  ["_.._", "x"],
  ["_.__", "y"],
  ["__..", "z"],
  ["/", " "],
]);

// translate word from english to morse code
function translateWord(word) {
  return word
    .toLowerCase()
    .split("")
    .map((letter) => crypt.get(letter))
    .join(" ");
}

function translateCode(code) {
  return code
    .split(" ")
    .map((letter) => reversed.get(letter))
    .join("");
}

// makes the translation in morse code
function encryptWord() {
  console.log("word");
  const word = this.value;
  document.getElementById("translateWord").innerText = translateWord(word);
}

const word = document.querySelector("textarea#word");
word.addEventListener("input", encryptWord);

// makes the translation in english
function encryptCode() {
  const code = this.value;
  document.getElementById("translateCode").innerText = translateCode(code);
}

const code = document.querySelector("textarea#code");
code.addEventListener("input", encryptCode);
