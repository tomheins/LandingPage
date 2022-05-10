

/**-------------Section4--------------------*/

const section3=document.querySelector('#section3');

const section4=document.createElement('Section');

section4.setAttribute('id','section4');
section4.setAttribute('data-nav','Section 4');

const div4=document.createElement('div');

div4.setAttribute('class','landing__container');

const heading4= document.createElement('h2');

heading4.textContent="Section4";

const paragraph4= document.createElement('p');

paragraph4.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod";

div4.appendChild(heading4);
heading4.insertAdjacentElement('afterend',paragraph4);
section4.appendChild(div4);

section3.insertAdjacentElement('afterend',section4);


/**-------------Filling the ul--------------------*/

/**-------------Logo--------------------*/

const ul=document.querySelector('.navbar__list');

const logo= document.createElement('div');

logo.setAttribute('class','logo');

const landingpageheading= document.createElement('h4');

landingpageheading.textContent="landing page";

logo.appendChild(landingpageheading);

ul.insertAdjacentElement('beforebegin',logo);


/**-------------dynamic creation of sections--------------------*/


const sections=document.querySelectorAll('Section');


for(let i=1;i<sections.length+1;i++){


  let sectionclass= document.createElement('li');

  sectionclass.setAttribute('class','section' + i );


  let asectionclass= document.createElement('a');


  asectionclass.textContent="Section" + i ;

  sectionclass.appendChild(asectionclass);

  ul.appendChild(sectionclass);

  let sectionid= document.querySelector('#section'+ i);


/**-------------scroll into section when clicked on navbar--------------------*/


   sectionclass.addEventListener('click',function(){

   sectionid.scrollIntoView();

   const lisection = document.querySelectorAll(".jesus");

   lisection.forEach(element => {

   element.classList.remove("jesus");

   });
   sectionclass.classList.add("jesus");

    });

}

/**-------------change to active class when in view--------------------*/




window.addEventListener("scroll",()=> {


      sections.forEach(element => {

        const sectionTop = element.offsetTop ;


        if(pageYOffset >= sectionTop){

         const lisection = document.querySelectorAll(".active");

         lisection.forEach(element => {

         element.classList.remove("active");

         });

         element.classList.add("active");

        }


          });

        });


/**-------------sidestripe--------------------*/


const sidestripe1=document.createElement('div');

sidestripe1.setAttribute('class', 'sidestripe');

const line1=document.createElement('div');

line1.setAttribute('class',line1);

const line2=document.createElement('div');

line2.setAttribute('class',line2);

const line3=document.createElement('div');

line3.setAttribute('class',line3);

sidestripe1.appendChild(line1);
line1.insertAdjacentElement('afterend',line2);
line2.insertAdjacentElement('afterend',line3);

ul.insertAdjacentElement('afterend',sidestripe1);



/**-------------slide function for mobile use--------------------*/


 function navbarslide (){

  const navbar=document.querySelector('.navbar__list');

  const sidestripe=document.querySelector('.sidestripe');

  sidestripe.addEventListener('click',function(){

    navbar.classList.toggle('navbar__list-active');

  });}


navbarslide();
