<script setup>
import { TiptapCollabProvider } from '@hocuspocus/provider';
import Bold from '@tiptap/extension-bold';
import Collaboration from '@tiptap/extension-collaboration';
import Document from '@tiptap/extension-document';
import Heading from '@tiptap/extension-heading';
import Italic from '@tiptap/extension-italic';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import Underline from '@tiptap/extension-underline';
import { EditorContent, useEditor } from '@tiptap/vue-3';

import config from '@/config/config';
import ConnectedUsers from './ConnectedUsers.vue';
import EditorButtons from './EditorButtons.vue';
import { onBeforeUnmount } from 'vue';

const { filename } = defineProps(['filename']);

const provider = new TiptapCollabProvider({
  baseUrl: config.HOCUSPOCUS_WS_BASE_URL,
  name: filename,
});

const editor = useEditor({
  extensions: [
    Bold,
    Document,
    Heading,
    Italic,
    Paragraph,
    Text,
    Underline,
    Collaboration.configure({
      document: provider.document
    }),
  ],
});

onBeforeUnmount(() => provider.destroy());
</script>

<template>
  <div v-if="editor" class="container">
    <EditorButtons class="container p-2 space-x-2" :editor />
    <EditorContent class="container m-2 p-2 border-1 rounded-md" :editor />
    <ConnectedUsers class="m-2" :provider />
  </div>
</template>

<style>
@reference "../main.css";

h1 {
  @apply text-3xl font-bold
}

h2 {
  @apply text-2xl font-semibold
}

h3 {
  @apply text-xl font-semibold
}

h4 {
  @apply text-lg font-medium
}

h5 {
  @apply text-base font-medium
}

h6 {
  @apply text-base italic
}
</style>
