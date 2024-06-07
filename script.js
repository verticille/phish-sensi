document.addEventListener("DOMContentLoaded", function() {
    var plus1 = document.getElementById("plus1");
    var image1 = document.getElementById("image1");

    // Ajoutez un gestionnaire d'événement pour le clic sur l'image1
   plus1.addEventListener("click", function() {
        // Affichez l'image2 en changeant sa classe CSS
        image1.classList.replace("hidden" , "image1");
    });

    // Gestionnaire d'événement pour faire disparaître l'image en cliquant n'importe où
    document.addEventListener("click", function(event) {
        if (image1.classList == ("image1") && event.target !== plus1) {
            image1.classList.replace("image1" , "hidden");
        }
    });

     // Ajoutez un gestionnaire d'événement pour le clic sur l'image1
   plus2.addEventListener("click", function() {
    // Affichez l'image2 en changeant sa classe CSS
    image2.classList.replace("hidden" , "image2");
});

// Gestionnaire d'événement pour faire disparaître l'image en cliquant n'importe où
document.addEventListener("click", function(event) {
    if (image2.classList == ("image2") && event.target !== plus2) {
        image2.classList.replace("image2" , "hidden");
    }
});

 // Ajoutez un gestionnaire d'événement pour le clic sur l'image1
 plus3.addEventListener("click", function() {
    // Affichez l'image2 en changeant sa classe CSS
    image3.classList.replace("hidden" , "image3");
});

// Gestionnaire d'événement pour faire disparaître l'image en cliquant n'importe où
document.addEventListener("click", function(event) {
    if (image3.classList == ("image3") && event.target !== plus3) {
        image3.classList.replace("image3" , "hidden");
    }
});

 // Ajoutez un gestionnaire d'événement pour le clic sur l'image1
 plus4.addEventListener("click", function() {
    // Affichez l'image2 en changeant sa classe CSS
    image4.classList.replace("hidden" , "image4");
});

// Gestionnaire d'événement pour faire disparaître l'image en cliquant n'importe où
document.addEventListener("click", function(event) {
    if (image4.classList == ("image4") && event.target !== plus4) {
        image4.classList.replace("image4" , "hidden");
    }
});

 // Ajoutez un gestionnaire d'événement pour le clic sur l'image1
 plus5.addEventListener("click", function() {
    // Affichez l'image2 en changeant sa classe CSS
    image5.classList.replace("hidden" , "image5");
});

// Gestionnaire d'événement pour faire disparaître l'image en cliquant n'importe où
document.addEventListener("click", function(event) {
    if (image5.classList == ("image5") && event.target !== plus5) {
        image5.classList.replace("image5" , "hidden");
    }
});

 // Ajoutez un gestionnaire d'événement pour le clic sur l'image1
 plus6.addEventListener("click", function() {
    // Affichez l'image2 en changeant sa classe CSS
    image6.classList.replace("hidden" , "image6");
});

// Gestionnaire d'événement pour faire disparaître l'image en cliquant n'importe où
document.addEventListener("click", function(event) {
    if (image6.classList == ("image6") && event.target !== plus6) {
        image6.classList.replace("image6" , "hidden");
    }
});


})