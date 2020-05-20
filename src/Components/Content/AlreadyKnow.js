import React from "react";

export default function AlreadyKnow(id) {
  return (
    <section className="main-section" id={id}>
      <header>What you should already know</header>
      <article>
        <p>This guide assumes you have the following basic background:</p>
        <ul>
          <li>
            A general understanding of the Internet and the World Wide Web
            (WWW).
          </li>
          <li>Good working knowledge of HyperText Markup Language (HTML).</li>
          <li>
            Some programming experience. If you are new to programming, try one
            of the tutorials linked on the main page about JavaScript.
          </li>
        </ul>
      </article>
    </section>
  );
}
