
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const navItems = document.querySelectorAll(".nav-link");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("open");
});

navItems.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("open");
    });
});


const sections = document.querySelectorAll("main section[id]");

function updateActiveLink() {
    let currentSection = "";

    sections.forEach(function (section) {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }
    });

    navItems.forEach(function (link) {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }
    });
}

window.addEventListener("scroll", updateActiveLink);




const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {
        themeToggle.textContent = "☀";
        localStorage.setItem("portfolioTheme", "light");
    } else {
        themeToggle.textContent = "☾";
        localStorage.setItem("portfolioTheme", "dark");
    }
});



const savedTheme = localStorage.getItem("portfolioTheme");

if (savedTheme === "light") {
    document.body.classList.add("light-theme");
    themeToggle.textContent = "☀";
}


const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

     

        filterButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });


        button.classList.add("active");

        const selectedCategory = button.getAttribute("data-filter");

        projectCards.forEach(function (card) {

            const cardCategory = card.getAttribute("data-category");

            if (
                selectedCategory === "all" ||
                selectedCategory === cardCategory
            ) {
                card.classList.remove("hidden");
            } else {
                card.classList.add("hidden");
            }

        });

    });

});



const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {

    if (window.scrollY > 500) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});

backToTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


const recipientEmail = "ya509701@gmail.com";

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const projectType = document.getElementById("projectType").value;
    const budget = document.getElementById("budget").value;
    const message = document.getElementById("message").value.trim();

    if (
        !fullName ||
        !email ||
        !projectType ||
        !message
    ) {
        formMessage.textContent = "من فضلك أكمل البيانات المطلوبة.";
        formMessage.style.color = "#ff6565";
        return;
    }

    if (recipientEmail === "YOUR_EMAIL@example.com") {
        formMessage.textContent =
            "تمام تم التواصل";

        formMessage.style.color = "#ffbd2e";
        return;
    }

    const subject = encodeURIComponent(
        "رسالة مشروع جديدة من " + fullName
    );

    const body = encodeURIComponent(
        "الاسم: " + fullName + "\n" +
        "البريد الإلكتروني: " + email + "\n" +
        "رقم الهاتف: " + phone + "\n" +
        "نوع المشروع: " + projectType + "\n" +
        "الميزانية: " + budget + "\n\n" +
        "تفاصيل المشروع:\n" + message
    );

    const mailLink =
        "mailto:" + recipientEmail +
        "?subject=" + subject +
        "&body=" + body;

    window.location.href = mailLink;

    formMessage.textContent = "جاري فتح برنامج البريد لإرسال رسالتك.";
    formMessage.style.color = "#00c98a";

});



document.addEventListener("click", function (event) {

    const clickedInsideMenu = navLinks.contains(event.target);
    const clickedMenuButton = menuToggle.contains(event.target);

    if (!clickedInsideMenu && !clickedMenuButton) {
        navLinks.classList.remove("open");
    }

});




document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = link.getAttribute("href");

        if (targetId === "#") {
            event.preventDefault();
            return;
        }

        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            event.preventDefault();

            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

    });

});



console.log(
    "%c Welcome to Youssef Ahmed Mahmoud Ali Portfolio ",
    "background: #695cf5; color: white; padding: 10px; font-size: 15px;"
);