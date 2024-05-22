# App_DeuBranco

- Proposta:
O aplicativo propõe uma solução para os momentos em que você está com uma palavra na ponta da língua mas não consegue lembrar ela.
A intenção era desenvolver algo que reconheça padrões em um app que seria como um "assistente da sua memória".
Essa proposta aparece de duas formas: em "mente compartilhada" e "minha mente", a primeira tendo acesso ao banco de dados geral do aplicativo, enquanto a segunda acessa o banco de dados do usuário específico.

<img src="https://github.com/StellaOli/App_DeuBranco/blob/main/Img/Inicio.jpg" style="max-width: 75%;" alt="Inicio" />

- Funcionalidade:
A intenção era trazer as seguintes lógicas 
 - Salvar palavras chaves que o usuário envia, em seguida conferir o banco de dados geral, iterando os dados de cada coluna e verificando se a igualdade com os dados enviados pelo usuário. Usando de uma simples regra de três para gerar a porcentagem de compatibilidade de cada coluna com os dados verificados.
 - A compatibilidade é essencial no app, pois apenas colunas com porcentagem maior que 90% serão passadas para a próxima conferência. Antes de retornar uma resposta ao user, o código analisa qual coluna tem a maior taxa de compatibilidade, e retorna o nome da coluna (que seria a palavra sendo procurada) como resposta.
- No caso de não existir uma mínima compatibilidade de 90%, o app retornaria ao user que não possui a informação e que gostaria de alocar as palavras enviadas em um banco de espera, assim caso a pessoa lembre o que estava pensando a resposta é adicionada como nome da coluna, e essas informações são passadas ao banco de dados geral.

- A mesma lógica seria usada na parte "Minha mente", a única diferença é que seria acessado um banco de dados específico para o usuário, que ele montou com as próprias ideias.
 - Em sua aba, o usuário pode jogar palavras chaves sobre uma ideia que teve e quando sentir que são suficientes, descrever a ideia e salvar, isso seria salvo na área de users para que a pessoa possa acessar toda vez que fizer login.


Implementação:

- As páginas do aplicativo estão prontas, o banco de dados no firebase está funcionando, porém o código não é capaz ainda de comparar as palavras. Isso por quê o acesso a palavra pra comparação que o usuário forneceu, está sendo salva com subItem de um subDado, complicando o acesso.


Próximas Atualizações:

- Assim que o reconhecimento de padrões do banco estiver funcionando, poderei implementar a área pessoal do user.
- O banco de dados geral vai ser incrementado com as próprias informações que o app receber e o banco não possuir ainda, e também incrementado através do firebase pelo Dev.

