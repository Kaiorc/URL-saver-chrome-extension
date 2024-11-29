# URL Saver - Chrome Extension

**URL Saver - Chrome Extension** é uma aplicação web simples que permite salvar links manualmente ou da aba ativa do navegador. Os links são armazenados no `localStorage`, possibilitando acesso rápido e persistência entre sessões.

---

## 🖥️ Tecnologias Usadas

- **HTML**: Para estruturar a interface.
- **CSS**: Para estilizar a aplicação e torná-la visualmente agradável.
- **JavaScript**: Para implementar a lógica e interação com o DOM.
- **Chrome Extensions API**: Para integração com o navegador, possibilitando salvar abas diretamente.

---

## 🛠️ Funcionalidades

1. **Salvar links manualmente**:
   - Digite a URL no campo de entrada e clique em **SAVE INPUT**.

2. **Salvar aba atual**:
   - Clique em **SAVE TAB** para salvar a URL da aba ativa do navegador (funciona como extensão Chrome).

3. **Listar links salvos**:
   - Os links aparecem como uma lista clicável na interface.

4. **Excluir todos os links**:
   - Clique duas vezes no botão **DELETE ALL** para remover todos os links salvos.

---

## 📂 Estrutura do Projeto

- **`index.html`**: Estrutura principal do projeto. Contém os elementos da interface do usuário.
- **`index.css`**: Estilo da aplicação, com foco em uma aparência limpa e responsiva.
- **`index.js`**: Lógica principal da aplicação, incluindo interação com `localStorage`, manipulação de eventos e renderização dinâmica de elementos.
- **`icon.png`**: Ícone do projeto.
- **`manifest.json`**: Arquivo de configuração para uso da extensão no Chrome.

---

## 🚀 Como Usar

### Como Aplicação Web

1. Faça o download ou clone o repositório:
   ```bash
   git clone https://github.com/Kaiorc/URL-saver-chrome-extension.git
   cd URL-saver-chrome-extension
    ```

---

### Como Extensão do Chrome

1. Certifique-se de que o arquivo `manifest.json` está presente no diretório do projeto.
2. Abra o navegador Chrome e acesse `chrome://extensions/`.
3. Ative o **Modo de desenvolvedor** (localizado no canto superior direito da página).
4. Clique no botão **Carregar sem compactação**.
5. Selecione a pasta do projeto que contém os arquivos.
6. A extensão será adicionada e exibirá um ícone no navegador.
7. Use os botões da interface para salvar links da aba ativa diretamente.

---
