console.log('Script initialized');
document.addEventListener('DOMContentLoaded', (_event) => {
    console.log('DOMContentLoaded');
    updateBodyTransparency = () => {document.body.style.background = `rgba(7, 7, 15, ${window.scrollY >= (window.innerHeight / 4)? (window.scrollY <= window.innerHeight? window.scrollY / window.innerHeight : 1) : 0.25})`;};
    updateBodyTransparency();
    window.addEventListener('scroll', (_event) => {
        updateBodyTransparency();
    });
});