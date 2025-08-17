
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


const cat1 = document.querySelector('.cat1')
const pannel1 = document.querySelector('.pannel')
cat1.addEventListener('mouseenter' ,()=>{
  pannel1.classList.add('show')
  pannel1.classList.add('z-3') 
});


cat1.addEventListener('mouseleave' , ()=>{
  setTimeout(()=>{
        if(!cat1.matches(':hover')&&!pannel1.matches(':hover')){
          pannel1.classList.remove('show')
           pannel1.classList.remove('z-3') 
        }
  } , 50);
});

pannel1.addEventListener('mouseleave' , ()=>{
  setTimeout(()=>{
        if(!cat1.matches(':hover')&&!pannel1.matches(':hover')){
          pannel1.classList.remove('show')
          pannel1.classList.remove('z-3') 
        }
  } , 50);
});



const cat2 = document.querySelector('.cat2')
const pannel2 = document.querySelector('.pannel2')
cat2.addEventListener('mouseenter' ,()=>{
  pannel2.classList.add('show')
  pannel2.classList.add('z-3') 
});


cat2.addEventListener('mouseleave' , ()=>{
  setTimeout(()=>{
        if(!cat2.matches(':hover')&&!pannel2.matches(':hover')){
          pannel2.classList.remove('show')
           pannel2.classList.remove('z-3') 
        }
  } , 50);
});

pannel2.addEventListener('mouseleave' , ()=>{
  setTimeout(()=>{
        if(!cat2.matches(':hover')&&!pannel2.matches(':hover')){
          pannel2.classList.remove('show')
          pannel2.classList.remove('z-3') 
        }
  } , 50);
});






 let remining ;
const end = new Date().getTime()+24 * 60 * 60 * 1000;


const hours = document.querySelector('.hours')
const minutes = document.querySelector('.minuts')
const seconds = document.querySelector('.seconds')


function updatecounter(){
  const now =  new Date().getTime();
   remining = end - now;

   if(remining <0)
   {
    remining = 0;
   }

   let chours = Math.floor(remining / (1000 * 60 * 60))
   let cminuts = Math.floor((remining % (1000 * 60 * 60)) /(1000 * 60))
   let csecs = Math.floor((remining % (1000 * 60 )) /(1000))

   
  hours.textContent = String(chours).padStart(2 ,'0')
  minutes.textContent = String(cminuts).padStart(2 ,'0')
  seconds.textContent = String(csecs).padStart(2 ,'0')


if(remining <= 0)
{
  clearInterval(interval);
}

}

updatecounter();
const interval = setInterval(updatecounter , 1000)


const account = document.querySelector('.login')
  const form = document.querySelector('.form')
  const background = document.querySelector('#backsearch')
account.addEventListener('click',(e)=>{
  e.preventDefault()

  form.classList.remove('d-none')
  form.classList.add('z-100000')
   form.classList.add('position-fixed')
  background.classList.remove('d-none')
  background.classList.add('z-3')
 

})

const logincansel = document.querySelector('.logcansel')

logincansel.addEventListener('click',()=>{
    form.classList.remove('z-100000')
    form.classList.add('d-none')
     background.classList.add('d-none')
      background.classList.remove('z-3')
})


 