/* This code is to handle replaying the title's typewriter animation when clicked */
document.addEventListener('DOMContentLoaded', () => {
  const title = document.getElementById('typewriter-text'); //It is referring to the div with the id "typewriter-text" in index.html
  title.addEventListener('click', () => {
    title.classList.remove('animate');
    void title.offsetWidth; 
    title.classList.add('animate');
  });

  //THE BELOW JAVASCRIPT TO MAKE THE GITHUB BUBBLE TURN GRAYSCALE IS NOT WORKING, CHECK ON IT LATER 
  const github_button = document.getElementById('github-link');
  const github_image = github_button.querySelector('img');
  github_button.addEventListener('mouseover', () => {
    github_button.style.filter = 'grayscale(100%)';
    github_image.style.filter = 'grayscale(100%)';
  });
  github_button.addEventListener('mouseout', () => {
    github_button.style.filter = 'none'; // Reset to original appearance
    github_image.style.filter = 'none';

  });
});
