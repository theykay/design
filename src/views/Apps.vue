<template>
  <h1>apps</h1>
  <AppProject v-for="project in projects" :key="project.title" :project="project" />
</template>

<script>
import { AppProject } from "../components";

export default {
  name: "Apps",
  components: {
    AppProject,
  },
  data() {
    return {
      projects: [
        {
          images: ["../assets/images/apps/CoLab.png"],
          title: "CoLab",
          info:
            "Way to connect individuals looking to collaborate with others in their profession. Currently focused on musicians.",
          media: ["ReactJS", "Express.js", "Node.js", "MongoDB"],
          site: "https://protected-chamber-73286.herokuapp.com/",
          repo: "https://github.com/theykay/CoLab",
        },
        {
          images: ["../assets/images/apps/amongUs.png"],
          title: "The Smartest Among Us",
          info:
            "Web app to play quizzes. Play randomly-generated quizzes, play quizzes with global score leader-boards, signup and login to create your own quizzes to share with friends.",
          media: ["SQL", "sequelize", "Handlebars"],
          site: "https://glacial-inlet-88838.herokuapp.com/",
          repo: "https://github.com/theykay/The-Smartest-Among-Us",
        },
        {
          images: ["../assets/images/apps/bookVsMovie.png"],
          title: "Book vs Movie",
          info: "Compare ratings between a book and the movie based on it",
          media: ["goodreads API", "omdb API"],
          site: "https://theykay.github.io/Book-vs-Movie/",
          repo: "https://github.com/theykay/Book-vs-Movie",
        },
        {
          images: ["../assets/images/apps/scheduler.png"],
          title: "Scheduler",
          info:
            "Generates a schedule that displays hour blocks based on user-defined start and end times. User can submit text in each hour slot that persists throughout the day. Entries only persist through end of day",
          media: ["Bootstrap", "jQuery"],
          site: "https://theykay.github.io/scheduler/",
          repo: "https://github.com/theykay/scheduler",
        },
        {
          images: ["../assets/images/apps/weather.png"],
          title: "Weather Forecast",
          info:
            "Weather app that shows current weather, 5-day forecast and saves most recent searches for easy access",
          media: ["Bootstrap", "ajax", "jQuery"],
          site: "https://theykay.github.io/weather-dashboard",
          repo: "https://github.com/theykay/weather-dashboard",
        },
      ],
    };
  },
};
</script>

<style></style>
