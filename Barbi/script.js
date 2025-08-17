let quanty = 1

function increase(){
    quanty++
     document.getElementById("q").innerText = quanty
}


function decrease(){
    quanty--
   document.getElementById("q").innerText = quanty
}


 let btn = document.querySelector("#btnserch")
 let searcharea = document.querySelector("searchdiv")

 let box = document.querySelector("#box")
 btn.addEventListener("click", function (){
       box.classList.remove("d-none");
       backsearch.classList.remove("d-none");

       
 })



 btn.addEventListener("blur",()=>{
    setTimeout(() => {
        box.classList.add("d-none")
        backsearch.classList.add("d-none");
    });
 })

window.addEventListener("scroll" , function(){
   const navf = document.querySelector("#snav")
   if(window.scrollY >450)
   {
      navf.classList.add("position-fixed")
      navf.classList.add("z-10")
      navf.classList.add("shadow")
   }
   else{
      navf.classList.remove("position-fixed")
       navf.classList.remove("z-10")
      navf.classList.remove("shadow")
   }
})


const element = document.querySelector('.element')

const wraper = document.querySelector('.object-wraper')

element.addEventListener('mouseenter' ,()=>{
  wraper.classList.add('show') 
  wraper.classList.add('z-3') 

});




  element.addEventListener("mouseleave", () => {
    setTimeout(() => {
      if (!element.matches(':hover') && !wraper.matches(':hover')) {
        wraper.classList.remove("show");
        wraper.classList.remove('z-3') 
       
      }
    }, 50);
  });

   wraper.addEventListener("mouseleave", () => {
    setTimeout(() => {
      if (!element.matches(':hover') && !wraper.matches(':hover')) {
        wraper.classList.remove("show");
         wraper.classList.remove('z-3') 

      }
    }, 50);
  });


const cat = document.querySelector('.cat')
const pannel = document.querySelector('.pannel')
cat.addEventListener('mouseenter' ,()=>{
  pannel.classList.add('show')
});


cat.addEventListener('mouseleave' , ()=>{
  setTimeout(()=>{
        if(!cat.matches('hover')&&!pannel.matches(':hover')){
          pannel.classList.remove('show')
        }
  } , 50);
});

pannel.addEventListener('mouseleave' , ()=>{
  setTimeout(()=>{
        if(!cat.matches('hover')&&!pannel.matches(':hover')){
          pannel.classList.remove('show')
        }
  } , 50);
});






 const zoomContainer = document.querySelector(".zoomimg");
const img = zoomContainer.querySelector("img");

zoomContainer.addEventListener("mousemove", (e) => {
  const rect = zoomContainer.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;
  
  img.style.transformOrigin = `${x}% ${y}%`;
  img.style.transform = "scale(1.7)"; // zoom level
});

zoomContainer.addEventListener("mouseleave", () => {
  img.style.transform = "scale(1)";
  img.style.transformOrigin = "center";
});


 const zoomContainer2 = document.querySelector(".zoomimg2");
const img2 = zoomContainer2.querySelector("img");

zoomContainer2.addEventListener("mousemove", (e) => {
  const rect = zoomContainer2.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;
  
  img2.style.transformOrigin = `${x}% ${y}%`;
  img2.style.transform = "scale(1.7)"; // zoom level
});

zoomContainer2.addEventListener("mouseleave", () => {
  img2.style.transform = "scale(1)";
  img2.style.transformOrigin = "center";
});


const stars = document.querySelectorAll('.stars .star')
let rating = 0;
stars.forEach(star =>{
star.addEventListener('mouseover',()=>{
  const value = parseInt(star.getAttribute("data-value"))
  stars.forEach(s=>{
    if(parseInt(s.getAttribute("data-value")) <= value)
    {
      s.innerHTML = "&#9733;";
    }
    else{
       s.innerHTML = "&#9734;";
    }
    
  });
} );



  star.addEventListener('click',()=>{
  const value = parseInt(star.getAttribute("data-value"))
  rating = value;
  stars.forEach(s=>{
    if(parseInt(s.getAttribute("data-value")) <= value)
    {
      s.innerHTML = "&#9733;";
    }
    
  });


});
});

const form = document.querySelector('#form')

form.addEventListener('submit' , (e)=>{
  if(rating === 0) 
  {
    e.preventDefault();
    alert('please select rating');
  }
  const name = form.elements['username'];
  if(name.value.trim() === "") 
  {
    e.preventDefault();
    alert('Please enter your name');
  }
const email = form.elements['email'];
    if(email.value.trim() === "") 
  {
    e.preventDefault();
    alert('Please enter your email');
  }
const message = form.elements["mesage"];
    if(message.value.trim() === "") 
  {
    e.preventDefault();
    alert('Please enter your commint');
  }


});


