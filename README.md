# 💈 Sistema Premium de Agendamento Online para Barbearias

> **Status do Projeto:** 🚀 Concluído & 100% Customizável (Pronto para demonstração e venda)

Uma aplicação web moderna, minimalista e de alta performance voltada para o agendamento online de serviços de estética masculina. Este projeto foi desenvolvido sob o conceito **white-label**, o que significa que sua estrutura, cores, serviços e links de redes sociais podem ser facilmente adaptados para a identidade visual de **qualquer barbearia do mercado**.

O sistema simula de forma fluida toda a experiência de seleção de serviços, profissionais, datas e horários, contando com atualizações de valores em tempo real. É a solução perfeita para apresentar a potenciais clientes como uma demonstração realista de um produto final.

---

## 📱 Proposta de Design e UX

O projeto foi construído focando na máxima conversão de clientes através do smartphone:

* **Conceito Mobile-First:** Interface pensada primordialmente para acessos via celular, oferecendo uma experiência fluida idêntica à de um aplicativo nativo (com barra de navegação inferior fixa).
* **Visual Dark Premium:** Paleta de cores sofisticada que utiliza tons escuros profundos combinados com detalhes dourados, transmitindo elegância, tradição e modernidade.
* **Layout Adaptável para Desktop:** Quando aberto no computador, o design se reorganiza automaticamente em duas colunas para aproveitar melhor o espaço da tela de forma elegante.

---

## ✨ Funcionalidades Principais

* 🛒 **Seleção Multi-Serviços:** O cliente pode selecionar um ou múltiplos serviços ao mesmo tempo.
* 💰 **Cálculo Dinâmico de Valores:** O subtotal e o total da reserva se atualizam instantaneamente na tela conforme os serviços são marcados ou desmarcados.
* 💈 **Seleção de Profissional:** Grid dinâmico para escolha do profissional de preferência ou a opção genérica "Qualquer Um".
* 📅 **Slider de Datas e Horários:** Filtro intuitivo que bloqueia visualmente horários já ocupados (`disabled`) e destaca a escolha atual do usuário.
* 📸 **Seção de Perfil Social (Instagram):** Bloco exclusivo integrado para exibir a biografia da empresa e um botão com gradiente chamativo direcionando o usuário para o Instagram oficial do estabelecimento.
* ⚓ **Navegação Inteligente (Smooth Scroll):** Cliques nos menus fazem rolagens suaves automáticas direto para a seção desejada, melhorando a usabilidade.
* ⚠️ **Interface Pronta para Back-end:** O fluxo de confirmação exibe um modal customizado, indicando que a interface já está validada e pronta para receber o disparo de mensagens (como API do WhatsApp) ou gravação em banco de dados.

---

## 🎨 Como Customizar para Outro Cliente (White-Label)

Para alterar o sistema e vendê-lo para outra barbearia, o processo é extremamente simples e rápido:

1. **Nome e Textos:** Altere as tags de texto (como `<h1>`, `<h3>`, `<title>`) no arquivo `index.html` para o nome da nova barbearia.
2. **Identidade Visual (Cores):** No topo do arquivo `style.css`, altere os códigos de cor (como o dourado de destaque `#F3C64F`) para os tons da marca do seu novo cliente.
3. **Redes Sociais:** Na seção `#profile-section` do `index.html`, substitua o link de demonstração pelo link do Instagram real do cliente contratante.

---

## 🛠️ Tecnologias Utilizadas

Buscando o máximo de leveza, carregamento instantâneo (essencial para anúncios de tráfego pago) e zero custos de manutenção ou hospedagem complexa:

* **HTML5:** Estruturação semântica, limpa e otimizada.
* **CSS3:** Grid Layout, Flexbox, transições nativas e responsividade avançada sem frameworks pesados.
* **JavaScript (ES6+):** Manipulação nativa do DOM e gerenciamento de estado do carrinho (código leve e rápido).
* **Fontes Gratuitas:** *Montserrat* (institucional) e *JetBrains Mono* (dados de preço e horários) via Google Fonts.

---

## 📂 Estrutura do Projeto

```bash
├── index.html     # Estrutura e seções (Serviços, Profissionais, Datas, Perfil).
├── style.css      # Design, animações, responsividade e Dark Mode.
└── script.js      # Lógica do carrinho, atualização de preços e navegação.
