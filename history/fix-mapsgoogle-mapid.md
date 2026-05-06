# fix: mapId ausente no mapa com `center`

## Problema
O `AdvancedMarkerElement` do Google Maps requer que o mapa seja inicializado com um `mapId` válido. O segundo bloco de inicialização do mapa (quando o input `center` é usado) estava usando `styles: stylemap` em vez de `mapId`, causando o aviso no console e impedindo o uso de marcadores avançados.

Além disso, `styles` e `mapId` são mutuamente exclusivos na API do Google Maps.

## Alterações

- [mapsgoogle.component.ts:71-80](src/app/components/mapsgoogle/mapsgoogle.component.ts#L71)
  - Removido `styles: stylemap`
  - Adicionado `mapId: environment.GOOGLE_MAP_ID`
- [mapsgoogle.component.ts:3](src/app/components/mapsgoogle/mapsgoogle.component.ts#L3)
  - Removido import não utilizado de `stylemap`

## Observação
O `GOOGLE_MAP_ID` em `environment.ts` está com o valor `"DEMO_MAP_ID"`. Para eliminar completamente o aviso em produção, é necessário criar um Map ID real no [Google Cloud Console](https://console.cloud.google.com/google/maps-apis/studio/maps) e substituir esse valor.
