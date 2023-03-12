# bull-fronted-challenge

Backend technical challenge from toro investimentos

# Requirements
 - [Node 18.15](https://nodejs.org/en/)
 - [backend](https://github.com/silasstoffel/bull-back-challenge#bull-back-challenge)
 - Porta 4200 livre (o backend está liberando cors por segurança apenas para http://localhost:4200)
## About

Frontend com a proposta de resolver user story **TORO-001**.

## Setup

Faça setup do [backend](https://github.com/silasstoffel/bull-back-challenge#bull-back-challenge), logo após inicie o setup do frontend.

```shell
# install dependencies
npm i

# start app
npm run start
```

Para acessar a app use esse link [http://localhost:4200](http://localhost:4200)

Relação de contas para poder testar:

**Senha para acesso todos usuários: 123456**

```json
[
	{
		"email" : "account1@bull.com.br",
		"blocked" : false,
		"name" : "Account 1"
	},
	{
		"email" : "account2@bull.com.br",
		"blocked" : false,
		"name" : "Account 2"
	},
	{
		"email" : "account3@bull.com.br",
		"blocked" : false,
		"name" : "Account 3"
	},
	{
		"email" : "account4@bull.com.br",
		"blocked" : true,
		"name" : "Account 4"
	}
]

```

## Techs

Essa aplicação foi projetada seguindo alguns princípios e techs como:

- SPA
- Jwt
- Components
- Auth
- Localstorage
