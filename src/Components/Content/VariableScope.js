import React from "react";

export default function VariableScope() {
  return (
    <section className="main-section" id="Variable_scope">
      <header>Variable scope</header>
      <article>
        <p>
          When you declare a variable outside of any function, it is called a
          global variable, because it is available to any other code in the
          current document. When you declare a variable within a function, it is
          called a local variable, because it is available only within that
          function.
        </p>
        <p>
          JavaScript before ECMAScript 2015 does not have block statement scope;
          rather, a variable declared within a block is local to the function
          (or global scope) that the block resides within. For example the
          following code will log 5, because the scope of x is the function (or
          global context) within which x is declared, not the block, which in
          this case is an if statement.
        </p>
        <code>if (true) &#123; var x = 5; &#125; console.log(x); // 5</code>
        <p>
          This behavior changes, when using the let declaration introduced in
          ECMAScript 2015.
        </p>
        <code>
          if (true) &#123; let y = 5; &#125; console.log(y); // ReferenceError:
          y is not defined
        </code>
      </article>
    </section>
  );
}
