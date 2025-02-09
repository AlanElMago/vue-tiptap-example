<script setup>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import { useRouter } from 'vue-router';

const exampleDocuments = [
  {
    filename: "example-1",
    extension: "ydoc",
    filesize: "1 KB",
  },
  {
    filename: "example-2",
    extension: "ydoc",
    filesize: "1 KB",
  },
  {
    filename: "example-3",
    extension: "ydoc",
    filesize: "1 KB",
  },
];
</script>

<template>
  <DataTable :value="exampleDocuments" class="m-10">
    <Column field="filename" header="Filename">
      <template #body="slotProps">
        <RouterLink :to="`/editor/${slotProps.data.filename}.${slotProps.data.extension}`">
          {{ slotProps.data.filename }}
        </RouterLink>
      </template>
    </Column>
    <Column field="extension" header="Extension"></Column>
    <Column field="filesize" header="Filesize"></Column>
  </DataTable>
</template>

<style scoped>
@reference '../main.css';

a {
  @apply text-blue-700
}

a:hover {
  @apply cursor-pointer
}
</style>
