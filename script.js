// const folder = require("./uploadedImages");
(async () => {
  const container = document.getElementById("content");
  const res = await fetch("http://localhost:4000/");
  const data = await res.json();
  const render =
    data &&
    data.map((elem) => {
      return `<img src='${elem}'/>`;
    });
  if (!render) {
    container.innerHTML = render.join(" ");
  } else {
    container.innerHTML = "no images";
  }
})();
