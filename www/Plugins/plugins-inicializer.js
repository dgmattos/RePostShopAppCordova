
function IsEmpty(valor) {

    valor = valor.replace(" ", "");

    if (typeof valor == "undefined" || valor == "" || valor == " ") {
        return true;
    } else {
        return false;
    }
}

$(document).on("focus", ".bmd-label", function () {
    var obj = $(this);
    var id = obj.attr("id");

    $("label[for=" + id + "].bmd-label-floating").addClass("is-focused");
});

$(document).on("blur", ".bmd-label", function () {
    var input = $(this).val();

    if (IsEmpty(input)) {
        var obj = $(this);
        var id = obj.attr("id");
        $("label[for=" + id + "].bmd-label-floating").removeClass("is-focused");
    }
});


$(document).on("focus", ".tel", function () {
    var t = $(this).val();
    var str = $(this).val();
    var t = str.replace(" ", "");
    if (t.length >= 14) {
        $(this).mask("(00) 00000-0000");
    } else {
        $(this).mask('(00) 0000-00000');
    }
});

$(document).on("blur", ".tel", function () {
    var str = $(this).val();
    var t = str.replace(" ", "");
    if (t.length >= 14) {
        $(this).mask("(00) 00000-0000");
    } else {
        $(this).mask("(00) 0000-00000");
    }
});


$(document).on("focus", ".date", function () {
    $(this).mask('00/00/0000');
    $(this).datepicker();
});

$(document).on("focus", ".time", function () {
    $(this).mask('00:00');
});

$(document).on("focus", ".cep", function () {
    $(this).mask('00000-000');
});

$(document).on("focus", ".money", function () {
    $(this).maskMoney({ prefix: '', allowNegative: false, thousands: '', decimal: ',', affixesStay: false, allowZero: true });
});

$(document).on("blur", ".cpf2", function () {
    var str = $(this).val();
    var t = str.replace(" ", "");
    if (t.length == 11) {
        $(this).mask('000.000.000-00');
    }
});



//Abre o dialogo de seleção
$(document).on("click", "[data-file]", function () {
    var tg = $(this).attr("data-file");
    $(tg).click();
});

//Carrega a label e o preview do arquivo
$(document).on("change", "[type=file]", function (event) {
    var leganda = $(this).attr("data-legenda");
    var file_uri = $(this).val();

    $(leganda).html("Carregando...");

    var img_origianl = $("<img/>");
    var img_preview = $("<img/>");

    img_origianl.attr("src", URL.createObjectURL(event.target.files[0]));
    img_preview.attr("src", URL.createObjectURL(event.target.files[0])).css("max-height", "350px");

    $("#original-file").html(img_origianl);
    $("#preview-file").html(img_preview);

    setTimeout(function () {
        var lbl_legenda = file_uri.replace("C:\\fakepath\\", "");

        var wImg = $("#original-file img").width();
        var hImg = $("#original-file img").height();

        $(leganda).text(lbl_legenda);
    }, 205);
});


$(document).ready(function () {
    //Input mask
    $(".date").mask("00/00/0000");
    $(".time").mask("00:00");
    $(".date").each(function () {
        $(this).datepicker();
    });
    $(".money").maskMoney({ prefix: '', allowNegative: false, thousands: '', decimal: ',', affixesStay: false, allowZero: true });

    $('[data-toggle="tooltip"]').tooltip();

    //Select-piker
    //Ajusta selects bool?
    $("option[value=true]").text("Sim");
    $("option[value=false]").text("Não");

    $('select').selectpicker();
});