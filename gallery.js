var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));

var slidesCount = sliderImages.length;

var currentSlide = 1;

var slideNumberElement = document.getElementById('slide-number');

var nextButton = document.getElementById('next');
var prevButtton = document.getElementById('prev');

nextButton.onclick = nextSlide;
prevButtton.onclick = prevSlide;

var paginationElement = document.createElement('ul');
paginationElement.setAttribute('id', 'pagination-ul');

for (var i = 1; i <= slidesCount; i++) {
    var paginationItem = document.createElement('li');

    paginationItem.setAttribute('data-index', i);

    paginationItem.appendChild(document.createTextNode(i));

    paginationElement.appendChild(paginationItem);
}

document.getElementById('indicators').appendChild(paginationElement);

var paginationCreatedUl = document.getElementById('pagination-ul');

var paginationBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

for (var i = 0; i < paginationBullets.length; i++) {
    paginationBullets[i].onclick = function () {
        currentSlide = parseInt(this.getAttribute('data-index'));
        checker();
    }
}

checker();

function nextSlide() {
    if (nextButton.classList.contains('disabled')) {
        return false;
    }
    else {
        currentSlide++;
        checker();
    }
}
function prevSlide() {
    if (prevButtton.classList.contains('disabled')) {
        return false;
    }
    else {
        currentSlide--;
        checker();
    }
}

function checker() {
    slideNumberElement.textContent = 'Slide # ' + (currentSlide) + ' of ' + (slidesCount);

    removeAllActive();

    sliderImages[currentSlide - 1].classList.add('active');

    paginationCreatedUl.children[currentSlide - 1].classList.add('active');

    if (currentSlide == 1) {
        prevButtton.classList.add('disabled');
    }
    else {
        prevButtton.classList.remove('disabled');
    }

    if (currentSlide == slidesCount) {
        nextButton.classList.add('disabled');
    }
    else {
        nextButton.classList.remove('disabled');
    }
}

function removeAllActive() {
    sliderImages.forEach(function (img) {
        img.classList.remove('active');
    });

    paginationBullets.forEach(function (bullet) {
        bullet.classList.remove('active');
    });

}