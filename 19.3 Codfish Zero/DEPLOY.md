# Deploy

## 1. GitHub Pages
1. Faça upload dos arquivos para repositório GitHub
2. Ative GitHub Pages nas configurações
3. Selecione a branch/pasta com os arquivos

## 2. Netlify
1. Arraste a pasta static-dev-build para netlify.com
2. Ou conecte repositório GitHub
3. Deploy automático

## 3. Vercel
```bash
npx vercel --prod
```
## Considerações Importantes

**Build de desenvolvimento**
- Arquivos são maiores que o build de produção
- Pode ser mais lento para carregar
- Ideal para desenvolvimento e configuração

**Para produção, considerar:**
- Build minificado (`npm run build`)
- Configurar compressão gzip no servidor
- Usar CDN para melhor performance

## Teste de Funcionalidade

Após deploy, teste:
1. ✅ Modal de username abre
2. ✅ Área de texto aceita conteúdo
3. ✅ Análise SEO é calculada
4. ✅ Alternância modo escuro/claro