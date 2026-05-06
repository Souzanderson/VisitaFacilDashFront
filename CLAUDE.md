# CLAUDE.md — VisitasDashboard

## REGRAS CRÍTICAS

- Nunca use seu nome como co-autor, JAMAIS!
- Sempre siga o padrão de flag de commit em Tipos permitidos no commit

## Stack

- **Framework:** Angular 11 (TypeScript 4.1)
- **Testes:** Karma + Jasmine
- **HTTP:** `HttpClient` via `ConnectionService` (`.toPromise()` em todas as chamadas)
- **Utilitários:** `UteisService` (alertas, modais, busca flutuante, navegação, distância, exports)
- **Libs notáveis:** @amcharts/amcharts4, @googlemaps/js-api-loader, xlsx, moment, @angular/material, @fortawesome/angular-fontawesome

## Estrutura

```
src/app/
├── pages/        # Telas principais (rotas): home, visits, clientes, vendedores, agendamentos, login
├── details/      # Visualizações de detalhe (visitascliente, visitadetail)
├── registers/    # Formulários de cadastro (addagendamento)
├── components/   # Componentes reutilizáveis (spinner, icon, menu, card, barchart, piechart, linechart, mapsgoogle, etc.)
├── services/     # ConnectionService (HTTP), UteisService (utilitários), VersionRepository
└── pipes/        # Pipes Angular
```

## Rotas

| Path                                  | Componente             |
| ------------------------------------- | ---------------------- |
| `''`                                  | Login                  |
| `dashboard`                           | Home / Dashboard       |
| `visits`                              | Listagem de visitas    |
| `clientes`                            | Clientes               |
| `vendedores`                          | Vendedores             |
| `vendedores/:id`                      | Vendedor específico    |
| `vendedores/:id/:dtini/:dtfim`        | Vendedor com período   |
| `visitacliente/:idcliente`            | Visitas por cliente    |
| `mapa`                                | Mapa Google Maps       |
| `agendamentos`                        | Agendamentos           |

## Padrões do projeto

### HTTP

- Todo acesso HTTP passa por `ConnectionService`. Novos endpoints devem ser adicionados lá.
- Autenticação via query param: `?hash=${this.conn.user.hascode}` em todas as chamadas.
- Backend Python em `environment.URL_SERVER_PY`.
- Padrão de chamada:
  ```typescript
  const result = await this.conn.metodo().toPromise();
  ```

### Alertas

- `this.uteis.alertDanger(msg)` — snackbar vermelho (MatSnackBar)
- `this.uteis.alert(msg, bgColor, color, time)` — alerta flutuante customizado via DOM

### Modais

- Abertos com: `this.uteis.modal(ComponenteModal, { width, height, data })`
- Retorna Promise que resolve com o valor de `dialogRef.afterClosed()`

### Tabelas

- CSS Grid com `--cs` como variável de colunas: `style="--cs: 1fr 180px 150px"` ou `div[table="true"]`
- Hover em `.bodytable` destaca com `--color-secondary-contrast`
- Filtros são feitos no front, sobre a lista completa carregada da API

### Componentes utilitários

```html
<app-spinner *ngIf="loading"></app-spinner>
<app-icon icon="assets/icons/nome.svg" width="20px" height="20px"></app-icon>
<app-menu></app-menu>
<app-card></app-card>
<app-barchart></app-barchart>
<app-piechart></app-piechart>
<app-linechart></app-linechart>
<app-mapsgoogle></app-mapsgoogle>
```

### CSS — variáveis globais disponíveis (`styles.scss`)

```
--color-primary          rgb(3, 52, 76)
--color-primary-contrast rgb(255, 255, 255)
--color-secondary        #076392
--color-table-top        #1e5a78
--color-secondary-contrast rgb(0, 210, 252)
--color-secondary-light  #0876ad
--color-tertiary         rgb(89, 193, 52)
--color-text             rgb(47, 47, 48)
--color-grey             #949899
--color-light            #ebffff
--color-odd              #efeff0
--color-red              rgba(202, 17, 17, 0.863)
--gap                    210px  (largura do menu lateral)
--back                   #f1f4f6
--radius                 7px
```

Classes globais: `.table`, `.toptable`, `.bodytable`, `.label`, `.input`, `.rdc`, `.c`, `.alc`, `.jc`, `.c-div`, `.legendtoptable`

Layout principal: `#container` — ocupa `calc(100vw - var(--gap))` com `margin-left: var(--gap)`.

### UteisService — métodos úteis

| Método                                           | Uso                                            |
| ------------------------------------------------ | ---------------------------------------------- |
| `modal(comp, { width, height, data })`           | Abre modal Material, retorna Promise           |
| `go(route)`                                      | Navega para rota                               |
| `alertDanger(msg, duration?)`                    | Snackbar vermelho                              |
| `alert(text, bgColor, color, time)`              | Alerta flutuante via DOM                       |
| `toExcel(json, filename, wscols?)`               | Exporta para XLSX                              |
| `getDistance(p1, p2, divisor?)`                  | Distância haversine entre coordenadas          |
| `getDistanceMaps(p1, p2)`                        | Distância via Google Routes API                |
| `floatingSearch(evt, parent, list, selected?)` | Dropdown de filtro flutuante com checkboxes    |
| `dateInRange(date1, date2, dt, format?)`         | Verifica se data está no intervalo             |
| `maskDate(value)` / `maskFone(value)`            | Máscara de input                               |
| `apiMapsKey`                                     | Chave da API Google Maps (via environment)     |

### ConnectionService — estrutura do usuário

```typescript
conn.user.hascode       // token de autenticação
conn.user.idsistema     // ID do sistema
conn.user.iderp         // ID no ERP
conn.user.iderpvendedor // ID do vendedor no ERP
conn.user.master        // flag master
```

## Ao concluir uma tarefa

1. **Descreva tudo o que foi feito** — liste cada alteração com link para o arquivo e linha(s) modificada(s), no formato `[arquivo.ts:linha](caminho/relativo#Llinha)`.

   > **ATENÇÃO:** após cada edição, as linhas mudam de lugar — sempre verifique os números reais antes de referenciar.

> **IMPORTANTE:** Criar um arquivo em `./history/{modification}.md` com um nome lógico e curto, contendo todas as modificações realizadas.

2. **Emita uma mensagem de commit** sugerida, seguindo o padrão:

   ```
   [TIPO](escopo): resumo em português

   descrição opcional das mudanças mais relevantes
   ```

3. **Tipos permitidos no commit:**

| Tipo         | Uso                                      |
| ------------ | ---------------------------------------- |
| `[FEAT]`     | Nova funcionalidade                      |
| `[FIX]`      | Correção de bug                          |
| `[REFACTOR]` | Refatoração sem mudança de comportamento |
| `[CHORE]`    | Tarefas de manutenção, configs, deps     |
| `[DOCS]`     | Documentação                             |
| `[VERSION]`  | Versão atualizada                        |

## Comportamento padrão

- Após qualquer alteração de código concluída, faça o commit automaticamente
- Use conventional commits: `[TIPO](escopo): mensagem em português`
- NUNCA faça push automático, apenas o commit local
- NUNCA faça pull automático
