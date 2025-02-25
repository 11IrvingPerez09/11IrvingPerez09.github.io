function uploadImages() {
    const fileInput = document.getElementById('fileInput');
    const gallery = document.getElementById('gallery');

    if (fileInput.files.length > 0) {
        for (let file of fileInput.files) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const img = document.createElement('img');
                img.src = e.target.result;
                gallery.appendChild(img);
            };
            reader.readAsDataURL(file);
        }
    } else {
        alert("Selecciona al menos una imagen.");
    }
}
