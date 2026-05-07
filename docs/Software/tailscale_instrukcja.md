# Tailscale — instrukcja


wykonaj kroki na lokalnym pc, raspi powinna byc juz skonfigurowana

w skrocie:
1. pobierz 
2. zaloguj sie
3. sprawdz nazwe RPi
4. polacz SSH

- przy nastepnym razie tylko pkt 4.

## 1. Instalacja - na kazdym nowym urzadzeniu

### Linux (Ubuntu)
```bash
curl -fsSL https://tailscale.com/install.sh | sh
```

### Windows / Mac 
Pobierz z: https://tailscale.com/download

---

## 2. Logowanie -  na kazdym nowym urzadzeniu

w terminalu lokalnie
```bash
sudo tailscale up
```

→ Otwórz link z terminala w przeglądarce

> [!IMPORTANT]
> Zaloguj się kontem KNR 
> 
> wybierz Microsoft
> **Email:** knr.drone.pw@outlook.com  
> **Hasło:** Lecimyzrasberka027

→ w przegladarce kliknij connect 

---


## 3. Znajdz ip urzadzenia lub nazwe

```bash
tailscale status 
```
- Tailscale uruchamia się automatycznie przy starcie systemu. 
Raz zalogowany, po restarcie komputera sam się połączy.
---


## 4. Zaloguj sie na ssh

IP:
```bash

ssh knr@100.x.x.x
```

lub nazwia urządzenia:
```bash
ssh knr@knr-desktop-5
```

jak nie dziala powyższe
```bash
ssh -o ConnectTimeout=30 knr@100.x.x.x
```
---

## dodatkowe komendy

```bash
tailscale status        # lista urządzeń w sieci
tailscale ip -4         # twój adres Tailscale 
tailscale ping <nazwa_urzadzenia>   # test połączenia
sudo tailscale down     # rozłącz
sudo tailscale up       # połącz ponownie
sudo tailscale logout   #Zmiana konta
```

---

## info

limit 100 urzadzeń,
predkosc ok.  0.5 MB/s, 
latencja ok. ~80ms,
