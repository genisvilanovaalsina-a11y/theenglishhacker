# The English Hacker — Brief del projecte v2

## 1. Visió i posicionament

The English Hacker no és una acadèmia. És el **terminal de pràctica de Cambridge** per a la generació que ja no llegeix llibres oficials de 400 pàgines. Estètica de terminal hacker, contingut amb format Cambridge real, gamificat sense ser infantil.

**Promesa:** "Practica Cambridge com un hacker. Aprova com un crack."

**Posicionament vs competència:**
- Cambridge English oficial → corporatiu, avorrit, 30€ per llibre.
- Engxam, Flo-Joe → funcionals però estèticament dels anys 2010.
- Acadèmies online tradicionals → cares, lentes, formatives però no centrades en l'examen.
- **The English Hacker** → ràpid, divertit, mòbil-first, freemium amb pack desbloquejable.

## 2. Públic objectiu (buyer personas)

**Persona 1 — "L'estudiant universitari amb pressa"**
- 19-25 anys, hispanoparlant, necessita el B2 o C1 per a la carrera, Erasmus o feina.
- Té 2-3 mesos abans de l'examen. Estudia de matinada.
- Mòbil first. Odia les acadèmies. No li agrada estudiar amb llibres.
- Pagaria 30-50€ per practicar de manera intensa i efectiva.

**Persona 2 — "El professional que vol pujar de rang"**
- 28-40 anys, treballa, vol el C1 per a una promoció o feina internacional.
- Disposa de poc temps. Practica al metro, a la nit, mentre dina.
- Pagaria 50-100€ si això li garanteix aprovar a la primera.

**Persona 3 — "L'opositor o aspirant a Erasmus"**
- 18-30 anys. El B2 és un requisit obligatori. La por de suspendre és real.
- Vol simulacres, no teoria.

## 3. Estètica i identitat visual

**To i veu:**
- Directe, una mica gallut, sense parlar com una acadèmia.
- Català/castellà natural, no formal. Permet petits insults amistosos al copy ("deixa de perdre el temps amb llibres antics").
- En anglès, el contingut acadèmic és impecable i seriós.

