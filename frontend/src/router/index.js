import { createRouter, createWebHistory } from 'vue-router';

import CollaborativeEditorView from '@/views/CollaborativeEditorView.vue';
import FileSelectionView from '@/views/FileSelectionView.vue';

const availableDocuments = ['example-1.ydoc', 'example-2.ydoc', 'example-3.ydoc'];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'files',
      component: FileSelectionView,
    },
    {
      path: '/editor/:filename',
      name: 'editor',
      component: CollaborativeEditorView,
      props: true,
      beforeEnter: (to, from) => {
        if (!availableDocuments.includes(to.params.filename)) {
          return { name: 'files' };
        }
      },
    },
  ],
});

export default router;
