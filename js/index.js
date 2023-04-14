$(function () {
    $(window).keydown(function (event){
        var keycode = event.which;
        if (keycode == 13) {
            var url_value = $("#inputinfo").val();
            if(url_value == 'thank'){
                window.open('https://game.gadpro.tk/thank.html', "_blank");
            }
            else{
                if(url_value == 'homo'){
                    const audioh = new Audio('./audio/homo.mp3')
                    audioh.play()
                }
                else if(url_value == 'rickroll' || url_value == 'rickastley'){
                    window.open('https://www.bilibili.com/video/BV1GJ411x7h7')
                }
                else if(url_value == 'spasmodic'){
                    const audios = new Audio('./audio/spasmodic.mp3')
                    audios.play()
                }
                else if(url_value == 'chicken'){
                    const audioc = new Audio('./audio/chicken.mp3')
                    audioc.play()
                }
                else if(url_value == 'random'){
                    const audior = new Audio('./audio/random.mp3')
                    audior.play()
                }
                else{
                    window.open('https://game.gadpro.tk/success.html', "_blank");
                }
            }
        };
    });
});