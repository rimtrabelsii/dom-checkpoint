
//btn like 
let heart = document.getElementsByClassName('like')
for (let i = 0; i < heart.length; i++) {
    let like = heart[i];
    like.addEventListener('click', function() {
       var el=like.firstElementChild;
       if (el.style.color == 'black'){
        el.style.color='red';
    }
    else {el.style.color='black';}
        
    
    })}
//btn plus
let btnplus = document.getElementsByClassName("plus-btn");
for(i=0;i<btnplus.length;i++){
    let plus=btnplus[i];
    plus.addEventListener("click",function(){plus.previousElementSibling.value++;
    total();
    total1();
    total2();
    total3();
}  )
   }
//btnmoins
let btnmoins = document.getElementsByClassName("minus-btn");
for(i=0;i<btnmoins.length;i++){
    let  moins=btnmoins[i];
    moins.addEventListener("click",function()
    { if(moins.nextElementSibling.value>1){moins.nextElementSibling.value--;
        total();
        total1(); 
        total2();
        total3();}
     }  ) 
}
//btn remove
    let delets=document.getElementsByClassName("delete");
    for(let i=0;i<delets.length;i++ ){
        let del=delets[i];
    del.addEventListener("click",function(){
        del.parentElement.remove();
        total();
        total1();
        total2();
        total3();
    })
    } 

//total 
let items=document.getElementsByClassName("Item");
let finalprice=document.getElementById("finalPrice");
function total(){
    let s=0;
   for (let i=0;i<items.length;i++)
   {let item=items[i];
s=s+item.querySelector(".Quant").value*item.querySelector(".price").innerText;
}
return(finalprice.value=s); 
}

// total1
function total1(){
let q1=document.getElementById("q1");
let p1=document.getElementById("p1");
p1.innerText=q1.value*1379;
}
// total2
function total2(){
    let q2=document.getElementById("q2");
    let p2=document.getElementById("p2");
    p2.innerText=q2.value*176;
    }
    // total3
function total3(){
    let q3=document.getElementById("q3");
    let p3=document.getElementById("p3");
    p3.innerText=q3.value*249;
    }


