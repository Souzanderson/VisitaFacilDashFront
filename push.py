import os
import sys
import json

try:
    version = json.load(open('src/assets/version.json','r'))
    version['version'] = version['version'] + 1
    with open('src/assets/version.json','w') as f: f.write(json.dumps(version, indent=4))
        
    try:
        arg = sys.argv[1]
    except: arg = version['version']
    os.system("ng build --prod --output-hashing=all")
    os.system("git add .")
    os.system(f'''git commit -m "{arg}"''')
    os.system("git push origin main")
except Exception as e:
    print(e)

