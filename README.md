# SQUO - Palackmentes Italautomata

A SQUO egy innovatív italautomata projekt, amely célja a műanyaghulladék csökkentése és egy fenntarthatóbb jövő építése. A projekt lehetővé teszi, hogy a felhasználók saját kulacsaikat töltsék meg, ezzel kiküszöbölve az egyszer használatos műanyag palackokat.

## Funkciók

- Palackmentes működés
- Környezetbarát megoldás
- Újrahasznosítható kulacsok
- Minőségi italok, mikroműanyag-mentesen
- Felhasználóbarát felület
- Responsive dizájn

## Technológiák

- React 18
- Vite
- React Router DOM
- Tailwind CSS
- React Helmet Async
- Lucide React (ikonok)

## Telepítés

1. Klónozza le a repository-t:

```bash
git clone https://github.com/yourusername/squo.git
cd squo
```

2. Telepítse a függőségeket:

```bash
npm install
```

3. Indítsa el a fejlesztői szervert:

```bash
npm run dev
```

4. A böngészőben nyissa meg: `http://localhost:5173`

## Építés

A projekt production build-jének létrehozásához:

```bash
npm run build
```

A build fájlok a `dist` mappában lesznek elérhetőek.

## Deployment

A projekt Vercel-re van deployolva. A deployment automatikusan megtörténik, amikor a main branch-re push-olunk.

### Vercel Konfiguráció

A client-side routing megfelelő működéséhez a projekt tartalmaz egy `vercel.json` konfigurációs fájlt:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

Ez a konfiguráció biztosítja, hogy minden URL-t az index.html-re irányítson, így a React Router megfelelően tudja kezelni a routing-ot.

## Fejlesztés

- `npm run dev` - Fejlesztői szerver indítása
- `npm run build` - Production build létrehozása
- `npm run preview` - Production build előnézet
- `npm run lint` - ESLint futtatása

## Licensz

MIT
