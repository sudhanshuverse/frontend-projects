const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    const container = document.querySelector('.container');
    const heading = document.querySelector('h1');

    // Generate random RGB values
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const rgbColor = `rgb(${r}, ${g}, ${b})`;

    // Update the container background and heading text
    container.style.backgroundColor = rgbColor;
    heading.textContent = `RGB (${r}, ${g}, ${b})`;
});