console.log("hello")
function computerfunc(){
    let option=["rock","paper","scissor"]
    let computer=Math.floor(Math.random()*option.length)
    // console.log(computer)
    return computer
    
}
// function score(){
//     score=score+1
// }
// console.log(sdfas)
const message=document.querySelector(".message")
const gameover=document.querySelector(".gameover")
const rockbtn=document.querySelector(".rock")
const paperbtn=document.querySelector(".paper")
const scissorbtn=document.querySelector(".scissor")
const computerscore=document.querySelector(".computerscore")
const userscore=document.querySelector(".userscore")
const computerchoose=document.querySelector(".computerchoose")
const userchoose=document.querySelector(".userchoose")

let scorec=0
let scoreu=0
rockbtn.addEventListener("click",()=>{
    let sdfas=computerfunc()
    userchoose.innerHTML=`<img src="./images/rock.png" alt="" srcset="" height="150px" width="350px">`
    if(sdfas==0){
        message.textContent="You and computer choosed same!"
        computerchoose.innerHTML=`<img src="./images/rock.png" alt="" srcset="" height="150px" width="350px">`
    }
    else if(sdfas==1){
        message.textContent="Paper throws rock!"
        computerchoose.innerHTML=`<img src="./images/paper.png" alt="" srcset="" height="150px" width="350px">`
        scorec=scorec+1
        if(scorec==10){
            message.textContent="LOST"
            setTimeout(() => {
                gameover.innerHTML="GAME OVER"
            }, 1000);
            scorec=0
            scoreu=0
        }
    }
    else{
        message.textContent="Rock smashesh scissor!"
        computerchoose.innerHTML=`<img src="./images/scissor.png" alt="" srcset="" height="150px" width="350px">`
        scoreu=scoreu+1
        if(scoreu==10){
            message.textContent="WON"
            setTimeout(() => {
                gameover.innerHTML="GAME OVER"
            }, 1000);
            scoreu=0
            scorec=0
        }
    }
        computerscore.innerHTML=scorec
        userscore.innerHTML=scoreu
})
paperbtn.addEventListener("click",()=>{
    let sdfas=computerfunc()
    userchoose.innerHTML=`<img src="./images/paper.png" alt="" srcset="" height="150px" width="350px">`
    if(sdfas==0){
        message.textContent="Paper throws rock!"
        computerchoose.innerHTML=`<img src="./images/rock.png" alt="" srcset="" height="150px" width="350px">`
        scoreu=scoreu+1
        if(scoreu==10){
            message.textContent="WON"
            setTimeout(() => {
                gameover.innerHTML="GAME OVER"
            }, 1000);
            scoreu=0
            scorec=0
        }
    }
    else if(sdfas==1){
        computerchoose.innerHTML=`<img src="./images/paper.png" alt="" srcset="" height="150px" width="350px">`
        message.textContent="You and computer choosed same!"
    }
    else{
        message.textContent="Scissor cuts paper!"
        computerchoose.innerHTML=`<img src="./images/scissor.png" alt="" srcset="" height="150px" width="350px">`
        scorec=scorec+1
        if(scorec==10){
            message.textContent="LOST"
            setTimeout(() => {
                gameover.innerHTML="GAME OVER"
            }, 1000);
            scorec=0
            scoreu=0
        }
    }
        computerscore.innerHTML=scorec
        userscore.innerHTML=scoreu
})
scissorbtn.addEventListener("click",()=>{
    let sdfas=computerfunc()
    userchoose.innerHTML=`<img src="./images/scissor.png" alt="" srcset="" height="150px" width="350px">`
    if(sdfas==0){
        message.textContent="Rock smashesh scissor!"
        computerchoose.innerHTML=`<img src="./images/rock.png" alt="" srcset="" height="150px" width="350px">`
        scorec=scorec+1
        if(scorec==10){
            message.textContent="LOST"
            setTimeout(() => {
                gameover.innerHTML="GAME OVER"
            }, 1000);
            scorec=0
            scoreu=0
        }
    }
    else if(sdfas==1){
        message.textContent="Scissor cuts paper!"
        computerchoose.innerHTML=`<img src="./images/paper.png" alt="" srcset="" height="150px" width="350px">`
        scoreu=scoreu+1
        if(scoreu==10){
            message.textContent="WON"
            setTimeout(() => {
                gameover.innerHTML="GAME OVER"
            }, 1000);
            scoreu=0
            scorec=0
        }
    }
    else{
        message.textContent="You and computer choosed same!"
        computerchoose.innerHTML=`<img src="./images/scissor.png" alt="" srcset="" height="150px" width="350px">`
    }
        computerscore.innerHTML=scorec
        userscore.innerHTML=scoreu
})
