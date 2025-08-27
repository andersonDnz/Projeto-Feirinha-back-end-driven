# Feirinha API

API simples para gerenciar uma lista de frutas do café da manhã.

## Como rodar

1. Instale as dependências:
   ```
   npm install
   ```

2. Inicie o servidor:
   ```
   npm start
   ```

O servidor estará rodando em `http://localhost:5000`.

---

## Testes no Postman

### 1. Adicionar um item (POST /items)

- Método: POST
- URL: `http://localhost:5000/items`
- Body (JSON):
  ```json
  {
    "name": "laranja",
    "quantity": 1,
    "type": "fruta"
  }
  ```
- Resposta esperada: JSON do item criado com `id`.

### 2. Listar todos os itens (GET /items)

- Método: GET
- URL: `http://localhost:5000/items`
- Resposta esperada: Array JSON com todos os itens adicionados.

### 3. Buscar item por ID (GET /items/:id)

- Método: GET
- URL: `http://localhost:5000/items/1` (substitua 1 pelo id desejado)
- Resposta esperada: JSON do item correspondente ou erro 404 se não encontrado.

---

## Tratamento de erros

- Requisições POST sem campos obrigatórios retornam erro 400.
- Requisições GET com id inválido retornam erro 400.
- Requisições GET com id não encontrado retornam erro 404.

---

## Observações

- O campo `type` deve ser sempre `"fruta"`.
- O campo `quantity` deve ser um número.
# Projeto-Feirinha-back-end-driven
