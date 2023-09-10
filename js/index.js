$(function () {
    $(window).keydown(function (event){
        if (event.key == 'Enter') {
            var url_value = $("#inputinfo").val();
            if(url_value == 'thank'){
                window.open('https://game.adproqwq.xyz/thank.html', "_blank");
            }
            else{
                if(url_value == 'homo'){
                    const audioh = new Audio('audio\\homo.mp3')
                    audioh.play()
                }
                else if(url_value == 'rickroll'){
                    window.open('https://www.bilibili.com/video/BV1GJ411x7h7')
                }
                else if(url_value == 'spasmodic'){
                    const audios = new Audio('audio\\spasmodic.mp3')
                    audios.play()
                }
                else if(url_value == 'chicken'){
                    const audioc = new Audio('audio\\chicken.mp3')
                    audioc.play()
                }
                else if(url_value == 'random'){
                    const audior = new Audio('audio\\random.mp3')
                    audior.play()
                }
                else if(url_value == 'again'){
                    const audioa = new Audio('audio\\again.mp3')
                    audioa.play()
                }
                else if(url_value == 'one'){
                    const audioo = new Audio('audio\\one.mp3')
                    audioo.play()
                }
                else if(url_value == 'crime'){
                    const audioi = new Audio('audio\\crime.mp3')
                    audioi.play()
                }
                else if(url_value == 'sky'){
                    const audiok = new Audio('audio\\sky.mp3')
                    audiok.play()
                }
                else if(isNaN(url_value) == false){
                    window.Data = {
                        num : homo(Number(url_value))
                    }
                    window.open('https://game.gadpro.tk/stinking.html')
                }
                else{
                    window.open('https://game.gadpro.tk/success.html', "_blank");
                }
            }
        };
    });
});