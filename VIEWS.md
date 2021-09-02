#Dashboard

- '/'

- statystyki dzisiejszych zamówień (zdalnych i lokalnych)
- listę rezerwacji i eventów

#Logowanie

- '/login'
- pola na login i hasło 
- button do zalogowania (link do dashboardu)

#Widok dostępności stolików

- '/tables'
- wybór daty i godziny
- tabela z listą rezerwacji oraz wydarzeń
  - każda kolumna = 1 stolik
  - każdy wiersz = 30 min
  - ma przypominać widok tygodnia w kalendarzu google, gdzie w kolumnach są różne stoliki
  po klinknięciu rezerwacji lub eventu, przechodzimy na stronę szczegółów 
- '/tables/booking/:id'
- zawiera wszystkie informacje dotyczące rezerwacji
- umożliwia edycję i zapisanie zmian
- '/tables/booking/new'
- analogicznie do poprzedniej, bez początkowych informacji
- '/tables/events/:id'
- analogicznie do poprzedniej, dla eventów
- '/tables/events/new'
- analogicznie do poprzedniej, bez początkowych informacji

#Widok kelnera

- '/waiter'
- tabela
- w wierszach stoliki
- w kolumnach różne informacje (status, czas od ostatniej aktywności)
- w ostatniej kolumnie dostępne akcje dla danego stolika
- '/waiter/order/new'
- numer stolika (edytowanly)
- menu produktów
- opcje wybranego produktu
- zamówienie (zamówione produkty z opcjami i ceną)
- kwota zamówienia
- '/waiter/order/:id'
- jak powyższa

#Widok kuchni

- '/kitchen'
- lista zamówień w kolejności złożenia
- lista musi zawierać 
  - numer stolika (lub zamówienia zdalnego) 
  - pełne informacje dotyczące zamówionych dań
  - na liście musi być możliwość oznaczenia zamówienia jako zrealizowane