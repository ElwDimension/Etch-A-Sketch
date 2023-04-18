//set up inital grid size and color of mouseover
let grid=16;
let ink="black";

//set up container for DOM shenanigans
const container=document.querySelector('#container');

//create initial grid
createGrid(grid);

//sets up reset button to create new grids
const btn=document.querySelector('#reset');
btn.addEventListener('click',resetGrid);

//sets up user input textbox and button to change grid size
const size=document.querySelector('#gridSize');
const sizeBtn=document.querySelector('#gridSizeBtn');
sizeBtn.addEventListener('click',changeSize);

//function for creating grid using user input
function createGrid(grid){

    for (let i=0;i<grid;i++){
        let element = document.createElement('div');
        element.className="column";
        element.style.display="flex";
        element.style.flexDirection="column";
        element.style.width="100%";
        element.style.height="100%";
        element.style.flexgrow=1;
        container.appendChild(element);
    }

    const columns=document.getElementsByClassName('column');
    for (let i=0;i<columns.length;i++){
        for(let j=0;j<grid;j++){
            let board = document.createElement('div');
            board.className="sketch";
            board.textContent=" ";
            board.style.display="flex";
            board.style.width="100%";
            board.style.height="100%";
            board.style.backgroundColor="pink";
            board.addEventListener('mouseover',changeColor);
            columns[i].appendChild(board);            
        }
    }  
}    

function resetGrid(){
    const list=document.getElementById("container");
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
      }

     createGrid(grid); 
}

function changeColor(){
    this.style.backgroundColor="black";
}

function changeSize(){
    let input=size.value;
    console.log(input);
    if(input==null || input<1 || input>99){
        console.log("ERROR");
    }
    else{
        input=size.valueAsNumber;
        grid=input;
        resetGrid();
    }
}