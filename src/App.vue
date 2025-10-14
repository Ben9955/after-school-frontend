<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="h-24 p-6 hover:drop-shadow-[0_0_2em_#646cffaa]" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="h-24 p-6 hover:drop-shadow-[0_0_2em_#42b883aa]" alt="Vue logo" />
    </a>

    <HelloWorld msg="Vite + Vue" class="mt-8 text-xl font-bold text-blue-600" />

    <router-view />
  </div>
</template>
