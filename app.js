let boxes = document.querySelectorAll('.box');
let resetBtn= document.querySelector('#reset-btn');
let newBtm = document.querySelector('#new-btn');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');

let turnO = true;
let count =0;
const winPattern = [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const disableboxes = ()=>{
    for(let box of boxes)
    {
        box.disabled = true;
    }
};
const enableboxes = ()=>{
    for(let box of boxes)
    {
        box.disabled = false;
        box.innerText = '';
    }
};

const resetGame = ()=>{
    turnO = true;
    count = 0;
    msgContainer.classList.add('hide');
    enableboxes();

};

boxes.forEach((box)=>{
    box.addEventListener('click', ()=>{
        if(turnO)
        {
            box.style.color = '#EE5622';
            box.innerText = 'O';
            turnO = false;
        } else{
            box.style.color = '#556F44';
            box.innerText = 'X';
            turnO = true;
        }
        box.disabled = true;
        count++;
        checkWinner();
    });
});

const showWinner = (winner)=>{
    msg.innerText = `Congratulations, Winner is ${winner}.`;
    msgContainer.classList.remove('hide');
    disableboxes();
};
const matchDraw = ()=>{
    msg.innerText = `Stalemate! Both players have fought valiantly to a draw.`
    msgContainer.classList.remove('hide');
    disableboxes();
}
const checkWinner = ()=>{
    for(let pattern of winPattern)
    {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if(pos1 != '' && pos2 != '' && pos3 != '')
        {
            if(pos1 === pos2 && pos2 === pos3)
            {
                showWinner(pos1);
            } else if (count == 9){
                matchDraw();
            }
        } 
    }
};
resetBtn.addEventListener('click',resetGame);
newBtm.addEventListener('click',resetGame);