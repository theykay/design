<template>
  <section className="top-parent">
    <h1>About</h1>
    <img
      src="../assets/images/profile.jpeg"
      alt="me artistically draped around an overturned chair"
    />
    <section>
      <p>I'm Kay—a web developer, designer, and maker.</p>
      <p>
        My main interest is building things (mainly web apps, clothes, and
        furniture)
      </p>
      <p>
        Eventually, I want to be working in Accessibility Design to help ensure
        that the needs of people with disabilities are taken into account in the
        design of everyday things.
      </p>
    </section>
    <div className="in-page-link">
      <a href="./images/kayMurrayResume.pdf" download>
        <svg
          width="18"
          height="20"
          viewBox="0 0 18 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 0C8.58579 0 8.25 0.335786 8.25 0.75V11.8747L5.69797 9.32272C5.37984 9.00458 4.86403 9.00458 4.54589 9.32272C4.22776 9.64086 4.22776 10.1567 4.54589 10.4748L8.45951 14.3884C8.77765 14.7066 9.29345 14.7066 9.61159 14.3884C9.71125 14.2888 9.77969 14.1697 9.81691 14.0434L13.2637 10.5966C13.5819 10.2784 13.5819 9.76264 13.2637 9.4445C12.9456 9.12636 12.4298 9.12636 12.1116 9.4445L9.75 11.8061V0.75C9.75 0.335786 9.41421 0 9 0ZM0.75 17.7083C0.335786 17.7083 0 18.0441 0 18.4583C0 18.8725 0.335787 19.2083 0.75 19.2083H17.25C17.6642 19.2083 18 18.8725 18 18.4583C18 18.0441 17.6642 17.7083 17.25 17.7083H0.75Z"
            fill="#909A9C"
          />
        </svg>
        resumé
      </a>
    </div>
    <ul>
      <li>
        <a className="ex-link" href="https://github.com/theykay">github</a>
      </li>
      <li>
        <a className="ex-link" href="https://www.linkedin.com/in/theykay">linkedin</a>
      </li>
      <li>
        <a className="ex-link" href="mailto:kaybmurray@gmail.com">email</a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped lang="scss">
h1 {
  font-size: 2rem;
}
img {
  width: 10rem;
  height: auto;
  border-radius: 50%;
  margin: 1rem 0;
}
.top-parent {
  padding: 1rem;
}
p {
  text-align: left;
}
.in-page-link {
  margin-top: 1rem;
}
a {
  display: inline-flex;
  color: styles.$darkpink;
  padding: 0.5rem;
  border: 2px solid styles.$empink;
  border-radius: 0.5rem;
  line-height: 1;
  &:link {
    background-color: white;
  }
  &:visited {
    background-color: white;
  }
  &:hover {
    background-color: styles.$empink;
  }
  &:active {
    background-color: white;
  }
}
svg {
  height: 1rem;
  width: auto;
  margin-right: 0.5rem;
}
ul {
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  width: auto;
  justify-content: space-around;
}
.ex-link {
  border: none;
}
</style>
