// ========================================
// DAVID TRADER
// Frontend application
// Version 1.0
// ========================================


// PAGE NAVIGATION

const navItems = document.querySelectorAll(".nav-item");
const pages = document.querySelectorAll(".page");
const pageTitle = document.getElementById("pageTitle");


const titles = {
    home: "Dashboard",
    fast: "Fast Trader",
    bulk: "Bulk Trading",
    manual: "Manual Trading",
    history: "Trade History",
    settings: "Settings"
};


function openPage(pageName) {

    pages.forEach(page => {
        page.classList.remove("active-page");
    });

    navItems.forEach(item => {
        item.classList.remove("active");
    });

    const selectedPage = document.getElementById(pageName);

    if (selectedPage) {
        selectedPage.classList.add("active-page");
    }

    const selectedNav = document.querySelector(
        `[data-page="${pageName}"]`
    );

    if (selectedNav) {
        selectedNav.classList.add("active");
    }

    pageTitle.textContent = titles[pageName] || "Dashboard";

    // Close mobile sidebar
    document.getElementById("sidebar").classList.remove("open");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// SIDEBAR NAVIGATION

navItems.forEach(item => {

    item.addEventListener("click", () => {

        const page = item.getAttribute("data-page");

        openPage(page);

    });

});


// MOBILE MENU

const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");


menuBtn.addEventListener("click", () => {

    sidebar.classList.toggle("open");

});


// CONNECT BUTTON

const connectBtn = document.getElementById("connectBtn");
const connectionText = document.getElementById("connectionText");
const statusDot = document.querySelector(".status-dot");


connectBtn.addEventListener("click", () => {

    /*
        IMPORTANT:

        This is currently only a FRONTEND demonstration.

        Later, this button will be connected
        to the official Deriv authentication/API
        system.

        Never put private API credentials directly
        into this JavaScript file.
    */

    alert(
        "Deriv connection will be added in the next version."
    );

});


// DIRECTION BUTTONS

const directionButtons = document.querySelectorAll(".direction");


directionButtons.forEach(button => {

    button.addEventListener("click", () => {

        const parent = button.parentElement;

        parent.querySelectorAll(".direction").forEach(btn => {
            btn.style.opacity = "0.45";
        });

        button.style.opacity = "1";

    });

});


// DEMO DATA

function loadDemoData() {

    document.getElementById("balance").textContent = "$0.00";

    document.getElementById("equity").textContent = "$0.00";

    document.getElementById("openTrades").textContent = "0";

    document.getElementById("profit").textContent = "$0.00";

}


loadDemoData();


// TOGGLE SETTINGS

const toggles = document.querySelectorAll(".toggle");


toggles.forEach(toggle => {

    toggle.addEventListener("click", () => {

        toggle.classList.toggle("active");

    });

});


// DEMO BUTTON FEEDBACK

const primaryButtons = document.querySelectorAll(".primary-btn");


primaryButtons.forEach(button => {

    button.addEventListener("click", () => {

        alert(
            "Demo mode: no real trade has been placed."
        );

    });

});


// INITIAL PAGE

openPage("home");
