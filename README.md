#FlashCards
## Visão Geral do projeto:
Nesta aplicação o usuário poderá definir categorias para estudo que são representados em um Deck. Em cada deck será possível definir cartões que devem conter perguntas e respostas.
Ao executar a aplicação é exibido a aba que possui a lista de Decks criados pelo usuário. Em cada item da lista o nome do deck e a quantidade de cartões (perguntas) incluídos a neste deck. Também é possível excluir um deck e todas as suas cartas, essa opção é definitiva e não permite rollback.
Na aba seguinte, o usuário pode criar um novo Deck para futuramente receber novos cards.

Ao clicar em um item da lista o usuário poderá ver as informações deste deck. As opções de inserir um novo cartão de perguta/resposta e de iniciar o estudo estão disponíveis através de botões.

Na view de adicionar um cartão, basta que o usuário informe uma pergunta e resposta e clique no botão confirmar

O estudo é dado pela exibição da pergunta, então após pensar na resposta, o usuário pode visualizar a resposta clicando no botão Exibir Resposta. na sequência o usuáriuo deve informar se a sua respota foi correta ou não, esse processo deve ser repetido até o fim das questões. Quando o estudo acabar, estatísticas de desempenho será exibido para o usuário.

Tanto Decks quanto cartões são persistidos localmente, permitindo a visualização futura dos itens criados.

## Requisistos específicos

- Permita que usuários criem um baralho que poderá conter um número ilimitado de cartões.
- Permita que usuários adicionem um cartão a um específico baralho.
- A frente do cartão pode exibir uma pergunta ou questão.
- A traseira do cartão deve exibir a resposta.
- Os usuários devem estar aptos a se testarem em um baralho específico e receberem uma pontuação quando eles concluírem o baralho.
- Os usuários devem receber uma notificação para lembrá-los de estudar, caso eles não tenham feito isso no dia.

## Views
Sua aplicação deve possuir, no mínimo, cinco views.

### Lista de Baralhos(View padrão)
- exibe o título de cada baralho
- exibe o número de cartões em cada baralho

### Baralho individual
- exibe o título do baralho
- exibe o número de cartões em um baralho
- exibe uma opção para começar um quiz no baralho
- uma opção de adicionar uma nova pergunta ao baralho

### View do quiz
- exibe a pergunta do cartão
- uma opção de visualizar a resposta (virar o cartão) clicando em Answer
- um botão "Correto" para o usuário clicar caso ele tenha acertado a questão de acordo com a resposta que tinha em mente
- um botão "Incorreto" para o usuário clicar caso ele tenha errado a questão de acordo com a resposta que tinha em mente
- o número de cartões que faltam para terminar o quiz
- exibe a porcentagem correta assim que o quiz é completado

### View do novo baralho
- opção de inserir o título do novo baralho
- opção de enviar o novo título do baralho e assim criar o baralho

### View de nova pergunta
- opção de inserir uma pergunta
- opção de inserir uma resposta
- btn de enviar a nova pergunta e assim criar um cartão

###Extras
- Remover Deck e seus respectivos cards
- Remover Cartão
- Gerador de ID

### Rodando app:
Certifique-se de ter instalado em sua máquina o Node.js. Você pode verificar a versão do node com o comando `node -v`, o mesmo vale para o npm (`npm -v`).
També é preciso utilizar as ferramentas da Expo para execução do app. Feito isso:
- Clone o projeto para sua máquina local: `git clone https://github.com/RodrigoPadilha/Readable`
- Entre no diretório do projeto: `cd mobile-flashcards`
- Instale todas as denpendências com o `npm install` ou `yarn install`
- Rode a aplicação com `yarn start`
- Aceitar os avisos que forem exibidos no dispositivo e autorizar as permissões no app Expo.

