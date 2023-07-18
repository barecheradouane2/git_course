
// 1-Burger 
// 2-random Image 
// 3-local storage 
// 4-grand Image
// 5-scroll bar


//toggle classlist ,

var rootStyles = document.documentElement.style;
let act=document.querySelector(".active");



if(window.localStorage.getItem("bck")){ 
    act.classList.remove("active");
   let current=document.querySelector(`.${window.localStorage.getItem("bck")}`);
   current.classList.add("active");

 rootStyles.setProperty("--bac",window.localStorage.getItem("bck"));

}


let burger = document.querySelector(" .iconss");
let theul =document.querySelector(" header nav ul");
let element = document.querySelector('header');
let staticelement = document.querySelector('.static');
let pseudo = document.querySelector('.static .pseudo');
let no =document.querySelector(".back .no");
let yes =document.querySelector(".back span");



burger.onclick=function(){
    if(theul.style.display=="block" ){
        theul.style.display="none";
        element.classList.remove("show-chevron");

    }else{
        theul.style.display="block";
        element.classList.add("show-chevron");

    }
   
}

pseudo.onclick=function(){
    
    

    if(staticelement.style.marginLeft =='0px'){
      
        staticelement.style.marginLeft = '-170px';


    }else{
        staticelement.style.marginLeft = '0px';
       
    }
   
}

let Imags= [ "url('E:/frontend project/imgs/01.jpg')","url('E:/frontend project/imgs/02.jpg')","url('E:/frontend project/imgs/03.jpg')","url('E:/frontend project/imgs/04.jpg')","url('E:/frontend project/imgs/05.jpg')"];
let bod=document.querySelector(".body");


function myFunction() {
    var randomNumber = Math.floor(Math.random() * 5);
   bod.style.backgroundImage=Imags[randomNumber]

  }
  
  // Execute myFunction every 1 second (1000 milliseconds)
  var intervalID =setInterval(myFunction, 4000);

  if(window.localStorage.getItem("random")){
    no.classList.remove("no");
    yes.classList.add("no"); 
    clearInterval(intervalID);   
   }



  window.localStorage.setItem("color","red");

  
  let lcolors=document.querySelectorAll('.color span');

  lcolors.forEach(ele => {

    ele.addEventListener("click", (e)=>{
         act=document.querySelector(".active");
        if(act!=undefined){
            act.classList.remove("active");}
        e.currentTarget.classList.add("active");
      window.localStorage.setItem("bck",e.currentTarget.dataset.color);
      

     
      rootStyles.setProperty("--bac",e.currentTarget.dataset.color);



      });
    
  });



no.onclick=function(){
    console.log("it works");
    no.classList.remove("no");
    yes.classList.add("no");
    window.localStorage.setItem("random",'no');

    clearInterval(intervalID);
}

yes.onclick=function(){
    clearInterval(intervalID);
    yes.classList.remove("no");
    no.classList.add("no");
    window.localStorage.removeItem("random");
    intervalID =setInterval(myFunction, 4000);
}

let reset= document.querySelector(".reset");


reset.onclick=function(){
window.localStorage.clear();
location.reload();

}

let skill=document.querySelectorAll(".bar");

window.scrollTo({
    behavior:"smooth"
})
window.onscroll=function(){

    if(window.scrollY>900){
        skill.forEach((ele)=>{
            // console.log(ele.dataset.skill)
            ele.children[0].style.width=`${ele.dataset.skill}%`
           
        })

    }
}

let page= document.querySelectorAll(".thepags div");
let box=document.querySelector(".boxele");

page.forEach((ele)=>{
    ele.addEventListener("click",(e)=>{

        let card =document.createElement("div");
        card.classList.add('card');
        let span=document.createElement("span");
        let x=document.createTextNode("X");
        span.appendChild(x);


        

        let p = document.createElement("h3");

        let text=document.createTextNode(`Image ${e.currentTarget.dataset.img}`);

        p.appendChild(text);

        

        let div=document.createElement("div");
        let img=document.createElement("img");
        
        img.src=e.currentTarget.children[0].src;
        div.appendChild(img);

       
        
        card.appendChild(span);
        card.appendChild(p);
        card.appendChild(div);
        document.body.appendChild(card);
       

        box=document.querySelector(".boxele");
       box.style.display="block";
      
        exit();

    })
})

function exit(){
    let exitspan=document.querySelector(".card span");
    let man=document.querySelector(".card");

    exitspan.onclick=function(){
        man.remove();
      
       box.style.display="none";
    }
}

