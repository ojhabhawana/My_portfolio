import { projects, renderSkills, skills } from './data.js'


// THEME CHANGE
const themeChange = document.querySelector('.theme_change');
const textChange = document.getElementById('light');
const body = document.querySelector('body');
const sun = document.querySelector('.bxs-sun');

// Check localStorage for saved theme on page load
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme');
    // console.log(savedTheme);

    if (savedTheme === 'light') {
        body.classList.add('light_theme_color');
        textChange.textContent = "light";
        sun.classList.replace('bxs-moon', 'bxs-sun');
    } else {
        body.classList.remove('light_theme_color');
        textChange.textContent = "dark";
        sun.classList.replace('bxs-sun', 'bxs-moon');
    }
});

// Toggle theme and store the preference in localStorage
themeChange.addEventListener('click', () => {
    body.classList.toggle('light_theme_color');

    if (body.classList.contains('light_theme_color')) {
        textChange.textContent = "light";
        sun.classList.replace('bxs-moon', 'bxs-sun');
        localStorage.setItem('theme', 'light');  // Store light theme
    } else {
        textChange.textContent = "dark";
        sun.classList.replace('bxs-sun', 'bxs-moon');
        localStorage.setItem('theme', 'dark');   // Store dark theme
    }
});


//* ON SCROLL SHOW NAV FIXED
const navBar = document.querySelector('header');

window.onscroll = function () {
    if (window.scrollY > 120) {
        navBar.classList.add('fixed');
    }
    else {
        navBar.classList.remove('fixed');
    }
};

//  MENU BAR SHOW HIDE  
const menuBar = document.querySelector('.menu_bar i');
const navLinks = document.querySelector('.nav_links ul');
menuBar.addEventListener('click', () => {
    // console.log("Button Clicked");
    menuBar.classList.toggle('bx-x');
    menuBar.style.transform = menuBar.style.transform === "rotate(180deg)" ? "rotate(0deg)" : "rotate(180deg)";
    navLinks.classList.toggle('show');
});


//* ON CLICK SCROLL TOP 
const topScroll = document.querySelector('.top_scroll');

window.addEventListener('scroll', () => {
    if (window.scrollY > 150) {
        topScroll.style.display = "block";
    }
    else {
        topScroll.style.display = "none";
    }
});

topScroll.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
};

// Show current Date 
const currentDate = document.getElementById('date');
const year = new Date().getFullYear();
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
const month = monthNames[new Date().getMonth()];
currentDate.innerHTML = `<b> ${year} ${month}</b>`;

// TYPING EFFECT 
const typedText = document.getElementById("typed-text");
const text = "frontend web developer & designer";
let index = 0;
let typingSpeed = 100;  // Speed for typing
let deletingSpeed = 50;  // Speed for deleting
let pauseDuration = 100; // Duration to pause after typing the full text

if (typedText) { // Check if element exists
    function type() {
        if (index < text.length) {
            typedText.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(deleteText, pauseDuration);
        }
    }

    function deleteText() {
        if (index > 0) {
            typedText.innerHTML = text.substring(0, index - 1);
            index--;
            setTimeout(deleteText, deletingSpeed);
        } else {
            setTimeout(type, pauseDuration);
        }
    }
    type();
}

// load the skills using the JavaScript 

renderSkills(skills);


// load the projects usign JavaScript 
function renderProjectData(containerId, type)
{
    let projectContainer = document.getElementById(containerId);
    let projectHtml = '';
    projects.filter(project=> project.type === type).forEach(project=>{

        //* generating the language HTML dymanically 
        let languageHtml = '<p class="language_used">';
        project.languages.forEach(language => {
            languageHtml += `<span>${language}</span>`;
        });
        languageHtml += '</p>';


        projectHtml += `
        <div class="product_list_parent">
                <div class="project_list">
                    <img src="${project.image}" alt="">
                    <div class="product_content">
                        ${languageHtml}
                        <div class="code_btn">
                            <button>
                             <a href="${project.demoLink}"
                             target="_blank">project demo</a>
                            </button>
                            <button>
                             <a href="${project.codeLink}"
                             target="_blank">source
                                    code</a>
                            </button>
                        </div>
                    </div>
                </div>
                <p>${project.title}</p>
            </div>
        `
    })
    
    projectContainer.innerHTML = projectHtml;
}
renderProjectData('mini_project_container', 'mini');
renderProjectData('main_project_container', 'main');