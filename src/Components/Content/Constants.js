import React from "react";

export default function Constants() {
  return (
    <section className="main-section" id="Constants">
      <header>Constants</header>
      <article>
        <p>
          You can create a read-only, named constant with the const keyword. The
          syntax of a constant identifier is the same as for a variable
          identifier: it must start with a letter, underscore or dollar sign and
          can contain alphabetic, numeric, or underscore characters.
        </p>
        <code>const PI = 3.14;</code>
        <p>
          A constant cannot change value through assignment or be re-declared
          while the script is running. It has to be initialized to a value.
        </p>
        <p>
          The scope rules for constants are the same as those for let block
          scope variables. If the const keyword is omitted, the identifier is
          assumed to represent a variable.
        </p>
        <p>
          You cannot declare a constant with the same name as a function or
          variable in the same scope. For example:
        </p>
        <code>
          // THIS WILL CAUSE AN ERROR function f() &#123;&#125;; const f = 5; //
          THIS WILL CAUSE AN ERROR ALSO function f() &#123; const g = 5; var g;
          //statements &#125;
        </code>
        <p>
          However, object attributes are not protected, so the following
          statement is executed without problems.
        </p>
        <code>
          const MY_OBJECT = &#123;"key": "value"&#125;; MY_OBJECT.key =
          "otherValue";
        </code>
      </article>
    </section>
  );
}
