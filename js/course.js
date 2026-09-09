const searchInput = document.querySelector(".top-part #sec .search");

const courses = document.querySelectorAll("main .core .source .mid-part .course");

function filterCourses(){
    
    const searchValue = searchInput.value.toLowerCase().trim();

    courses.forEach(course=>{
        const courseContant = course.querySelector(".content-part h3").textContent.toLowerCase();

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
            bar.classList.remove("active");
            bar.classList.add("backHover");
        courses.forEach(course=>{
            const course_type = course.querySelector("#sp").textContent.toLowerCase();
            if(course_type.includes(contantBar) | contantBar == "all"){
                course.style.display = "block";
            }else{
                course.style.display = "none";
            }
        });
    });
        this.classList.add("active");
        this.classList.remove("backHover");
}

TopBars_Choose.forEach(bar=>{
    bar.addEventListener("click",specific_courses);
});