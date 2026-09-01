# Ajuste de URL do backend local (dev)

## Contexto

`yarn dev` roda `ng serve` sem `--configuration production`, então usa
`src/environments/environment.ts` (não `environment.prod.ts`). O IP local
configurado (`192.168.11.17`) mudou e não apontava mais para o backend.

## Alteração

- [environment.ts:7](../src/environments/environment.ts#L7): `URL_SERVER_PY` alterado de
  `http://192.168.11.17:8050/` para `http://localhost:8050/`.
- IP antigo mantido comentado na linha 8 para referência futura.
