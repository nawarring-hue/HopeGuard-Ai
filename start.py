import subprocess
import sys
import os
import webbrowser
import time

print("Demarrage HopeGuard AI...")
print("=" * 40)

# Lancer Flask
proc = subprocess.Popen(
    [sys.executable, "app.py"],
    cwd="backend"
)

print("Backend Flask demarre : http://localhost:8080")
time.sleep(2)

# Ouvrir le frontend automatiquement
webbrowser.open("http://localhost:8080/app")
print("Frontend ouvert dans le navigateur")
print("=" * 40)
print("Ctrl+C pour arreter")

try:
    proc.wait()
except KeyboardInterrupt:
    proc.terminate()
    print("\nHopeGuard AI arrete.")
