/* Transition through the pages */

window.onload = () => {
    const transition_el = document.querySelector(".transition");
    const anchors = document.querySelectorAll("a");

    setTimeout(() => { // Per fare terminare la transizione
        transition_el.classList.remove("is-active"); // Toglie la classe is-active
    }, 500); // Il tempo che impiega la transizione a completarsi

    for (let i = 0; i < anchors.length; i++) {
        const anchor = anchors[i];

        anchor.addEventListener("click", e => { // Per avere un overlay quando clicchiamo un link
            e.preventDefault();
            let target = e.target.href;

            transition_el.classList.add("is-active");

            setTimeout(() => { // Per fare terminare la transizione
                window.location.href = target;
            }, 500);
        });
    }
}




/* Index */

setTimeout(() => { // Per evitare che le animazioni di testi, immagini ... vengano eseguite durante la transizione (che abbiamo impostato con una durata di 500 millisecondi, quindi anche questo timeout lo imposteremo a 500 millisecondi)

    ScrollReveal().reveal('.reveal' , { distance: '100px' , duration: 1500 , easing: 'cubic-bezier(.215, .61, .355, 1)'}); // Anche per le altre pagine
    ScrollReveal().reveal('.reveal_del' , { distance: '200px' , duration: 1000 , easing: 'cubic-bezier(.0, .20, .255, 1)'});



/* Other pages */

    ScrollReveal().reveal('.rev_right', {distance: '400px' , origin: "right" , duration: 2000 , easing: 'cubic-bezier(.215, .61, .355, 1)'});
    ScrollReveal().reveal('.rev_scale', {scale: 0.5 , duration: 2000 , easing: 'cubic-bezier(.215, .61, .355, 1)'});
    ScrollReveal().reveal('.rev_img-laterale', {duration: 1900 , easing: 'cubic-bezier(.215, .61, .355, 1)' , origin: "right" , distance: "250px" , scale: 0.4});

}, 500);