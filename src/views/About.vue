<template>
  <section>
    <router-link to="/">home</router-link>
    <h1>About</h1>
    <img src="../assets/images/profile.jpeg" alt="me artistically draped around an overturned chair">
    <p>I'm Kay - a web developer, UX designer, and maker.</p>
    <p>I'm Kay, a web developer working to make accessible applications. I have a BFA in Industrial Design, and a Full Stack Web Development certificate. I'm excited about continuing to learn and implement principles of accessibility and universal design to build applications with a more diverse range of users in mind.</p>
    <p>Mainly I'm interested in making things, using anything from code to textiles.</p>
    <router-link to="/resume">resume</router-link>
  </section>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped lang="scss">
img {
  width: 10rem;
  height: auto;
  border-radius: 50%;
}
</style>