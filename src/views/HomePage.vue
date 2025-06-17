<template>
  <div class="home">
    <h1>🌍 Country Explorer</h1>

    <!-- Search Box -->
    <input
      type="text"
      v-model="search"
      placeholder="Search countries..."
      class="search-box"
    />

    <!-- Debug Info -->
    <p>Total countries loaded: {{ countries.length }}</p>

    <!-- Loading State -->
    <div v-if="loading">Loading countries...</div>

    <!-- No Countries Found -->
    <div v-else-if="filteredCountries.length === 0">No countries found.</div>

    <!-- Country Cards -->
    <div class="grid">
      <div
        v-for="country in filteredCountries"
        :key="country.cca3"
        class="card"
      >
        <img :src="country.flags.svg" alt="flag" />
        <h3>{{ country.name.common }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      countries: [], // holds API data
      search: "", // search input
      loading: true, // loading flag
    };
  },
  computed: {
    filteredCountries() {
      // Check if countries is an array
      if (!Array.isArray(this.countries)) return [];

      const keyword = this.search.trim().toLowerCase();

      return this.countries.filter((country) =>
        country.name.common.toLowerCase().includes(keyword)
      );
    },
  },
  methods: {
    async fetchCountries() {
      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,flags,cca3"
        );
        const data = await response.json();

        console.log("API returned:", data.length);
        this.countries = Array.isArray(data) ? data : [];
      } catch (error) {
        console.error("API error:", error);
        this.countries = [];
      } finally {
        this.loading = false;
      }
    },
  },
  mounted() {
    this.fetchCountries();
  },
};
</script>

<style scoped>
.home {
  text-align: center;
  padding: 20px;
}

.search-box {
  padding: 10px;
  width: 50%;
  margin-bottom: 20px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 6px;
}

.grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}

.card {
  border: 1px solid #ddd;
  padding: 10px;
  width: 160px;
  background-color: #f5f5f5;
  border-radius: 8px;
  transition: background-color 0.2s;
  cursor: pointer;
}

.card:hover {
  background-color: #e3f2fd;
}

.card img {
  width: 100%;
  height: 80px;
  object-fit: cover;
  border-radius: 4px;
}
</style>
