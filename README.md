# Nodemailer-Delivery
Este repositório contém um código Node.js para envio de e-mails de forma eficiente e simplificada, utilizando a biblioteca Nodemailer. Este projeto oferece uma solução fácil de implementar para integrar funcionalidades de envio de e-mails em suas aplicações Node.js. Seja para notificações, confirmações ou qualquer outra comunicação por e-mail, o NodeMailer proporciona uma integração rápida e confiável com suporte a vários serviços de envio.

# Recursos
- Configuração flexível para diferentes serviços de e-mail
- Exemplos e modelos prontos para utilização
- Suporte a anexos e HTML no corpo do e-mail
- Documentação abrangente para facilitar a implementação

# Como usar
- Clone este repositório.
- Instale as dependências.
- Crie um arquivo .env e configure suas credenciais de e-mail nesse arquivo.

## Dependências
- nodemailer | É uma das dependências mais utilizadas no mercado para envio de emails utilizando NodeJs, por isso vamos criar nosso projeto com ele.
```shell
npm install nodemailer
```
[Documentation - nodemailer](https://nodemailer.com/)


- dotenv | É utilizada para criarmos variáveis de ambiente como fator de segurança para não enviarmos informações sensíveis para o github.
```shell
npm install dotenv
```
[Documentation - dotenv](https://www.npmjs.com/package/dotenv)


## INFO
Para que nossos sistemas consigam enviar e-mails utilizando uma conta do Google é necessário criar uma Senha de app.
Crie uma Senha de Aplicativo no Gmail:

Acesse a página de Conta Google: [Google My Account](https://myaccount.google.com/)
- No painel de navegação à esquerda, clique em "Segurança".
- Na seção "Entrar na Google", clique em "Senhas de aplicativos".
- Escolha "Outro (nome personalizado)" e dê um nome para a aplicação, por exemplo, "Node.js Mailer".
- Clique em "Gerar" e será gerada uma senha específica para essa aplicação.
- Utilize essa senha no lugar da sua senha normal no código Node.js.

Atualize seu Código:
- Substitua a senha no código pelo valor gerado como a "senha de aplicativo" no passo anterior.

## Licença
Este projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE.md para obter detalhes.

## Contribuições
Contribuições são bem-vindas! Se você tiver sugestões ou encontrar problemas, sinta-se à vontade para abrir uma [issue](https://github.com/davidmarquescoder/Nodemailer-Delivery/issues) ou enviar uma [pull request](https://github.com/davidmarquescoder/Nodemailer-Delivery/pulls).