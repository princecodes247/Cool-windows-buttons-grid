const page = document.documentElement;

const h2s = document.querySelectorAll(".front .h2");
h2s.forEach((h2) => {
  h2.addEventListener("click", (e) => {
    let dummy = document.createElement("div");
    let rect = e.target.getBoundingClientRect();
    let mouseX = e.clientX - rect.left;
    let mouseY = e.clientY - rect.top;
    page.style.setProperty("--mouseX", mouseX + "px");
    page.style.setProperty("--mouseY", mouseY + "px");
    dummy.classList.add("o");
    e.target.appendChild(dummy);
    console.log(e.clientX);
    console.log(e.clientY);
    setTimeout(() => {
      e.target.removeChild(dummy);
      console.log("b");
    }, 1000);
  });
});
page.addEventListener("mousemove", (e) => {
  page.style.setProperty("--x", e.clientX + "px");
  page.style.setProperty("--y", e.clientY + "px");
});
