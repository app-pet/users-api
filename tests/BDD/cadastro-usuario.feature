Funcionalidade: Gestão de usuário
    Funcionalidade onde o usuário realiza a manutenção de seu cadastro

Cenario: Cadastrar usuário

    Dado o usuário não possui um cadastro
    E usuário acessa a funcionalidade de cadastro da plataforma
    Quando usuário preenche os campos de cadastro
    E envia os dados
    Então o cadastro será realizado
    E uma notificação de confirmação é exibida

Cenario: Alterar usuário

    Dado o usuário possui um cadastro
    E usuário acessa a funcionalidade de cadastro da plataforma
    Quando usuário altera os campos de cadastro
    E envia os dados
    Então a atualização do cadastro será realizada
    E uma notificação de confirmação é exibida

Cenario: Encerrar conta do usuário

    Dado o usuário possui um cadastro
    E usuário acessa a funcionalidade de cadastro da plataforma
    Quando clica em encerrar conta
    E clica em Confirmar
    Então a atualização do cadastro será realizada
    E uma notificação de confirmação é exibida