# 🧩 API REST – Sistema de Agendamento de Salas (Spring Boot)

Este é o **backend** do projeto de **agendamento de salas**, desenvolvido em **Java 17** com **Spring Boot 3**, que fornece os dados e operações para o frontend em **React**.

O sistema permite **gerenciar salas e agendamentos**, incluindo criação, atualização, exclusão e listagem.  
A comunicação entre frontend e backend é feita via **API RESTful**.

---

## 📋 Sumário

- [🎯 Objetivo do Projeto](#-objetivo-do-projeto)
- [⚙️ Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [🏗️ Estrutura do Projeto](#️-estrutura-do-projeto)
- [🚀 Como Executar o Projeto](#-como-executar-o-projeto)
- [📚 Endpoints da API](#-endpoints-da-api)
  - [🏫 Salas](#-salas)
  - [📅 Agendamentos](#-agendamentos)
- [🧠 Enumerações (Enums)](#-enumerações-enums)
- [🧩 Camadas do Sistema](#-camadas-do-sistema)
- [🧪 Testes e Validação](#-testes-e-validação)
- [💡 Melhorias Futuras](#-melhorias-futuras)
- [👨‍💻 Autor](#-autor)
- [📝 Licença](#-licença)

---

## 🎯 Objetivo do Projeto

Este desafio técnico visa demonstrar:
- Conhecimento em **Java** e **Spring Boot**
- Estruturação limpa de um **projeto RESTful**
- Uso de **camadas (Controller, Service, Repository, Model)**
- Boas práticas de desenvolvimento
- Integração com **frontend React**

A API gerencia:
- **Salas** com seus dados e status
- **Agendamentos** vinculados a uma sala específica

---

## ⚙️ Tecnologias Utilizadas

| Categoria | Tecnologia |
|------------|-------------|
| Linguagem | Java 17 |
| Framework | Spring Boot 3.x |
| Banco de Dados | H2 (em memória) |
| Dependências | Spring Web, Spring Data JPA, Lombok |
| Persistência | JPA / Hibernate |
| Testes | Spring Boot Starter Test |
| Build Tool | Maven |
| Identificadores | UUID |
| IDE recomendada | IntelliJ IDEA ou VS Code com Extensão Java |

---

## 🏗️ Estrutura do Projeto

```
├── src/
│ ├── main/
│ │ ├── java/com/exemplo/salas/
│ │ │ ├── controller/
│ │ │ │ ├── SalaController.java
│ │ │ │ └── AgendamentoController.java
│ │ │ │
│ │ │ ├── service/
│ │ │ │ ├── SalaService.java
│ │ │ │ └── AgendamentoService.java
│ │ │ │
│ │ │ ├── repository/
│ │ │ │ ├── SalaRepository.java
│ │ │ │ └── AgendamentoRepository.java
│ │ │ │
│ │ │ ├── model/
│ │ │ │ ├── Sala.java
│ │ │ │ ├── Agendamento.java
│ │ │ │ └── enums/
│ │ │ │ ├── StatusSala.java
│ │ │ │ ├── Turno.java
│ │ │ │ └── Horario.java
│ │ │ │
│ │ │ └── SalasApplication.java
│ │ │
│ │ └── resources/
│ │ ├── application.properties
│ │ └── data.sql (opcional)
│ │
│ └── test/
│ └── com/exemplo/salas/
│ └── SalaControllerTest.java (exemplo)
│
└── pom.xml
```


---

## 🚀 Como Executar o Projeto

### 🔧 Pré-requisitos
- **Java 17+**
- **Maven 3.8+**
- (Opcional) **Postman** para testar a API

### ▶️ Passos para rodar

1. Clone o repositório:
   ```bash
   git clone https://github.com/seuusuario/sistema-salas-backend.git
   cd sistema-salas-backend
2. Compile e execute:
    ```bash
    mvn spring-boot:run
3. Acesse no navegador:
    ```bash
    http://localhost:8080/api
4. Console H2 (para visualizar dados):
    ```bash
    http://localhost:8080/h2-console
    ```
    - JDBC URL: jdbc:h2:mem:testdb

    - Username: sa

    - Password: (em branco)

## 📚 Endpoints da API
### 🏫 SALAS
| Método   | Endpoint            | Descrição                          |
| -------- | ------------------- | ---------------------------------- |
| `GET`    | `/api/salas`        | Lista todas as salas               |
| `GET`    | `/api/salas/{id}`   | Retorna uma sala específica        |
| `POST`   | `/api/salas`        | Cria uma nova sala                 |
| `PUT`    | `/api/salas/{id}`   | Atualiza uma sala existente        |
| `DELETE` | `/api/salas/{id}`   | Exclui uma sala                    |
| `GET`    | `/api/salas/status` | Lista os status disponíveis (enum) |

### 📦 Exemplo de criação de sala:
    {
        "descricao": "Laboratório de Informática",
        "andar": "3º Andar",
        "capacidade": 40,
        "status": "ATIVA"
    }

### 📅 AGENDAMENTOS
| Método   | Endpoint                 | Descrição                         |
| -------- | ------------------------ | --------------------------------- |
| `GET`    | `/api/agendamentos`      | Lista todos os agendamentos       |
| `GET`    | `/api/agendamentos/{id}` | Retorna um agendamento específico |
| `POST`   | `/api/agendamentos`      | Cria um novo agendamento          |
| `PUT`    | `/api/agendamentos/{id}` | Atualiza um agendamento           |
| `DELETE` | `/api/agendamentos/{id}` | Exclui um agendamento             |

### 📦 Exemplo de criação de agendamento:
    {
        "salaId": "f91c8d9c-9a10-4adf-bf00-3cbe1b1b5f9b",
        "data": "2025-11-10",
        "turno": "MANHA",
        "horario": "A",
        "descricao": "Aula teórica de Anatomia Humana - Turma 55A123B"
    }

### Enumerações (Enums)

| Valor           | Descrição                |
| --------------- | ------------------------ |
| `ATIVA`         | Sala disponível para uso |
| `INATIVA`       | Sala desativada          |
| `EM_MANUTENCAO` | Sala em manutenção       |

### 🧩 Camadas do Sistema

🔹 Model

Contém as entidades principais:
```
Sala

Agendamento

🔹 Repository

Interfaces JPA para persistência automática:

SalaRepository

AgendamentoRepository

🔹 Service

Regras de negócio e validação:

SalaService

AgendamentoService

🔹 Controller

Endpoints REST que expõem os serviços:

SalaController

AgendamentoController

## 👨‍💻 Autor

Desenvolvido por: Wastenio da Silva Rocha

Contato: wastenio.silva@gmail.com

LinkedIn: https://linkedin.com/in/wastenio-da-silva-rocha

## 📝 Licença

Este projeto foi desenvolvido para fins de avaliação técnica e aprendizado.
Uso livre para fins educacionais e de demonstração.