const testimonySection = document.querySelector(".carousel-wrapper");
const prevTestimonyBtn = document.getElementById("prev-btn");
const nextTestimonyBtn = document.getElementById("next-btn");
const scrollBar = document.querySelector(".scroll-bar");


const testimonyArray = [
    {
        testimonyImg: "url(1.jpg) var(--clr-neutral-400)",
        rating: 5,
        testimony: "Mercurial is one of the best crypto exchange platform out there. They are fastand reliable the fact that they can make me withdraw my funds to my local bank make me give them 5 star rating.",
        testifier: "Simon Jones"
    }, {
        testimonyImg: "url(1.jpg) var(--clr-neutral-400)",
        rating: 5,
        testimony: "I love mercurial so much, they gav me avenue to invest in cryptocurrency with low aount of money, they also make sure my coins are safe and secure . I have refer all my family to mercurial,they have my 5 star ",
        testifier: "Sarah Jane"
    }
]


for (let i = 0; i < testimonyArray.length; i++) {
    bar = document.createElement("span");
    bar.classList.add("bar");
    barWidth = ((1111 / testimonyArray.length) / 1111) * 100;
    bar.style.width = "0px";
    bar.style.width = `${barWidth}%`;

    scrollBar.append(bar);
}

// const scrollCarousel = () => {
//     if (bar.style.width = `${barWidth}px`) {
//         clearInterval(id);
//     } else {
//         bar.style.width = "0px";
//     }
// }

// let id = setInterval(scrollCarousel, 20);

let i = 1;

const showSlide = (n) => {
    createSlide(i += n);
}

nextTestimonyBtn.addEventListener("click", () => {
    showSlide(+1);
});

prevTestimonyBtn.addEventListener("click", () => {
    showSlide(-1);
});

const testimonySlide = (m) => {
    // const testimonySection = document.querySelector(".carousel-wrapper");
    // testimonySection.innerHTML = "";

    const carousel = document.createElement("div");
    carousel.classList.add("carousel", "container", "even-columns");

    const carouselImg = document.createElement("div");
    carouselImg.classList.add("carousel>div:first-child", "testimony-fade-in");
    carouselImg.style.background = testimonyArray[m].testimonyImg;

    const testimonyWrapper = document.createElement("div");

    const carouselRating = document.createElement("ul");
    carouselRating.setAttribute("aria-label", "rating");
    carouselRating.role = "list";
    carouselRating.classList.add("flex");

    for (let j = 0; j < testimonyArray[m].rating; j++) {
        const star = document.createElement("li");
        const starImg = document.createElement("img");
        starImg.src = "./images/star.svg";
        star.append(starImg);
        carouselRating.append(star);
    }

    const testimony = document.createElement("p");
    testimony.classList.add("fs-600", "fw-regular", "text-neutral-100");
    testimony.textContent = testimonyArray[m].testimony;

    const testifier = document.createElement("p");
    testifier.classList.add("fs-600", "fw-regular", "text-neutral-100");
    testifier.textContent = "~" + testimonyArray[m].testifier;

    carousel.append(carouselImg);

    testimonyWrapper.append(carouselRating);
    testimonyWrapper.append(testimony);
    testimonyWrapper.append(testifier);

    carousel.append(testimonyWrapper);

    testimonySection.append(carousel);
}

const createSlide = (n) => {
    // if (n > testimonyArray.length) {
    //     i = 1;
    //     nextTestimonyBtn.style.opacity = "0.2";
    //     prevTestimonyBtn.style.opacity = "1";
    // } else if (n < 1) {
    //     i = testimonyArray.length;
    //     prevTestimonyBtn.style.opacity = "0.2";
    //     nextTestimonyBtn.style.opacity = "1";
    // }

    if (n == testimonyArray.length) {
        nextTestimonyBtn.classList.add('disable-carousel-btn');
        prevTestimonyBtn.classList.remove('disable-carousel-btn');
    } else if (n == 1) {
        prevTestimonyBtn.classList.add('disable-carousel-btn');
        nextTestimonyBtn.classList.remove('disable-carousel-btn');
    } else {
        nextTestimonyBtn.classList.remove('disable-carousel-btn');
        prevTestimonyBtn.classList.remove('disable-carousel-btn');
    }

    // const testimonySection = document.querySelector(".carousel-wrapper");
    testimonySection.innerHTML = "";
    testimonySlide(i - 1);

    for (let k = 0; k < scrollBar.children.length; k++) {
        scrollBar.children[k].style.opacity = "0"
    }

    scrollBar.children[i - 1].style.opacity = "1";
}

const displaySlides = () => {
    if (window.matchMedia("(max-width: 768px)").matches) {
        testimonySection.innerHTML = "";
        const scrollSlide = () => {
            for (let x = 0; x < testimonyArray.length; x++) {
                testimonySlide(x);
            }
        }
        scrollSlide();
    } else {
        createSlide(i);
    }
}

displaySlides();
window.matchMedia("(max-width: 820px)").addEventListener("change", displaySlides);


const faqAccordion = document.querySelectorAll(".accordion");

faqAccordion.forEach((event) => {
    event.addEventListener("click", () => {
        if (event.classList.contains("active-accordion")) {
            event.classList.remove("active-accordion");
        } else {
            for (let i = 0; i < faqAccordion.length; i++) {
                faqAccordion[i].classList.remove("active-accordion");
            }
            event.classList.add("active-accordion");
        }
    });
});