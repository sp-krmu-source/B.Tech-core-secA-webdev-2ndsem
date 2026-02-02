// id traversal
const heading = document.getElementById("myHeading");
console.log(heading);

heading.textContent="Hello India!";
heading.style.color="tomato";
heading.style.backgroundColor="yellow";

// class traversal
const para = document.getElementsByClassName("para");
console.log(para);

for(let i=0;i<para.length;i++){
    para[i].style.backgroundColor="cyan";
}

// queryselector

const qs =document.querySelector("#content p")
console.log(qs);
qs.textContent="lorem djkabn. j d. eqjo. e j";

