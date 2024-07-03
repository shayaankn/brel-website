//========================================================
//---------------------TEXT ANIMATION---------------------
//========================================================

document.addEventListener("DOMContentLoaded", function () {

    // Older isInViewport function - issue - on some screens, the text wasn't appearing
    // function isInViewport(element) {
    //     const rect = element.getBoundingClientRect();
    //     return (
    //         rect.top >= 0 &&
    //         rect.left >= 0 &&
    //         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    //         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    //     );
    // }

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        const tolerance = 50; // Adjust this value as needed
        return (
            rect.top >= -tolerance &&
            rect.left >= -tolerance &&
            rect.bottom <= (window.innerHeight + tolerance || document.documentElement.clientHeight + tolerance) &&
            rect.right <= (window.innerWidth + tolerance || document.documentElement.clientWidth + tolerance)
        );
    };

    function checkVisibility() {
        const elements = document.querySelectorAll('.text-animation');
        elements.forEach(element => {
            if (isInViewport(element)) {
                element.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', checkVisibility);

    checkVisibility();
});

//=================================================
//---------------------COUNTER---------------------
//=================================================

// const counters = document.querySelectorAll(".counters span");
// const container = document.querySelector(".counters");

// let activated = false;

// window.addEventListener("scroll", () => {
//     if (pageYOffset > container.offsetTop - container.offsetHeight - 700 && activated === false) {
//         counters.forEach(counter => {
//             counter.innerText = 0;
//             let count = 0;
//             function updateCount() {
//                 const target = parseInt(counter.dataset.count);
//                 if (count < target) {
//                     count++;
//                     counter.innerText = count;
//                     setTimeout(updateCount, 40);
//                 }
//                 else {
//                     counter.innerText = target;
//                 }
//             }
//             updateCount()
//             activated = true;
//         });
//     }
//     else if (pageYOffset < container.offsetTop - container.offsetHeight - 1000 || pageYOffset === 0 && activated === true) {
//         counters.forEach(counter => {
//             counter.innerText = 0;
//         });
//         activated = false;
//     }
// });

const counters = document.querySelectorAll(".counters span");
const container = document.querySelector(".counters");

let activated = false;

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top + 600 >= 0 && // in case of any issue, replace this line with: rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

function startCounters() {
    counters.forEach(counter => {
        counter.innerText = 0;
        let count = 0;
        function updateCount() {
            const target = parseInt(counter.dataset.count);
            if (count < target) {
                count++;
                counter.innerText = count;
                setTimeout(updateCount, 40);
            } else {
                counter.innerText = target;
            }
        }
        updateCount();
        activated = true;
    });
};

function resetCounters() {
    counters.forEach(counter => {
        counter.innerText = 0;
    });
    activated = false;
};

window.addEventListener("scroll", () => {
    if (isInViewport(container) && !activated) {
        startCounters();
    } else if (!isInViewport(container) && activated) {
        resetCounters();
    }
});

//=====================================================
//---------------------BACK TO TOP---------------------
//=====================================================

let backToTopBtn = document.getElementById("backToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};

// When the user clicks on the button, scroll to the top of the document
backToTopBtn.onclick = function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
};

//==================================================
//---------------------DROPDOWN---------------------
//==================================================

// document.addEventListener("DOMContentLoaded", function() {
//     const dropdownToggle = document.querySelector('.dropdown-toggle-special');
//     const dropdownMenu = document.querySelector('.dropdown-menu-special');

//     dropdownToggle.addEventListener('click', function() {
//         dropdownMenu.classList.toggle('show');
//     });

//     // Close the dropdown menu if clicked outside
//     document.addEventListener('click', function(event) {
//         if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
//             dropdownMenu.classList.remove('show');
//         }
//     });
// });
