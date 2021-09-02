<template>
  <div>
    <H1>The number is {{ counter }}</H1>
    <button @click="updateCounter(1)">Increase</button>
    <button @click="updateCounter(-1)">Decrease</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },

  methods: {
    updateCounter(number) {
      this.counter += number;
    },
  },
};
</script>
