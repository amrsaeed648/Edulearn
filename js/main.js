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


// document.documentElement.classList.add("dark");