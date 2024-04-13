function Marquee() {
    const parentSelector = document.querySelector(".marquee");
    console.log(parentSelector);
    const clone = parentSelector.innerHTML;
    const firstElement = parentSelector.children[0];
    let i = 0;
    console.log(firstElement);
    parentSelector.insertAdjacentHTML('beforeend', clone);
    parentSelector.insertAdjacentHTML('beforeend', clone);

    setInterval(function() {
        firstElement.style.marginLeft = `-${i}px`;
        if (i > firstElement.clientWidth) {
            i = 0;
        }
        i = i + 0.6;
    }, 0);
}

window.addEventListener('load', Marquee)