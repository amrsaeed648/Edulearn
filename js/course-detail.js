// const b1 = document.getElementById("link1");
// b1.onclick = () => {
//     window.location.href = "https://www.geeksforgeeks.org/c-sharp/csharp-programming-language/";
// }

// const b2 = document.getElementById("link2");
// b2.onclick = () => {
//     window.location.href = "https://www.geeksforgeeks.org/dsa/introduction-of-object-oriented-programming/";
// }

// const b3 = document.getElementById("link3");
// b3.onclick = () => {
//     window.location.href = "https://www.w3schools.com/sql/sql_server.asp";
// }

// const b4 = document.getElementById("link4");
// b4.onclick = () => {
//     window.location.href = "https://dotnet.microsoft.com/en-us/";
// }

// const b5 = document.getElementById("link5");
// b5.onclick = () => {
//     window.location.href = "https://www.geeksforgeeks.org/c-sharp/what-is-entity-framework-in-net-framework/";
// }

// const b6 = document.getElementById("link6");
// b6.onclick = () => {
//     window.location.href = "https://www.geeksforgeeks.org/node-js/rest-api-introduction/";
// }

// const b7 = document.getElementById("youtube");
// b7.onclick = () => {
//     window.location.href = "https://www.youtube.com/watch?v=MFsYaRnrcPQ";
// }

const urlParams = new URLSearchParams(window.location.search);
const cardId = urlParams.get('id');

const cardsData = {
    "1": {
        title: "UI/UX Design",
        summary:"Design intuitive interfaces and inspire users with modern design principles.",
        description: "Learn professional UI/UX Design with industry-standard tools and techniques. This comprehensive course covers everything from fundamentals to advanced concepts, preparing you for real-world challenges. You'll work on hands-on projects and build a portfolio that stands out.",
        links: {
            link1: { url: "https://www.figma.com/", text: "Figma" },
            link2: { url: "https://www.adobe.com/products/xd.html", text: "Adobe XD" },
            link3: { url: "https://www.w3schools.com/css/", text: "CSS3" },
            link4: { url: "https://www.w3schools.com/html/", text: "HTML5" },
            link5: { url: "https://www.w3schools.com/js/", text: "JavaScript" },
            link6: { url: "https://www.w3schools.com/whatis/whatis_responsive.asp", text: "Responsive Design" }
        },
        videoUrl: "https://www.youtube.com/embed/jQ1sfKIl50E",
        image: "../assets/images/im1.png",
        category: "Design"
    },
    "2": {
        title: "Machine Learning",
        summary:"Teach computers to learn from data and build intelligent solutions.",
        description: "Learn professional Machine Learning with industry-standard tools and techniques. This comprehensive course covers everything from fundamentals to advanced concepts, preparing you for real-world challenges. You'll work on hands-on projects and build a portfolio that stands out.",
        links: {
            link1: { url: "https://www.tensorflow.org/", text: "Tensor Flow" },
            link2: { url: "https://www.tensorflow.org/", text: "Pytorch" },
            link3: { url: "https://www.tensorflow.org/", text: "Neural Networks" },
            link4: { url: "https://www.tensorflow.org/", text: "Scikit-learn" },
            link5: { url: "https://www.tensorflow.org/", text: "python" },
            link6: { url: "https://www.tensorflow.org/", text: "keras" }
        },
        videoUrl: "https://www.youtube.com/embed/w7vqXL4PWEE",
        image: "../assets/images/im2.png",
        category: "AI & ML"
    }
};

if (cardId && cardsData[cardId]) {
    const currentCard = cardsData[cardId];

    document.getElementById('main-title').innerText = currentCard.title;
    document.getElementById('main-text').innerText=currentCard.summary;
    document.getElementById('about-course').innerText = currentCard.description;
    document.title = currentCard.title;
    const cardLinks = currentCard.links;

    const videoElement = document.getElementById('course-video');
    if (videoElement && currentCard.videoUrl) {
        videoElement.src = currentCard.videoUrl;
        videoElement.title = currentCard.title + " Video";
    }
    const video = document.getElementById('youtube');
    if (video && currentCard.videoUrl) {
        video.href = currentCard.videoUrl;
    }
    const heroElement = document.querySelector('.hero');
    if (heroElement && currentCard.image) {
        heroElement.style.setProperty('--hero-bg', `url('${currentCard.image}')`);
    }
    const categoryElement = document.getElementById('main-category');
    if(categoryElement && currentCard.category){
        categoryElement.innerText = currentCard.category;
    }

    if(cardLinks){
    for (const [linkId, linkData] of Object.entries(cardLinks)) {
    const linkElement = document.getElementById(linkId);
    if (linkElement) {
        linkElement.href = linkData.url; 
        linkElement.innerText = linkData.text; 
    }
}
}
} else {
    document.getElementById('main-title').innerText = "Not Found!";
}