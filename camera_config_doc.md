# Tutorial jak skonfigurować kamere do rasberki

## Krok 1
* wpisz tę komende w terminalu:
```bash
sudo nano /boot/firmware/config.txt
```
* znajdź linijkę `camera_auto_detect` i ustaw wartość na 0
* znajdź linijkę `[all]` i pod nią wpisz tę linijkę `dtoverlay=imx477`
* wciśnij crtl+s i ctrl+x by wyjść z nano
* zrestartuj rasberkę
## Krok 2
Dla rasberry 4 wpisz tą komende:
```bash
wget https://www.arducam.com/wp-content/uploads/2023/12/Arducam-477P-Pi4.json
```
Dla rasberry 5 wpisz tą komende:
```bash
wget https://www.arducam.com/wp-content/uploads/2023/12/Arducam-477P-Pi5.json
```
## Krok 3 
Teraz zobacz czy działa kamera uruchamiając tą komende
**Na rasberry 4**:
```bash
libcamera-still -t 5000 -o test.jpg --tuning-file Arducam-477P-Pi4.json
```
**Na rasberry 5**:
```bash
libcamera-still -t 5000 -o test.jpg --tuning-file Arducam-477P-Pi5.json
```