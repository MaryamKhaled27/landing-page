/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 *first global for building nav-bar
 *second for all sections 
 *third for make active state
*/
//all sections
const mysections= document.querySelectorAll('section');
//make list of sections
const unorderList = document.getElementById('navbar__list');
//make fragment element for one repaint & reflow
const fragment = document.createDocumentFragment() 
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
// build the nav

// Build menu 
for(let section of mysections) {
  let sectionName = section.getAttribute('data-nav'),//create sectionName

  textLink=document.createTextNode('text'),//create textNode

  sectionLink = document.createElement('a'),//create new link

   navList = document.createElement('li');//create new list

   sectionLink.addEventListener('click',()=>{
     section.scrollIntoView({behavior:'smooth'})
   })
   sectionLink.classList.add('menu__link');
   textLink.textContent=sectionName;
   sectionLink.appendChild(textLink)//appendtextnode to sectionlink

   navList.appendChild(sectionLink)//append section link to nav list

   fragment.appendChild(navList);//append navlist to fragment element
   
   unorderList.appendChild( navList );//append navlist to unordered list
   
  }
unorderList.appendChild( fragment );//append fragment to unordered list to reduce more repaint &reflow the loop






/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// Add class 'active' to section when near top of viewport
// Set sections as active
window.addEventListener('scroll',active_sec);
 function active_sec(){
  let arrayActive=[];
  mysections.forEach( (sec) => {
      if (sec.classList.contains('your-active-class')) {
        sec.classList.remove('your-active-class');//remove active class from active section
      }
      const sections = document.getElementById('section');
      const rect = sec.getBoundingClientRect()
      if (rect.top >= 0 && rect.top<=200) {    // Add class 'active' to section when near top of viewport
        arrayActive.push(sec);
        if (arrayActive[0].getAttribute('data-nav')){
          sec.classList.add('your-active-class');
        }
        const links = document.querySelectorAll('a')//create link for each item in the navbar
           
          links.forEach(link => {
        if (sec.getAttribute('data-nav')==link.textContent) {
          link.classList.add('active-link');//adding active class to the active link
          link.style.background="yellow"; //adding style color to an activelink
        } else{
          link.style.backgroundColor='transparent';  //removing style from an activelink during inactivelink
          link.classList.remove('active-link');
        }
      });
    }
  });
}
      








/**
 * End Main Functions
 * Begin Events
 */


