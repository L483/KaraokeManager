<template>
  <div class="pb-1">
    <div class="border rounded">
      <div class="p-2">{{ this.song }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SongItem",
  props: {
    song: String,
  },
};
</script>

<style scoped></style>
