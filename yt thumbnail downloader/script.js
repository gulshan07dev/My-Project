const urlField = document.querySelector('input');
const previewArea = document.querySelector('.thumbnail-preview');
const imgTag = document.querySelector('.thumbnail');
const downloadBtn = document.querySelector('.download-btn');

urlField.addEventListener("keyup", () => {
    let imgUrl = urlField.value;
    previewArea.classList.add('active');

    if (imgUrl.indexOf('https://www.youtube.com/watch?v=') != -1) {
        let vidId = imgUrl.split('v=')[1].substring(0, 11);
        let thumbnailUrl = `https://img.youtube.com/vi/${vidId}/maxresdefault.jpg`;
        imgTag.src = thumbnailUrl;
    } else if (imgUrl.indexOf('https://youtu.be/') != -1) {
        let vidId = imgUrl.split('https://youtu.be/')[1].substring(0, 11);
        let thumbnailUrl = `https://img.youtube.com/vi/${vidId}/maxresdefault.jpg`;
        imgTag.src = thumbnailUrl;
    } else if (imgUrl.match(/\.(jpe?g|png|gif|bmp|wepb)$/i)) {
        imgTag.src = imgUrl;
    }
});

downloadBtn.addEventListener("click", () => {
    let imgUrl = imgTag.src;
    let a = document.createElement("a");
    a.href = imgUrl;
    a.download = "thumbnail.jpg";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});
