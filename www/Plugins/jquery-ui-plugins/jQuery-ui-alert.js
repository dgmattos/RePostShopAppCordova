function JqUi_Alert(message, title) {
    if (!title) {
        title = 'Aviso';
    }
        

    if (!message) {
        message = 'Nenhuma mesnagem foi informada!';
    }
        

    $('<div></div>').html(message).dialog({
        title: title,
        resizable: false,
        modal: true,
        buttons: {
            'Ok': function () {
                $(this).dialog('close');
            }
        }
    });
}


