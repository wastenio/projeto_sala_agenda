# 🧩 Desafio Técnico – Sistema de Gerenciamento de Salas

## 📖 Contexto
Este projeto foi desenvolvido como parte de um desafio técnico fullstack, cujo objetivo é avaliar a capacidade de construir uma aplicação completa, com backend, frontend e integração entre ambos, aplicando boas práticas de desenvolvimento, organização de código e usabilidade.

O desafio propõe a criação de um sistema de gerenciamento de salas, permitindo cadastrar, editar, listar e excluir salas, além de controlar seus status (por exemplo: ATIVA, INATIVA, EM USO).

## 🎯 Objetivo do Desafio

Desenvolver uma aplicação web fullstack composta por:

- Um backend (API REST) que disponibilize os dados e operações sobre salas.

- Um frontend que consuma essa API, exibindo as informações de forma intuitiva e responsiva.

O foco é demonstrar:

- Domínio de Spring Boot e React

- Organização e boas práticas de arquitetura

- Capacidade de integração entre frontend e backend

- Atenção à qualidade do código e experiência do usuário

### 🧱 Estrutura do Repositório
```
📦 projeto-salas/
├── backend/      # API REST – Spring Boot + JPA
└── frontend/     # Interface Web – React + Bootstrap

```

### ⚙️ Funcionalidades Principais
🔹 Backend

- CRUD completo de salas

- Enum StatusSala com valores controlados: ATIVA, INATIVA, EM_USO

- Endpoint específico para listar os status do enum (/api/salas/status)

- Validações de entrada e tratamento de exceções

- Uso de ResponseEntity e boas práticas REST

- CORS habilitado para integração com o frontend

🔹 Frontend

- Tela de listagem de salas

- Formulário para criação e edição

- Dropdown dinâmico de status (carregado do backend)

- Feedback visual de sucesso e erro

- Interface responsiva utilizando React Bootstrap

- Hooks personalizados para comunicação com a API (via Axios)

### 🧰 Tecnologias Utilizadas

### Backend

- Java 17

- Spring Boot 3

- Spring Web / Data JPA / Validation

- Lombok

- H2 Database (modo dev)

- Swagger OpenAPI

- Maven

### Frontend

- React 18

- React Bootstrap

- Axios

- React Router DOM

- ESLint / Prettier

## 🚀 Como Executar o Projeto

## 🔹 Frontend – /frontend

### ✅ Pré-requisitos

- Java 17+

- Node.js 18+

- Maven

- npm ou yarn

### 1️⃣ Clonar o repositório
```
git clone https://github.com/seu-usuario/projeto-salas.git

cd projeto-salas
```

### 2️⃣ Iniciar o Backend
```
cd backend
mvn spring-boot:run
```
A API estará disponível em:
👉 http://localhost:8080

### 3️⃣ Iniciar o Frontend
```
cd ../frontend
npm install
npm start
```
A aplicação estará disponível em:
👉 http://localhost:3000

## 🔗 Endpoints Principais
| Método | Endpoint            | Descrição                               |
| :----- | :------------------ | :-------------------------------------- |
| GET    | `/api/salas`        | Lista todas as salas                    |
| GET    | `/api/salas/{id}`   | Busca uma sala pelo ID                  |
| POST   | `/api/salas`        | Cria uma nova sala                      |
| PUT    | `/api/salas/{id}`   | Atualiza uma sala existente             |
| DELETE | `/api/salas/{id}`   | Exclui uma sala                         |
| GET    | `/api/salas/status` | Retorna os valores do enum `StatusSala` |

## 🧠 Critérios de Avaliação
| Critério                                | Descrição                                                      |
| --------------------------------------- | -------------------------------------------------------------- |
| **Organização do código**               | Estrutura clara, separação de camadas, nomenclaturas adequadas |
| **Boas práticas REST**                  | Uso correto de métodos HTTP e padrões de resposta              |
| **Qualidade da interface**              | Layout limpo, responsivo e intuitivo                           |
| **Integração entre frontend e backend** | Comunicação fluida via API                                     |
| **Validação e tratamento de erros**     | Feedback apropriado em erros e sucesso                         |
| **Uso de componentes reutilizáveis**    | Modularidade e reaproveitamento de código                      |
| **Documentação**                        | Clareza e completude dos READMEs                               |

## 📦 Entrega Esperada

O repositório deve conter:

1. Código fonte do backend (Spring Boot)

2. Código fonte do frontend (React)

3. Arquivos README.md separados em:

    - backend/README.md → detalhes da API

    - frontend/README.md → detalhes da interface

    - README.md (este arquivo) → visão geral do desafio

4. Instruções completas para execução local do sistema

## 📚 Aprendizados Demonstrados
- Implementação de API RESTful com Java e Spring Boot

- Consumo de API com React + Axios

- Conversão e exibição de enums no frontend

- Componentização e hooks personalizados

- Criação de formulários dinâmicos e controlados

- Integração fullstack completa

## 👨‍💻 Autor

Desenvolvido por: Wastenio da Silva Rocha

Contato: wastenio.silva@gmail.com

LinkedIn: https://linkedin.com/in/wastenio-da-silva-rocha