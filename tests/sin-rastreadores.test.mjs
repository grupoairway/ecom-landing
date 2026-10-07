// Sin rastreadores sin consentimiento (07/10/2026, del usuario). Google Analytics cargaba al hidratar la página, sin
// banner ni modo de consentimiento; se quitó. Este test corre delante de `next build` (el fichero NOMBRADO en
// package.json, como en el portal: con `tests/` a secas, Node en Vercel intentó cargar la carpeta como módulo), así que
// Vercel lo pasa en cada despliegue. Un rastreador solo puede volver con su banner: entonces este test cambia, en su
// propio commit.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const RAIZ = new URL('..', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');
const RASTREADORES = /googletagmanager|google-analytics|gtag\(|\bG-[A-Z0-9]{6,}\b|fbq\(|connect\.facebook|hotjar|clarity\.ms|snap\.licdn|tiktok/i;

test('ningún fichero de app/ carga un rastreador', () => {
  const con = [];
  const recorrer = (d) => {
    for (const n of readdirSync(join(RAIZ, d))) {
      const p = `${d}/${n}`;
      if (statSync(join(RAIZ, p)).isDirectory()) recorrer(p);
      else if (/\.(ts|tsx|js|jsx)$/.test(n) && RASTREADORES.test(readFileSync(join(RAIZ, p), 'utf8').replace(/^\s*\/\/.*$/gm, ''))) con.push(p);
    }
  };
  recorrer('app');
  assert.deepEqual(con, [], `cargan un rastreador: ${con.join(', ')}`);
});
