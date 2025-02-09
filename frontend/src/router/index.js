import { createRouter, createWebHistory } from 'vue-router';

import CollaborativeEditorView from '@/views/CollaborativeEditorView.vue';
import FileSelectionView from '@/views/FileSelectionView.vue';

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
      
    },
  ],
});

export default router;
