var timer,
    per = 0;
timer = setInterval(function () {
    $('.bar').css('width', per + '%')
    per++
    if (per > 100) {
        $('.pageLoading').addClass('complete')
        setTimeout(function () {
            $('.title').html('<h2>李彬  ❤  潘静</h2>')
        }, 3000)
        clearInterval(timer)
    }
}, 30)