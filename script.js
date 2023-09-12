let number=Math.floor(Math.random() * 100);
let i=1;
let win=0;
while(i<=5){
    let guess=prompt("enter your guess");
    if(guess==number){
        win=1;
        break;
    }
    else{
        console.log("Try again");
      
        let rand=Math.floor(Math.random() * 10+2);
        let div=number%rand;
            if(div==0){
                console.log("HINT:its divisible by",rand);
            }
            else{
                console.log("HINT:its not divisible by",rand);
            }
  
        
    }
    i=i+1;
}

(win==1)?console.log("you guessed it right,it was",number):console.log("out of guesses :( ,it was",number)