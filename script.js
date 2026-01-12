const dice =document.querySelector(".dice");
const rollnum =document.querySelector("#rollnum");
const rolbtn =document.querySelector("#rolbtn");

function rollbtn(){
    dice.classList.add("rolling");
    rolbtn.innerHTML ='Rolling...';
    setTimeout(() => {
        let randomNum =Math.floor(Math.random() * 6) + 1;
        console.log(randomNum);
        dice.classList.remove("rolling");
        dice.className = 'dice';
       dice.classList.add(`face-${randomNum}`);
        rollnum.innerHTML =`You rolled ${randomNum} time`;
        
        rolbtn.innerHTML ='Roll Dice';
    }, 1000);
}
