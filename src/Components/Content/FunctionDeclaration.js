import React from "react";

export default function FunctionDeclaration() {
  return (
    <section className="main-section" id="Function_declarations">
      <header>Function declarations</header>
      <article>
        <p>
          A function definition (also called a function declaration, or function
          statement) consists of the function keyword, followed by:
        </p>
        <ul>
          <li>The name of the function.</li>
          <li>
            A list of arguments to the function, enclosed in parentheses and
            separated by commas.
          </li>
          <li>
            The JavaScript statements that define the function, enclosed in
            curly brackets, &#123; }.
          </li>
        </ul>
        <p>
          For example, the following code defines a simple function named
          square:
        </p>
        <code>function square(number) &#123; return number * number; }</code>
        <p>
          The function square takes one argument, called number. The function
          consists of one statement that says to return the argument of the
          function (that is, number) multiplied by itself. The return statement
          specifies the value returned by the function.
        </p>
        <code>return number * number;</code>
        <p>
          Primitive parameters (such as a number) are passed to functions by
          value; the value is passed to the function, but if the function
          changes the value of the parameter, this change is not reflected
          globally or in the calling function.
        </p>
      </article>
    </section>
  );
}
