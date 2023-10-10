# `Pszichológus oldal` Projektterv `2023/24`

## 1. Összefoglaló 

`Egy pszichológus honlapjának elkészítése jelen projektünk fókusza. Az oldal célja, hogy lehetővé tegye a pszichológus számára, hogy bemutassa magát és szakmai munkásságát az online közönség előtt. Az oldalon bemutatjuk a pszichológus szakmai hátterét, képesítéseit, és tapasztalatait, hogy bizalmat építsünk a látogatókban. Emellett részletesen ismertetjük a pszichológiai szolgáltatásokat, amelyeket nyújt, és segítünk a potenciális pácienseknek megtalálni a számukra megfelelő terápiás lehetőségeket. Az oldal egyszerű, letisztult design-t kap, hogy könnyen áttekinthető legyen, és könnyen navigálható legyen a látogatók számára. Emellett fontos része lesz az oldalnak egy kapcsolatfelvételi űrlap is, amely lehetővé teszi a látogatók számára, hogy egyszerűen felvegyék a kapcsolatot a pszichológussal és időpontot kérjenek.`


## 2. A projekt bemutatása

`Ez a projektterv a Pszichológus munkásságát elősegitő projektet mutatja be, amely 2023-09-23-től 2023-11-22-ig tart, azaz összesen 61 napon keresztül fog futni. A projekten nyolc fejlesztő fog dolgozni, az elvégzett feladatokat pedig négy alkalommal fogjuk prezentálni a megrendelőnek, annak érdekében, hogy biztosítsuk a projekt folyamatos előrehaladását.`


### 2.1. Rendszerspecifikáció

`A megrendelő, fő igénye az, hogy hatékonyan tudja bemutatni magát és munkásságát az online térben, valamint lehetőséget kapjon az időpontok hatékony kezelésére. A felhasználók számára pedig fontos, hogy könnyen megtalálják a pszichológus szolgáltatásait, és egyszerűen tudjanak időpontot foglalni vagy kapcsolatba lépni vele az oldalon keresztül. A rendszer az adminisztratív feladatok egyszerűsítése és a felhasználói élmény javítása mellett segíti a pszichológust abban, hogy sikeresen kommunikáljon az online közönséggel. A projekt fő célja egy olyan weboldal létrehozása, amely lehetővé teszi egy pszichológus számára, hogy hatékonyan mutassa be magát és szolgáltatásait az online térben. A rendszer lehetőséget biztosít a pszichológusnak saját cikkek publikálására, amelyek segítik az információ megosztását és az online jelenlét erősítését. Emellett a felhasználók regisztrálhatnak az oldalon, és a regisztrált felhasználók időpontot is foglalhatnak a pszichológus szolgáltatásaira, így egyszerűsítve az időpontok koordinálását. Az adminisztrátori felület segítségével könnyen kezelheti a megrendelő az oldal tartalmát és az időpontok elérhetőségét.`


### 2.2. Funkcionális követelmények

 - `Felhasználók kezelése (admin, felhasználó) (CRUD)`
 - `Felhasználói munkamenet megvalósítása több jogosultsági szinttel `
 - `Időpont foglalások kezelése (CRUD)`
 - `Cikkek kezelése (CRUD)`
 - `Email-es kiértesítés új idópont foglalás esetén az adott személynek és a pszichológusnak`


### 2.3. Nem funkcionális követelmények

 - `A kliens oldal böngészőfüggetlen legyen`
 - `Reszponzív megjelenés`
 - `Az érzékeny adatokat biztonságosan tároljuk`
 - `A legfrissebb technológiákat használja a rendszer`


## 3. Költség- és erőforrás-szükségletek

Az erőforrásigényünk összesen `160` személynap, átlagosan `20` személynap/fő.

A rendelkezésünkre áll összesen `8 * 70 = 560` pont.


## 4. Szervezeti felépítés és felelősségmegosztás

A projekt megrendelője `Urbán Csilla PHD hallgató`. A `Pszichológus oldal` projektet a projektcsapat fogja végrehajtani, amely `jelenleg nyolc fejlesztőből áll. A csapatban található  öbbé és kevésbé tapasztalt webprogramozó is.`
 - `Urbán Judit (<1 év tapasztalat)`
 - `Szabó Tímea (<1 év tapasztalatő)`

```
Itt lehet részletezni pl. a tagok szakmai tapasztalatait, vagy akár a releváns gyakorlati helyeket, munkahelyeket megemlíteni.
```

### 4.1 Projektcsapat

A projekt a következő emberekből áll:

| Név          | Pozíció          |   E-mail cím (stud-os)        |
|--------------|------------------|-------------------------------|
| `Urbán Judit` | Projektmenedzser | `h165835@stud.u-szeged.hu`    |
| `Szabó Tímea` | Projekt tag      | `h164242@stud.u-szeged.hu`    |

```
Betölthető pozíciók: projektmenedzser, projekt tag.
```

## 5. A munka feltételei

### 5.1. Munkakörnyezet

 - `Munkaállomások: 8 db, Windows 10-es operációs rendszerrel`

 - `Acer laptop (CPU:  i3-1115G4 , RAM: 4GB, GPU: )`

 - `HP EliteBook (CPU: i7-3740QM, RAM: 14 GB, GPU: NVIDIA Quadro)`

A projekt a következő technológiákat/szoftvereket fogja használni a munka során: 

 - `Heroku platformszolgáltatás a webalkalmazás hosztolásához`
 - `Heroku által biztosított PostgreSQL adatbázisszerver`
 - `Spring Boot keretrendszer`
 - `Thymeleaf dinamikus tartalom megjelenítés a felhasználói felületen`
 - `Maven szoftverprojekt menedzselő szoftver`
 - `Eclipse IDE fejlesztőkörnyezet`
 - `Git verziókövető (GitLab)`
 
```
Milyen gépet használnak a projekttagok, milyen operációs rendszeren fejlesztenek, milyen szoftverkörnyezetben, stb.
```
