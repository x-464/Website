
// mobi detection ---------------------------------------------------------------------

if (/Mobi|Android|iPhone|Mobile/i.test(navigator.userAgent)) {
    console.log('You are on a mobile device!');
} else {
    console.log('You are on a desktop device!');
}

// For hover effect of the sidebar ----------------------------------------------------

const sidebarItems = document.querySelectorAll('.sidebarItemsClass');

sidebarItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        // hides all other items
        sidebarItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.style.opacity = '0.1';
            }
        });
        // increase font size of hovered item
        item.style.fontSize = '3rem';
    });

    item.addEventListener('mouseleave', () => {
        //shows all items when unhovered
        sidebarItems.forEach(otherItem => {
            otherItem.style.opacity = '1';
        });
        item.style.fontSize = '';
    });
});


function adjustSidebarPosition() {
    const sidebar = document.getElementById('sidebar');
    const windowHeight = window.innerHeight;
    const margin = 25; // Margin for top, left, and bottom

    // Adjust height to account for top and bottom margins
    sidebar.style.height = `${windowHeight - (2 * margin)}px`;

    // Set margins for top and left
    sidebar.style.top = `${margin}px`;
    sidebar.style.left = `${margin}px`;
}

// Adjust the sidebar position and height on load and when the window is resized
window.addEventListener('load', adjustSidebarPosition);
window.addEventListener('resize', adjustSidebarPosition);


// For moving the sidebar ------------------------------------------------------------

let sidebarVisible = true;
const arrowForSidebarOpen = document.querySelector('#arrowForSidebarOpen');
const arrowForSidebarClose = document.querySelector('#arrowForSidebarClose');
arrowForSidebarOpen.classList.add('hidden');


arrowForSidebarClose.addEventListener("click", function() {
    const mainContent = document.querySelector('.mainContent');
    const sidebar = document.querySelector('#sidebar');
    sidebarVisible = !sidebarVisible;
    
    if (sidebarVisible) {
        //hide sidebar
        sidebar.classList.remove('hidden');
        arrowForSidebarClose.classList.remove('hidden');
        mainContent.classList.remove('centerProperly');
        this.style.transform = 'rotate(135deg)';
        this.classList.remove('arrow-moved');
        this.style.borderColor = '#0c0c0c';
        
    } else {
        //hide sidebar
        sidebar.classList.add('hidden');
        arrowForSidebarOpen.classList.remove('hidden');
        mainContent.classList.add('centerProperly');
        this.style.transform = 'rotate(-45deg)';
        this.classList.add('arrow-moved');
        this.style.borderColor = '#e9e9e9';
    }
});

arrowForSidebarOpen.addEventListener("click", function() {
    const mainContent = document.querySelector('.mainContent');
    const sidebar = document.querySelector('#sidebar');
    sidebarVisible = !sidebarVisible;

    if (sidebarVisible) {
        sidebar.classList.remove('hidden');
        mainContent.classList.remove('centerProperly');
        arrowForSidebarClose.style.borderColor = '#0c0c0c';
        arrowForSidebarClose.style.transform = 'rotate(135deg)';
        arrowForSidebarClose.classList.remove('arrow-moved');
        setTimeout(function(){
            arrowForSidebarOpen.classList.add('hidden');
        }, 100);
    }
});

// Changing text at the top ----------------------------------------------------------------------------------------------------

const TextArray = ["STUDENT", "GRAPHIC DESIGNER", "3D MODELER", "EDITOR", "PROBLEM SOLVER", "UI/UX DESIGNER", "PROGRAMMER"];
let currentTextIndex = 0;

function cycleText() {
    const textElements = document.querySelectorAll('.itemsInWhatIAm');
    const blurLevels = ["0.4rem", "0.2rem", "0.1rem", "none", "0.1rem", "0.2rem", "0.4rem"];
    
    textElements.forEach((textElement, index) => {
        const textIndex = (currentTextIndex + index) % TextArray.length;
        textElement.textContent = TextArray[textIndex];
        
        if (blurLevels[index] === "none") {
            textElement.style.filter = "none";
        } else {
            textElement.style.filter = `blur(${blurLevels[index]})`;
        }
    });

    currentTextIndex = (currentTextIndex + 1) % TextArray.length;
}

setInterval(cycleText, 1000);


// LEFT ARROW ------------------------------------------------------------------------

const leftArrowChecker = document.getElementById('arrowForCarouselLeft');

leftArrowChecker.addEventListener('mouseenter', function() {
    leftArrowChecker.style.width = '43px';
    leftArrowChecker.style.height = '43px';
})

leftArrowChecker.addEventListener('mouseleave', function() {
    setTimeout( function() {
        leftArrowChecker.style.width = '50px';
        leftArrowChecker.style.height = '50px';   
    }, 150)
});

leftArrowChecker.addEventListener('mousedown', function() {
    leftArrowChecker.style.width = '35px';
    leftArrowChecker.style.height = '35px';
})

leftArrowChecker.addEventListener('mouseup', function() {
    setTimeout( function() {
        leftArrowChecker.style.width = '43px';
        leftArrowChecker.style.height = '43px';
    }, 150)
})

const imageElements = document.getElementById('image2');
let currentTranslateX = 0;

leftArrowChecker.addEventListener('click', function() {
    currentTranslateX -= 10;
    imageElements.style.transform = `translateX(${currentTranslateX}px)`;
});

// RIGHT ARROW ------------------------------------------------------------------------

const rightArrowChecker = document.getElementById('arrowForCarouselRight');

rightArrowChecker.addEventListener('mouseenter', function() {
    rightArrowChecker.style.width = '43px';
    rightArrowChecker.style.height = '43px';
})

rightArrowChecker.addEventListener('mouseleave', function() {
    setTimeout( function() {
        rightArrowChecker.style.width = '50px';
        rightArrowChecker.style.height = '50px';   
    }, 150)
});

rightArrowChecker.addEventListener('mousedown', function() {
    rightArrowChecker.style.width = '35px';
    rightArrowChecker.style.height = '35px';
})

rightArrowChecker.addEventListener('mouseup', function() {
    setTimeout( function() {
        rightArrowChecker.style.width = '43px';
        rightArrowChecker.style.height = '43px';
    }, 150)
})

let currentTranslateY = 0;

rightArrowChecker.addEventListener('click', function() {
    currentTranslateY += 10;
    imageElements.style.transform = `translateX(${currentTranslateY}px)`;
});

// 3d parallax (don't delete I may use in future) -------------------------------------------------------------------------

//  Middle picture ----

// const imageElements = document.getElementById('image2');

// imageElements.addEventListener('mousemove', function(event) {
//     rotateElement(event, imageElements);
// });

// imageElements.addEventListener('mouseleave', function(element){
//     imageElements.style.transform = `rotateX(0deg) rotateY(0deg)`;
// });

// function rotateElement(event, element) {
//     // Get mouse position
//     const x = event.clientX;
//     const y = event.clientY;

//     // Get the element's bounding box
//     const rect = element.getBoundingClientRect();
//     const middleX = rect.left + rect.width / 2;
//     const middleY = rect.top + rect.height / 2;

//     // Calculate offsets relative to the image
//     const offsetX = ((x - middleX) / (rect.width / 2)) * 15; // Adjust multiplier for less tilt
//     const offsetY = ((y - middleY) / (rect.height / 2)) * 15; // Adjust multiplier for less tilt

//     // Set rotation
//     element.style.transform = `rotateX(${offsetY}deg) rotateY(${offsetX}deg)`;
// }