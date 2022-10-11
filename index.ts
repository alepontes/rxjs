import { combineLatest, interval, map } from 'rxjs';

/**
 * npm start
 * Observa A e B e refaz a conta quando os valores mudam
 */

const a$ = interval(2000);
const b$ = interval(3000);

const r$ = combineLatest([a$, b$]).pipe(
    map(([a, b]) => ([a, b, a + b]))
);

r$.subscribe(([a, b, r]) => console.log(`${a} + ${b} = ${r}`));
