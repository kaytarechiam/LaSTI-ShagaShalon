import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

test('nested catalog, concern, practitioner and journal routes resolve to existing files', async()=>{
  const root=new URL('../../prototype/',import.meta.url);
  const config=JSON.parse(await readFile(new URL('vercel.json',root),'utf8'));
  const route=config.routes.find(entry=>entry.dest==='/subpages/$1_$2.html');
  assert.ok(route,'missing nested detail rewrite');
  for (const path of ['/treatments/neuromodulators','/concerns/dull-tired-skin',
    '/practitioners/theo-brandt','/journal/winter-skin']) {
    assert.match(path,new RegExp(route.src));
    const target=path.replace(new RegExp(route.src),route.dest);
    await access(fileURLToPath(new URL('.'+target,root)));
  }
});
