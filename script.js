console.log('Script initialized');
document.addEventListener('DOMContentLoaded', (_event) => {
    console.log('DOMContentLoaded');
    let everything_previously_hidden = false;

    scrollDownABit = () => {
        if (window.scrollY <= 0) {
            window.scrollBy(0, 1);
        };
    };
    scrollDownABit();

    detectTopScroll = () => {
        if (window.scrollY <= 0) {
            document.querySelectorAll('body > *').forEach((element) => {
                element.style.opacity = '0';
            });
            document.body.classList.add('hide-scrollbar');
            everything_previously_hidden = true;
        } else if (everything_previously_hidden) {
            document.querySelectorAll('body > *').forEach((element) => {
                element.style.opacity = '1';
            });
            document.body.classList.remove('hide-scrollbar');
            everything_previously_hidden = false;
        }
    };

    updateBodyTransparency = () => {
        document.querySelector('body > main').style.background = `rgba(7, 7, 15, ${window.scrollY >= (window.innerHeight / 4)? (window.scrollY <= window.innerHeight? window.scrollY / window.innerHeight : 1) : 0.25})`;
        document.querySelector('body > main').style.backdropFilter = `blur(${window.scrollY >= (window.innerHeight / 4)? (window.scrollY <= window.innerHeight? (window.scrollY / window.innerHeight) * 4 : 4) : 0}px)`;
    };
    updateBodyTransparency();

    window.addEventListener('scroll', (_event) => {
        updateBodyTransparency();
        detectTopScroll();
        document.querySelector('header > nav > div').classList.remove('show')
    });

    window.addEventListener('click', (event) => {
        if (event.target !== document.querySelector('header > nav > button') && !document.querySelector('header > nav > button').contains(event.target)) {
            document.querySelector('header > nav > div').classList.remove('show')
        };
        scrollDownABit();
    });

    document.querySelector('header > nav > button').addEventListener('click', (_event) => {
        document.querySelector('header > nav > div').classList.toggle('show');
    });

    window.addEventListener('mousemove', (_event) => {
        scrollDownABit();
    });
    
});