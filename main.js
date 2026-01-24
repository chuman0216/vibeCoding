document.addEventListener('DOMContentLoaded', () => {

    // --- Theme Switcher Logic ---
    const themeSwitch = document.getElementById('theme-switch');
    const body = document.body;

    // Function to apply theme and save preference
    const applyTheme = (isDarkMode) => {
        if (isDarkMode) {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
        themeSwitch.checked = isDarkMode;
    };

    // Load saved theme on page load
    const loadTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        // Default to light mode if no preference is saved
        applyTheme(savedTheme === 'dark');
    };

    // Event listener for the theme switch
    themeSwitch.addEventListener('change', (event) => {
        applyTheme(event.target.checked);
    });

    // Initial theme load
    loadTheme();


    // --- Lotto Generator Logic ---
    const generateBtn = document.getElementById('generate-btn');
    const numbersDisplay = document.getElementById('numbers-display');

    if (generateBtn) { // Only run if the button exists on the page
        generateBtn.addEventListener('click', () => {
            const numbers = new Set();
            while (numbers.size < 6) {
                const randomNum = Math.floor(Math.random() * 45) + 1;
                numbers.add(randomNum);
            }

            const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);
            displayNumbers(sortedNumbers);
        });
    }

    function displayNumbers(numbers) {
        if (!numbersDisplay) return;
        numbersDisplay.innerHTML = '';
        for (const number of numbers) {
            const circle = document.createElement('div');
            circle.classList.add('number-circle');
            circle.textContent = number;
            circle.style.backgroundColor = getNumberColor(number);
            numbersDisplay.appendChild(circle);
        }
    }

    function getNumberColor(number) {
        if (number <= 10) {
            return '#fbc400'; // Yellow
        } else if (number <= 20) {
            return '#69c8f2'; // Blue
        } else if (number <= 30) {
            return '#ff7272'; // Red
        } else if (number <= 40) {
            return '#aaa'; // Gray
        } else {
            return '#b0d840'; // Green
        }
    }
});
