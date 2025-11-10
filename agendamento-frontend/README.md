# 🏫 Sistema de Agendamento de Salas – Frontend (React)

Este é o **frontend** do desafio de desenvolvimento de um sistema simples de **agendamento de salas**, desenvolvido em **React** e integrado a uma **API REST Java Spring Boot**.

O objetivo é exibir um **calendário interativo com os agendamentos** das salas, além de permitir o **cadastro e gerenciamento de salas** de forma intuitiva e responsiva.

---

## 📋 Sumário

- [🧠 Visão Geral](#-visão-geral)
- [⚙️ Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [📂 Estrutura do Projeto](#-estrutura-do-projeto)
- [🚀 Como Executar o Projeto](#-como-executar-o-projeto)
- [🔗 Integração com o Backend](#-integração-com-o-backend)
- [🖥️ Principais Funcionalidades](#️-principais-funcionalidades)
- [📸 Capturas de Tela (opcional)](#-capturas-de-tela-opcional)
- [📦 Scripts Disponíveis](#-scripts-disponíveis)
- [💡 Melhorias Futuras](#-melhorias-futuras)

---

## 🧠 Visão Geral

O projeto permite visualizar, cadastrar e gerenciar **salas e agendamentos** de uma instituição (como universidade ou empresa).  
Os **agendamentos** são exibidos em um **calendário interativo**, e o usuário pode visualizar os detalhes, criar novos eventos e editar/excluir existentes.

A API backend (Java + Spring Boot) fornece os dados das salas e agendamentos via endpoints REST.

---

## ⚙️ Tecnologias Utilizadas

### 🧩 Frontend
- **React 18+**
- **React Bootstrap** – para componentes visuais e modais
- **Axios** – para integração com a API REST
- **FullCalendar (React)** – para exibição do calendário de agendamentos
- **React Hooks (useState, useEffect)** – gerenciamento de estado
- **ESLint + Prettier** (opcional) – padronização de código

### 🌐 Backend (integração)
- **Java 17**
- **Spring Boot 3+**
- **Spring Web / Data JPA**
- **Banco de Dados H2**
- **UUIDs** como identificadores

---

## 📂 Estrutura do Projeto

```
├── src/
│ ├── components/
│ │ ├── SalaFormModal.jsx # Modal para criação de novas salas
│ │ ├── AgendamentoModal.jsx # Modal para detalhes/edição de agendamentos
│ │ └── CalendarView.jsx # Calendário principal (FullCalendar)
│ │
│ ├── pages/
│ │ └── Home.jsx # Página principal com calendário
│ │
│ ├── services/
│ │ └── api.js # Configuração e funções para comunicação com o backend
│ │
│ ├── App.jsx # Componente raiz da aplicação
│ ├── index.js # Ponto de entrada principal
│ └── index.css # Estilos globais e ajustes visuais
│
├── public/
│ ├── index.html
│ └── favicon.ico
│
├── package.json
├── package-lock.json
└── README.md
```
---

## 🚀 Como Executar o Projeto

### 🔧 Pré-requisitos
- **Node.js** (versão 18 ou superior)
- **npm** ou **yarn**
- **Backend em execução** (API Java Spring Boot)

### ▶️ Passos para rodar o projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/seuusuario/sistema-salas-frontend.git
   cd sistema-salas-frontend

2. Instale as dependências:
   ```
   npm install

3. Configure a URL da API:

   No arquivo src/services/api.js, ajuste o endpoint base da API se necessário:
   ```
   const API_URL = 'http://localhost:8080';

4. Execute o servidor de desenvolvimento:
   ```
   npm start

5. Abra no navegador:
   ```
   http://localhost:3000
   
### 🔗 Integração com o Backend

A comunicação com a API Java Spring Boot é feita via Axios, com os seguintes endpoints:

### 🏫 Salas (/salas)

- GET /salas → Lista todas as salas

- POST /salas → Cadastra uma nova sala

- Exemplo de payload:

### Agendamentos (/agendamentos)

- GET /agendamentos → Lista todos os agendamentos

- GET /agendamentos/{id} → Detalhes de um agendamento

- POST /agendamentos → Cria um novo agendamento

- PUT /agendamentos/{id} → Atualiza um agendamento

- DELETE /agendamentos/{id} → Exclui um agendamento

## 🖥️ Principais Funcionalidades

### 🗓 Calendário de Agendamentos

- Exibe todas as reservas de salas.

- Cada evento mostra o nome da sala e a descrição do agendamento.

- Ao clicar em um evento, abre-se um modal de detalhes com:

   - Data e turno

   - Horário (A, B, C, D, E ou F)

   - Descrição

   - Botões para editar ou excluir

### 🏫 Cadastro de Salas

- Modal com formulário para adicionar novas salas.

- Campos:

   - Descrição

   - Andar

   - Capacidade

   - Status (dropdown com valores do enum ATIVA, INATIVA, EM MANUTENCAO)

- Validação simples antes do envio.

## 🔄 Atualização em tempo real
- Após criar ou editar uma sala/agendamento, o calendário é atualizado automaticament

## 📦 Scripts Disponíveis
| Comando         | Descrição                                            |
| --------------- | ---------------------------------------------------- |
| `npm start`     | Inicia o servidor de desenvolvimento                 |
| `npm run build` | Gera a versão de produção                            |
| `npm test`      | Executa os testes (caso existam)                     |
| `npm run lint`  | Verifica e corrige problemas de formatação de código |


## 👨‍💻 Autor

Desenvolvido por: Wastenio da Silva Rocha

Contato: wastenio.silva@gmail.com

LinkedIn: https://linkedin.com/in/wastenio-da-silva-rocha

## 📝 Licença

Este projeto foi desenvolvido para fins de avaliação técnica e aprendizado.
Uso livre para fins educacionais e de demonstração.