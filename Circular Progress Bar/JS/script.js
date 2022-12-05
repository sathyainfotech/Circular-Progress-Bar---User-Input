let CircularProgress = document.querySelector(".circular-progress");
let btnSubmit = document.querySelector("button");
let txtInput = document.querySelector("input");
let txtValue = document.querySelector(".value");

let count = 0;

btnSubmit.addEventListener("click",StartProgress)

function StartProgress(){
    
    if(txtInput.value<=100){

    let progress = setInterval(()=>{
        if(count < txtInput.value){
            count++;
            EndProgress()
        }else{
            count--;
            EndProgress()
        }

        function EndProgress(){
            txtValue.textContent = `${count}%`;  // 360 / 100 = 3.6
            CircularProgress.style.background = `conic-gradient(#2c3e50 ${count * 3.6}deg, #ededed 0deg)`;
            if(count == txtInput.value){
                clearInterval(progress);
            }
        }            

        },80);
    }else{
        alert("Please enter the value below 100%");
    }
}



