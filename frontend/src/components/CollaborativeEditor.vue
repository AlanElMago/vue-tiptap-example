<script setup>
import { TiptapCollabProvider } from '@hocuspocus/provider';
import Collaboration from '@tiptap/extension-collaboration';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import { EditorContent, useEditor } from '@tiptap/vue-3';

import { onMounted } from 'vue';
import * as Y from 'yjs';

import config from '@/config/config';

const doc = new Y.Doc();

const editor = useEditor({
  extensions: [
    Document,
    Paragraph,
    Text,
    Collaboration.configure({
      document: doc,
    }),
  ],
});

onMounted(() => {
  const provider = new TiptapCollabProvider({
    baseUrl: config.HOCUSPOCUS_WS_BASE_URL,
    name: 'example-document',
    document: doc,
    onSynced() {
      if (!doc.getMap('config').get('initialContentLoaded') && editor) {
        doc.getMap('config').set('initalContentLoaded', true);
        editor.value.commands.setContent('Welcome! This is a locally-hosted Tiptap example! 🎉');
      }
    },
  });
});
</script>

<template>
  <EditorContent :editor="editor" />
</template>

<style scoped>
</style>
