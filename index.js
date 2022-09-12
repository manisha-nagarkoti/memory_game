let counter =0;
let firstselection ="";
let secondselection ="";
let moves=0;
let page=0;

const cards = document.querySelectorAll(".cards .card");
cards.forEach((card) =>{
    card.addEventListener("click",() =>{
           moves++;
           document.getElementById("move").innerHTML=moves;
           card.classList.add("clicked");
           console.log("clicked");
           if(counter === 0){
            firstselection = card.getAttribute("animal");
            console.log(firstselection);
            counter++;
            console.log(counter);
           }
           else{
            secondselection = card.getAttribute("animal");
            console.log(secondselection);
            counter=0;
            if(firstselection === secondselection){
                const correctCards = document.querySelectorAll(
                 " .card[animal='"+firstselection+"'] "
                );
                console.log(correctCards[0]);
                correctCards[0].classList.add("checked");
                correctCards[0].classList.remove("clicked");
                correctCards[1].classList.add("checked");
                correctCards[1].classList.remove("clicked");
            }  
            else{
                const incorrectcards = document.querySelectorAll(".card.clicked");

                incorrectcards[0].classList.add("shake");
                incorrectcards[1].classList.add("shake");
                setTimeout(()=>{
                    incorrectcards[0].classList.remove("shake");
                    incorrectcards[1].classList.remove("shake");
                    incorrectcards[0].classList.remove("clicked");
                    incorrectcards[1].classList.remove("clicked");
                },800);
                
            }         
           }
    });
});
