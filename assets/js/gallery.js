$(document).ready(function () {
    $("#openGalleryButton").on("click", function () {
        $("#hiddenGallery").lightGallery({
            thumbnail: true,
            animateThumb: false,
            backdropDuration: 0,
            backdrop: false,
            dynamic: true,
            dynamicEl: [
                { src: 'assets/images/gallerygraphics/Littlesection/little1.png', thumb: 'assets/images/gallerygraphics/Littlesection/little1.png', subHtml: 'Menu główne strony' },
                { src: 'assets/images/gallerygraphics/Littlesection/little2.png', thumb: 'assets/images/gallerygraphics/Littlesection/little2.png', subHtml: 'Stopka strony' },
                { src: 'assets/images/gallerygraphics/Littlesection/little3.png', thumb: 'assets/images/gallerygraphics/Littlesection/little3.png', subHtml: 'Jedna z sekcji strony' },
                { src: 'assets/images/gallerygraphics/Littlesection/little4.png', thumb: 'assets/images/gallerygraphics/Littlesection/little4.png', subHtml: 'Responsywność menu głównego' },
                { src: 'assets/images/gallerygraphics/Littlesection/little5.png', thumb: 'assets/images/gallerygraphics/Littlesection/little5.png', subHtml: 'Responsywność sekcji "O hodowli"' },
            ]
        });
    });
});

$(document).ready(function () {
    $("#openGalleryButton2").on("click", function () {
        $("#hiddenGallery2").lightGallery({
            thumbnail: true,
            animateThumb: false,
            dynamic: true,
            dynamicEl: [
                { src: 'assets/images/gallerygraphics/Grafsection/graf1.gif', thumb: 'assets/images/gallerygraphics/Grafsection/graf1.gif', subHtml: 'Gotowy projekt postaci i jej pojedyczna animacja biegu' },
                { src: 'assets/images/gallerygraphics/Grafsection/graf2.png', thumb: 'assets/images/gallerygraphics/Grafsection/graf2.png', subHtml: 'Program Aseprite, w którym wykonuje grafiki i animacje 2D' },
                { src: 'assets/images/gallerygraphics/Grafsection/graf3.png', thumb: 'assets/images/gallerygraphics/Grafsection/graf3.png', subHtml: 'Tło do menu gry "Rumun The Game". (μElektra2022)'},
            ]
        });
    });
});

$(document).ready(function () {
    $("#openGalleryButton3").on("click", function () {
        $("#hiddenGallery3").lightGallery({
            thumbnail: true,
            animateThumb: false,
            dynamic: true,
            dynamicEl: [
                { src: 'assets/images/gallerygraphics/Konkurssection/konkurs1.png', thumb: 'assets/images/gallerygraphics/Konkurssection/konkurs1.png', subHtml: 'Wstępny wygląd gry' },
                { src: 'assets/images/gallerygraphics/Konkurssection/konkurs2.gif', thumb: 'assets/images/gallerygraphics/Konkurssection/konkurs2.gif', subHtml: 'Beta chodzenia postaci' },
                { src: 'assets/images/gallerygraphics/Konkurssection/konkurs3.gif', thumb: 'assets/images/gallerygraphics/Konkurssection/konkurs3.gif', subHtml: 'Beta ataków podstawowych gracza'},
            ]
        });
    });
});