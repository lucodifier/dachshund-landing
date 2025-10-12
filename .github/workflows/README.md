# GitHub Pages Deploy

Este workflow faz o deploy automático para o GitHub Pages.

## Configuração no GitHub

1. Vá em **Settings** > **Pages** do repositório
2. Em **Source**, selecione **GitHub Actions**
3. Faça push para o branch `main` (ou `master`)
4. O deploy acontece automaticamente!

## URL do site

Após o deploy, seu site estará disponível em:
```
https://<seu-usuario>.github.io/dachshund-landing/
```

## Build local

Para testar antes do deploy:
```bash
npm run build
npm run preview
```

## Importante

- O `vite.config.js` está configurado para adicionar o base path `/dachshund-landing/` quando `GITHUB_PAGES=true`
- Se você renomear o repositório, atualize o `base` no `vite.config.js`

