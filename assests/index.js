const showMenu = (toggleId ,navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);
    //validate the variable exist
    if(toggle && nav)
    {
        toggle.addEventListener('click', () => {
            nav.classList.toggle("show_menu")
        } )
    }
}
showMenu("nav-toggle","nav-menu")

//////////////////////////

const navLink = document.querySelectorAll('.nav_link');
function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show_menu')
}
navLink.forEach(n => n.addEventListener('click',linkAction));

/////////////////////

const sections = document.querySelectorAll('section[id]')
function scrollActive(){
    const scroll = window.scrollY;
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');
        if(scroll > sectionTop && scroll<= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


       

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


function scaleCv(){
    document.body.classList.add('scale-cv');
}

function removeScale(){
    document.body.classList.remove('scale-cv')
}


let areaCv = document.getElementById("area-cv")
let resumeBtn = document.getElementById('resume-button');

var opt = {
  margin:       0,
  filename:     'DewankResume.pdf',
  image:        { type: 'jpeg', quality: 0.98 },
  html2canvas:  { scale: 4 },
  jsPDF:        { unit: 'a4', orientation: 'portrait' }
};

function generateResume(){

    console.log("bsbsb");
    html2pdf(areaCv ,opt)

}

resumeBtn.addEventListener('click' , () => {

    scaleCv();
    
    generateResume();
    
    setTimeout(removeScale,4000);
});