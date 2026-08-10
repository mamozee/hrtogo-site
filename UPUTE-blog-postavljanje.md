# HRtoGO — postavljanje bloga (Eleventy + Decap CMS)

Ovo je projekt web stranice **+ blog**. Maja piše objave kroz admin panel (`/admin`),
Netlify se sam rebuilda i objava se pojavi na `/blog`. Login ide preko GitHuba.

## Što ti treba
- **GitHub** račun (tvoj)
- **Netlify** račun (tvoj)
- Maja treba **svoj GitHub račun** (za login u admin)

---

## 1) Stavi projekt na GitHub
1. Otpakiraj `hrtogo-site.zip`.
2. Na GitHubu napravi novi repozitorij (npr. `hrtogo-site`) — može privatni.
3. Ubaci sadržaj mape u repo:
   - Najlakše preko **GitHub Desktop** aplikacije (dodaš mapu → Commit → Push), ili
   - Preko weba: **Add file → Upload files** pa povučeš sve iz mape.
   - NE trebaš uploadati `node_modules` ni `_site` (generiraju se sami; ionako ih nema u zipu).

## 2) Spoji Netlify na repo
1. Netlify → **Add new site → Import an existing project → GitHub** → odaberi taj repo.
2. Build postavke se same pročitaju iz `netlify.toml` (`npm run build`, objava iz `_site`). Klikni **Deploy**.
3. Dobiješ `nesto.netlify.app` — provjeri da radi i `/blog`.

## 3) Login za CMS (GitHub OAuth) — jednokratno
**A) Registriraj GitHub OAuth aplikaciju**
1. GitHub → Settings → **Developer settings → OAuth Apps → New OAuth App**.
2. Popuni:
   - Application name: `HRtoGO CMS`
   - Homepage URL: tvoj Netlify/domena URL
   - **Authorization callback URL:** `https://api.netlify.com/auth/done`
3. Register → kopiraj **Client ID** i generiraj **Client Secret**.

**B) Ubaci ih u Netlify**
1. Netlify → tvoj site → **Site configuration → Access & security → OAuth** (Authentication providers) → **Install provider**.
2. Odaberi **GitHub**, zalijepi **Client ID** i **Client Secret** → Save.

## 4) Upiši repo u config
1. Otvori `src/admin/config.yml`.
2. Promijeni `repo: KORISNIK/REPO` u `repo: tvoj-github-user/ime-repoa`.
3. Spremi i pushaj (ili uredi direktno na GitHubu).

## 5) Pozovi Maju
1. GitHub → repo → **Settings → Collaborators** → dodaj Majin GitHub račun.
2. Ona prihvati poziv (stigne joj mail).
3. Ide na `tvojadomena.com/admin` → **Login with GitHub** → autorizira → može pisati.

---

## Kako Maja objavljuje
1. `/admin` → **Blog objave → New Objava**.
2. Upiše **Naslov, Datum, Kratki opis**, (opcionalno) **Naslovnu sliku** i **Sadržaj**.
3. Klikne **Publish** → Netlify se sam rebuilda (~1 min) → objava je na `/blog`.
4. **Za newsletter:** kopira link objave (`.../blog/naslov/`) i podijeli ga u svom LinkedIn newsletteru.

## Domena (Porkbun)
Isto kao i za obični site — samo pokazuje na ovaj Netlify site
(A/ALIAS `@` → Netlify + CNAME `www`, ili Netlify nameserveri).

## Za tebe (lokalno, opcionalno)
U mapi projekta: `npm install` pa `npm start` → otvori `localhost:8080` da vidiš promjene uživo.

---

### Ako login ne radi
- Provjeri da je callback **točno** `https://api.netlify.com/auth/done`.
- Provjeri da je OAuth provider (GitHub) instaliran u Netlifyju s ispravnim Client ID/Secret.
- Provjeri da je `repo:` u `config.yml` točan i da Maja ima **collaborator** pristup repou.

*Primjer objave „Dobrodošli na blog" je tu kao ogled — Maja ga može urediti ili obrisati.*
