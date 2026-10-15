const COMPONENTS = [
    { slot: "header-container", file: "components/header.html" },
    { slot: "footer-container", file: "components/footer.html" },
];

async function loadComponents() {
    await Promise.all(
        COMPONENTS.map(async ({ slot, file }) => {
        const target = document.getElementById(slot);
        if (!target) return;
        try {
            const response = await fetch(file);
        if (!response.ok) {
                throw new Error(response.statusText);
        }
        target.innerHTML = await response.text();
        } catch (e) {
        console.error(e);
        }
    }),
    );
    initThemeToggle();
    setActiveNavLink();

    updateAuthButtons(); // TEAM NOTE: Call function to check if user is logged in and swap Login/Logout button

    function setActiveNavLink() {
    const page = location.pathname.split("/").pop() || "home.html";
    document.querySelectorAll("#header-container .nav a").forEach((link) => {
        if (link.getAttribute("href") === page) link.classList.add("active");
        });
    } 

    // ========================================================================
    // TEAM NOTE: Added function to swap "Login" to "Logout" when authenticated
    // ========================================================================
    function updateAuthButtons() {
        const loginBtn = document.querySelector("#header-container .actions .btn.outline");
        const signupBtn = document.querySelector("#header-container .actions .btn.solid");
        if (!loginBtn) return;

        if (sessionStorage.getItem("isLoggedIn") === "true") {
            loginBtn.textContent = "Logout";
            loginBtn.setAttribute("href", "#");
            if (signupBtn) signupBtn.style.display = "none"; // Hide Sign Up while logged in

            loginBtn.addEventListener("click", (e) => {
                e.preventDefault();
                sessionStorage.setItem("isLoggedIn", "false");
                sessionStorage.removeItem("currentUser");
                alert("You have been logged out.");
                window.location.href = "login.html#signin";
            });
        } else {
            loginBtn.textContent = "Login";
            loginBtn.setAttribute("href", "login.html#signin");
            if (signupBtn) signupBtn.style.display = "inline-block";
        }
    }
    // ========================================================================

}

loadComponents();



document.addEventListener("DOMContentLoaded", () => {

    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get("category");
    
    
    if (category) {
        const TopBars_Choose = document.querySelectorAll("main .core .source .top-part li");
        TopBars_Choose.forEach(bar => {
            const contentBar = bar.textContent.trim();
            bar.classList.remove("active");
            bar.classList.add("backHover");
            if (contentBar.includes(category)) 
                {
                    bar.classList.add("active");
                    bar.classList.remove("backHover");
                }
        });  

        const courses = document.querySelectorAll("main .core .source .mid-part .course");
        courses.forEach(course => {
            const course_type = course.querySelector("#sp").textContent.toLowerCase();
                if (course_type.includes(category.toLowerCase())) 
                {
                    course.style.display = "block";
                } else 
                {
                    course.style.display = "none";
                }
        }
        );
    }
});

