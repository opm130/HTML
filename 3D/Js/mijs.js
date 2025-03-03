const card = document.querySelector('.card')
card.addEventListener('mousemove', (e) => {
    const { offsetWidth: width, offsetHeight: height } = card
    const { offsetX: x, offsetY: y } = e
    const rotateX = ((y / height) - 0.5) * 20
    const rotateY = ((x / width) - 0.5) * -20

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) 
    rotateY(${rotateY}deg)`
})
card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
})

