import React, { useState } from 'react';
import Card from './Card/Card';
import { CARD_SUITS } from './constants';
import './App.css';

function App() {
  const [isCardOpened, setCardOpened] = useState(false);
  
  return (
    <div className='App'>
      <Card
        isCardOpened={isCardOpened}
        number={53}
        color={CARD_SUITS.CLUBS}
        onClick={() => setCardOpened(!isCardOpened)}
      />
    </div>
  );
}

export default App;
