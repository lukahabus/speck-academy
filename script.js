function addTechnology() {
    let item = document.createElement("p");

    item.id = "item";

    let input = document.getElementById("technology");

    item.innerText = input.value;

    let grid = document.getElementById("grid");
    grid.appendChild(item);
}

function remove() {
    let grid = document.querySelector('#grid');
    //console.log(grid.childNodes);
    for (let i = grid.childNodes.length - 1; i >= 0; i--)
    {
        if (grid.childNodes[i].id == "item")
        {
            grid.removeChild(grid.childNodes[i]);
        }
    }
}