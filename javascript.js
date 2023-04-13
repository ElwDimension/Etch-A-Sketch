//ask user for input here, hardcoding a number for now
let grid=5;

//set up container for DOM shenanigans
const container=document.querySelector('#container');
createGrid(grid);

//function for creating grid using user input
function createGrid(grid){

    for (let i=0;i<grid;i++){
        let element = document.createElement('div');
        element.className="column";
        element.style.display="flex";
        element.style.flexDirection="column";
        container.appendChild(element);
    }

    const columns=document.getElementsByClassName('column');
    for (let i=0;i<columns.length;i++){
        for(let j=0;j<grid;j++){
            let board = document.createElement('div');
            board.className="sketch";
            board.style.backgroundColor="pink";
            board.textContent="box";
            columns[i].appendChild(board);
        }
    }
}    