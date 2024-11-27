



    window.addEventListener('DOMContentLoaded', () => {
    const observeElements = (selector, animationClass) => {
        const elements = document.querySelectorAll(selector);

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate__animated', animationClass);
                    entry.target.classList.remove('opacity');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        elements.forEach((element) => {
            element.classList.add('opacity');
            observer.observe(element);
        });
    };

    observeElements('.card', 'animate__fadeIn');
    observeElements('h2', 'animate__fadeInUp');
    observeElements('.card-service', 'animate__fadeInLeft');
    observeElements('.container-contacts ul li', 'animate__fadeIn');

});
function funciona(){
    console.log('kkkkkkkkkkkkkkkkkkkkkkkkkkkk')
}

