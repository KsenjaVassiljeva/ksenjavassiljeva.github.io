import React from "react";

import './app-header.css'

const AppHeader = ({ liked, allPosts }) => (
    <div>
      <h1>My Post App</h1>
      <h2>{allPosts} posts, liked {liked}</h2>
    </div>
  );
  
  export default AppHeader;