updateView()
function updateView(){
    document.getElementById("app").innerHTML = /*HTML*/`
    
    <h1 class="header">Star Wars: Hutt Space</h1>
    
    <img src="img/slave 1.jfif">
    <div>Health: ${bossHealth}</div>
    <br>
    <br>
    <img src="img/xwing 1.jfif">
    <h2>${end}</h2>
    <button onclick="lasers()">lasers</button>
    <button onclick="missiles()">missiles</button>
    
    
    
    
    
    
    
    
    `;
}        













