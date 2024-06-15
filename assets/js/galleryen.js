$(document).ready(function () {
    $("#openGalleryButton").on("click", function () {
        $("#hiddenGallery").lightGallery({
            thumbnail: true,
            animateThumb: false,
            backdropDuration: 0,
            backdrop: false,
            dynamic: true,
            dynamicEl: [
                { src: 'assets/images/gallerygraphics/Littlesection/little1.png', thumb: 'assets/images/gallerygraphics/Littlesection/little1.png', subHtml: 'Webiste Main Menu' },
                { src: 'assets/images/gallerygraphics/Littlesection/little2.png', thumb: 'assets/images/gallerygraphics/Littlesection/little2.png', subHtml: 'Website Footer' },
                { src: 'assets/images/gallerygraphics/Littlesection/little3.png', thumb: 'assets/images/gallerygraphics/Littlesection/little3.png', subHtml: 'One of the sections on the website' },
                { src: 'assets/images/gallerygraphics/Littlesection/little4.png', thumb: 'assets/images/gallerygraphics/Littlesection/little4.png', subHtml: 'Website Main Menu responsiveness' },
                { src: 'assets/images/gallerygraphics/Littlesection/little5.png', thumb: 'assets/images/gallerygraphics/Littlesection/little5.png', subHtml: 'Section "O hodowli" responsiveness' },
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
                { src: 'assets/images/gallerygraphics/Grafsection/graf1.gif', thumb: 'assets/images/gallerygraphics/Grafsection/graf1.gif', subHtml: 'The finished character design and single running animation' },
                { src: 'assets/images/gallerygraphics/Grafsection/graf2.png', thumb: 'assets/images/gallerygraphics/Grafsection/graf2.png', subHtml: 'Aseprite program, in which I create 2D graphics and animations' },
                { src: 'assets/images/gallerygraphics/Grafsection/graf3.png', thumb: 'assets/images/gallerygraphics/Grafsection/graf3.png', subHtml: 'background for the game menu "Rumun The Game.". (μElektra2022)'},
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
                { src: 'assets/images/gallerygraphics/Konkurssection/konkurs1.png', thumb: 'assets/images/gallerygraphics/Konkurssection/konkurs1.png', subHtml: 'Initial look of the game' },
                { src: 'assets/images/gallerygraphics/Konkurssection/konkurs2.gif', thumb: 'assets/images/gallerygraphics/Konkurssection/konkurs2.gif', subHtml: 'Character walking beta' },
                { src: 'assets/images/gallerygraphics/Konkurssection/konkurs3.gif', thumb: 'assets/images/gallerygraphics/Konkurssection/konkurs3.gif', subHtml: 'Player Basic Attacks Beta'},
            ]
        });
    });
});