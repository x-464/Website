
// mobi detection (future me is not sure what this is for but don't delete) -----------

// if (/Mobi|Android|iPhone|Mobile/i.test(navigator.userAgent)) {
// } else {
// }

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
// gets the arrows and starts the open arrow as hidden
const arrowForSidebarOpen = document.querySelector('#arrowForSidebarOpen');
const arrowForSidebarClose = document.querySelector('#arrowForSidebarClose');
arrowForSidebarOpen.classList.add('hidden');

arrowForSidebarClose.addEventListener("click", function() {
    sidebarVisible = !sidebarVisible;
    const sidebar = document.querySelector('#sidebar');
    const mainContent = document.querySelector('.mainContent');
    
    if (!sidebarVisible) {
        //hide sidebar
        sidebar.classList.add('hidden');
        mainContent.classList.add('centerProperly');
        arrowForSidebarOpen.classList.remove('hidden');
        arrowForSidebarClose.style.borderColor = '#e9e9e9';
        arrowForSidebarClose.style.transform = 'rotate(-45deg)';
        console.log('test');
    }
});

arrowForSidebarOpen.addEventListener("click", function() {
    sidebarVisible = !sidebarVisible;
    const sidebar = document.querySelector('#sidebar');
    const mainContent = document.querySelector('.mainContent');

    if (sidebarVisible) {
        // unhide sidebar
        sidebar.classList.remove('hidden');
        mainContent.classList.remove('centerProperly');
        setTimeout(function(){
            arrowForSidebarOpen.classList.add('hidden');
            arrowForSidebarClose.style.borderColor = '#0c0c0c';
            arrowForSidebarClose.style.transform = 'rotate(135deg)';
        }, 200);
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


// Arrows and carousel -----------------------------------------------------------------------------------

const leftArrowChecker = document.getElementById('arrowForCarouselLeft');
const rightArrowChecker = document.getElementById('arrowForCarouselRight');
const images = [
    document.getElementById('image1'),
    document.getElementById('image2'),
    document.getElementById('image3')
];

function animateToNewPositions() {
    images.forEach((img, index) => {
        const rect = img.getBoundingClientRect();
        // img.style.margin = ( something to do with rect in here, using some of the rect )
    })
}

// Function to update the grid positions based on image order
function updateGridPositions() {
    // First image goes in the first column
    images[0].style.gridColumn = '1'; 
    images[0].style.justifySelf = 'end';
    images[0].style.maxWidth = '18vw';
    images[0].style.opacity = '50%';
    images[0].style.boxShadow = '0px 0px 15px rgba(256, 256, 256, 0.1)';
    images[0].style.zIndex = '-1';
    // Second image goes in the second column (center)
    images[1].style.gridColumn = '2';
    images[1].style.justifySelf = 'center';
    images[1].style.maxWidth = '25vw';
    images[1].style.opacity = '100%';
    images[1].style.boxShadow = '0px 0px 15px rgba(256, 256, 256, 0.3)';
    images[1].style.zIndex = '0';
    // Third image goes in the third column
    images[2].style.gridColumn = '3'; 
    images[2].style.justifySelf = 'start';
    images[2].style.maxWidth = '18vw';
    images[2].style.opacity = '50%';
    images[2].style.boxShadow = '0px 0px 15px rgba(256, 256, 256, 0.1)';
    images[2].style.zIndex = '-1';
}

// Rotate images left
leftArrowChecker.addEventListener('click', function() {
    images.push(images.shift());  // Rotate array left
    updateGridPositions();
    animateToNewPositions();
});

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


// Rotate images right
rightArrowChecker.addEventListener('click', function() {
    images.unshift(images.pop()); // Rotate array right
    updateGridPositions();
    animateToNewPositions();
});

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

// Initial setup: update grid positions for the first time
updateGridPositions();


// 3d parallax (don't delete I may use in future) ------------------------------------

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