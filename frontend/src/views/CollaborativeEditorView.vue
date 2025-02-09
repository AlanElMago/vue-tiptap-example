<script setup>
import CollaborativeEditor from '@/components/CollaborativeEditor.vue';
import Navbar from '@/components/Navbar.vue';

const { filename } = defineProps(['filename']);
</script>

<template>
  <Navbar />
  <CollaborativeEditor :filename />
</template>

<style scoped>
</style>
