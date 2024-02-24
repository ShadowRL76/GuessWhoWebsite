


  const leftElements = document.querySelectorAll('.left');
  const rightElements = document.querySelectorAll('.right');
  
  // Function to animate elements
  function animateElements() {
      leftElements.forEach((element, index) => {
          element.style.animation = `slideFromLeft 1s ease ${index * 0.3}s forwards`;
      });
      rightElements.forEach((element, index) => {
          element.style.animation = `slideFromRight 1s ease ${index * 0.3}s forwards`;
      });
  }
  
  // Call the animation function when the page is loaded
  window.addEventListener('load', animateElements);
  