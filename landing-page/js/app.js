

// Define Global Variables for Navigation
const navigation = document.getElementById('navbar__list');

// Define Sections Global Varibales 
const sections = document.querySelectorAll('section');

// build the nav
const navigationBuilder = () => {
    let navLi = '';
    // looping over all sections 
    sections.forEach(section =>{
        
        const sectId = section.id;
        const sectData = section.dataset.nav;
        navLi += `<li><a class="menu__link" href="#${sectId}">${sectData}</a></li>`;

    });
    //append all elements to the Nav-bar
    navigation.innerHTML = navLi;

};
navigationBuilder();

// Add class 'active' to section when near top of viewport

//Return the largest valuue less or equal to the number 
const offSet = (section) => {
    return Math.floor(section.getBoundingClientRect().top);

};

// Removing the active class
const activeRemove = (section) => {
    section.classList.remove('your-active-class');
    section.style.cssText = "background-color: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%)"
};

//adding the active class 
const activeAdd = (conditional, section) => {
    if(conditional){
        section.classList.add('your-active-class');
        section.style.cssText = "background-color:orange;";
    };
};

// implementing the actual function

const activatingSection = () => {
    sections.forEach(section => {
        const elementOffset = offSet(section);

        inviewport = () => elementOffset < 150 && elementOffset >= -150;
        
        activeRemove(section);
        activeAdd(inviewport(),section);
    });
};

window.addEventListener('scroll', activatingSection);
// Scroll to anchor ID using scrollTO event
const scroller = () => {
    
    const links = document.querySelectorAll('.navbar__menu a');
    links.forEach(links=>{
        link.addEventListener('click', () =>{
            for(i = 0 ; i<sections ; i++){
                sections[i].addEventListener("click", sectionScroll(link));
            }
        });
    });
};




