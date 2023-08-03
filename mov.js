let currentImage = 1;

function changeImage() {
    const clickableImage = document.getElementById('clickable-image');
    
    if (currentImage === 1) {
        clickableImage.src = 'https://th.bing.com/th/id/OIP.IsM8k4WXH9oqvT47_pD5JAHaFZ?pid=ImgDet&rs=1';
        clickableImage.alt = 'Image 2';
        currentImage = 2;
    } else {
        clickableImage.src = 'https://pixfeeds.com/images/save-nature/1280-472864902-dry-soil.jpg';
        clickableImage.alt = 'Image 1';
        currentImage = 1;
    }
}

function changeImage1() {
    const clickableImage = document.getElementById('clickable-image');
    
    if (currentImage === 1) {
        clickableImage.src = 'https://pixfeeds.com/images/save-nature/1280-157588637-water-pollution.jpg';
        clickableImage.alt = 'Image 2';
        currentImage = 2;
    } else {
        clickableImage.src = 'https://th.bing.com/th/id/OIP.KNXQGjt4vyf_wSFUNULhdwHaE9?pid=ImgDet&rs=1';
        clickableImage.alt = 'Image 1';
        currentImage = 1;
    }
}
function changeImage2() {
    const clickableImage = document.getElementById('clickable-image');
    
    if (currentImage === 1) {
        clickableImage.src = 'https://th.bing.com/th/id/OIP.N_fSR_KZKId1UjJvlHB9JwHaFj?pid=ImgDet&rs=1';
        clickableImage.alt = 'Image 2';
        currentImage = 2;
    } else {
        clickableImage.src = 'https://th.bing.com/th/id/OIP.T5QobqepcVdB0OeQE6pemAHaFN?pid=ImgDet&w=968&h=681&rs=1';
        clickableImage.alt = 'Image 1';
        currentImage = 1;
    }
}
