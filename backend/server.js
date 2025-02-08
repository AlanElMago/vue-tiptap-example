import { Server } from '@hocuspocus/server';
import * as Y from 'yjs';

import fsService from './fsService.js';

const server = Server.configure({
  name: 'donjon-ctr-hocuspocus-01',
  port: 1234,
  timeout: 30000,     // 30 seconds
  debounce: 5000,     //  5 seconds
  maxDebounce: 30000, // 30 seconds
  quiet: false,

  async onStoreDocument(data) {
    fsService.store(data.documentName, data.document);
  },

  async onLoadDocument(data) {
    const fetchedDocument = await fsService.fetch(data.documentName);
    return fetchedDocument || new Y.Doc();
  }
});

server.listen();
