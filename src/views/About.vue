<template>
  <section>
    <div className="home-link">
      <router-link to="/">home</router-link>
    </div>
    <h1>About</h1>
    <img
      src="../assets/images/profile.jpeg"
      alt="me artistically draped around an overturned chair"
    />
    <p>I'm Kay - a web developer, UX designer, and maker.</p>
    <p>
      My main interest is building things - mainly web apps, clothes, and
      furniture.
    </p>
    <p>
      Eventually, I want to be working in Accessibility Design to help ensure
      that the needs of disabled people are taken into account in the design of
      everyday things.
    </p>
    <router-link to="/resume">resume</router-link>
  </section>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped lang="scss">
.home-link {
  padding: 1rem;
}

img {
  width: 10rem;
  height: auto;
  border-radius: 50%;
}
</style>
