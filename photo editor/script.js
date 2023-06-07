const previewImg = document.querySelector('#preview');
const previewArea = document.querySelector('.preview-section');
const imageInput = document.querySelector('#image-input');
const imageInputBtn = document.querySelector('#image-input-btn');
const filterOption = document.querySelectorAll('.filter button')
const rotateOption = document.querySelectorAll('.rotate-flip button');
const filterName = document.querySelector('#progress-name');
const filterValue = document.querySelector('#progress-value');
const filterProgress = document.querySelector('#progress')
const downloadBtn = document.querySelector('#down-img');


let brightness = 100, saturation = 100, inversion = 0, grayscale = 0, contrast = 100, hueRotate = 0;
let rotate = 0;
let flipHorizontal = 1, flipVertical = 1;

function applyFilter() {
    previewImg.style.transform = `rotate(${rotate}deg) scale(${flipHorizontal}, ${flipVertical})`;
    previewImg.style.filter = `brightness(${brightness}%) saturate(${saturation}%) invert(${inversion}%) grayscale(${grayscale}%) contrast(${contrast}%) hue-rotate(${hueRotate}deg)`;
}

imageInputBtn.addEventListener("click", () => {
    imageInput.click();
})

downloadBtn.addEventListener("click", saveImage);

imageInput.addEventListener("change", loadImage);

function loadImage() {
    let file = imageInput.files[0]
    if(!file) return;
    previewImg.src = URL.createObjectURL(file);
}

previewImg.addEventListener("load", () => {
    document.querySelector("section").classList.remove('disabel');
    previewArea.classList.add('active-preview');
})


filterOption.forEach((option) => {
    option.addEventListener("click", () => {
        document.querySelector('.active').classList.remove("active");
        option.classList.add('active');
        filterName.innerHTML = option.innerHTML;

        if(option.id == 'brightness') {
            filterProgress.max = 200;
            filterProgress.value = brightness;
            filterValue.innerHTML = `${brightness}%`;
        }
        else if(option.id == 'saturation') {
            filterProgress.max = 200;
            filterProgress.value = saturation;
            filterValue.innerHTML = `${saturation}%`;
        }
        else if(option.id == 'inversion') {
            filterProgress.max = 100;
            filterProgress.value = inversion;
            filterValue.innerHTML = `${inversion}%`;
        }
        else if(option.id == 'grayscale') {
            filterProgress.max = 200;
            filterProgress.value = grayscale;
            filterValue.innerHTML = `${grayscale}%`;
        }
        else if(option.id == 'contrast') {
            filterProgress.max = 200;
            filterProgress.value = contrast;
            filterValue.innerHTML = `${contrast}%`;
        }
        else {
            filterProgress.max = 360;
            filterProgress.value = hueRotate;
            filterValue.innerHTML = `${hueRotate}deg`;
        }

    })
})

rotateOption.forEach((option) => {
    option.addEventListener("click", () => {
        if(option.id == 'left') {
            rotate -= 90;
        }
        else if(option.id == 'right') {
            rotate += 90;
        }
        else if(option.id == 'horizontal') {
            flipHorizontal = flipHorizontal === 1 ? -1 : 1;
        }
        else {
            flipVertical = flipVertical == 1 ? -1 : 1;
        }
        applyFilter();
    })
})

filterProgress.addEventListener("input", updateFilter);

function updateFilter() {
    filterValue.innerHTML = `${filterProgress.value}%`;
    const selectedFilter = document.querySelector('.active');

    if(selectedFilter.id == 'brightness') {
        brightness = filterProgress.value;
    }
    else if(selectedFilter.id == 'saturation') {
        saturation = filterProgress.value;
    }
    else if(selectedFilter.id == 'inversion') {
        inversion = filterProgress.value;
    }
    else if(selectedFilter.id == 'grayscale') {
        grayscale = filterProgress.value;
    }
    else if(selectedFilter.id == 'contrast') {
        contrast = filterProgress.value;
    }
    else {
        hueRotate = filterProgress.value;
        filterValue.innerHTML = `${filterProgress.value}deg`;
    }
    applyFilter();
}

function saveImage() {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = previewImg.naturalWidth;
    canvas.height = previewImg.naturalHeight;

    ctx.filter = `brightness(${brightness}%) saturate(${saturation}%) invert(${inversion}%) grayscale(${grayscale}%) contrast(${contrast}%) hue-rotate(${hueRotate}deg)`;
    ctx.translate(canvas.width / 2, canvas.height / 2);
    if(rotate !== 0) {
        ctx.rotate(rotate * Math.PI / 180);
    }
    ctx.scale(flipHorizontal, flipVertical)
    ctx.drawImage(previewImg, -canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);

    const link = document.createElement("a");
    link.download = "image.jpg";
    link.href = canvas.toDataURL();
    link.click();
}