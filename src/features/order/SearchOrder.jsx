import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function SearchOrder() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const username = useSelector((state) => state.user.username);

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery('');
  }

  if(!username) return null;
  
  return (
    <>
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-28 rounded-full bg-yellow-100 px-4 py-2 md:text-sm text-[8px] transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
      />
    </form>
    </>
  );
}

export default SearchOrder;
