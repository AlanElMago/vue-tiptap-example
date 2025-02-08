import fs from 'node:fs/promises';
import path from 'node:path';

import * as Y from 'yjs';

const DOCS_DIR = '/app/documents';

const store = async (filename, data) => {
  const filepath = path.join(DOCS_DIR, filename);
  const arrayBuffer = Y.encodeStateAsUpdate(data);

  try {
    await fs.writeFile(filepath, arrayBuffer);
  }
  catch (error) {
    console.error('error on writing to file', error);
  }
};

const fetch = async (filename) => {
  const filepath = path.join(DOCS_DIR, filename);

  try {
    const arrayBuffer = await fs.readFile(filepath);
    const document = new Y.Doc();

    Y.applyUpdate(document, arrayBuffer);

    return document;
  }
  catch (error) {
    console.log(`file ${filename} does not exist`); 

    return null;
  }
}

export default { store, fetch };
