const div = document.createElement("div");
div.className = "test-container";
div.classList.add("anotherclass");
div.style.background = "red";
div.classList.remove("anotherclass");
console.log(div.outerHTML);
