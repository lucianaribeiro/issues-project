# Sobre a Solução

## Linha Raciocínio para Desenvolver a Solução


1. Iniciei o projeto testando a API do Github. Queria testar como seria feita a 
requisição. Usei o fetch do próprio JavaScript.

2. Criei o projeto e configurei o Styled Components e o Material UI.

3. Aproveitei para criar a configuração do deploy, por nunca ter mexido com Netlify.

4. Pensei em um layout que fosse interessante para visualizar as Issues. Escolhi fazer 
usando os Cards do Material UI.

5. Fiz a requisição das issues e mostrei nos cards seu #número, titulo e status (closed ou open).
Apenas 10 cards são mostrados por vez e isso foi feito passando um parâmetro na query da request.

6. Fiz um componente para mostrar as labels de cada issue e fiz a requisição.

7. Criei uma função que altera o CSS de acordo com a o número da issue, pares ficam azul
e ímpares ficam verde.

8. Depois comecei a paginação e para isso criei um componente com o layout da paginação
e fiz ele enviar para a homepage o numero da página para ser alterado na request. 
A request recebe um parâmetro ***page*** que retorna as issues da página de acordo com a quatidade
de issues por página.

9. O filtro foi o desafio mais interessante por desenvolver um jeito que os parâmetros da URL
seriam alterados conforme o filtro mudasse sem que fosse necessário fazer outra função de request.
Para isso usei o ***useEffect***, que atualiza a página sempre que o state muda.

1.  Além disso criei uma request para pegar todas as labels do repositório e apresentar no filtro por labels.

2.  Fiz algumas ultimas alterações no layout para que ficasse responsivo. 

## Problemas Encontrados

1. Limite de acesso a API sem token: Foi um grande problema, a API do Github tem limite de request
se token do usuário não for passado no Header.

2. Token para acessar a API do Github ficar expirando: Mesmo passando o token no Header, uma hora o token expira,
e é preciso ir gerar outro no Github. Além disso, a request não funciona no deploy com token. Não tive tempo de descobrir
outra forma de fazer. Acredito que precisa configurar um Github App, mas não fui a fundo no assunto.

   - OBS: Caso a requisição falhe no deploy é pela quantidade de vezes que a request foi feita. Mas está funcionando corretamente. 

3. Numero total de issues para a paginação: A request não retorna o número total de issues, por isso fui obrigada a colocar um valor default de páginas,
no caso o número foi 50.


## Proposta de Melhorias

1. Refazer o FilterComponent para que seja populado por um map e não ocorra replicação de código.

2. Arrumar o problema com o token da API do Github.

3. Fazer testes unitários no projeto.


## Considerações 

PS: Caso a requisição falhe no deploy é pela quantidade de vezes que a request foi feita. 
Uma forma de corrigir é gerando um token de usuário no Github e inserindo o header na request.

Exemplo de header:
```
  const info = {
            method: 'GET',
            headers: new Headers({
                Authorization: token ${OAUTH_TOKEN},
            })
        }
```