/* 
 * Copyright (c) 2018 Maveric Tecnologia
 * Todos os direitos deste programa são reservados a Maveric Teconologia
 * Criada em:  24/12/2018
 */

var _NAVIGATION_PILHA = ["Views/Home.html"];
var _NAVIGATION_TARGET = $("#wrapper-container");
var _BTN_BACK = $(".btn-back");

$(document).on("click", "a", function (event) {
    event.preventDefault();

    var html_target = $(this).attr("href");
    var elemento = $(this);
    $("a").removeClass("text-warning");
    try {
        $.get(html_target, function (data) {

        }).done(function (data) {
            //Carrega body
            $(_NAVIGATION_TARGET).addClass("carregado");
            $(_NAVIGATION_TARGET).html(data);

            //Troca Menu
            elemento.addClass("text-warning");
            $("[data-atual]").attr("data-atual", html_target);

        }).fail(function (data) {
            //Erro
            var erro = HTML_ERRO.replace("%MOTIVO_ERRO%", data.responseText);
            $(_NAVIGATION_TARGET).html(erro);
            elemento.removeClass("text-warning");
            $(_NAVIGATION_TARGET).removeClass("carregado");
        }).always(function () {
            //Reexibe o conteudo
           
        });
    } catch (e) {
        var erro = HTML_ERRO.replace("%MOTIVO_ERRO%", e.message);
        $(html_target).html(erro);
        elemento.removeClass("text-warning");
        $(_NAVIGATION_TARGET).removeClass("carregado");
    }
});

function RemoveFirstItem() {
    var temp;
    var i = 0;

    for (var item in _NAVIGATION_PILHA) {
        if (i > 0) {
            temp.push(item);
        }
    }

    _NAVIGATION_PILHA = temp;
}

