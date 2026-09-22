async function loadCourseData() {
const urlParams = new URLSearchParams(window.location.search);
const cardId = urlParams.get('id');
try{
    const response = await fetch('course-detail.json');
     if (!response.ok) {
            throw new Error('json file loading failed');
        }
    const cardsData = await response.json();


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
}catch(error){
console.error('problem occured while loading data:', error);
document.getElementById('main-title').innerText = "Error loading data!";    
}
}

loadCourseData();