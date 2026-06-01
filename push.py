import os
import sys
import json
import ftplib
from pathlib import Path

FTP_HOST = "ftp.malbizer.com"
FTP_USER = "frontendvisitas@visitas.malbizer.com.br"
FTP_PASS = "159248@grodados"
FTP_PORT = 21
DIST_DIR = "./dist/dashVisitas"

def ftp_upload(local_dir: str):
    print("Iniciando upload FTP...")
    with ftplib.FTP() as ftp:
        ftp.connect(FTP_HOST, FTP_PORT)
        ftp.login(FTP_USER, FTP_PASS)
        print(f"Conectado: {ftp.getwelcome()}")

        base = Path(local_dir)
        for filepath in sorted(base.rglob("*")):
            if filepath.is_dir():
                continue
            relative = filepath.relative_to(base)
            remote_path = "/" + str(relative).replace("\\", "/")
            remote_dir = remote_path.rsplit("/", 1)[0]

            # garante que o diretório remoto existe
            dirs = [d for d in remote_dir.split("/") if d]
            current = "/"
            for d in dirs:
                current = current.rstrip("/") + "/" + d
                try:
                    ftp.mkd(current)
                except ftplib.error_perm:
                    pass  # já existe

            with open(filepath, "rb") as f:
                ftp.storbinary(f"STOR {remote_path}", f)
                print(f"  ✔ {remote_path}")

    print("Upload FTP concluído.")

try:
    version = json.load(open('src/assets/version.json','r'))
    version['version'] = version['version'] + 1
    with open('src/assets/version.json','w') as f: f.write(json.dumps(version, indent=4))

    try:
        arg = sys.argv[1]
    except: arg = version['version']
    os.system("ng build --prod --output-hashing=all")
    ftp_upload(DIST_DIR)
    os.system("git add .")
    os.system(f'''git commit -m "{arg}"''')
    os.system("git push origin main")
except Exception as e:
    print(e)

