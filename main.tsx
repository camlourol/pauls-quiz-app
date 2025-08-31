import { createRoot } from 'react-dom/client';
import TriviaApp from './components/TriviaApp.tsx';
import './index.css';

createRoot(document.getElementById("root")!).render(<TriviaApp />);
