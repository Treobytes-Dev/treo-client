import React, { useEffect, useState } from "react";

/**
 * Home container
 * @function
 * Home - Renders the Home container for the Home page.
 */

function Home() {
  const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/blogs/")
      .then((res) => res.json())
      .then(
        (result) => {
          setItems(result.data);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setError(error);
        }
      );
  }, []);

  return (
    <div className="page">
      <div className="home">
        <h1 className="title">Home</h1>
        <section>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          {items.map((item) => (
            <li key={item.id}>
              {item.name} {item.type}
            </li>
          ))}
        </section>
      </div>
    </div>
  );
}

export default Home;
