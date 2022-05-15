function checkForm(el){

    var yes = 0;
    var count = 0;
    var block;
    var line;
    var answers = document.getElementById('answers');
    var windowBackground = document.getElementById('windowBackground');
    var windowMain = document.getElementById('windowMain');
    var text = document.getElementById('text');
    var question1 = el.question1.value;
    block = document.getElementById('block1');
    line = document.getElementById('answer1');
    if (counter(question1) == 0){
        block.style.border = "1px solid red";
        block.style.boxShadow = "0px 0px 6px red";
    }
    else{
        block.style.border = "0px solid red";
        block.style.boxShadow = "0px 0px 0px red";
    }
    if (add(question1) == 1){
        line.style.border = "2px solid green";
    }
    else{
        line.style.border = "2px solid red"; 
    }
    yes += add(question1);
    count += counter(question1);
    var question2 = el.question2.value;
    block = document.getElementById('block2');
    line = document.getElementById('answer2');
    if (counter(question2) == 0){
        block.style.border = "1px solid red";
        block.style.boxShadow = "0px 0px 6px red";
    }
    else{
        block.style.border = "0px solid red";
        block.style.boxShadow = "0px 0px 0px red";
    }
    if (add(question2) == 1){
        line.style.border = "2px solid green";
    }
    else{
        line.style.border = "2px solid red"; 
    }
    yes += add(question2);
    count += counter(question2);
    var question3 = el.question3.value;
    block = document.getElementById('block3');
    line = document.getElementById('answer3');
    if (counter(question3) == 0){
        block.style.border = "1px solid red";
        block.style.boxShadow = "0px 0px 6px red";
    }
    else{
        block.style.border = "0px solid red";
        block.style.boxShadow = "0px 0px 0px red";
    }
    if (add(question3) == 1){
        line.style.border = "2px solid green";
    }
    else{
        line.style.border = "2px solid red"; 
    }
    yes += add(question3);
    count += counter(question3);
    var question4 = el.question4.value;
    block = document.getElementById('block4');
    line = document.getElementById('answer4');
    if (counter(question4) == 0){
        block.style.border = "1px solid red";
        block.style.boxShadow = "0px 0px 6px red";
    }
    else{
        block.style.border = "0px solid red";
        block.style.boxShadow = "0px 0px 0px red";
    }
    if (add(question4) == 1){
        line.style.border = "2px solid green";
    }
    else{
        line.style.border = "2px solid red"; 
    }
    yes += add(question4);
    count += counter(question4);
    var question5 = el.question5.value;
    block = document.getElementById('block5');
    line = document.getElementById('answer5');
    if (counter(question5) == 0){
        block.style.border = "1px solid red";
        block.style.boxShadow = "0px 0px 6px red";
    }
    else{
        block.style.border = "0px solid red";
        block.style.boxShadow = "0px 0px 0px red";
    }
    if (add(question5) == 1){
        line.style.border = "2px solid green";
    }
    else{
        line.style.border = "2px solid red"; 
    }
    yes += add(question5);
    count += counter(question5);
    var question6 = el.question6.value;
    block = document.getElementById('block6');
    line = document.getElementById('answer6');
    if (counter(question6) == 0){
        block.style.border = "1px solid red";
        block.style.boxShadow = "0px 0px 6px red";
    }
    else{
        block.style.border = "0px solid red";
        block.style.boxShadow = "0px 0px 0px red";
    }
    if (add(question6) == 1){
        line.style.border = "2px solid green";
    }
    else{
        line.style.border = "2px solid red"; 
    }
    yes += add(question6);
    count += counter(question6);
    var question7 = el.question7.value;
    block = document.getElementById('block7');
    line = document.getElementById('answer7');
    if (counter(question7) == 0){
        block.style.border = "1px solid red";
        block.style.boxShadow = "0px 0px 6px red";
    }
    else{
        block.style.border = "0px solid red";
        block.style.boxShadow = "0px 0px 0px red";
    }
    if (add(question7) == 1){
        line.style.border = "2px solid green";
    }
    else{
        line.style.border = "2px solid red"; 
    }
    yes += add(question7);
    count += counter(question7);
    var question8 = el.question8.value;
    block = document.getElementById('block8');
    line = document.getElementById('answer8');
    if (counter(question8) == 0){
        block.style.border = "1px solid red";
        block.style.boxShadow = "0px 0px 6px red";
    }
    else{
        block.style.border = "0px solid red";
        block.style.boxShadow = "0px 0px 0px red";
    }
    if (add(question8) == 1){
        line.style.border = "2px solid green";
    }
    else{
        line.style.border = "2px solid red"; 
    }
    yes += add(question8);
    count += counter(question8);
    var question9 = el.question9.value;
    block = document.getElementById('block9');
    line = document.getElementById('answer9');
    if (counter(question9) == 0){
        block.style.border = "1px solid red";
        block.style.boxShadow = "0px 0px 6px red";
    }
    else{
        block.style.border = "0px solid red";
        block.style.boxShadow = "0px 0px 0px red";
    }
    if (add(question9) == 1){
        line.style.border = "2px solid green";
    }
    else{
        line.style.border = "2px solid red"; 
    }
    yes += add(question9);
    count += counter(question9);
    var question10 = el.question10.value;
    block = document.getElementById('block10');
    line = document.getElementById('answer10');
    if (counter(question10) == 0){
        block.style.border = "1px solid red";
        block.style.boxShadow = "0px 0px 6px red";
    }
    else{
        block.style.border = "0px solid red";
        block.style.boxShadow = "0px 0px 0px red";
    }
    if (add(question10) == 1){
        line.style.border = "2px solid green";
    }
    else{
        line.style.border = "2px solid red"; 
    }
    yes += add(question10);
    count += counter(question10);
    if (count == 10){
        windowMain.style.display = "flex";
        windowMain.style.border = "2px solid green";
        windowBackground.style.display = "flex";
        answers.style.display = "flex";
        text.innerHTML = "Вы ответили правильно на "+yes+"/10 вопросов";

    }
    else{
        windowMain.style.display = "flex";
        windowMain.style.border = "2px solid red";
        windowBackground.style.display = "flex";
        answers.style.display = "none";
        text.innerHTML = "Вы ответили не на все вопросы";
    }

    return false;
}

function counter(x){
    if ((x == 1) || (x == 2)){
        return 1;
    }else{
        return 0;
    }
}

function add(x){
    if (x == 1){
        return 1;
    }
    else{
        return 0;
    }
}

function onClick(){
    var x = document.getElementById('windowMain');
    var z = document.getElementById('windowBackground');
    x.style.display = "none";
    z.style.display = "none";
}