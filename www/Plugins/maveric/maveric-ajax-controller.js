
var HTML_LOAD = "<div class=\"text-center\"><i class=\"fa fa-cog fa-spin fa-3x fa-fw\"></i> Processando...</div>";
var HTML_ERRO = "<div class=\"alert alert-danger\">Erro ao carregar o conteúdo. Motivo: %MOTIVO_ERRO%</div>";
var HTML_SUBMIT_LOAD = "<i class=\"fa fa-cog fa-spin fa-fw\"></i> Processando...";


//Envio de formulário via post
$(document).on("submit", "[data-send-ajax=True]", function (event) {
    event.preventDefault();

    try {
        var formulario = $(this);
        var resultado = $(this).attr("data-ajax-result");
        var _tipo_resultado = $(this).attr("data-type-result");
        var _action = $(this).attr("action");
        var _modal = $(this).attr("data-target-modal");
        var btn_submit = $("[type=submit]", formulario);
        var submit_HTML = $("[type=submit]", formulario).html();



        if (typeof _tipo_resultado == "undefined" || _tipo_resultado == null || _tipo_resultado == "" || _tipo_resultado == " ") {
            _tipo_resultado = "html";
        }

        if (!formulario.hasClass("gravando")) {
            $("body").addClass("cursor-progress");
            $("[type=submit]", formulario).attr("disabled", "disabled").addClass("cursor-progress");
            $("[type=submit]", formulario).html(HTML_SUBMIT_LOAD);
            formulario.addClass("gravando");
            $.post(_action, formulario.serialize(), function (data) {
                try {
                    if (_tipo_resultado == "html") {
                        $(resultado).html(data);
                    } else if (_tipo_resultado == "json") {

                        if (data.hasErro == true) {

                            NotifyDanger(data.mensagem);

                            if (typeof data.Errors != "undefined") {
                                //Erro de validação do formulário
                                for (var i = 0; i < data.Errors.length; i++) {
                                    NotifyDanger(data.Errors[i].Value[0]);
                                    $("[data-valmsg-for=" + data.Errors[i].Key + "]")
                                        .html(data.Errors[i].Value[0]).appendTo($("input#" + data.Errors[i].Key).parent());
                                }
                            }
                        }
                    }
                } catch (e) {
                    NotifyDanger(e, "Erro");
                }
            }).done(function (data) {
                try {
                    if (data.hasErro == false) {

                        if (typeof data.token != "undefined" && data.token != "0") {
                            SaveAutoLogin(data.token);
                        }

                        NotifyInfo(data.mensagem);

                        var maveric_data = data.maveric_data;

                        if (typeof maveric_data != "undefined") {
                            RepassaMavericData(maveric_data);
                        }

                        if ($(_modal).length > 0) {
                            $(_modal).modal("hide");
                        }

                        if (data.action == "redirect") {
                            window.location.href = data.url;
                        }

                        if (data.action == "refresh") {
                            location.reload();
                        }
                    }
                } catch (e) {
                    NotifyDanger(e, "Erro");
                }
            }).fail(function (data) {
                $(resultado).html(data.responseText);
            }).always(function () {
                $("[type=submit]", formulario).html(submit_HTML).removeAttr("disabled").removeClass("cursor-progress").focus();
                formulario.removeClass("gravando");
                $("body").removeClass("cursor-progress");
            });
        }

    } catch (e) {
        NotifyDanger(e, "Erro");
    }
});



function RemoveToken() {
    localStorage.removeItem("token");
}

function SaveAutoLogin(token) {
    try {
        localStorage.setItem("token", token);
    } catch (e) {
        NotifyDanger(e, "Erro");
    }
}

function autoLogin() {
    try {
        var token = localStorage.getItem("token");

        if (typeof token != "undefined" && token != "0" && token != " " && token != "") {
            var url = $("[data-atuo-login]").attr("data-atuo-login");
            $.post(url, { token: token, ReturnUrl: $("#ReturnUrl").val() }, function (data) {

            }).done(function (data) {
                if (data.hasErro == true) {
                    NotifyDanger(data.mensagem);
                } else {
                    NotifyInfo(data.mensagem);
                }
                setTimeout(function () {
                    if (data.action == "redirect") {
                        window.location.href = data.url;
                    }
                });
            }).fail(function () {
                NotifyDanger("Erro 4508 - Não foi possível efetuaro o login!");
            }).always(function () {
                $(".auto-login-load").fadeOut(120);
            });
        } else {
            $(".auto-login-load").fadeOut(120);
        }
    } catch (e) {
        NotifyDanger(e, "Erro");
    }
}

function RepassaMavericData(valor) {
    try {
        var data = valor.split("},{");

        //Repassa os valores
        for (var i = 0; i < data.length; i++) {
            var item = data[i];
            item = item.replace("{", "");
            item = item.replace("}", "");
            item = item.replace("'", "");
            item = item.split("@");
            if (item[2] == "text") {
                $(item[0]).text(item[1]);
            } else if (item[2] == "val") {
                $(item[0]).val(item[1]);
            } else if (item[2] == "html") {
                $(item[0]).html(item[1]);
            } else {
                $(item[0]).text(item[1]);
            }
        }
    } catch (e) {
        NotifyDanger(e, "Erro");
    }
}

//Maveric data
$(document).on("click", "[data-maveric-result]", function () {
    try {
        var modal = $(this).attr("data-modal-missing");
        var valor = $(this).attr("data-maveric-result");

        setTimeout(function () { RepassaMavericData(valor) }, 100);

        setTimeout(function () {
            $(modal).modal('hide');
        }, 200);
    } catch (e) {
        NotifyDanger(e, "Erro");
    }

});



//Atuo load ajax partial action
$(document).on("click", "[data-load-partial]", function () {
    renderPartialAjax($(this));
});


function renderPartialAjax(elemento) {
    var uri_target = elemento.attr("data-load-partial");
    var html_target = elemento.attr("data-html-target");
    
    
    if (!elemento.hasClass("carregado")) {
        $(html_target).html(HTML_LOAD);
        $.get(uri_target, function (data) {
            if (!elemento.hasClass("conteudo-carregado")) {
                $(html_target).html(data);
                elemento.addClass("conteudo-carregado");
            }
        }).done(function (data) {
            elemento.addClass("carregado");
        }).fail(function (data) {
            var erro = HTML_ERRO.replace("%MOTIVO_ERRO%", data.responseText);
            $(html_target).html(erro);
            elemento.removeClass("carregado");
        });
    }
}

function GetInfosAjax(url) {
    $.get(url, function (data) {
        if (data.hasErro == true) {
            NotifyDanger("Erro: " + data.mensagem);
        } else {
            var maveric_data = data.maveric_data;
            if (typeof maveric_data != "undefined") {
                RepassaMavericData(maveric_data);
            }
        }
    }).done(function (data) {
        if (data.hasErro == false && data.mensagem != "Ok") {
            NotifyInfo(data.mensagem);
        }
    }).fail(function () {
        NotifyDanger("Não foi possível carregar o contéudo da URL " + url);
    }).always(function () {

    });
}

$(function () {
    $("[data-auto-load=true]").each(function () {
        renderPartialAjax($(this));
    });
});