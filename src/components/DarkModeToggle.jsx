import React from 'react'

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <button onClick={toggleDarkMode} aria-pressed={darkMode}>
      {darkMode ? 'Toggle: Switch to Light Mode' : 'Toggle: Switch to Dark Mode'}
    </button>
  )
}

export default DarkModeToggle
