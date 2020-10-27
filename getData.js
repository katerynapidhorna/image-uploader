// const folder = require("./uploadedImages");
(async () => {
  const container = document.getElementById("content");
  const res = await fetch("http://localhost:4000/");
  const data = await res.json();
  const render = data.map((elem) => {
    return `<img src='./${elem}'/>`;
  });
  console.log(render);
  if (!render) {
    container.innerHTML = render.join(" ");
  } else {
    container.innerHTML = "no images";
  }
})();
