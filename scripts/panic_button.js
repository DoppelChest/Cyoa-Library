const toggleBtn = document.getElementById('toggleBtn');
const mainDivs = document.querySelectorAll('.general');
const originalTitle = document.title;   // Save the original page title
const hiddenTitle = "Black Screen";   // Title when div is hidden

toggleBtn.addEventListener('click', () => {
    mainDivs.forEach(div => {
        if (div.style.visibility === 'hidden') {
            div.style.visibility = 'visible';
            div.style.opacity = '1';
            div.style.pointerEvents = 'auto';
            document.title = originalTitle;
            toggleBtn.src = '../images/eye1.png'; // Show eye1 when content is visible
        } else {
            div.style.visibility = 'hidden';
            div.style.opacity = '0';
            div.style.pointerEvents = 'none';
            document.title = hiddenTitle;
            toggleBtn.src = '../images/eye2.png'; // Show eye2 when content is hidden
        }
    });
});