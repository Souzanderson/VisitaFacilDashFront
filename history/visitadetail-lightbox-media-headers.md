# visitadetail: lightbox de imagens e atualização de headers

## Arquivos modificados

### `src/app/details/visitadetail/visitadetail.component.ts`
- Adicionado `lightbox` property com tipo `{ img, rotation, flipped, imgs, idx } | null`
- Adicionado `@HostListener('document:keydown')` para navegação por teclado (Escape, setas, r)
- Adicionados métodos: `openLightbox`, `closeLightbox`, `rotateLightbox`, `flipLightbox`, `prevImage`, `nextImage`, `getLightboxTransform`
- Adicionado helper `skeletonArr(n: number)`

### `src/app/details/visitadetail/visitadetail.component.html`
- Seções de imagem e vídeo refatoradas para estrutura `.media-section` com `.media-header`, `.media-grid`
- Skeletons com shimmer para imagens (150×150) e vídeos (240×150) usando `[hidden]`
- Cards de imagem com `(click)="openLightbox(imagens, j)"` e `.media-overlay`
- Cards de vídeo com `<video controls>` nativo + `.video-label`
- Adicionado overlay do lightbox ao final do template
- Headers das seções "Detalhes da Visita" e "Dados Geográficos" migrados para `.media-header.section-header` com ícone

### `src/app/details/visitadetail/visitadetail.component.scss`
- Adicionados estilos: `.media-section`, `.media-header`, `.media-count`, `.media-grid`
- `@keyframes shimmer` + `.media-skeleton` com animação de loading
- `.img-card` com hover scale + overlay semitransparente
- `.video-card` com player nativo + label
- `.section-header` com `border-radius` completo (sem abertura inferior)
- `.lightbox-overlay`, `.lightbox-content`, `.lightbox-img`, `.lightbox-controls`, `.lb-btn`, `.lightbox-counter`
