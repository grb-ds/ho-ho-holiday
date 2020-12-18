let imgPuzzle1 = new Image();
imgPuzzle1.src = 'puzzel1.jpg';
imgPuzzle1.style.width = '600px';
imgPuzzle1.style.height = '600px';

numColsToCut = 3;
numRowsToCut = 3;
widthOfOnePiece = 200;
heightOfOnePiece = 200;

let isNotComplete = true;

const puzzleOrder = [
    { divId: "1", tileId: "tile1", indexImage : -1 },
    { divId: "2", tileId: "tile2", indexImage : -1 },
    { divId: "3", tileId: "tile3", indexImage : -1 },
    { divId: "4", tileId: "tile4", indexImage : -1 },
    { divId: "5", tileId: "tile5", indexImage : -1 },
    { divId: "6", tileId: "tile6", indexImage : -1 },
    { divId: "7", tileId: "tile7", indexImage : -1 },
    { divId: "8", tileId: "tile8", indexImage : -1 },
    { divId: "9", tileId: "tile9", indexImage : -1 },
];

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

const getRandomOrder = () => {
    let randomIndex;
    let indexPuzzle;
    do {
        randomIndex = getRandomInt(0,puzzleOrder.length);
        indexPuzzle = puzzleOrder.findIndex(element => element.indexImage === randomIndex);
    }while (indexPuzzle > -1);
    return randomIndex;
}

const checkPuzzle = () => {

    for (let i = 0; i < puzzleOrder.length; i++ ) {
        let currentDiv = document.getElementById(puzzleOrder[i].divId);
        let rightOrder = Number(currentDiv.getAttribute("order"));
        let imgId =  currentDiv.firstElementChild.getAttribute("id");

        let currentPuzzle = puzzleOrder.find(element => element.tileId === imgId);
        console.log("rightOrder", rightOrder);
        console.log("currentPuzzle", currentPuzzle);
        if (rightOrder !== currentPuzzle.indexImage){
            return false;
        }
    }
    return true;
}

const cutImage = () => {
    let imagePieces = [];
    for(let x = 0; x < numColsToCut; x++) {
        for(let y = 0; y < numRowsToCut; y++) {
            let canvas = document.createElement('canvas');
            canvas.width = widthOfOnePiece;
            canvas.height = heightOfOnePiece;
            let context = canvas.getContext('2d');
            //context.drawImage(imgPuzzel1, x * widthOfOnePiece, y * heightOfOnePiece, widthOfOnePiece, heightOfOnePiece, 0, 0, canvas.width, canvas.height);
            context.drawImage(imgPuzzle1, x * widthOfOnePiece, y * heightOfOnePiece, widthOfOnePiece, heightOfOnePiece, 0 , 0, canvas.width, canvas.height);
           // context.drawImage(img,        x * tileSize,             y * tileSize,         tileSize,        tileSize,             i * tileSize,            j * tileSize, tileSize, tileSize);

            imagePieces.push(canvas.toDataURL());
        }
    }

    // imagePieces now contains data urls of all the pieces of the image


    // Get the modal
    let modal = document.getElementById("container");

    Array.from(document.querySelectorAll(".grid-image-item")).forEach((img) => {
        let indexImage = getRandomOrder();
        img.src = imagePieces[indexImage];
        let currentPuzzle = puzzleOrder.find(element => element.tileId === img.id);
        currentPuzzle.indexImage = indexImage;
    });
    console.log("puzzleOrder",puzzleOrder);
    console.log(document.querySelectorAll(".cell"));

}



/*Array.from(document.querySelectorAll(".cell")).forEach(square =>
    square.addEventListener("click", cutImage) );*/

document.querySelector("#stop").addEventListener("click",()=>{
    let items = document.querySelectorAll('.container .cell');
    console.log(items);
    alert(checkPuzzle());
    //console.log("checkPuzzle" , checkPuzzle());
});

/*
https://web.dev/drag-and-drop/
*/
document.addEventListener('DOMContentLoaded', (event) => {

    let dragSrcEl = null;

    function handleDragStart(e) {
      //  this.style.opacity = '0.4';

        dragSrcEl = this;

        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', this.innerHTML);
    }

    function handleDragOver(e) {
        if (e.preventDefault) {
            e.preventDefault();
        }

        e.dataTransfer.dropEffect = 'move';

        return false;
    }

    function handleDragEnter(e) {
        this.classList.add('over');
    }

    function handleDragLeave(e) {
        this.classList.remove('over');
    }

    function handleDrop(e) {
        if (e.stopPropagation) {
            e.stopPropagation(); // stops the browser from redirecting.
        }

        if (dragSrcEl != this) {
            dragSrcEl.innerHTML = this.innerHTML;
            this.innerHTML = e.dataTransfer.getData('text/html');
        }

        return false;
    }

    function handleDragEnd(e) {
        //this.style.opacity = '1';

        items.forEach(function (item) {
            item.classList.remove('over');
        });
    }


    let items = document.querySelectorAll('.container .cell');
    items.forEach(function(item) {
        item.addEventListener('dragstart', handleDragStart, false);
        item.addEventListener('dragenter', handleDragEnter, false);
        item.addEventListener('dragover', handleDragOver, false);
        item.addEventListener('dragleave', handleDragLeave, false);
        item.addEventListener('drop', handleDrop, false);
        item.addEventListener('dragend', handleDragEnd, false);
    });
});


window.onload = cutImage;