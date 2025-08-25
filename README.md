# 💰 Ganho de Capital — Calculadora de Imposto para Operações no Mercado Financeiro

## 👁️ Visão Geral

Este projeto implementa uma calculadora de imposto para operações de compra e venda no mercado financeiro de ações. O foco está em fornecer uma solução simples, elegante e fácil de manter, que calcula corretamente o imposto sobre ganhos de capital conforme as regras do desafio.

---

## 🏗️ Decisões Técnicas e Arquiteturais

- **Organização modular:**  
  A lógica principal está encapsulada dentro do módulo `Business`. A classe `Calculator` (`app/business/calculator.js`) orquestra as operações, enquanto a OperationFactory (`app/business/operationFactory.js`) é responsável por criar instâncias de operações (`BuyOperation` e `SellOperation`) localizadas em `app/business/operations/`. Essa organização modular facilita a manutenção e possíveis extensões futuras.

- **Separação clara de responsabilidades:**  
  O CLI (`bin/cli.js`) é responsável apenas pela entrada e saída, lendo arquivos JSON e imprimindo os resultados. Toda a lógica de cálculo de imposto está isolada na classe `Calculator` e nas classes de operação.

- **Testes automatizados:**  
  Utilizamos Jest para garantir a robustez da solução, cobrindo casos de compra, venda com lucro ou prejuízo, além das regras de isenção de imposto.

- **Uso de Ruby puro:**  
  Não foram usados frameworks web, apenas bibliotecas necessárias para teste (Jest). O projeto foca em lógica de negócio e processamento de JSON/arquivos.

---

## 🗂️ Estrutura do Projeto

```bash
/capital_gain
├── 📂 app/
│   └── 📂 business/
│       ├── 📜 calculator.js             # Orquestra o cálculo por operação
│       ├── 📜 operationFactory.js       # Factory para criar operações (buy/sell)
│       └── 📂 operations/
│           ├── 📜 buyOperation.js       # Lógica de compra (atualiza PM e quantidade)
│           └── 📜 sellOperation.js      # Lógica de venda (lucro/prejuízo, isenção, imposto)
├── 📂 bin/
│   └── 📜 cli.js                         # Script CLI (lê arquivos JSON e imprime os impostos)
├── 📂 data/
│   ├── 📄 case_1.txt
│   ├── 📄 case_2.txt
│   ├── 📄 case_3.txt
│   ├── 📄 case_4.txt
│   ├── 📄 case_5.txt
│   ├── 📄 case_6.txt
│   ├── 📄 case_7.txt
│   ├── 📄 case_8.txt
│   └── 📄 case_9.txt
├── 📂 test/
│   ├── 📂 business/
│   │   ├── 📜 calculator.test.js         # Testes do orquestrador
│   │   ├── 📜 operationFactory.test.js   # Testes da factory
│   │   └── 📂 operations/
│   │       ├── 📜 buyOperation.test.js   # Testes de compra
│   │       └── 📜 sellOperation.test.js  # Testes de venda
│   ├── 📂 fixtures/
│   │   ├── 📄 case_1.txt                 # Entradas usadas pelos testes de CLI
│   │   └── 📄 case_2.txt
│   └── 📜 jest.config.js                  # Configuração do Jest
├── 🐳 Dockerfile
├── 📄 docker-compose.yml
├── 📄 package.json
├── 📄 package-lock.json
└── 📄 README.md
```

---

## 🛠️ Tecnologias e Bibliotecas

- **Node.js 20** — linguagem principal, por sua clareza e facilidade para manipulação de dados.
- **Jest** — biblioteca para testes unitários e de integração, que garante qualidade e manutenibilidade do código.

Não foram utilizadas outras bibliotecas para manter a solução simples e focada.

---

## ▶️ Como Rodar o Projeto sem Docker

1. **Instale as dependências:**

```bash
npm install
```

2. **Executar o programa CLI com arquivos de dados:**

```bash
node bin/cli.js data/case_1.txt data/case_2.txt
```
- O programa lê as operações linha a linha nos arquivos indicados e imprime o imposto devido para cada operação em formato JSON.
- Você pode passar múltiplos arquivos como argumentos.

3. **Executar os testes**

```bash
npm test
```
_Os testes estão localizados em `test/` e cobrem os principais cenários do cálculo do imposto_.


## 🐳 Como Rodar o Projeto com Docker e Docker Compose
_Se preferir usar containerização, siga os passos abaixo_:

1. **Certifique-se de ter o Docker e o Docker Compose instalados**
- Docker Desktop (Windows/Mac) já vem com Docker Compose integrado.
- Linux pode precisar instalar Docker Compose separadamente.

_Verifique_:
```bash
docker --version
docker compose version
```

2. **Construir a imagem Docker:**

```bash
docker compose build
```
3. **Rodar o programa CLI dentro do container:**

- _Um arquivo_:

```bash
docker compose run --rm app data/case_1.txt
```
- _Você pode passar múltiplos arquivos como argumentos_.

```bash
docker compose run --rm app data/case_1.txt data/case_2.txt 
```
```bash
docker compose run --rm app data/case_1.txt data/case_2.txt data/case_3.txt data/case_4.txt data/case_5.txt data/case_6.txt data/case_7.txt data/case_8.txt data/case_9.txt
```

4. **Rodar os testes dentro do container:**

```bash
docker compose run --rm test
```

---

## 📝 Notas Adicionais

- A solução foi projetada para ser facilmente extensível para novos tipos de operação ou regras fiscais futuras.
- A leitura incremental no CLI permite o processamento de arquivos grandes ou entradas via stream sem perder performance.
- A separação entre cálculo e interface facilita a reutilização da lógica em outras aplicações, como APIs ou interfaces web.
- Os testes garantem robustez e facilitam manutenibilidade.