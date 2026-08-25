# Chat Bot usando a API do Gemini

## Sobre

Este é um projeto prático desenvolvido com o objetivo de integrar uma aplicação web à inteligência artificial Gemini.

O projeto utiliza JavaScript no Front-end para realizar a comunicação com um Back-end desenvolvido em Python, responsável por processar as requisições e se comunicar com a API do Gemini.

A chave da API é configurada através de variáveis de ambiente, evitando que informações sensíveis sejam expostas diretamente no código.

## Funcionalidades

-  Envio de mensagens para o Chat Bot.
-  Integração com a API do Gemini.
-  Comunicação entre Front-end e Back-end.
-  Envio de requisições utilizando uma API desenvolvida com Flask.
-  Utilização de variáveis de ambiente para armazenar a chave da API.
-  Geração dinâmica de respostas utilizando inteligência artificial.

## Tecnologias

- JavaScript - Desenvolvimento do Front-end e comunicação com a API.
- Python - Desenvolvimento do Back-end.
- Flask - Criação da API e gerenciamento das rotas.
- Google Gemini API - Inteligência artificial responsável pelas respostas.
- HTML - Estrutura da interface.
- CSS - Estilização da aplicação.

## Requisitos

Para executar o projeto localmente, é necessário possuir:

- Python instalado.
- Uma chave de API do Google Gemini.
- As dependências presentes no arquivo requirements.txt.

### Instalação das dependências

Utilize o seguinte comando:


pip install -r requirements.txt


### Configuração das variáveis de ambiente

Crie um arquivo chamado .env na raiz do projeto.

Adicione sua chave da API:

NUMBER="SUA_CHAVE_API"


Após configurar as dependências e a variável de ambiente, execute o Back-end:

python app.py

Com o servidor em execução, abra o Front-end para utilizar o Chat Bot.

## License

MIT
