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
      <img src="~/assets/yogi.JPG" />
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
  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  margin: 0;
  background-color: #c5d5cb;
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
  height: 250px;
  width: 250px;
}

ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
li {
  margin: 0 0.5rem;
  padding: 0.25rem;
  font-size: 1.2rem;
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
  color: #2198ec;
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
