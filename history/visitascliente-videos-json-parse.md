# visitascliente — parse de `videos` como JSON

## Modificações

- [visitascliente.component.ts:353-357](src/app/details/visitascliente/visitascliente.component.ts#L353-L357): adicionado bloco `JSON.parse` para o campo `videos` em `structCharts()`, seguindo o mesmo padrão já aplicado a `imagens`, `audios`, `enderecocompleto` e `demarcacaoprop`.
