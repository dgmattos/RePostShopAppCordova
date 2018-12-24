//Paginacao
$(document).on("click", "[data-pagination-button=true]", function () {
    var valor = $(this).val();
    var form = $(this).attr("data-submit");
    setTimeout(function () {
        $("#pagina").val(valor);
        setTimeout(function () {
            $(form).submit();
        });
    });

});