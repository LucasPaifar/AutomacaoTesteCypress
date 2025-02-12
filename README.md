# Testes Automatizados - Sauce Demo

## 📌 Requisitos
- Node.js instalado versão utilizada - v23.7.0
- Git instalado

## 🚀 Configuração do Projeto
1. Clone o repositório:
   ```sh
   git clone https://github.com/LucasPaifar/AutomacaoTesteCypress.git

   ```
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Execute os testes:
   ```sh
   npx cypress open
   ```

## 📂 Estrutura do Projeto
- `e2e/paginas/` → Contém a implementação do Page Object Model.
- `e2e/testes/` → Contém os testes organizados por funcionalidade.

## 📌 Testes Implementados

### 🛠️ **Testes de Login**
- ✅ **Deve fazer login com sucesso**
- ✅ **Deve exibir erro ao tentar login com credenciais inválidas**
- ✅ **Usuário bloqueado não deve conseguir acessar**
- ✅ **Deve permitir que o usuário saia do sistema**

### 🛒 **Testes de Carrinho**
- ✅ **Deve adicionar um produto ao carrinho**
- ✅ **Deve remover um produto do carrinho**

### 💳 **Testes de Checkout**
- ✅ **Deve finalizar a compra com sucesso**

### 🛍️ **Testes de Produtos**
- ✅ **Deve exibir a lista de produtos corretamente**
