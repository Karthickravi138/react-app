import React, { useState } from 'react';
import ButtonComponent from './components/1. Basic Component Creation';
import StateManagement from './components/2. State Management';
import ConditionalRendering from './components/3. Conditional Rendering';
import FormComponent from './components/4. Forms and Controlled Components';
import ComponentComposition from './components/5. Component Composition';
import SimpleComponent from './components/SimpleComponent';
import EffectComponent from './components/6. Lifecycle Methods or useEffect Hook';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import ParentComponent from './components/8. State Lift-Up and Props Drilling';
import AppProvider from './components/9. ContextAPI.jsx';
import ChildComponent1 from './components/ChildComponent1.jsx';
import PerformanceOptimization from "./components/10. Advanced UI and Performance Optimization.jsx"
import ErrorBoundary from "./components/11. Error Boundary Implementation.jsx"
import OptimisticUi from  "./components/14. Optimistic UI Updates.jsx"
import RequireCode from "./components/15. RequirementsCode Splitting and Lazy Loading.jsx"
import './App.css';

const EnhancedComponent =ComponentComposition(SimpleComponent);


function App() {
  const [message, setMessage] = useState('');
  const [showButton, setShowButton] = useState(true);

  const handleClick = () => {
    setMessage('Welcome to GoZen Technologies!!!');
    setShowButton(false);
  };

  return (
    <div className="app">
      {showButton ? (
        <ButtonComponent onClick={handleClick} />
      ) : (
        <h1 className="welcome-message">{message}</h1>
      )}
      <div className="App">
     < StateManagement/>
     </div>
     <div className='App'>
      <ConditionalRendering/>
      </div>
     <div className='App'>
       <FormComponent/>
       </div>
     <div className='APP'>
     <ComponentComposition />
     <EnhancedComponent message="Hello, GoZen Technologies!" />
     </div>
     <div className='App'> <EffectComponent/>
     </div>
     <div className='App'>
     <Router>
      <nav>
        <ul>
          <li><Link to="/src/components/HomePage.jsx">Home</Link></li>
          <li><Link to="/src/components/AboutPage.jsx">About</Link></li>
          <li><Link to="/src/components/ContactPage.jsx">Contact</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route exact path="/src/components/HomePage.jsx" component={HomePage} />
        <Route path="/src/components/AboutPage.jsx" component={AboutPage} />
        <Route path="/src/components/ContactPage.jsx" component={ContactPage} />
      </Routes>
    </Router>
     </div>
     <div className='App'>
      <ParentComponent/>
     </div>
     <div className='App'>
     <AppProvider>
      <div className="App">
        <ChildComponent1 />
      </div>
    </AppProvider>
     </div>
     <div className='App'>
      <PerformanceOptimization/>
     </div>
     <div className='App'>
      <ErrorBoundary/>
     </div>
     
     <div className='App'>
      <OptimisticUi/>
     </div>
     <div className='App'>
      <RequireCode/>
     </div>
     <div className='App'></div>
     
    

   
    </div>
  
     
  );
}

export default App;
