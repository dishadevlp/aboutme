// script.js
document.addEventListener('DOMContentLoaded', function() {
    const projectName = 'My Awesome Project';

    const header = document.querySelector('header h1');
    header.textContent = `Welcome to ${projectName}`;

    const projectList = document.querySelector('ul');
    const projects = ['Project A', 'Project B', 'Project C'];

    projects.forEach(project => {
        const li = document.createElement('li');
        li.textContent = project;
        projectList.appendChild(li);
    });
});
