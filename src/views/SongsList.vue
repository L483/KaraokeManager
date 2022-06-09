<template>
  <div class="container my-3">
    <h1 class="text-center">BEPIC Songliste</h1>
    <div class="flex-nowrap input-group my-3">
      <input
        class="form-control"
        type="search"
        placeholder="Song suchen ..."
        v-model="search"
      />
      <span class="bg-secondary border-secondary input-group-text text-light">
        <i class="bi-search"></i>
      </span>
    </div>
    <SongItem v-for="song in this.filteredSongs" :key="song" :song="song" />
  </div>
</template>

<script>
import SongItem from "@/components/SongItem.vue";
import songs from "@/assets/songs.js";

export default {
  name: "SongsList",
  components: {
    SongItem,
  },
  data() {
    return {
      search: "",
      songs: songs.songs,
    };
  },
  computed: {
    filteredSongs() {
      return this.songs.filter((song) =>
        song.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
};
</script>
