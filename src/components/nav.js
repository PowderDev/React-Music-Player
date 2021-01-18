import React from 'react';


const Nav = ({setLibraryStatus, libraryStatus}) =>{
    return(
        <nav>
            <h1>Waves</h1>
            <button onClick={() => setLibraryStatus(!libraryStatus)}>Library <i className="fas fa-music"></i></button>
        </nav>
    )
}

export default Nav