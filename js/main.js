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


// document.documentElement.classList.add("dark");