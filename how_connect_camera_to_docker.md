# Jak podłączyć kamere pod rasberke

## Setup
Upewnij się że masz zainstalowane bibloteki od rpicam tą komendą:
```bash
sudo apt install rpicam-apps
``` 
Następnie włącz skrypt 
>video_stream.sh

Łączenie kamery z kontenerem działa przez połączenie sie kontenera pod ip na które obecnie streamujemy

## UWAGA
Kontener może łączyć się tylko z IP które pojawiają się po wpisaniu komendy
>hostname -I

Dlatego zawsze sprawdzaj jakie ip jest wpisane w ```video_stream.sh``` oraz w open cv