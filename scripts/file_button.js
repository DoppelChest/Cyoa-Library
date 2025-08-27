function updateFilePreview() {
    const input = document.getElementById('customFileInput');
    const fileName = document.getElementById('fileName');
    const imagePreview = document.getElementById('imagePreview');

    if (input.files && input.files[0]) {
        const file = input.files[0];
        fileName.textContent = file.name;

        if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function (e) {
                imagePreview.innerHTML = `<img src="${e.target.result}" alt="Preview">`;
            }
            reader.readAsDataURL(file);
        } else {
            imagePreview.innerHTML = '<p style="color:white;font-weight:bold;">Selected file is not an image</p>';
        }
    } else {
        fileName.textContent = 'No file chosen';
        imagePreview.innerHTML = '';
    }
}