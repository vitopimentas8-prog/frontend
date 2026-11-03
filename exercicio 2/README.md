# Exercício 2 — `div` e HTML semântico

## Objetivo

Entender a diferença entre blocos genéricos, criados com a tag `<div>`, e elementos semânticos do HTML5, que indicam a função de cada parte da página.

## 1. Qual é a diferença entre `div` e HTML semântico?

A tag `<div>` é um contêiner genérico. Ela agrupa outros elementos para facilitar a organização do conteúdo e a aplicação de CSS ou JavaScript. Sozinha, não informa o que aquele bloco representa.

O HTML semântico utiliza elementos que descrevem o significado e a finalidade do conteúdo. Por exemplo:

- `<header>`: cabeçalho de uma página ou seção.
- `<nav>`: área de navegação com links.
- `<main>`: conteúdo principal da página.
- `<section>`: seção temática de conteúdo.
- `<article>`: conteúdo independente, como uma notícia ou publicação.
- `<aside>`: conteúdo complementar.
- `<footer>`: rodapé da página ou seção.

**Resumo:** `div` organiza elementos sem indicar seu significado; as tags semânticas organizam e também comunicam a função do conteúdo ao navegador, aos mecanismos de busca e às tecnologias assistivas.

## 2. Exemplo prático com blocos genéricos (`div`)

Neste exemplo, todos os blocos são feitos com `div`. É possível estilizar a página, mas a estrutura não deixa explícita a função de cada área.

```html
<div class="cabecalho">
  <h1>Meu site de tecnologia</h1>
</div>

<div class="menu">
  <a href="#inicio">Início</a>
  <a href="#noticias">Notícias</a>
</div>

<div class="conteudo">
  <div class="noticia">
    <h2>Novidades da tecnologia</h2>
    <p>Confira as principais novidades do mundo digital.</p>
  </div>
</div>

<div class="rodape">
  <p>Todos os direitos reservados.</p>
</div>
```

## 3. Exemplo prático com blocos semânticos

Agora, os elementos indicam a finalidade de cada parte da página. A organização fica mais clara para quem desenvolve e para recursos que interpretam a estrutura do documento.

```html
<header>
  <h1>Meu site de tecnologia</h1>
</header>

<nav aria-label="Navegação principal">
  <a href="#inicio">Início</a>
  <a href="#noticias">Notícias</a>
</nav>

<main id="inicio">
  <section id="noticias">
    <article>
      <h2>Novidades da tecnologia</h2>
      <p>Confira as principais novidades do mundo digital.</p>
    </article>
  </section>
</main>

<footer>
  <p>Todos os direitos reservados.</p>
</footer>
```

## 4. Quando usar cada um?

- Use elementos semânticos quando existir uma tag que represente corretamente a função do conteúdo.
- Use `<div>` quando precisar apenas agrupar elementos para estilização ou organização e não houver um elemento semântico mais adequado.
- Não escolha uma tag semântica apenas pela aparência: a escolha deve representar o significado do conteúdo.

## 5. Conclusão

O HTML semântico torna o código mais organizado e compreensível, além de ajudar na acessibilidade e na interpretação da estrutura da página. A tag `<div>` continua sendo útil, mas deve ser usada como contêiner genérico quando não houver um elemento mais significativo.

## 6. Referências

- [MDN — Elementos HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element)
- [MDN — Elementos semânticos](https://developer.mozilla.org/pt-BR/docs/Glossary/Semantics#semântica_em_html)
- [W3C — HTML](https://www.w3.org/html/)
