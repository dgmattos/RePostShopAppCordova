/* 
 * Copyright (c) 2018 Maveric Tecnologia
 * Todos os direitos deste programa são reservados a Maveric Tecnologia
 * Criada em:  24/12/2018
 */


var _CONSUMER_KEY = "ck_5e757f75f74f79caebd28a9cbaf79092c75f7794";
var _CONSUMER_SECRET = "cs_ff1ce259ceca24f317ed005a28f3f3d44a940113";

function ApiWp() {
    alert("api start test...");

    var store_url = 'https://repostshop.maveric.net.br';
    var endpoint = '/wc-auth/v1/authorize';
    var params = {
        app_name: 'RePostShop App',
        scope: 'read_write',
        user_id: 123,
        return_url: 'localhost',
        callback_url: 'localhost'
    };


    var url_endipoint = store_url + endpoint + "/?" + ObjectToUrl(params);

    

    /*
     var iframe = $("</iframe>");
     iframe.attr("src",url_endipoint);
     
     $("#result").append(iframe)
     
     console.log(url_endipoint);
     try {
     $.get(url_endipoint, function (data) {
     alert("post: " + data.responseText);
     console.log(data);
     }).done(function (data) {
     alert("done: " + data.responseText);
     console.log(data);
     }).fail(function (data) {
     alert("fail: " + data.responseText);
     console.log(data);
     }).always(function (data) {
     alert("always: " + data.responseText);
     console.log(data);
     });
     } catch (e) {
     alert("catch: " + e.message);
     console.log(e);
     }
     */
}

function ObjectToUrl(obj) {
    var str = "";
    for (var key in obj) {
        if (str != "") {
            str += "&";
        }
        str += key + "=" + encodeURIComponent(obj[key]);
    }
    return str;
}