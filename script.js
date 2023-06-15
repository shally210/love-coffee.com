// Smooth scrolling effect for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
// Optional: You can hide the default scrollbar arrows using JavaScript
document.documentElement.style.scrollbarWidth = "thin";

// You can also adjust the scrollbar arrow size using CSS
// For example:
// #content::-webkit-scrollbar-button:start:decrement,
// #content::-webkit-scrollbar-button:end:increment {
//   height: 20px;
//   width: 20px;
// }



