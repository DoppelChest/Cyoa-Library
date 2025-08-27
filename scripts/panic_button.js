const toggleBtn = document.getElementById('toggleBtn');
const mainDivs = document.querySelectorAll('.general');
const originalTitle = document.title;   // Save the original page title
const hiddenTitle = "Black Screen";   // Title when div is hidden
//const panicURL = "https://en.wikipedia.org/wiki/Special:Random";

toggleBtn.addEventListener('click', () => {
    mainDivs.forEach(div => {
        if (div.style.visibility === 'hidden') {
            div.style.visibility = 'visible';
            div.style.opacity = '1';
            div.style.pointerEvents = 'auto';
            document.title = originalTitle;
        } else {
            div.style.visibility = 'hidden';
            div.style.opacity = '0';
            div.style.pointerEvents = 'none';
            document.title = hiddenTitle;

            //window.open(panicURL, '_blank');
        }
    });
});