<template>
  <section className="top-parent">
    <div className="in-page-link">
      <router-link to="/">home</router-link>
    </div>
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
        that the needs of people with disabilities are taken into account in the design
        of everyday things.
      </p>
    </section>
    <div className="in-page-link">
      <a href="./images/kayMurrayResume.pdf" download>resume</a>
    </div>
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
  margin: 1rem 0;
}
img {
  width: 10rem;
  height: auto;
  border-radius: 50%;
  margin-bottom: 1rem;
}
.top-parent {
  padding: 1rem;
}
p {
  text-align: left;
}
.in-page-link:last-child {
  margin-top: 1rem;
}
</style>
