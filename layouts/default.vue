<template>
  <div>
    <nav>
      <ul>
        <li>
          <NuxtLink to="/">CM</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">About Page</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/experience">Experience</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/projects">Projects</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/education">Education</NuxtLink>
        </li>
        <li>
          <a
            href="https://docs.google.com/document/d/1qa5sSCLFI9rBf0U4WFXGrKYoDHtH4PgSjqYjBBLevKM/edit?usp=sharing"
            target="_blank"
            >Resume</a
          >
        </li>
        <li>
          <a href="https://github.com/carlosmemije" target="_blank">Github</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/carlosmemije/" target="_blank"
            >LinkedIn</a
          >
        </li>
      </ul>
    </nav>

    <main>
      <p1 id="footer">Built using</p1>
      <a
        id="footer"
        href="https://nuxtjs.org/"
        target="_blank"
        rel="noopener noreferrer"
        >Nuxt.js :
      </a>
      <a
        id="footer"
        href="https://github.com/carlosmemije/carlosmemijeV2"
        target="_blank"
        rel="noopener noreferrer"
        >View Source.</a
      >
      <p1 id="footer">*Still under construction*</p1>

      <Nuxt />
    </main>
  </div>
</template>

<style>
/* home route and active route will show in bold as it matches / and /about */
a.nuxt-link-active {
  font-weight: bold;
}
/* exact link will show the primary color for only the exact matching link */
a.nuxt-link-exact-active {
  color: #00c58e;
}

body {
  background-image: url("~/assets/background.jpeg");
  background-size: 100%;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  margin: 0;
  background-color: rgb(184, 170, 147);
}

main {
  margin: 0 auto;
  padding: 0 1rem;
  margin-top: 100px;
  max-width: 1280px;
  text-align: center;
}
img {
  margin-bottom: 1rem;
  height: 380px;
  width: 500px;
}
h1 {
  background-color: rgba(255, 255, 255, 0.25);
}

h3 {
  text-align: left;
  margin-left: 25px;
  background-color: rgba(255, 255, 255, 0.25);
}

p {
  margin: 130px;
  font-size: 20px;
  text-align: left;
  background-color: rgba(255, 255, 255, 0.25);
}

ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
ul li {
  margin: 0 0.5rem;
  padding: 0.25rem;
  font-size: 1.2rem;
}

body .footer {
  position: fixed;
  bottom: 0;
}

.bullets {
  text-align: left;
  margin-left: 25px;
  background-color: rgba(255, 255, 255, 0.25);
}

nav {
  padding: 0 1rem;
}

a,
a:visited {
  text-decoration: none;
  color: inherit;
}

a:hover {
  color: #d8d5be;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}

.layout-enter-active,
.layout-leave-active {
  transition: opacity 0.5s;
}
.layout-enter,
.layout-leave-to {
  opacity: 0;
}

.slide-bottom-enter-active,
.slide-bottom-leave-active {
  transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;
}
.slide-bottom-enter,
.slide-bottom-leave-to {
  opacity: 0;
  transform: translate3d(0, 15px, 0);
}
</style>
