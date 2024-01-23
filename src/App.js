import './App.css';

import { BrowserRouter as Router } from 'react-router-dom';

import AnimatedRoutes from './components/AnimatedRoutes';
import Header from './layouts/Header';
import { AuthProvider } from './providers/authProvider';
import { QuizProvider } from './providers/quizProvider';


function App() {

	return (
		<div className="w-screen h-screen bg-main-purple overflow-hidden">
			<AuthProvider>
			<QuizProvider>
				<Router>
					<Header/>
					<AnimatedRoutes/>
				</Router>
			</QuizProvider>
			</AuthProvider>
		</div>
	);
}

export default App;
