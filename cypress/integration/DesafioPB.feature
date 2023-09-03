Feature: Desafio Parana Banco

    Como usuario, desejo acessar o site fornecido
    Para que possa realizar os requisitos do desafio
    
    Scenario: Clicar em 3 botoes coloridos
        Given que eu acesso o site
        And desejo clicar nos 3 botoes coloridos
        When clico no botao azul
        And clico no botao vermelho
        Then clico no botao verde
        
    Scenario: Clicar em todos os botoes edit
        Given que eu acesso o site
        And desejo clicar em todos os botoes edit da tabela
        Then clico em todos os botoes edit da tabela

    Scenario: Clicar em todos os botões delete
        Given que eu acesso o site
        And desejo clicar em todos os botoes delete da tabela
        Then clico em todos os botoes delete da tabela