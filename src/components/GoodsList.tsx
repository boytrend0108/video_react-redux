import React, { useState } from 'react';

export const GoodsList = () => {
  const goods: string[] = [];
  const [newGood, setNewGood] = useState('');
  const addGood = (goodToAdd: string) => {};
  const removeGood = (goodToRemove: string) => {};

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!newGood) {
      return;
    }

    addGood(newGood);
    setNewGood('');
  };

  return (
    <section className="goods">
      <h2>Goods:</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newGood}
          onChange={e => setNewGood(e.target.value)}
        />
        <button>Add</button>
      </form>

      <ul>
        {goods.map(good => (
          <li key={good}>
            <button
              onClick={() => removeGood(good)} 
              className="delete"
            />
            {good}
          </li>
        ))}
      </ul>
    </section>
  );
};
