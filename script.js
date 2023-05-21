$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Front end developer", "App Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-3", {
        strings: ["Connect with me on :)"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: false
    });

    var typed = new Typed(".typing-2", {
        strings: ["Front end developer", "App Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});


$(document).ready(function(){
    (function() {
        // Agregar un evento de escucha para el envío del formulario
        document.getElementById('form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir la acción predeterminada del envío del formulario

        // Recopilar los datos del formulario y agregarlos a un objeto de datos
        var formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            asunto: document.getElementById('asunto').value,
            message: document.getElementById('message').value
        };

        // Enviar el correo electrónico utilizando EmailJS
        emailjs.send('Portafolio', 'template_omxbgsi', formData, 'BMtxGOggWB5bBnTMO')
            .then(function(response) {
                //console.log('SUCCESS!');

                // Aquí iría el código para enviar el correo
                // Por ahora, mostramos una notificación personalizada de éxito
                var notificacion = document.getElementById("notificacion");
                notificacion.style.display = "block";
                //MOSTRAR MENSAJE POR 5 SEG
                setTimeout(function() {
                notificacion.style.display = "none";
                }, 2000)
                //RECARGAR LA PAGINA
                setTimeout(function() {
                    location.reload();
                }, 5000); // 5000 milisegundos (5 segundos)

            }, function(error) {
                //console.log('FAILED...', error);
                alert('Su mensaje no pudo ser enviado. Por favor, inténtelo de nuevo más tarde :(.');
                });
        });
    })();
});

// TOKEN 1//0fJhi2XDdAE_hCgYIARAAGA8SNwF-L9Ir_FRx1l2x9-yCYf3FbcurDcnL30UY5coEdkjWLfSCLX166K2CpgXrtBhqk1AsY9zGDac

