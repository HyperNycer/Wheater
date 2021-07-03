function myFunction() {
    var element = document.body;
    const root = document.querySelector(':root');
    const rs = getComputedStyle(root);
    const foreground = rs.getPropertyValue('--foreground-color');
    const background =  rs.getPropertyValue('--background-color');
    root.style.setProperty('--background-color', foreground);
    root.style.setProperty('--foreground-color', background);

    //element.classList.toggle("dark-mode");
}