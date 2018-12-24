var MAX_ITEM_HISTORICO = 15;
function AddTickeHistorico(id, assunto) {
    for (var i = MAX_ITEM_HISTORICO; i > 1; i--) {
        var pa = localStorage.getItem("p_" + (i - 1))
        if (typeof pa != "undefined" && pa != null && id != null) {
            localStorage.setItem("p_" + i, pa);
        }
    }
    localStorage.setItem("p_1", id + "&" + assunto);
}

function PuploaHitorico() {
    var local = $("[data-historico-url]");
    var url = "/Suporte/Ticket/";

    for (var i = 1; i <= MAX_ITEM_HISTORICO; i++) {
        var p = localStorage.getItem("p_" + i);

        if (typeof p != "undefined" && p != null) {
            var v = p.split("&");
            var a = $("<a\>");
            var texto = v[0] + " - ";
            for (var f = 1; f < v.length; f++) {
                texto += v[f] + " ";
            }
            a.attr("href", url + v[0]);
            a.text(texto);
            a.attr("title", texto);
            a.addClass("btn btn-sm");
            a.attr("id", "ticket" + v[0]);
            
            if ($("#ticket" + v[0]).length == 0) {
                local.append(a);
            }
        }
    }
}

setTimeout(function () {
    PuploaHitorico();
}, 1000);