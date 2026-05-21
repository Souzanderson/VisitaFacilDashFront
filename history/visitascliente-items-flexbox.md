# visitascliente — troca de grid para flexbox nos itens de detalhe

## Problema
Os itens de `.items` usavam `table="true"` (CSS Grid rígido de 3 colunas). Itens com conteúdo maior forçavam toda a linha a ter a mesma altura, deixando visualmente desalinhado.

## Modificações

- [visitascliente.component.html:151](src/app/details/visitascliente/visitascliente.component.html#L151): removido `table="true"` e `style="--cs: 1fr 1fr 1fr"` do `.items`.
- [visitascliente.component.scss:23](src/app/details/visitascliente/visitascliente.component.scss#L23): `.items` passa a usar `display: flex; flex-wrap: wrap; align-items: flex-start` com cada `.item` em `flex: 1 1 calc(33% - 4px); min-width: 200px`, permitindo que cada card tenha a sua própria altura.
