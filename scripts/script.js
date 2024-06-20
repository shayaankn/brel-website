// TEXT ANIMATION
document.addEventListener("DOMContentLoaded", function () {
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function checkVisibility() {
        const elements = document.querySelectorAll('.text-animation');
        elements.forEach(element => {
            if (isInViewport(element)) {
                element.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);

    checkVisibility();
});


// COUNTER
const counters = document.querySelectorAll(".counters span");
const container = document.querySelector(".counters");

let activated = false;

window.addEventListener("scroll", () => {
    if (pageYOffset > container.offsetTop - container.offsetHeight - 500 && activated === false) {
        counters.forEach(counter => {
            counter.innerText = 0;
            let count = 0;

            function updateCount() {
                const target = parseInt(counter.dataset.count);
                if (count < target) {
                    count++;
                    counter.innerText = count;
                    setTimeout(updateCount, 10);
                }
                else {
                    counter.innerText = target;
                }
            }
        updateCount()
        activated = true;
        });

    }
    else if (pageYOffset < container.offsetTop - container.offsetHeight - 700 || pageYOffset === 0 && activated === true) {
        counters.forEach(counter => {
            counter.innerText = 0;
        });
        activated = false;
    }
})