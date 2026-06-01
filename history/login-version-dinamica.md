# login — versão dinâmica via version.json

## Alterações

- [login.component.ts:2](../src/app/pages/login/login.component.ts#L2) — importado `HttpClient`.
- [login.component.ts:18](../src/app/pages/login/login.component.ts#L18) — injetado `HttpClient` no construtor.
- [login.component.ts:16](../src/app/pages/login/login.component.ts#L16) — adicionada propriedade `version: string`.
- [login.component.ts:24](../src/app/pages/login/login.component.ts#L24) — `ngOnInit` busca `assets/version.json` via HTTP e popula `version`.
- [login.component.html:54](../src/app/pages/login/login.component.html#L54) — substituído valor fixo `1.2.3` por `{{ version }}`.

## Motivação

A versão exibida na tela de login era hardcoded. Agora é lida dinamicamente de `src/assets/version.json`, que é incrementado automaticamente pelo `push.py` a cada build.
