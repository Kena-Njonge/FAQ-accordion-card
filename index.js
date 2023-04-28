var answer = document.getElementsByClassName("answer");
var question = document.getElementsByClassName("question");

question[0].style.borderTop = "none";
answer[0].style.borderTop = "none";

for(var i=0; i < 5; i++){
    answer[i].style.display = "none";
}
function dropdown(number){
    console.log("0");
    if(question[number].style.display == "none"){
        question[number].style.display = "block";
        answer[number].style.display = "none";
    }
    else{
        for(var j=0;j<5;j++){
            if(j!=number && answer[j].style.display =="block")
            {
                answer[j].style.display = "none";
                question[j].style.display = "block";
            }
        }
        question[number].style.display = "none";
        answer[number].style.display = "block";
    }
}