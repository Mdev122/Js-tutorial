// Losowanie ruchu komputera
let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);

// 1. Definicja funkcji przypisującej nazwę ruchu do numeru
function getMoveName(moveId) {
    if (moveId == 1) {
        return 'kamień';
    } else if (moveId == 2) {
        return 'papier';
    } else if (moveId == 3) {
        return 'nożyce';
    }
    
    printMessage('Nie znam ruchu o id ' + moveId + '.');
    return 'nieznany ruch';
}

// 2. Ruch komputera z wykorzystaniem funkcji
// (zakładamy, że zmienna randomNumber została wcześniej wylosowana od 1 do 3)
let computerMove = getMoveName(randomNumber);
printMessage('Mój ruch to: ' + computerMove);

// 3. Pobranie i odczytanie ruchu gracza
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Gracz wpisał: ' + playerInput);

// 4. Ruch gracza z wykorzystaniem tej samej funkcji
let playerMove = getMoveName(playerInput);
printMessage('Twój ruch to: ' + playerMove);
// LOGIKA WYNIKU GRY

if (playerMove == 'nieznany ruch') {
    printMessage('Wpisałeś niepoprawną liczbę! Wybierz 1, 2 lub 3.');
} else if (playerMove == computerMove) {
    printMessage('Remis!');
} else if (
    (playerMove == 'papier' && computerMove == 'kamień') ||
    (playerMove == 'kamień' && computerMove == 'nożyce') ||
    (playerMove == 'nożyce' && computerMove == 'papier')
) {
    printMessage('Ty wygrywasz!');
} else {
    printMessage('Przegrywasz! Komputer był lepszy.');
}