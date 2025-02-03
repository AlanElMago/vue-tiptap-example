<script setup>
import { TiptapCollabProvider } from '@hocuspocus/provider';
import Collaboration from '@tiptap/extension-collaboration';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import { EditorContent, useEditor } from '@tiptap/vue-3';

import { inject, ref } from 'vue';
import * as Y from 'yjs';

import config from '@/config/config';

const keycloak = inject('keycloak');
const doc = new Y.Doc();
const provider = new TiptapCollabProvider({
  baseUrl: config.HOCUSPOCUS_WS_BASE_URL,
  name: 'example-document',
  document: doc,
});

const connectedUsers = ref([keycloak.tokenParsed.name]);

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

provider.setAwarenessField('user', {
  name: keycloak.tokenParsed.name,
});

provider.on('awarenessChange', ({ states }) => {
  console.log(states);
  connectedUsers.value = [];
  states.forEach(state => connectedUsers.value.push(state.user.name));    
});
</script>

<template>
  <EditorContent id="editor" :editor="editor" />
  <hr />
  <div id="connected-users-container">
    <h3>Connected Users</h3>
    <li v-for="user in connectedUsers">
      {{ user }}
    </li>
  </div>
</template>

<style scoped>
@reference '../main.css';

h3 {
  @apply text-xl
}

#connected-users-container {
  @apply p-2
}

#editor {
  @apply p-2
}
</style>
