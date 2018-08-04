import React from 'react'

export const SearchVenueView = ({value, onChange, submit}) => {
  return (
    <article className='search'>
      <input className='search__geocode' value={value} onChange={onChange}/>
      <button className='search__button' onClick={submit}> Search </button>
    </article>
  );
}