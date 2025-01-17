let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".reset");
let newgame=document.querySelector(".newbtn");
let mgscontainer=document.querySelector(".mgs-container");
let mgs=document.querySelector("#mgs");

let turnO=true;
const winPattern=[
                [0,1,2],
                [0,3,6],
                [0,4,8],
                [1,4,7],
                [2,5,8],
                [2,4,6],
                [3,4,5],
                [6,7,8],
];

const resetGame=()=>
    {
        turnO=true;
        enableBoxes();
        mgscontainer.classList.add("hide");
    };

boxes.forEach((box) =>{

    box.addEventListener("click", ()=>{

        
        if(turnO)
            {
                box.innerText="O";
                turnO=false;
            }

        else{
            box.innerText="X";
            turnO=true;
        }

        box.disabled=true;
        checkWinner();
    });
});

const diableBoxes=()=>
    {
        for(let box of boxes)
            {
                box.disabled=true;
            }
    };


    const enableBoxes=()=>
        {
            for(let box of boxes)
                {
                    box.disabled=false;
                    box.innerText="";
                }
        };
const showWinner=(winner)=>{
    mgs.innerText=`Congratulation ,Winner is ${winner}`;
    mgscontainer.classList.remove("hide");
    diableBoxes();
};
const checkWinner=()=>{
for(let pattern of winPattern)
    {
    // console.log(pattern[0],pattern[1],pattern[2]);
    // console.log(
    //     boxes[pattern[0]].innerText,
    //     boxes[pattern[1]].innerText,
    //     boxes[pattern[2]].innerText
    // );

    let pos0val= boxes[pattern[0]].innerText;
    let pos1val= boxes[pattern[1]].innerText;
    let pos2val= boxes[pattern[2]].innerText;

    if(pos0val !=""&& pos1val !="" && pos2val!="")
        {
            if(pos0val=== pos1val && pos1val===pos2val)
                {
                    
                    showWinner(pos0val);

                }
        }

    }

    newgame.addEventListener("click",resetGame);
    resetbtn.addEventListener("click",resetGame);

}