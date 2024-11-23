



    window.addEventListener('DOMContentLoaded', () => {
    const observeElements = (selector, animationClass) => {
        const elements = document.querySelectorAll(selector);

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate__animated', animationClass);
                    entry.target.classList.remove('opacity');

                    // Desativa o observador para este elemento após a animação
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 }); // Define quanto do elemento deve estar visível antes de ativar a animação

        elements.forEach((element) => {
            element.classList.add('opacity'); // Adiciona opacidade inicial
            observer.observe(element);
        });
    };

    observeElements('.card', 'animate__fadeIn');
    observeElements('h2', 'animate__fadeInUp');
    observeElements('.card-service', 'animate__fadeInLeft');
});
function funciona(){
    console.log('kkkkkkkkkkkkkkkkkkkkk')
}

