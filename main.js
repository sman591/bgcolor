function initial_color() {

    window.bgcolor = {};

    if(window.location.hash)
        hex = window.location.hash;
    else
        hex = '00c4ff';

    hex = hex.replace('#', '');

    update_color(hex);

    return hex;

}

function update_color(hex) {

    $('.color-code').text('#' + hex);
    $('#colorSelector div').css('backgroundColor', '#' + hex);
    $('body').css('backgroundColor', '#' + hex);

    window.bgcolor.hex = hex;

    clearTimeout(window.bgcolor.timer);
    window.bgcolor.timer = setTimeout(update_hash, 100);

}

function update_hash() {

    if (window.location.hash != window.bgcolor.hex)
        window.location.hash = window.bgcolor.hex;

}

$('#colorSelector').ColorPicker({
    color: '#' + initial_color(),
    onShow: function (colpkr) {
        $(colpkr).fadeIn(200);
        return false;
    },
    onHide: function (colpkr) {
        $(colpkr).fadeOut(200);
        return false;
    },
    onChange: function (hsb, hex, rgb) {
        update_color(hex);
    }
});