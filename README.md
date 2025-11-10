# 🧩 Desafio Técnico – Sistema de Gerenciamento de Salas

## 🏁 Visão Geral
Este projeto foi desenvolvido como parte de um desafio técnico fullstack, com o objetivo de criar um sistema completo de gerenciamento de salas.
A aplicação permite o cadastro, listagem, edição e exclusão de salas, bem como o controle de status (ex: ATIVA, INATIVA, EM USO), com integração total entre o backend (Spring Boot) e o frontend (React + Bootstrap).

O sistema foi estruturado com foco em boas práticas, componentização, uso de hooks reutilizáveis, validações, e integração via API REST.

## 🧱 Estrutura do Projeto

O repositório contém dois diretórios principais:
```
📦 projeto-salas/
├── backend/      # API REST com Spring Boot + JPA + H2/PostgreSQL
└── frontend/     # Interface web desenvolvida em React + Bootstrap
```
## 🔹 Backend – /backend

API REST desenvolvida em Java 17 + Spring Boot, responsável pelo gerenciamento de salas e integração com o frontend.
Inclui endpoints para CRUD de salas e um endpoint específico para listar os valores do enum de status.

### Principais Tecnologias:
- Spring Boot (Web, JPA, Validation)

- Spring Data JPA (com H2 ou PostgreSQL)

- Lombok

- Swagger (para documentação da API)

- CORS configurado para integração com o frontend

### Principais Tecnologias:
- Spring Boot (Web, JPA, Validation)

- Spring Data JPA (com H2 ou PostgreSQL)

- Lombok

- Swagger (para documentação da API)

- CORS configurado para integração com o frontend

### Funcionalidades:

- CRUD completo de salas

- Enum StatusSala (ATIVA, INATIVA, EM_USO)

- Endpoint para listar status dinamicamente (/api/salas/status)

- Validação de campos obrigatórios

- Tratamento de exceções e respostas padronizadas (ResponseEntity)
#### 📘 Documentação detalhada do backend: backend/README.md

## 🔹 Frontend – /frontend
Aplicação React + Bootstrap, desenvolvida com componentes reutilizáveis e hooks customizados para comunicação com a API.
Permite gerenciar salas com formulários validados e interface responsiva.

### Principais Tecnologias:
- React 18 (com Hooks)

- React Bootstrap

- Axios (para consumo da API)

- React Router (para navegação)

- ESLint + Prettier (padrão de código)

### Funcionalidades:

- Tela de listagem de salas

- Formulário para criação e edição de salas

- Dropdown dinâmico de status (valores carregados do backend)

- Feedback de sucesso e erro

- Estrutura modular e de fácil manutenção
#### Documentação detalhada do frontend: frontend/README.md

## 🚀 Como Executar o Projeto

### ✅ Pré-requisitos

Java 17+

Node.js 18+

Maven

npm ou yarn

### ⚙️ Passo a Passo

#### 1️⃣ Clonar o repositório
```
git clone https://github.com/seu-usuario/projeto-salas.git
cd projeto-salas
```
#### 2️⃣ Iniciar o Backend
```
cd backend
mvn spring-boot:run
```
A API estará disponível em:
👉 http://localhost:8080

#### 3️⃣ Iniciar o Frontend
```
cd ../frontend
npm install
npm start
```
A aplicação estará disponível em:
👉 http://localhost:3000

## 🔗 Integração Frontend ↔ Backend
| Recurso        | Método | Endpoint            | Descrição                               |
| -------------- | ------ | ------------------- | --------------------------------------- |
| Listar salas   | GET    | `/api/salas`        | Retorna todas as salas cadastradas      |
| Buscar por ID  | GET    | `/api/salas/{id}`   | Retorna os dados de uma sala            |
| Criar sala     | POST   | `/api/salas`        | Cria uma nova sala                      |
| Atualizar sala | PUT    | `/api/salas/{id}`   | Atualiza uma sala existente             |
| Excluir sala   | DELETE | `/api/salas/{id}`   | Remove uma sala                         |
| Listar status  | GET    | `/api/salas/status` | Retorna os valores do enum `StatusSala` |

## 🧠 Conceitos Aplicados

- Separação de responsabilidades (Frontend/Backend)

- Boas práticas RESTful

- Validação e tratamento de erros

- Consumo de API com Axios

- Uso de Hooks e componentes reutilizáveis

- Responsividade com Bootstrap

- Conversão e formatação de enums no frontend

## 🧪 Possíveis Extensões Futuras

- Autenticação com JWT

- Filtro e paginação de salas

- Dashboard com métricas de uso

- Testes automatizados (JUnit / Jest)

- Integração com banco PostgreSQL em produção

## 👨‍💻 Autor

Desenvolvido por: Wastenio da Silva Rocha

Contato: wastenio.silva@gmail.com

LinkedIn: https://linkedin.com/in/wastenio-da-silva-rocha

## 📝 Licença

Este projeto foi desenvolvido para fins de avaliação técnica e aprendizado.
Uso livre para fins educacionais e de demonstração.