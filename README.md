# Frontend Mentor - Ping coming soon page solution

This is a solution to the [Ping coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Submit their email address using an `input` field
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty. The message for this error should say _"Whoops! It looks like you forgot to add your email"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Please provide a valid email address"_

### Screenshot

![preview](./public/preview.png)

### Links

- Solution URL: [github](https://github.com)

### Built with

- Semantic HTML5 markup
- tailwind
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```js
function Input() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  function handleEmail(value: string) {
    setEmail(value);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!email) {
      setError("Whoops! It looks like you forgot to add your email.");
    } else if (!regex.test(email)) {
      setError("Please provide a valid email address.");
    } else {
      setError("");
    }
  }

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      action="  "
      className="flex flex-col gap-4 mb-16 lg:flex-row"
    >
      <div className="flex flex-col gap-1 lg:basis-2/3">
        <input
          onChange={(e) => handleEmail(e.target.value)}
          value={email}
          type="email"
          name=" "
          id=""
          placeholder="Your email address"
          className={`${
            error ? "border-lightRed" : "border-gray"
          } border outline-none w-full border-gray py-3 rounded-full px-4 text-gray text-base placeholder::text-gray"`}
        />
        <span className="text-lightRed text-sm text-center block lg:text-left">
          {error}
        </span>
      </div>
      <button className="text-white font-medium text-base bg-blue py-3 px-4 rounded-full lg:basis-1/3 lg:self-start">
        Notify Me
      </button>
    </form>
  );
}
```

uld come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.\*\*

## Author

- Frontend Mentor - [@Oloude](https://www.frontendmentor.io/profile/oloude)
- Twitter - [@AbosedeOloude](https://www.twitter.com/AbosedeOloude)
