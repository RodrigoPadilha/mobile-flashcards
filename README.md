os usuários poderão criar diferentes categorias de flashcards chamadas de "baralhos", 
adicionar flashcards a esses baralhos, 
fazer os quizes nestes baralhos. 

# Requisistos específicos

- Permita que usuários criem um baralho que poderá conter um número ilimitado de cartões.
- Permita que usuários adicionem um cartão a um específico baralho.
- A frente do cartão pode exibir uma pergunta ou questão.
- A traseira do cartão deve exibir a resposta.
- Os usuários devem estar aptos a se testarem em um baralho específico e receberem uma pontuação quando eles concluírem o baralho.
- Os usuários devem receber uma notificação para lembrá-los de estudar, caso eles não tenham feito isso no dia.

# Views
Sua aplicação deve possuir, no mínimo, cinco views.

## Lista de Baralhos(View padrão)
- exibe o título de cada baralho
- exibe o número de cartões em cada baralho

## Baralho individual
- exibe o título do baralho
- exibe o número de cartões em um baralho
- exibe uma opção para começar um quiz no baralho
- uma opção de adicionar uma nova pergunta ao baralho

## View do quiz
- exibe a pergunta do cartão
- uma opção de visualizar a resposta (virar o cartão) clicando em Answer
- um botão "Correto" para o usuário clicar caso ele tenha acertado a questão de acordo com a resposta que tinha em mente
- um botão "Incorreto" para o usuário clicar caso ele tenha errado a questão de acordo com a resposta que tinha em mente
- o número de cartões que faltam para terminar o quiz
- exibe a porcentagem correta assim que o quiz é completado

## View do novo baralho
- opção de inserir o título do novo baralho
- opção de enviar o novo título do baralho e assim criar o baralho

## View de nova pergunta
- opção de inserir uma pergunta
- opção de inserir uma resposta
- btn de enviar a nova pergunta e assim criar um cartão