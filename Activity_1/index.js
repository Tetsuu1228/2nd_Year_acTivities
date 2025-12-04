alert("Hello World!");

const heading = document.getElementById("myHeading");
const button = document.getElementById("myButton");
 
button.addEventListener("click", () => {
  heading.style.color =
    heading.style.color === "tomato" ? "teal" : "tomato";
});