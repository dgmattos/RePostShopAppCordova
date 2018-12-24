
$(document).on("keyup", "[data-autocomplete]", function () {
    
    var url = $(this).attr("data-autocomplete");
    var campo = $(this);
    var busca = $(this).val();
    if (busca.length >= 2) {
        $.get(url, { busca: busca }, function (data) {
            if (data.hasError == false) {
                campo.autocomplete({
                    source: data.valores
                });
            } else {
                NotifyDanger(data.Message);
            }
        }).fail(function (data) {
            NotifyDanger(data.responseText, "Erro");
        });
    }
});
