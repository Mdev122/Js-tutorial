function playGame(playerInput) {
    // Czyszczenie dotychczasowych komunikatów przed nową rozgrywką
    clearMessages();

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
    let computerMove = getMoveName(randomNumber);
    printMessage('Mój ruch to: ' + computerMove);

    // 3. Pobranie i odczytanie ruchu gracza
    console.log('Gracz wpisał: ' + playerInput);

    // 4. Ruch gracza z wykorzystaniem tej samej funkcji
    let playerMove = getMoveName(playerInput);
    printMessage('Twój ruch to: ' + playerMove);

    // LOGIKA WYNIKU GRY

    // Definicja funkcji wyświetlającej wynik gry na podstawie argumentów
    function displayResult(argComputerMove, argPlayerMove) {
        printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

        if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
            printMessage('Ty wygrywasz!');
        } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
            printMessage('Ty wygrywasz!');
        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
            printMessage('Ty wygrywasz!');
        } else if (argComputerMove == argPlayerMove) {
            printMessage('Remis!');
        } else if (argPlayerMove == 'nieznany ruch') {
            printMessage('Wprowadziłeś błędną wartość!');
        } else {
            printMessage('Tym razem przegrywasz :(');
        }
    }

    // Wywołanie funkcji sprawdzającej wynik
    displayResult(computerMove, playerMove);
}

// Słuchacze zdarzeń dla przycisków HTML
document.getElementById('play-rock').addEventListener('click', function() {
    playGame(1);
});

document.getElementById('play-paper').addEventListener('click', function() {
    playGame(2);
});

document.getElementById('play-scissors').addEventListener('click', function() {
    playGame(3);
});