import React from 'react';
import Navbar from './components/layout/Navbar.jsx';
import HomePage from './pages/HomePage.jsx';

/**
 * App — root component.
 *
 * Responsibilities:
 *   1. Provide the full-screen frame (max-width 1440, background #000D12).
 *   2. Render the persistent Navbar.
 *   3. Render the current page (HomePage).
 */
const App = () => (
  <div
    className="antialiased selection:bg-primary-container selection:text-white mx-auto overflow-hidden relative"
    style={{
      maxWidth: '1440px',
      width: '100%',
      background: '#000D12',
    }}
  >
    <Navbar />
    <HomePage />
  </div>
);

export default App;
