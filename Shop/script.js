
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

/* onsale filter*/ 
const checkbox = document.querySelector('.checkbx')
checkbox.addEventListener('change',()=>{
  const cards = document.querySelectorAll('.card')
  if(checkbox.checked)
  {
    cards.forEach(card=>{
      if(!card.querySelector('.dis'))
      card.style.display = 'none';
    })
  }
  else
  {
    cards.forEach(card=>{
      card.style.display = '';
    })

  }
})

function addnewelement(parent ,newel ,txtcontent,classlst)
{
 const newelement = document.createElement(newel) 
 newelement.textContent = txtcontent
 newelement.className = classlst

 parent.appendChild(newelement)
 return newelement;
}


function addselctor(colorname)
{
const selectordiv = document.querySelector('.selectedcolors')
const btn = addnewelement(selectordiv , 'a' ,colorname ,'text-decoration-none  py-1 px-3 my-2 me-2 rounded fs-15 text-white bg-black')
addnewelement(btn ,'a' , ' x' , ' text-decoration-none  cansel text-white hred')
const cansel = document.querySelector('.cansel')

cansel.addEventListener('click',(e)=>{
     e.stopPropagation();
     btn.remove()
    const cards = document.querySelectorAll('.card')
    cards.forEach(card=>{
     card.style.display = ''
  });
   const s = document.querySelector('.titl')
  s.classList.add('d-none')
})
}
/* color filter*/
const options = document.querySelectorAll('.colrs li')

options.forEach(option=>{
  option.addEventListener('click' , (e)=>{
    e.preventDefault()
  const container = option.querySelector('div');
  const selected =  container.getAttribute('title') || ''
  const s = document.querySelector('.titl')
  s.classList.remove('d-none')
    addselctor(selected);
  const cards = document.querySelectorAll('.card')
  cards.forEach(card=>{
    const color =  card.getAttribute('title') || ''
    if(color.includes(selected))
    {
       card.style.display = '';
    }
    else
    {
      card.style.display = 'none';
    }
  })
  })
})



const dorpdown = document.querySelector('.selector')
const menue = document.querySelector('.items')

dorpdown.addEventListener('mouseover' ,()=>{
  menue.classList.remove('d-none')
})

dorpdown.addEventListener('mouseleave', ()=>{
    setTimeout(()=>{
if(!dorpdown.matches(':hover')&& !menue.matches(':hover'))
{
    menue.classList.add('d-none')
}},50)
})

const cardss = Array.from(document.querySelectorAll('.card'))

const links = menue.querySelectorAll('a')
const selected = document.querySelector('.sorttext')
links.forEach(link=>{
  link.addEventListener('click' ,()=>{
    links.forEach(l=>l.classList.remove('active'))
    link.classList.add('active')
    selected.textContent = link.textContent;
   const type = link.dataset.sort;
   const container = document.querySelector('.cards')
   if(type==='priceltoh')
   {
    cardss.sort((a,b)=>{
      return a.dataset.price - b.dataset.price;
    })
   }
   else if(type ==='pricehtol')
   {
    cardss.sort((a,b)=>{return b.dataset.price - a.dataset.price})
   }
     else if(type ==='pricehtol')
   {
    cardss.sort((a,b)=>{return b.dataset.price - a.dataset.price})
   }




   container.innerHTML ="";

   cardss.forEach(card=>{
    container.appendChild(card)
   })

    menue.classList.add('d-none')
  })
})