**Visual:**
- Fons negre o gris molt fosc (#0a0a0a o similar).
- Text principal en blanc trencat (#e5e5e5).
- Accent en verd terminal (#00ff88 o #39ff14) per a CTAs, scores, "MISSION_COMPLETE".
- Accent secundari en taronja/ambre per a errors o avisos.
- Tipografia: monospace per a tot el sistema (`JetBrains Mono`, `Fira Code` o `IBM Plex Mono`). Sans-serif clar només per a textos llargs si cal.
- Elements estil consola: `[SYSTEM]`, `>_ EXECUTING`, `// QUESTION_01`, `[ MISSION_01: COMPLETE ]`, `>_ REVEAL_ANSWER`.
- Animacions mínimes però amb caràcter: efecte typewriter en alguns títols, cursor parpadejant, transicions amb glitch subtle.

**Inspiració visual:**
- vercel.com, linear.app, raycast.com (per la nitidesa).
- L'estètica actual de theenglishhacker.com (mantenir l'esperit).
- Hackertyper.net o el terminal de Mr. Robot (per l'atmosfera).

## 4. Arquitectura del lloc

**Pàgines obligatòries:**

1. **Home (`/`)**
   - Hero amb el claim "Practice Cambridge like a hacker."
   - Subtítol potent amb la promesa.
   - 4 cards de nivell (B2 i C1 actius, A2, B1 i C2 amb llista d'espera).
   - Secció "Why The English Hacker?" amb 3 punts clau (real format, track progress, learn faster).
   - Prova social: nombre d'estudiants practicant, testimonis quan els tinguem.
   - Footer amb enllaços legals.

2. **Pàgines de nivell actiu (`/b2`, `/c1`)**
   - Header tipus terminal: `[ LEVEL: C1_ADVANCED ]    [ TYPE: CLOZE_TEST ]    [ SCORE: 0%_VAL ]`
   - 1 exercici demo complet (8-10 preguntes, format Cambridge real).
   - Sistema de revealar respostes amb animació.
   - Tracking de progrés en localStorage.
   - **CTA poderosa al final:** no envia directament a Stripe. Envia a la pàgina de vendes.

3. **Pàgines de nivell pendent (`/a2`, `/b1`, `/c2`)**
   - Branding "Coming soon" però amb captura d'email obligatòria.
   - Copy del tipus: "[ STATUS: BUILDING ] — Vols accés anticipat amb 40% de descompte?"
   - Formulari simple: email + nivell d'interès. Connecta amb Beehiiv o Mailerlite (de moment, podem fer-ho amb Formspree o un endpoint propi).

4. **Pàgina de vendes (`/unlock` o `/get-pack`)**
   - Hero: "Stop practicing for free. Start passing for real."
   - Què inclou exactament el pack (X simulacres, X parts, totes les seccions).
   - Comparativa visual entre el plan gratuït i el pack premium.
   - Prova social: testimonis (placeholders al principi), nombre d'aprovats, etc.
   - 3 opcions de preu: pack del nivell concret, pack combinat B2+C1, subscripció mensual.
   - FAQ amb 6-8 preguntes habituals.
   - Garantia de devolució 14 dies.
   - CTA final que sí envia a Stripe Checkout.

5. **Pàgina de gràcies (`/thanks`)**
   - Confirmació visual potent ("ACCESS_GRANTED").
   - Instruccions d'accés al contingut.
   - Convidar a unir-se a una comunitat (Telegram o Discord, futur).

6. **Legals (`/privacy`, `/terms`, `/cookies`)**

## 5. Funcionalitats imprescindibles

- **Tracking de progrés en localStorage** (sense login encara). Que recordi: nivells visitats, exercicis completats, % d'encerts per nivell.
- **Sistema de bloqueig "soft":** demo gratuït visible, però després del demo, contingut "encriptat" visualment (tipus `█████████`) que es desbloca amb el pagament.
- **Captura d'email** als nivells pendents (A2, B1, C2). Connectada a una eina d'email marketing senzilla. De moment fes-ho amb un endpoint que guardi a un fitxer JSON o a una API com Formspree.
- **Botó d'Stripe Checkout** que apunta a una URL configurable des d'una variable d'entorn (per poder canviar-la sense tocar el codi).
- **Detector de mòbil** per ajustar el layout dels exercicis (mòbil = vertical, desktop = més amplada).
- **Lazy loading** de les pàgines i exercicis.
- **Mode tecla** per als exercicis: l'usuari pot navegar entre preguntes amb el teclat (1, 2, 3, 4 per triar opció A/B/C/D, Enter per confirmar). És un detall de power-user que encaixa amb el branding hacker.

## 6. SEO i performance (no negociable)

- **Astro per defecte** per la seva velocitat.
- **Lighthouse score 95+** a tot.
- **Meta tags personalitzats per pàgina** (title, description, OG image).
- **Schema.org `Course`** a les pàgines de nivell.
- **Sitemap.xml automàtic.**
- **robots.txt configurat.**
- **Canonical URLs.**
- **Open Graph + Twitter cards** per a quan es comparteixi a xarxes.
- **Imatges optimitzades** (WebP, AVIF si possible).
- **Carrega de tipografies optimitzada** (font-display: swap, preload de la principal).

## 7. Stack tècnic

- **Framework:** Astro (última versió estable).
- **Estilat:** Tailwind CSS amb configuració personalitzada (colors hacker, tipografia monospace per defecte).
- **Llenguatge:** TypeScript a tots els components.
- **Components:** Astro components (`.astro`). Si cal interactivitat avançada, illa de React.
- **Gestió d'estat:** Nanostores per a coses simples (preferències, progrés). localStorage per a persistència.
- **Email captures:** integració amb Formspree o un endpoint Astro (`/api/subscribe`) que guardi a una API externa.
- **Pagaments:** Stripe Checkout via URL configurable a `.env`.
- **Analytics:** Plausible o Umami (privacy-first, sense cookies). Microsoft Clarity opcional per a heatmaps.
- **Hosting target:** primer Hostinger amb build estàtic; si dona problemes, Netlify o Cloudflare Pages.
- **Variables d'entorn:** un fitxer `.env.example` amb totes les claus necessàries documentades.
- **Estructura de carpetes** ben separada: `/src/pages`, `/src/components`, `/src/layouts`, `/src/data` (per als exercicis), `/src/styles`, `/public`.

## 8. Estructura de dades dels exercicis

Cada exercici ha de viure en un fitxer JSON o TypeScript dins de `/src/data/exercises/[level]/[exerciseId].ts`. Format proposat:

```typescript