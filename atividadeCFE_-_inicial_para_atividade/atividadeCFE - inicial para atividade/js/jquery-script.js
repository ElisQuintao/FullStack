//efeito de esconder formulário de cadastro
// $(document).ready(function(){} inicializa o Jquery , dentro das chaves colocamos as ações.
//$("#botao-cadastrar").click(function() qdo esse botão for clicado ele vai chamar as ações inseridas dentro das chaves
// $("#form-cadastrar").slideToggle("slow"); mostra ou esconde o formulario de cadastro.
//$("#section-login").slideToggle("slow"); mostra, se tiver escondido e esconde, se tiver visivel, o formulario de login
//$("#botao-cadastrar").hide(); faz sumir o botao com id botao-cadastrar.
$(document).ready(function(){
    $("#botao-cadastrar").click(function() {
        $("#form-cadastrar").slideToggle("slow");
        $("#section-login").slideToggle("slow");
        $("#botao-cadastrar").hide();
    });


});
