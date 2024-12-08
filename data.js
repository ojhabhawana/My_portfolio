export const skills = [
    { name: 'Figma', image: './image/figma.png', percentage: '70%' },
    { name: 'HTML', image: './image/html.png', percentage: '95%' },
    { name: 'CSS', image: './image/css.png', percentage: '90%' },
    { name: 'SASS', image: './image/sass.png', percentage: '50%' },
    { name: 'Bootstrap', image: './image/bootstrap.png', percentage: '60%' },
    { name: 'Tailwind', image: './image/tailwind.png', percentage: '60%' },
    { name: 'JavaScript', image: './image/js.png', percentage: '60%' },
    { name: 'jQuery', image: './image/jquery.png', percentage: '80%' },
    { name: 'React', image: './image/react.png', percentage: '60%' }
];

export function renderSkills(skills) {
    let skillHtml = '';
    skills.forEach((skill) => {
        skillHtml += `
        <div class="flex_center">
        <div class="tool_icon">
        <img src="${skill.image}" alt="">
        <p>${skill.percentage}</p>
        </div>
        <p>${skill.name}</p>
        </div>
        
        `
    })
    
    const skillContainer = document.getElementById('js_skill_Container');
    skillContainer.innerHTML = skillHtml;
}

// Array of projects
export const projects = [
    
   
   
   
   
   
];

