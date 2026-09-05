const COMPONENTS = [
    { slot: 'header-container', file: 'components/header.html' },
    { slot: 'footer-container', file: 'components/footer.html' },
];

async function loadComponents() {
    await Promise.all(
        COMPONENTS.map(async ({ slot, file }) => {
            const target = document.getElementById(slot);
            if (!target) return;
            try{
                const response = await fetch(file);
                if(!response.ok){
                    throw new Error(response.statusText);
                }
                target.innerHTML = await response.text();
            }
            catch(e){
                console.error(e);
            }
        })
    )
    initThemeToggle();
    setActiveNavLink();
    function setActiveNavLink() {
        const page = location.pathname.split('/').pop() || 'index.html';
        document.querySelectorAll('#header-container .nav a').forEach(link => {
            if (link.getAttribute('href') === page) link.classList.add('active');
        });
    }
}

loadComponents();





let lists = document.querySelectorAll(".mli");

lists.forEach(element => {
    element.onclick = function(){
        lists.forEach(ele =>{
            ele.classList.remove("active");
            ele.classList.add("backHover");
        });
        this.classList.add("active");
        this.classList.remove("backHover");
    };
}
);







const searchInput = document.querySelector(".search");

const courses = document.querySelectorAll("main .core .source .mid-part .course");

function filterCourses(){
    
    const searchValue = searchInput.value.toLowerCase().trim();

    courses.forEach(course=>{
        const courseContant = course.querySelector("main .core .source .mid-part .course .contant-part h3").textContent.toLowerCase();

        if(courseContant.includes(searchValue))
        {
            course.style.display = "block";
        }else{
            course.style.display = "none";
        }
    });
}

searchInput.addEventListener("input",filterCourses);







const TopBars_Choose = document.querySelectorAll("main .core .source .top-part li");

function specific_courses(event){
    TopBars_Choose.forEach(bar=>{
        const contantBar = event.currentTarget.textContent.toLowerCase().trim();
        courses.forEach(course=>{
            const course_type = course.querySelector("#sp").textContent.toLowerCase();
            if(course_type.includes(contantBar) | contantBar == "all"){
                course.style.display = "block";
            }else{
                course.style.display = "none";
            }
        });
    });
}

TopBars_Choose.forEach(bar=>{
    bar.addEventListener("click",specific_courses);
});
