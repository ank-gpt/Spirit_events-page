var input,temp;
if(window.screen.width > 1200){
     input = document.getElementById("input");
}else{
    input = document.getElementById("input1");
    console.log("hello");
}
const a = document.getElementsByClassName("sportname")[0];
const cardtext = document.querySelectorAll(".card1 .name h1");
const cardimg = document.getElementsByClassName("sportsimg");
const clickable = document.querySelectorAll('._sport');

const find = (text)=>{
    if(input.value.length == 0 ){
        document.getElementsByClassName(`${temp}`)[0].style.color = "white";
        document.getElementsByClassName("athletics")[0].style.color = "yellow";
        cardtext[0].innerHTML = "Athletics";
        cardtext[1].innerHTML = "Athletics";
        cardimg[0].setAttribute('src',`images/athletics.jpg`);
        cardimg[1].setAttribute('src',`images/athletics.jpg`);
        a.innerHTML = "Athletics";
    }
    if(document.getElementsByClassName(`${text}`)[0] != null){
        document.getElementsByClassName("athletics")[0].style.color = "white";
        var node = document.getElementsByClassName(`${text}`)[0];
        node.style.color = "yellow";
        cardtext[0].innerHTML = node.textContent;
        cardtext[1].innerHTML = node.textContent;
        temp = node.textContent;
        cardimg[0].setAttribute('src',`images/${text}.jpg`);
        cardimg[1].setAttribute('src',`images/${text}.jpg`);
        text = node.textContent;
        a.innerHTML = node.textContent;
    }    

}
const find2 = (text)=>{
    if(document.getElementsByClassName(`${text}`)[0] != null){
        var node = document.getElementsByClassName(`${text}`)[0];
        cardtext[0].innerHTML = node.textContent;
        cardtext[1].innerHTML = node.textContent;
        temp = node.textContent;
        cardimg[0].setAttribute('src',`images/${text}.jpg`);
        cardimg[1].setAttribute('src',`images/${text}.jpg`);
        text = node.textContent;
        a.innerHTML = node.textContent;
    }    

}

input.onkeyup = ()=>{
    find(input.value);
}
