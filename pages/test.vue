<template>
  <div
    class="mid-hero bg-gray-400 w-full h-screen flex items-center justify-center flex-col"
  >
    <a
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      href="/"
      >Go back</a
    >
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
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
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>
