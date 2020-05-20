import React from "react";

export default function DeclaringVariables() {
  return (
    <section className="main-section" id="Declaring_variables">
      <header>Declaring variables</header>
      <article>
        <p>You can declare a variable in three ways:</p>
        <div id="ways">
          <p>With the keyword var. For example,</p>

          <code>var x = 42.</code>
          <p>
            This syntax can be used to declare both local and global variables.
          </p>
        </div>
        <div id="ways">
          <p>By simply assigning it a value. For example,</p>

          <code>x = 42.</code>
          <p>
            This always declares a global variable. It generates a strict
            JavaScript warning. You shouldn't use this variant.
          </p>
        </div>
        <div id="ways">
          <p>With the keyword let. For example,</p>

          <code>let y = 13.</code>
          <p>
            This syntax can be used to declare a block scope local variable. See
            Variable scope below.
          </p>
        </div>
      </article>
    </section>
  );
}
