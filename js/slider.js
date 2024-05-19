let offset = 0, index = 0, direction = 0, minOffset = document.getElementsByClassName('slider')[0].offsetWidth;
const maxIndex = 10;
const slider = document.querySelector('.slider-line');
function slide(direction){
    index += direction;
    if(index > maxIndex){
        index = 0;
    }
    if(index < 0){
        index = maxIndex;
    }
    offset = minOffset * index;
    slider.style.left = -offset + 'px';
    document.getElementsByClassName('slider-indicator')[0].innerHTML = (index + 1) + '/' + (maxIndex + 1);
}

window.addEventListener('resize', function(event) {
    minOffset = document.getElementsByClassName('slider')[0].offsetWidth;
}, true);

slide(0)
setInterval(() => slide(1), 5000);