import React, { useState } from 'react';

const HomePage = () => {
    const [content, setContent] = useState([
      <p key={1}>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
    ]);
  
    const addContent = () => {
      setContent(prevContent => [
        ...prevContent,
        <p key={prevContent.length + 1}>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
      ]);
    };
  
    return (
      <div className='p-2' >
        <h1>Sticky Footer with Flexbox</h1>
        <p><button id="add" onClick={addContent} type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Green</button>
        </p>
        {content}
      </div>
    );
  };

export default HomePage;