# Próximo Passo – Global Solution FIAP 2025

Repositório do protótipo **Front-end** da solução **Próximo Passo**, desenvolvida para a disciplina **Front-End Design Engineering** do curso de **Análise e Desenvolvimento de Sistemas – FIAP**, turma **1TDSPR**.

O tema da Global Solution 2025 é **Futuro do Trabalho, Tecnologia e Inovação**, e este projeto representa a camada de interface da solução proposta pelo grupo.

---

## 🎯 Descrição, objetivo e proposta da solução

### Contexto

O mercado de trabalho está em constante transformação e muitas pessoas:

- Não sabem **por onde começar** a estudar;
- Têm dificuldade em identificar **quais habilidades faltam** para conquistar determinada vaga;
- Perdem tempo procurando vagas em várias plataformas sem uma visão clara de aderência.

Ao mesmo tempo, empresas relatam dificuldade em encontrar profissionais com **competências alinhadas** às necessidades reais das vagas.

### Proposta da solução

O **Próximo Passo** é uma solução que simula uma plataforma que conecta:

- **Perfil do usuário** (habilidades, interesses, objetivos);  
- **Oportunidades** (vagas de estágio e júnior);  
- **Roadmap de estudos** (trilha clara do que aprender a seguir).

A ideia central é funcionar como uma mistura de:

> **“LinkedIn + Roadmap de Estudos”**

O usuário informa seus dados e objetivos, e a plataforma poderia:

- Sugerir vagas com **maior compatibilidade** com o seu perfil;
- Evidenciar **lacunas de conhecimento**;
- Montar um **roadmap sugerido** com os próximos passos de estudo.

> ⚠️ Neste repositório, entregamos o **protótipo front-end** dessa experiência, focando em estrutura, navegação, responsividade e interações básicas em JavaScript.

---

## 🧭 Páginas e fluxo de navegação

O protótipo inclui as seguintes páginas:

- `index.html` – **Página inicial**  
  Apresenta a proposta do Próximo Passo e direciona o usuário para o pré-cadastro e demais seções.

- `sobre.html` – **Sobre o projeto**  
  Explica o problema, a proposta da solução, a conexão com o tema da Global Solution e ODS relacionados.

- `roadmap.html` – **Roadmap**  
  Exemplo visual de uma trilha de aprendizado para um perfil fictício (Front-end Júnior), com blocos de conhecimento, prioridades e status.

- `vagas.html` – **Oportunidades**  
  Simulação de vagas compatíveis com o roadmap sugerido, com barra de compatibilidade, tags e contexto de stack.

- `cadastro.html` – **Pré-cadastro**  
  Formulário que simula o cadastro inicial de um usuário interessado em utilizar a plataforma (objetivos, área de interesse, nível de experiência).

- `faq.html` – **Perguntas frequentes**  
  Perguntas e respostas sobre o projeto, usando um componente de **acordeon** com JavaScript.

- `contato.html` – **Contato**  
  Formulário para dúvidas, sugestões e feedback sobre o protótipo (canal de contato com a equipe do projeto).

- `integrantes.html` – **Equipe**  
  Lista dos integrantes do grupo, com **nome, RM, papel no projeto** e links para GitHub/LinkedIn.

Todos os arquivos compartilham o mesmo **header**, **menu de navegação** e **footer**, garantindo consistência visual e de navegação.

---

## 🧱 Arquitetura do projeto

Estrutura de pastas seguindo as regras da disciplina:

```text
/
├── css/
│   ├── base.css         # estilos globais: cores, tipografia, reset leve
│   ├── layout.css       # estrutura: header, footer, grids, seções
│   ├── components.css   # componentes: cards, botões, formulários, FAQ, roadmap, vagas etc.
│   └── responsive.css   # media queries e ajustes de responsividade
├── js/
│   └── main.js          # menu mobile, acordeon do FAQ, validação dos formulários
├── img/
│   └──                  # imagens
├── index.html
├── sobre.html
├── roadmap.html
├── vagas.html
├── cadastro.html
├── faq.html
├── contato.html
└── integrantes.html

```

```markdown
## 💻 Tecnologias utilizadas

- **HTML5** – estrutura semântica das páginas e navegação entre telas;  
- **CSS3** – estilos, layout responsivo, uso de Flexbox e Grid;  
- **JavaScript (Vanilla JS)** – interações no front-end (menu mobile, FAQ em acordeon, validação dos formulários);  
- **Git** – controle de versão do código-fonte;  
- **GitHub** – hospedagem do repositório e, opcionalmente, publicação via GitHub Pages.

```
## 🔗 Link do repositório

[Repositório no GitHub – Próximo Passo](https://github.com/MaThPMJ/Global-Solution-1.Semestre)
