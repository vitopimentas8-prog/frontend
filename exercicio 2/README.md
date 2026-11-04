# Exercício 2 — HTML semântico, formulários e table-based layout

Este projeto apresenta uma página sobre Tecnologia e Informática e um formulário de contato. A atividade também demonstra a diferença entre layouts feitos com tabelas e a estrutura semântica moderna do HTML.

## Parte 5 — Adaptação para table-based layout

Os arquivos `index.html` e `formulario.html` foram adaptados para demonstrar o **table-based layout**. As tabelas (`<table>`, `<tr>` e `<td>`) foram usadas para organizar as regiões da página, como cabeçalho, navegação, conteúdo e rodapé. No formulário, uma tabela também organiza os campos.

> Esta adaptação é apenas didática. Em sites atuais, tabelas devem ser reservadas principalmente para apresentar dados tabulares, não para montar o layout inteiro.

## Por que o table-based layout é uma técnica antiga?

Antigamente, antes da evolução do CSS, era comum usar tabelas para posicionar elementos e dividir a página em colunas e linhas. Com o desenvolvimento de recursos como Flexbox e CSS Grid, tornou-se possível criar layouts flexíveis sem usar tabelas para controlar a apresentação.

As principais desvantagens do uso de tabelas para layout são:

- Mistura a estrutura do conteúdo com a apresentação visual.
- Deixa o HTML mais extenso e difícil de manter.
- Torna adaptações para celulares e diferentes tamanhos de tela mais trabalhosas.
- Pode confundir tecnologias assistivas quando as tabelas não são interpretadas como simples estruturas de apresentação.
- Uma alteração na organização das células pode exigir mudanças em várias linhas e colunas.

## Dificuldades encontradas na adaptação

Durante a adaptação, as principais dificuldades foram:

1. Reorganizar cabeçalho, menu, conteúdo e rodapé em linhas e células de tabela.
2. Manter os espaçamentos e o alinhamento visual que antes eram feitos com CSS e elementos semânticos.
3. Adaptar a tabela para telas menores, pois as células não se reorganizam de forma tão simples quanto elementos em Flexbox ou Grid.
4. Organizar os campos do formulário em linhas sem prejudicar a associação entre cada `label` e seu campo.

A utilização de tabelas tornou o código mais repetitivo e menos simples de ajustar. Por isso, esse formato é útil para compreender a evolução das técnicas de layout, mas não é a melhor escolha para projetos atuais.

## Comparação: table-based layout x HTML semântico moderno

| Critério | Table-based layout | Estrutura semântica moderna |
|---|---|---|
| Organização | Usa tabelas, linhas e células para posicionar áreas. | Usa `header`, `nav`, `main`, `section` e `footer`. |
| Finalidade | Tabelas são usadas para apresentação visual. | Cada elemento descreve a função do conteúdo. |
| Responsividade | Pode exigir regras extras e reorganização das células. | Flexbox e CSS Grid facilitam layouts adaptáveis. |
| Manutenção | HTML tende a ficar maior e mais complexo. | Estrutura geralmente mais clara e fácil de manter. |
| Acessibilidade | Tabelas de layout podem adicionar ruído semântico. | Regiões semânticas ajudam a navegação por tecnologias assistivas. |
| Uso recomendado | Apenas para demonstração histórica ou dados tabulares. | Recomendado para páginas e aplicações atuais. |

## Exemplo de estrutura semântica moderna

```html
<header>
  <h1>Tecnologia e Informática</h1>
</header>

<nav aria-label="Navegação principal">
  <a href="#inicio">Início</a>
  <a href="#contato">Contato</a>
</nav>

<main>
  <section id="inicio">
    <h2>Bem-vindo!</h2>
    <p>Conteúdo principal da página.</p>
  </section>
</main>

<footer>
  <p>Autoria: Vitor Alves</p>
</footer>
```

Em um projeto moderno, o posicionamento visual dessa estrutura pode ser feito com CSS Grid ou Flexbox, sem usar tabelas para montar a página.

## Conclusão

O table-based layout foi importante na história do desenvolvimento web, mas hoje é considerado ultrapassado para organizar páginas. A adaptação mostrou que tabelas deixam a estrutura mais rígida e trabalhosa. A combinação de HTML semântico com CSS moderno oferece melhor organização, acessibilidade, manutenção e responsividade.

## Referências

- [MDN — Elementos HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element)
- [MDN — CSS Grid Layout](https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_grid_layout)
- [MDN — Flexbox](https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_flexible_box_layout)
- [W3C — HTML](https://www.w3.org/html/)
