<template>
  <div v-if="country">
    <h2>{{ country.name.common }}</h2>
    <img :src="country.flags.svg" alt="flag" />
    <p><strong>Region:</strong> {{ country.region }}</p>
    <p>
      <strong>Population:</strong> {{ country.population.toLocaleString() }}
    </p>
    <p><strong>Capital:</strong> {{ country.capital?.[0] }}</p>
    <router-link to="/home">← Back</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      country: null,
    };
  },
  async mounted() {
    const code = this.$route.params.code;
    const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
    const data = await res.json();
    this.country = data[0];
  },
};
</script>
