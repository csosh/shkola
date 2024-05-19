const blocks = document.querySelectorAll('.block');
let currIndex = 0;
const onScroll = e => {
    e.preventDefault();
    const direction = e.deltaY > 0 ? 1 : -1;
    currIndex = Math.round(window.scrollY / window.innerHeight) + direction;
    blocks[currIndex].scrollIntoView({
        behavior: 'smooth'
    })
};
document.addEventListener('wheel', onScroll, {passive: false});