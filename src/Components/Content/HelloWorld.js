import React from "react";

export default function HelloWorld() {
  return (
    <section className="main-section" id="Hello_world">
      <header>Hello world</header>
      <article>
        <p>
          To get started with writing JavaScript, open the Scratchpad and write
          your first "Hello world" JavaScript code:
        </p>
        <code>
          function greetMe(yourName) &#123;alert("Hello " + yourName);&#125;
          <br />
          greetMe("World");
        </code>

        <p>
          Select the code in the pad and hit Ctrl+R to watch it unfold in your
          browser!
        </p>
      </article>
    </section>
  );
}
