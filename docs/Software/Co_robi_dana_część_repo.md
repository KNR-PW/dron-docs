# KNR Drone Repository - Struktura Pakietów

## drone_autonomy
Misje autonomiczne — od podstawowych po zaawansowane scenariusze autonomicznego lotu i wykonywania zadań.

## drone_bringup
Launch file'a dla wszystkich platform: Orzeł 1, Mamba, VTOL oraz launch file eksperymentalne. Głównie konfiguracja dla testów VTOL'a.

## drone_camera
Przetwarzanie kamerowe — node'y do nagrywania klatek z kamer oraz generowania filmów z materiału wideo.

## drone_detector
Detekcja AI — wszystkie elementy związane z detekcją obiektów i generowaniem bounding boxów wokół wykrytych celów.

## drone_gui
Graficzny interfejs użytkownika — graficzne odpalanie misji i widgetów detekcji. **Status: Work in Progress**

## drone_hardware
Warstwa hardware–software — drone handlery, flagi telemetryczne, definicje niskopoziomowych parametrów drona.

## drone_interfaces
Zdefiniowane serwisy, akcje i wiadomości ROS2 wykorzystywane przez node'y i serwisy.

## drone_web
Webowa strona kontrolna drona — publikacja wiadomości i telemetrii podczas konkurencji. **Status: Work in Progress (konkurencje)**

## droniada_inspekcja
Stara część repozytorium wykorzystywana do konkurencji detekcja w Droniadzie. **Status: Niewykorzystywana**
