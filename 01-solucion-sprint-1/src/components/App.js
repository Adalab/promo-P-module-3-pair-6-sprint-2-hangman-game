import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

// api
import getWordFromApi from '../services/api';
// styles
import '../styles/App.scss';

import '../styles/Letters.scss';
import '../styles/Form.scss';
import '../styles/Header.scss';
import Dummy from './Dummy';
import Header from './Header';
import SolutionLetters from './SolutionLetters';
import ErrorLetters from './ErrorLetters';
import Form from './Form';
import Footer from './Footer';
import Instruccions from './Instructions';
import Options from './Options';

function App() {
  const [word, setWord] = useState('');
  const [userLetters, setUserLetters] = useState([]);
  const [lastLetter, setLastLetter] = useState('');

  useEffect(() => {
    getWordFromApi().then((word) => {
      setWord(word);
    });
  }, []);

  // events

  const getNumberOfErrors = () => {
    const errorLetters = userLetters.filter(
      (letter) => word.includes(letter) === false
    );
    return errorLetters.length;
  };

  const handleLastLetter = (value) => {
    value = value.toLocaleLowerCase();
    setLastLetter(value);

    if (!userLetters.includes(value)) {
      userLetters.push(value);
      setUserLetters([...userLetters]);
    }
  };

  return (
    <div className="page">
      <Header />
      <main className="main">
        <section>
          <SolutionLetters word={word} userLetters={userLetters} />
          <ErrorLetters word={word} userLetters={userLetters} />
          <Form lastLetter={lastLetter} handleLastLetter={handleLastLetter} />
        </section>
        <Dummy getNumberOfErrors={getNumberOfErrors} />
        <Footer />
      </main>
    </div>
  );
}

export default App;
