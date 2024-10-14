// For hover effect of the sidebar --------------------------------------------------

// get all sidebar items
const sidebarItems = document.querySelectorAll('.sidebarItemsClass');

sidebarItems.forEach(item => {
    item.addEventListener('mouseenter', () => { // checks for hover
        // hides all other items
        sidebarItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.style.opacity = '0.1';
            }
        });
        // increase font size of hovered item
        item.style.fontSize = '3rem';
    });

    item.addEventListener('mouseleave', () => { // checks for not hovering
        // shows all items when unhovered
        sidebarItems.forEach(otherItem => {
            otherItem.style.opacity = '1';
        });
        // resets font size of hovered item when unhovered
        item.style.fontSize = '';
    });
});

// For moving the sidebar ------------------------------------------------------------

let sidebarVisible = true; // Track the visibility state

document.getElementById("arrowForSidebar").addEventListener("click", function() {
    const mainContent = document.querySelector('.mainContent');
    const sidebar = document.querySelector('#sidebar');
    sidebarVisible = !sidebarVisible; // Toggle visibility state
    
    // Toggle classes based on the visibility state
    if (sidebarVisible) {
        sidebar.classList.remove('hidden'); // Show the sidebar
        mainContent.classList.remove('centerProperly');
        this.style.transform = 'rotate(135deg)'; // Reset arrow
        this.classList.remove('arrow-moved'); // Move arrow back
        this.style.borderColor = '#0c0c0c'; // Reset arrow color
    } else {
        sidebar.classList.add('hidden'); // Hide the sidebar
        mainContent.classList.add('centerProperly');
        this.style.transform = 'rotate(-45deg)'; // Rotate arrow
        this.classList.add('arrow-moved'); // Move arrow left
        this.style.borderColor = '#e9e9e9'; // Change arrow color
    }
});



const TextArray = ["STUDENT", "GRAPHIC DESIGNER", "3D MODELER", "EDITOR", "PROBLEM SOLVER", "UI/UX DESIGNER", "PROGRAMMER"];
let currentTextIndex = 0;

function cycleText() {
    const titleElements = document.querySelectorAll('.itemsInWhatIAm');

    titleElements.forEach((titleElement, index) => {
        titleElement.textContent = ""; 
        if (index === 3) {
            titleElement.textContent = TextArray[currentTextIndex];
            titleElement.style.filter = "none";
        } else if (index === 1) {
            titleElement.textContent = TextArray[(currentTextIndex - 2 + TextArray.length) % TextArray.length];
            titleElement.style.filter = "blur(0.2rem)";
        } else if (index === 2) {
            titleElement.textContent = TextArray[(currentTextIndex - 1 + TextArray.length) % TextArray.length];
            titleElement.style.filter = "blur(0.1rem)";
        } else if (index === 4) {
            titleElement.textContent = TextArray[(currentTextIndex + 1 + TextArray.length) % TextArray.length];
            titleElement.style.filter = "blur(0.1rem)";
        } else if (index === 5) {
            titleElement.textContent = TextArray[(currentTextIndex + 2 + TextArray.length) % TextArray.length];
            titleElement.style.filter = "blur(0.2rem)";
        } else if (index === 6) {
            titleElement.textContent = TextArray[(currentTextIndex + 3 + TextArray.length) % TextArray.length];
            titleElement.style.filter = "blur(0.2rem)";
        } else {
            titleElement.textContent = TextArray[(currentTextIndex - 3) % TextArray.length];
            titleElement.style.filter = "blur(0.4rem)";
        }
    });
    currentTextIndex = (currentTextIndex + 1) % TextArray.length;
}

setInterval(cycleText, 500);

// function cycleImages(){
//     const imageElements = document.querySelectorAll('.teapotImg');
    
// }