let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// typing text code
var typed = new Typed(".text", {
        strings: ["Puyat", "Gutom","Antok na"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
});

document.addEventListener('DOMContentLoaded', () => {
    const videoItems = document.querySelectorAll('.video-item');
    const fullscreenVideoOverlay = document.getElementById('fullscreenVideoOverlay');
    const fullscreenVideo = fullscreenVideoOverlay.querySelector('video');
    const closeBtn = fullscreenVideoOverlay.querySelector('.close-btn');

    videoItems.forEach(item => {
        const video = item.querySelector('video');

        // Autoplay on hover
        item.addEventListener('mouseenter', () => {
            // Check if the video is already playing in fullscreen, if so, don't play thumbnail
            if (!fullscreenVideoOverlay.style.display || fullscreenVideoOverlay.style.display === 'none') {
                video.play();
            }
        });

        item.addEventListener('mouseleave', () => {
            video.pause();
            video.currentTime = 0; // Rewind to start
        });

        // Fullscreen on click
        item.addEventListener('click', () => {
            // Set the source of the fullscreen video to the clicked video's source
            fullscreenVideo.src = video.src;
            fullscreenVideoOverlay.style.display = 'flex'; // Show the overlay
            fullscreenVideo.play(); // Autoplay the fullscreen video
        });
    });

    // Close fullscreen video
    closeBtn.addEventListener('click', () => {
        fullscreenVideo.pause(); // Pause the video
        fullscreenVideoOverlay.style.display = 'none'; // Hide the overlay
        fullscreenVideo.src = ''; // Clear the source
    });

    // Close fullscreen on escape key press
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && fullscreenVideoOverlay.style.display === 'flex') {
            fullscreenVideo.pause();
            fullscreenVideoOverlay.style.display = 'none';
            fullscreenVideo.src = '';
        }
    });

    // Close fullscreen when clicking outside the video
    fullscreenVideoOverlay.addEventListener('click', (event) => {
        if (event.target === fullscreenVideoOverlay) {
            fullscreenVideo.pause();
            fullscreenVideoOverlay.style.display = 'none';
            fullscreenVideo.src = '';
        }
    });
});