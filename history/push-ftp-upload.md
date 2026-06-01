# push.py — Upload FTP após build

## Alterações

- [push.py](../push.py) — adicionado upload FTP automático da pasta `./dist/dashVisitas` para o servidor `ftp.malbizer.com` após o `ng build`, antes do commit git.

## Detalhes

- Utiliza `ftplib` (stdlib Python) com FTP ativo na porta 21.
- A função `ftp_upload` percorre recursivamente todos os arquivos do dist, recria a estrutura de diretórios no servidor remoto e faz upload via `STORBINARY`.
- Credenciais configuradas como constantes no topo do arquivo (`FTP_HOST`, `FTP_USER`, `FTP_PASS`, `FTP_PORT`).
- O upload ocorre após o build e antes do `git add` / `git commit` / `git push`.
