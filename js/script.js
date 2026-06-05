{
    // Główna funkcja gry zapisana jako funkcja anonimowa w stałej
    const playGame = function(playerInput) {
        clearMessages();
        //Powyższa funkcja działą prawidłowo i nie duplikuje tekstu

        // Losowanie i definicja nazwy ruchu komputera w jednym miejscu
        const randomNumber = Math.floor(Math.random() * 3 + 1);
        
        // Funkcja pomocnicza zamieniona na funkcję anonimową
        const getMoveName = function(moveId) {
            if (moveId === 1) return 'kamień';
            if (moveId === 2) return 'papier';
            if (moveId === 3) return 'nożyce';
            return 'nieznany ruch';
        };

        const computerMove = getMoveName(randomNumber);
        const playerMove = getMoveName(playerInput);

        printMessage('Mój ruch to: ' + computerMove);
        printMessage('Twój ruch to: ' + playerMove);
        //Powyższa funkcja działa prawidłowo nie wyświetla cyfr tylko poprawne słowa kamień,papoer,nożyce

        // Funkcja wyświetlająca wynik zamieniona na funkcję anonimową
        const displayResult = function(argComputerMove, argPlayerMove) {
            if (argPlayerMove === 'nieznany ruch') {
                printMessage('Wprowadziłeś błędną wartość!');
                return;
            }

            if (argComputerMove === argPlayerMove) {
                printMessage('Remis!');
            } else if (
                (argComputerMove === 'kamień' && argPlayerMove === 'papier') ||
                (argComputerMove === 'papier' && argPlayerMove === 'nożyce') ||
                (argComputerMove === 'nożyce' && argPlayerMove === 'kamień')
            ) {
                printMessage('Ty wygrywasz!');
            } else {
                printMessage('Tym razem przegrywasz :(');
            }
        };

        displayResult(computerMove, playerMove);
    };
    // funkcja logiki wyniku działą prawidłowo sekwencje wygranych przegranych oraz remis

    // Słuchacze zdarzeń z bezpośrednim wywołaniem gry
    document.getElementById('play-rock').addEventListener('click', function() {
        playGame(1);
    });

    document.getElementById('play-paper').addEventListener('click', function() {
        playGame(2);
    });

    document.getElementById('play-scissors').addEventListener('click', function() {
        playGame(3);
    });
}