
# Parte 4 - Links e Imagens

## Objetivo

Praticar a utilização de links externos, links internos e imagens locais em HTML.

## Arquivos e pastas

- `index.html`: arquivo principal da página, contendo a estrutura HTML, os links e a imagem.
- `img/`: pasta destinada ao armazenamento de imagens utilizadas no projeto.
- `img/imagem-escolhida.png`: imagem local exibida na página por meio da tag `<img>`.
- `README.md`: documentação com informações sobre o projeto e instruções para corrigir problemas com imagens.

## Links utilizados

- Link externo: direciona o usuário para a documentação oficial de HTML da MDN.
- Link interno: utiliza `href="#contato"` para direcionar o usuário à seção identificada por `id="contato"`.

## Como corrigir uma imagem quebrada

Se uma imagem não aparecer na página, siga estes passos:

1. Confira se o arquivo realmente existe dentro da pasta `img/`.
2. Verifique se o nome e a extensão do arquivo correspondem ao valor do atributo `src`.
3. Confira se o caminho é relativo à localização do arquivo `index.html`.
4. Verifique se a imagem foi adicionada ao repositório e enviada ao GitHub.
5. Confira se há diferenças entre letras maiúsculas e minúsculas no nome do arquivo.
6. Atualize a página e teste novamente.

Exemplo de caminho correto:

`<img src="img/imagem-escolhida.png" alt="Ilustração de uma paisagem">`

O atributo `src` indica a localização da imagem, enquanto o atributo `alt` fornece uma descrição textual para acessibilidade e para situações em que a imagem não pode ser exibida.

## Tecnologias utilizadas

- HTML5
- Git e GitHub

