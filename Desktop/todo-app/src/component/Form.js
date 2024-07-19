import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi'; 

function Form({ addTodo }) {
  const [value, setValue] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  const toggleFormVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleSearchClick = () => {
    alert('Search clicked!');
  };

  return (
    <div className="relative">
      <div className="flex">
        <button
          onClick={toggleFormVisibility}
          className="bg-blue-500 text-white p-2 rounded-l-lg hover:bg-blue-600 focus:outline-none"
        >
          {isVisible ? 'Masquer' : '+'}
        </button>
        {isVisible && (
          <form onSubmit={handleSubmit} className="flex items-center mt-2">
            <input
              type="text"
              className="flex-grow p-2 border-2 border-gray-300 focus:outline-none focus:border-blue-500 rounded-r-none"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Ajouter une tâche..."
            />
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600 focus:outline-none"
            >
              Ajouter
            </button>
          </form>
        )}
        {/* Barre de recherche avec icône de loupe */}
        <div className="bg-gray-200 p-2 rounded-r-lg flex items-center cursor-pointer" onClick={handleSearchClick}>
          <FiSearch className="text-gray-600" />
        </div>
      </div>
    </div>
  );
}

export default Form;
