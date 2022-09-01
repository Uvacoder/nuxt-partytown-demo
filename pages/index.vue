<template>
  <div>
    <div
      class="hero bg-gray-400 w-full h-screen flex items-center justify-center flex-col"
    >
      <h1 class="block z-10 text-gray-100 font-bold text-6xl mt-2">
        Hotel<sup>zzz</sup>
      </h1>
      <h3 class="text-gray-200 z-10 font-semibold text-xl mt-2">
        A website to connect hosts with travellers!
      </h3>

      <div
        class="absolute top-0 z-0 left-0 h-full bg-gray-900 w-full opacity-40"
      ></div>
    </div>
    <section>
      <div class="bg-gray-400 p-12">
        <div class="flex items-center justify-center">
          <div class="w-32 h-32 relative mb-4">
            <div
              class="group w-full h-full rounded-full overflow-hidden shadow-inner text-center bg-purple table cursor-pointer"
            >
              <img
                src="https://pickaface.net/gallery/avatar/unr_random_180410_1905_z1exb.png"
                alt="lovely avatar"
                class="object-cover object-center w-full h-full visible group-hover:hidden"
              />
            </div>
          </div>
          <div class="w-full ml-10">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </div>
        </div>
        <div class="flex justify-center items-center">
          <a
            class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
            href="#"
            @click.prevent="dataLayerTest"
            >Test GTM</a
          >
        </div>
      </div>
    </section>
    <section class="relative">
      <div class="mid-hero h-80 flex justify-start p-25 items-center">
        <h2
          class="text-gray-100 z-10 text-4xl font-sans font-bold w-full text-center"
        >
          woof!
        </h2>
      </div>

      <div
        class="mid-hero-overlay absolute top-0 z-0 left-0 h-full bg-gray-900 w-full opacity-40"
      ></div>
    </section>
    <footer
      class="p-2 bg-white rounded-lg shadow md:flex md:items-center h-56 md:justify-between md:p-6 dark:bg-gray-800"
    >
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
        >© 2022 <a href="#" class="hover:underline">Netguru™</a>. All Rights
        Reserved.
      </span>
      <ul
        class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0"
      >
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6">About</a>
        </li>
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
        </li>
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6">Licensing</a>
        </li>
        <li>
          <a href="#" class="hover:underline">Contact</a>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  methods: {
    dataLayerTest() {
      ;(window as any).dataLayer?.push({
        event: 'Access from the app',
        parameter1: 'Pushing event to GTM!',
      })
    },
  },
})
</script>

<style>
.hero {
  background-image: url('https://www.dropbox.com/s/49r8g02ok7u5wxe/gustavo-zambelli-eSyzk2voeBk-unsplash.jpg?raw=1');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.mid-hero {
  background-image: url('https://www.dropbox.com/s/yhlh3q2cqij8svw/gustavo-zambelli-C3KGBq4dg2Y-unsplash.jpg?raw=1');
  background-size: cover;
  background-position: 0 183px;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>