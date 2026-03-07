# Preflight check list do lotów w trybie automatycznych

::: warning
Jest to kontynuacja poprzedniej listy, nie powinieneś jej zaczynać jeżeli nie wykonałeś poprzedniej
:::

<label> 1. Podłącz się do companion computera </label>
<input type="checkbox">

<label> 2. Odpal odpowiedni launch file z nodami których będziesz potrzebował do misji </label>
<input type="checkbox">

<label> 3. Sprawdź czy node drone_handler zwraca błąd o niesprawności systemu </label>
<input type="checkbox">

<label> 4. Uruchom misję w której UAV wznosi się na 5 metrów do góry wisi w powietrzu przez 5 sekund i ląduje </label>
<input type="checkbox">

5. Urochom misję w której:
* UAV wznosi się na 5 metrów
* leci 5 metrów w przód w ramie NED
* leci 5 metrów w tył w ramie NED
* ląduje
<input type="checkbox">

6. Urochom misję w której:
* UAV wznosi się na 5 metrów
* leci 5 metrów w przód za pomocą wektorów prędkości
* leci 5 metrów w tył za pomocą wektorów prędkości
* ląduje
<input type="checkbox">



::: info
Po poprawnym przejściu przez wszsytkie punkty jesteś gotowy testować własne algorytmy na dronie
:::

::: warning
Nawet po wykonaniu tych wszystkich procedur może stać się wypadek przy testowaniu algorytmu, pamietaj by robić to na wolnej otawrtej przestrzeni, oraz być w pełnej gotowości do przejęcia drona przez pilota
:::