import './assets/scss/App.scss';
import { AuthProvider } from './context/AuthContext';
import { ModalProvider } from './context/ModalContext';
import { ThemeProvider } from './context/ThemeContext';
import { RouterApp } from './Router/RouterApp';

function App() {
  return (
    <ModalProvider>
      <ThemeProvider>
        <AuthProvider>
          <RouterApp />
        </AuthProvider>
      </ThemeProvider>
    </ModalProvider>
  );
}

export default App;
