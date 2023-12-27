//efeito do botão voltar ao Topo
// esse evento onclick ( lá no botão - da pag index)
// chama a função TOPO() que faz a janela rolar suavemente até a posição 0 e a esquerda do topo.
function topo(){
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    })
}

//Validação de Login
// metodo .toLowerCase transforma os caracteres em minusculas.
// variavel logado inicia com '0', usuario e senha recebe o valor digitado pelo usuario
function login() {
    var logado = 0;
    var usuario = document.getElementsByName('usuario')[0].value;
    usuario = usuario.toLowerCase();
    var senha = document.getElementById('senha').value;
    senha = senha.toLowerCase();
// inicia aqui a validação, se logado for admin e 123456 - logado vai para index e recebe o valor '1'
// se os valores digitados em usuario e senha não forem esses, logado recebe '0' e dá mensagem de erro.
    if (usuario == "admin" && senha == "123456"){
        window.location = "index.html";
        logado = 1;
    }

    if (logado == 0){
        alert("Acesso negado. Dados incorretos");
    }
}

//Ativar alert no botão cadastrar
// essa função vai emitir um alerta de cadastro com sucesso e vai redirecionar a pagina index.
function cadastro() {
    alert("Cadastro com sucesso!");
    window.location.href = "index.html";
} 
