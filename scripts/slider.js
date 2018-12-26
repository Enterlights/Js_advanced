let button = document.querySelector('button');

button.addEventListener('click', sliderLeft);

let left = 0;

function sliderLeft() {
    let wrapper = document.getElementById('wrapper');
    left = left - 128;
    if (left < -256) {
        left = 0;
    }
    wrapper.style.left = left + 'px';
}
