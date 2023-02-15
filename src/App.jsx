import './assets/scss/App.scss';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import { RouterApp } from './Router/RouterApp';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <RouterApp />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
