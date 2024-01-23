import './App.css';

import { BrowserRouter as Router } from 'react-router-dom';

import AnimatedRoutes from './components/AnimatedRoutes';
import Header from './layouts/Header';
import { AuthProvider } from './providers/authProvider';


function App() {

	return (
		<div className="w-screen h-screen bg-main-purple overflow-hidden">
			<AuthProvider>
				<Router>
					<Header/>
					<AnimatedRoutes/>
				</Router>
			</AuthProvider>
		</div>
	);
}

export default App;
