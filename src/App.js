import React from 'react'
import { Footer, About, Header, Info, Portfolio } from './containers';
import { Article, Navbar } from './components';
import './App.css'

const App = () => {
  return (
    <div className="App">
        <div className="gradient__bg">
            <Navbar />
            <Header />
            <About />
        </div>
        <Portfolio />
        <Footer />
        <Info />
        <Article />
    </div>
  )
}

export default App;
