import React from 'react';





const Search = props =>(

      <form onSubmit={props.getInfo}>
        <input type="text" name= "info" placeholder="Search by name" />
		<button>Search</button>
		
      </form>
    
);

export default Search