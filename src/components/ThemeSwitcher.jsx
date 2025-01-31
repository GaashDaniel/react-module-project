import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

function ThemeSwitcher() {

    const getInitialTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    };

    const [theme, setTheme] = useState(getInitialTheme);

    function toggleTheme() {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    useEffect(() => {
        document.documentElement.style.colorScheme = theme;
        document.documentElement.dataset.bsTheme = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <button className='btn theme-switcher' onClick={toggleTheme} title='Switch Theme' >
            <FontAwesomeIcon icon={theme === 'dark' ? faMoon : faSun} />
        </button>
    );
};

export default ThemeSwitcher;