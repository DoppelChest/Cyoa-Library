const toggleBtn = document.getElementById('panicBtn');
const mainDivs = document.querySelectorAll('.page');
const originalTitle = document.title;
const hiddenTitle = "Math Background";

toggleBtn.addEventListener('click', () => {
    let isHidden = mainDivs[0].style.visibility === 'hidden';

    mainDivs.forEach(div => {
        if (isHidden) {
            div.style.visibility = 'visible';
            div.style.opacity = '1';
            div.style.pointerEvents = 'auto';
            document.title = originalTitle;
            toggleBtn.src = '../images/eye1.png';
            toggleBtn.classList.remove('panic-mode');
        } else {
            div.style.visibility = 'hidden';
            div.style.opacity = '0';
            div.style.pointerEvents = 'none';
            document.title = hiddenTitle;
            toggleBtn.src = '../images/eye2.png';
            toggleBtn.classList.add('panic-mode');
        }
    });
});