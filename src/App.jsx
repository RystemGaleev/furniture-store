import './assets/scss/App.scss';
import { ThemeProvider } from './context/ThemeContext';
import { RouterApp } from './Router/RouterApp';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <RouterApp />
      </div>
    </ThemeProvider>
  );
}

export default App;
