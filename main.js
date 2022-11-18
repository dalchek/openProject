const div = document.createElement("div");
div.className = "test-container";
div.style.background = "lightblue";
div.style.border = "1px solid blue";
document.body.appendChild(div);
div.innerHTML = `<div class="card">
                    <h2>Title</h2>
                    <p>Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, sed do eiusmod
                </div>
                <div class="card">
                    <h2>Title</h2>
                    <p>Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, sed do eiusmod
                </div>
                <div class="card">
                    <h2>Title</h2>
                    <p>Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, sed do eiusmod
                </div>
                <div class="card">
                    <h2>Title</h2>
                    <p>Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, sed do eiusmod
                </div>`;
console.log(div.outerHTML);
let conteiner = document.querySelector(".conteiner");
conteiner.style.backgroundColor = "red";
conteiner.style.color = "white";
