/* 
 * Copyright (c) 2018 Maveric Tecnologia
 * Todos os direitos deste programa são reservados a Maveric Tecnologia
 * Criada em:  24/12/2018
 */


function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#preview-logo').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}
$("[data-chage-file]").click(function(e){
    
    var tg = $(this).attr("data-chage-file");
    $(tg).click();
});

$("[type=file]").change(function(){
    readURL(this);
});