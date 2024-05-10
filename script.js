console.log('Script initialized');
document.addEventListener('DOMContentLoaded', (_event) => {
    console.log('DOMContentLoaded');
    updateBodyTransparency = () => {document.querySelector('body > main').style.background = `rgba(7, 7, 15, ${window.scrollY >= (window.innerHeight / 4)? (window.scrollY <= window.innerHeight? window.scrollY / window.innerHeight : 1) : 0.25})`;};
    updateBodyTransparency();
    window.addEventListener('scroll', (_event) => {
        updateBodyTransparency();
        document.querySelector('header > nav > div').classList.remove('show')
    });
    window.addEventListener('click', (event) => {
        if (event.target !== document.querySelector('header > nav > button') && !document.querySelector('header > nav > button').contains(event.target)) {
            document.querySelector('header > nav > div').classList.remove('show')
        };
    });
    document.querySelector('header > nav > button').addEventListener('click', (_event) => {
        document.querySelector('header > nav > div').classList.toggle('show');
    });
});