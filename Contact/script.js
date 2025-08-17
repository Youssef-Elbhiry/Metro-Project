
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




