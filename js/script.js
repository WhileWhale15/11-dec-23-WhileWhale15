function replaceName() {
  let name = prompt("Hi, can you write your name here?", "");
  document.getElementById("name").innerHTML = name;
}

replaceName();

document.getElementById("submit").addEventListener("click", function () {
  const nama = nameInput.value;
  document.getElementById("name").innerHTML = nama;
});
