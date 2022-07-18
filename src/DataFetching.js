import React, { useState, useEffect } from "react";
import axios from "axios";

const BaseURL = "https://api.opendota.com/api/heroes";
// const heroesStateURL = "https://api.opendota.com/api/heroStats";

function DataFetching() {
  const [posts, setPosts] = React.useState([]);

  useEffect(() => {
    axios
      .get(BaseURL)
      .then((respond) => {
        console.log(respond);
        setPosts(respond.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <ol>
        {posts.map((post) => (
          <li key={post.id}>
            {post.localized_name}, {post.attack_type}, {post.roles}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default DataFetching;
