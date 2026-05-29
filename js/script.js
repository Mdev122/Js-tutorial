// Losowanie ruchu komputera
let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if (randomNumber == 1) {
    computerMove = 'kamień';
} else if (randomNumber == 2) {
    computerMove = 'papier';
} else if (randomNumber == 3) {
    computerMove = 'nożyce';
}

printMessage('Mój ruch to: ' + computerMove);

// Pobranie i odczytanie ruchu gracza
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if (playerInput == '1') {
    playerMove = 'kamień';
} else if (playerInput == '2') {
    playerMove = 'papier';
} else if (playerInput == '3') {
    playerMove = 'nożyce';
}

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