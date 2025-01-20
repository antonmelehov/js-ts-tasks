const fetchCountries = async () => {
    const url = 'https://restcountries.com/v3.1/all';
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Failed to fetch countries.");
        }
        const countries = await response.json();
        return countries.map(country => ({
            name: country.name.common,
            capital: country.capital ? country.capital[0] : null,
            region: country.region,
            population: country.population,
            borders: country.borders || []
        })).filter(country => country.capital);
    } catch (error) {
        console.error("Error fetching countries:", error);
    }
}

const getRandomCountry = (countries) => {
    const randomIndex = Math.floor(Math.random() * countries.length);
    return countries[randomIndex];
}

const startGame = async () => {
    const countries = await fetchCountries();
    if (!countries || countries.length === 0) {
        console.error("There are no countries.");
        return;
    }

    let playAgain = true;

    while (playAgain) {
        const country = getRandomCountry(countries);
        const { name, capital, region, population, borders } = country;

        console.log(`Guess the country where the capital is "${capital}".`);

        let startTime = performance.now();
        let penaltyTime = 0;
        let attempts = 3;
        let hints = [
            `Hint: The region is ${region}. Penalty: 1000 ms.`,
            `Hint: The population is around ${population} people. Penalty: 2000 ms.`,
            `Hint: It shares borders with ${borders.map(borderCode => {
                const borderCountry = countries.find(c => c === borderCode);
                return borderCountry ? borderCountry.name : borderCode;
            }).join(", ") || "no countries"}. Penalty: 3000 ms.`
        ];

        let guessedCorrectly = false;

        while (attempts > 0) {
            const guess = prompt("Enter your guess:")?.trim();

            if (guess.toLowerCase() === name.toLowerCase()) {
                guessedCorrectly = true;
                break;
            } else {

                console.log(`Incorrect, it's not ${guess}.`);
                if (attempts > 0) {
                    console.log(hints[3 - attempts]);
                    penaltyTime += 1000 * (3 - attempts);
                }
                attempts--;
            }
        }

        let endTime = performance.now();
        const totalTime = Math.round(endTime - startTime + penaltyTime);

        if (guessedCorrectly) {
            console.log(`Correct, it's ${name}! You win!`);
            console.log(`You guessed correctly in ${totalTime} ms.`);
        } else {
            console.log(`Sorry, the correct answer is ${name}. Better luck next time!`);
        }

        const playAgainResponse = prompt("Do you want to play again? (yes/no)")?.toLowerCase();
        playAgain = playAgainResponse === 'yes';
    }

    console.log("Thanks for playing!");
}

startGame();
