$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000')
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00000-000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            endereço: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            cep: {
                required: true
            }
        },

        messages: {
            nome: 'Por favor, insira seu nome',
            endereço:'Por favor, insira seu endereço',
            email: 'Por favor, insira seu e-mail',
            telefone: 'Por favor, insira seu telefone',
            cpf:'Por favor, insira seu cpf',
            cep:'Por favor, insira seu cep'
        },

        submitHandler: function (form) {
            alert(`Cadastro concluído`);
            nome.val();
            email.val();
            telefone.val();
            cpf.val();
            endereco.val();
            cep.val();
        },

        invalidHandler: function (evento, validador) {
            const camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Exitem ${camposIncorretos} campos incorretos ou vazios`);
            }
        }
    })
})