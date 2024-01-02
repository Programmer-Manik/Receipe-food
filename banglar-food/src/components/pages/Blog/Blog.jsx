import React from "react";
import Pdf from "react-to-pdf";
const ref = React.createRef();

const Blog = () => {
  return (
    <div>
      <div className="px-20 my-20 w-10/12 mx-auto text-justify" ref={ref}>
        <div>
          <h2 className="text-3xl font-bold my-5">
            The key differences between controlled and uncontrolled components
            are:
          </h2>
          <p>
            <ul>
              <li className="mt-5">
                In controlled components, the value of the form element is
                stored in React state, while in uncontrolled components, the
                value is managed by the DOM.
              </li>
              <li className="mt-5">
                Controlled components require more code, as you need to write
                event handlers to update the state, while uncontrolled
                components are simpler to write, as you only need to use a ref
                to retrieve the value of the form element.{" "}
              </li>
              <li className="mt-5">
                Controlled components allow you to enforce input validation and
                control the behavior of the form element more precisely, while
                uncontrolled components give you less control over the behavior
                of the form element.
              </li>
            </ul>
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold my-5">
            How to validate React props using PropTypes?
          </h2>
          <p>
            In React, PropTypes is a built-in library that allows you to
            validate the props passed to a component. PropTypes helps to ensure
            that the component is being used correctly and that all required
            props are being passed to the component.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold my-5">
            the difference between nodejs and express js.
          </h2>
          <p>
            Node.js and Express.js are two different technologies, but they are
            often used together to create web applications. Node.js is a
            server-side runtime environment, while Express.js is a web framework
            that runs on top of Node.js. Node.js: Node.js is a server-side
            runtime environment that allows developers to build server-side
            applications using JavaScript. It uses an event-driven, non-blocking
            I/O model that makes it lightweight and efficient. With Node.js,
            developers can build scalable network applications using a single
            programming language (JavaScript). Node.js provides a set of
            built-in modules that make it easy to build server-side
            applications, such as the HTTP module for creating an HTTP server
            and the FS module for working with the file system. Express.js:
            Express.js is a lightweight and flexible web application framework
            for Node.js. It provides a set of features for building web
            applications, such as routing, middleware, and templating engines.
            With Express.js, developers can easily create web APIs, handle HTTP
            requests and responses, and serve static files. Express.js is built
            on top of the Node.js HTTP module and provides an easier and more
            flexible way to handle HTTP requests and responses. Here are some
            key differences between Node.js and Express.js: Node.js is a runtime
            environment for JavaScript, while Express.js is a web framework that
            runs on top of Node.js. Node.js provides a set of built-in modules
            for building server-side applications, while Express.js provides a
            set of features for building web applications on top of Node.js.
            Node.js is low-level and requires developers to write a lot of code
            to build web applications, while Express.js provides a higher-level
            abstraction that makes it easier to build web applications. Node.js
            provides a single-threaded event loop that allows it to handle a
            large number of concurrent connections efficiently, while Express.js
            provides middleware and routing features that make it easier to
            handle HTTP requests and responses. In summary, Node.js provides a
            server-side runtime environment for JavaScript, while Express.js
            provides a web framework that runs on top of Node.js and makes it
            easier to build web applications. Together, they provide a powerful
            platform for building scalable and efficient web applications.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold my-5">
            What is a custom hook, and why will you create a custom hook?
          </h2>
          <p>
            In React, a custom hook is a reusable function that encapsulates a
            specific piece of logic and can be shared across multiple
            components. Custom hooks allow developers to extract common
            functionality into a separate function, making it easier to reuse
            and maintain the code. A custom hook is created to solve a specific
            problem that cannot be easily solved by existing hooks. It can be
            used to abstract away complex logic and make it more reusable and
            easier to reason about. Some examples of use cases for custom hooks
            include managing state, handling API requests, and integrating with
            third-party libraries. For instance, lets say you have a form that
            needs to handle validation and submission of user data. You could
            create a custom hook that encapsulates this logic, so that you can
            easily reuse it across multiple forms in your application. This way,
            you can keep your code DRY (Dont Repeat Yourself), reduce
            redundancy, and make your code easier to maintain. In summary,
            custom hooks provide a way to encapsulate reusable logic in a
            separate function that can be easily shared across multiple
            components, making it easier to write and maintain React code.
          </p>
        </div>
      </div>
      <div className="text-center mb-20">
        <Pdf targetRef={ref} filename="code-example.pdf">
          {({ toPdf }) => (
            <button className="btn" onClick={toPdf}>
              Generate Pdf
            </button>
          )}
        </Pdf>
      </div>
    </div>
  );
};

export default Blog;
