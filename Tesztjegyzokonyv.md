# Tesztjegyzőkönyv

Az alábbi tesztdokumentum a `2023_IB153I-12_A` projekt funkcióihoz készült. Felelőse: `Durucz Ádám` 

``` 
A tesztelési dokumentáció részletesen bemutatja és leírja a Projekttervben meghatározott főbb funkciók tesztelési procedúráját, beleértve a specifikus teszteseteket és azok eredményeit. 
``` 

## 1. Teszteljárások (TP)

### 1.1. Regisztráció
- **Azonosító:** TP-01
- **Tesztesetek:** TC-01, TC-02, TC-03
- **Leírás:** A regisztrációs folyamat tesztelése során gondosan ellenőrizzük a felhasználói adatok helyes rögzítését és a felhasználói fiókok sikeres létrehozását. A teszt magában foglalja az űrlapmezők érvényességének ellenőrzését, valamint a visszajelzések és hibaüzenetek helyes megjelenítését.

    0. lépés: Nyissuk meg a weboldalt.
    1. lépés: Mozgassuk az egeret a jobb felső sarokban található felhasználói ikonra, és válasszuk ki a megjelenő menüből a `Regisztráció` opciót.
    2. lépés: A form kitöltésekor három kötelező mezőt kell kitölteni: a `Név`, az `Email` és a `Jelszó` mezőket. Ezenkívül egy legördülő menü segítségével ki kell választani a `Jogosultság` szintet. Az email-címnek a szabványos formátumnak kell megfelelnie. A jelszónak legalább négy karakterből kell állnia.
    3. lépés: Miután kitöltöttük az összes mezőt, kattintsunk a `Regisztráció` gombra.
    4. lépés: Sikeres regisztráció után automatikusan a főoldalra irányít minket az alkalmazás. Ha hiba történik, az alkalmazás jelzi, hogy melyik mezőt töltöttük ki helytelenül. _Elvárt eredmény:_ A főoldalra irányít minket az alkalmazás.

### 1.2. Bejelentkezés
- **Azonosító:** TP-02
- **Tesztesetek:**
- **Leírás:** A bejelentkezési folyamat tesztelésekor részletesen átvizsgáljuk a felhasználói azonosítási eljárásokat. A teszt magában foglalja a beviteli mezők, mint például a felhasználónév és jelszó mezők érvényességének ellenőrzését. Különös figyelmet fordítunk arra, hogy a rendszer hogyan reagál helytelen bejelentkezési adatok esetén.

    0. lépés: Nyissuk meg a weboldalt.
    1. lépés: Mozgassuk az egeret a jobb felső sarokban található felhasználói ikonra, és válasszuk ki a megjelenő menüből a `Bejelentkezés` opciót.
    2. lépés: A bejelentkezési folyamat során két kötelező mezőt kell kitölteni: az `Email` és a `Jelszó` mezőket. A bejelentkezés előtt minden esetben regisztrálni kell.
    3. lépés: Miután kitöltöttük az összes mezőt, kattintsunk a `Bejelentkezés` gombra. _Elvárt eredmény:_ Sikeres bejelentkezés után automatikusan a főoldalra irányít minket az alkalmazás. Ha hiba történik, az alkalmazás jelzi a felhasználónak.

### 1.3. Kijelentkezés
- **Azonosító:** TP-03
- **Tesztesetek:**
- **Leírás:** Ellenőrizzük, hogy a kijelentkezési folyamat megfelelően megszakítja-e a munkamenetet és törli a felhasználói adatokat a kliens oldalról, biztosítva a biztonságos kijelentkezést.

    0. lépés: Nyissuk meg a weboldalt, és jelentkezzünk be.
    1. lépés: Mozgassuk az egeret a jobb felső sarokban található felhasználói ikonra, és válasszuk ki a megjelenő menüből a `Kijelentkezés` opciót. _Elvárt eredmény:_ Az alkalmazásnak minden esetben meg kell szakítania a munkamenetet, majd a főoldalra kell irányítania. 

### 1.4. Biztonsági mentés készítése
- **Azonosító:** TP-04
- **Tesztesetek:**
- **Leírás:** A biztonsági mentés tesztelése során alaposan megvizsgáljuk, hogy a rendszer megfelelően rögzíti-e az összes lényeges adatot JSON formátumban.

    0. lépés: A mentés csak abban az esetben működik, ha a szerveren fut a webalkalmazás.
    1. lépés: Minden nap automatikusan történik mentés 03:10-kor, emberi beavatkozás nélkül. Elvárt eredmény:_ Az időbélyeggel ellátott JSON fájlban megtalálható az összes adat.

### 1.5. Felhasználó törlése (Admin oldal)
- **Azonosító:** TP-05
- **Tesztesetek:**
- **Leírás:** A teszt során azt vizsgáljuk, hogy amennyiben egy adminisztrátor töröl egy felhasználót, az adott felhasználó összes adata törlődik-e minden adatbázis táblából és a teljes rendszerből.

    0. lépés: Nyissuk meg a weboldalt, és jelentkezzünk be egy adminisztrátori fiókkal.
    1. lépés:Navigáljunk az `Admin` oldalra, és ott válasszuk ki a `Felhasználók` menüpontot.
    2. lépés: A táblázatban válasszuk ki a törölni kívánt felhasználót, majd kattintsunk a `Törlés` gombra. _Elvárt eredmény:_ A felhasználó eltűnik a táblázatból, és az adatbázisból is törlődik.

### 1.6. Időpont hozzáadás (Admin oldal)
- **Azonosító:** TP-06
- **Tesztesetek:**
- **Leírás:** A tesztelési folyamat során ellenőrizzük, hogy az időpont hozzáadásakor minden megfelelően működik-e.

    0. lépés: Nyissuk meg a weboldalt, és jelentkezzünk be egy adminisztrátori fiókkal.
    1. lépés: Navigáljunk az `Admin` oldalra, és ott válasszuk ki a `Időpontok` menüpontot.
    2. lépés: Válasszuk ki a hozzáadni kívánt dátumot a `Hozzáadandó Dátum` beviteli mezőben.
    3. lépés: Kattintsunk az `Időpont Hozzáadása` gombra, hogy hozzáadjuk az időpontot a rendszerhez._Elvárt eredmény:_ A hozzáadott időpont megjelenik az elérhető időpontok között.

### 1.7. Időpont módosítás (Admin oldal)
- **Azonosító:** TP-07
- **Tesztesetek:**
- **Leírás:** A tesztelési folyamat során ellenőrizzük, hogy az időpont módosításakor minden megfelelően működik-e.

    0. lépés: Nyissuk meg a weboldalt, és jelentkezzünk be egy adminisztrátori fiókkal.
    1. lépés: Navigáljunk az `Admin` oldalra, és ott válasszuk ki a `Időpontok` menüpontot.
    2. lépés: Válasszuk ki a módosítandó időpontot a `Változtatnivaló időpont` legördülő menüből.
    3. lépés: Válasszuk ki a kívánt dátumot az alatta lévő beviteli mezőben.
    4. lépés: Kattintsunk az `Időpont Módosítása` gombra, így módosítva az időpontot. _Elvárt eredmény:_ Az időpont sikeresen módosul.

### 1.8. Időpont törlése (Admin oldal)
- **Azonosító:** TP-08
- **Tesztesetek:**
- **Leírás:** A tesztelési folyamat során ellenőrizzük, hogy az időpont törlésekor minden megfelelően működik-e.

    0. lépés: Nyissuk meg a weboldalt, és jelentkezzünk be egy adminisztrátori fiókkal.
    1. lépés: Navigáljunk az `Admin` oldalra, és ott válasszuk ki a `Időpontok` menüpontot.
    2. lépés: Válasszuk ki a törlendő időpontot a `Törlendő Időpont` legördülő menüből.
    3. lépés: Kattintsunk az `Időpont Törlése` gombra, így törölve az időpontot. _Elvárt eredmény:_ Az időpont sikeresen törlődik.

### 1.9. Időpontfoglalás
- **Azonosító:** TP-09
- **Tesztesetek:**
- **Leírás:** A tesztfolyamat során gondosan ellenőrizzük az időpontfoglalási rendszer működését, hogy megbizonyosodjunk arról, hogy minden része hibátlanul működik.

    0. lépés: Nyissuk meg a weboldalt, és jelentkezzünk be.
    1. lépés: Navigáljunk az `Időpontfoglalás` oldalra.
    2. lépés: Válasszuk ki egy időpontot a `Elérhető időpontok` legördülő menüből.
    3. lépés: Kattintsunk a `Foglalás` gombra, így elfoglalva az időpontot. _Elvárt eredmény:_ A `Lefoglalt időpontok` résznél a táblázatban láthatóvá válik az újonnan foglalt időpont.

### 1.10. Fiók törlése
- **Azonosító:** TP-10
- **Tesztesetek:**
- **Leírás:** Ellenőrizzük, hogy a felhasználók képesek-e magukat törölni a rendszerből.

    0. lépés: Nyissuk meg a weboldalt, és jelentkezzünk be.
    1. lépés: Navigáljunk az `Profil` oldalra.
    3. lépés: Kattintsunk a `Fiók törlése` gombra, így törövel magunkat a rendszerből. _Elvárt eredmény:_ A fiók törlődik és azt követően az oldal a főoldalra irányít át.

### 1.11. Név és email-cím módosítás
- **Azonosító:** TP-11
- **Tesztesetek:**
- **Leírás:** Teszteljük, hogy ha a felhasználó megváltoztatja a nevét és az email-címét, akkor azok a változások helyesen módosulnak-e a rendszerben.

    0. lépés: Nyissuk meg a weboldalt, és jelentkezzünk be.
    1. lépés: Navigáljunk az `Profil` oldalra.
    2. lépés: Írjuk be a kívánt új értékeket a `Név` és `Email` mezőkbe.
    3. lépés: Kattintsunk a `Mentés` gombra, így módosítva az adatokat. _Elvárt eredmény:_ A felhasználó adatai sikeresen frissülnek a módosítások után.

### 1.12. Jelszó módosítás
- **Azonosító:** TP-12
- **Tesztesetek:**
- **Leírás:** Teszteljük, hogy ha a felhasználó megváltoztatja a jelszavát, akkor a változások helyesen módosulnak-e a rendszerben.

    0. lépés: Nyissuk meg a weboldalt, és jelentkezzünk be.
    1. lépés: Navigáljunk az `Profil` oldalra.
    1. lépés: Írjuk be a megfelelő adatokat a `Jelenlegi jelszó`, `Új jelszó`, és `Jelszó megerősítése` mezőkben.
    3. lépés: Kattintsunk a `Jelszó változtatása` gombra, így módosítva a jelszót. _Elvárt eredmény:_ A felhasználó csak az új jelszóval tud bejelentkezni.


## 2. Teszesetek (TC)

### 2.1. Regisztráció

#### 2.1.1. TC-01
- **TP:** TP-01
- **Leírás:** Helyes adatokat adunk meg minden mezőben. A folyamat sikerességét az jelzi, ha a kezdőoldalon találjuk magunkat, ahol a munkamenet elindul.
- **Bemenet:** `Név` = Tetszőleges bemenet ; `E-mail` = Tetszőleges bemenet, amely megfelel az email-cím formátumnak. `Jelszó` = A jelszónak legalább négy karakterből kell állnia. `Jogosultság` = Kiválasztható 'Admin' vagy 'Felhasználó' szerepkör is.
- **Művelet:** A `Regisztráció` gomb megnyomásával elküldjük a formot.
- **Elvárt kimenet:** Az alkalmazás a kezdőlapra navigál, ahol a munkamenet elkezdődik.

#### 2.1.2. TC-02
- **TP:** TP-01
- **Leírás:** Ebben a tesztesetben az input mezőket üresen hagyjuk, és megfigyeljük, hogy a rendszer hogyan reagál erre az esetre.
- **Bemenet:** `Név` = Üresen hagyjuk. ; `E-mail` = Üresen hagyjuk. `Jelszó` = Üresen hagyjuk. `Jogosultság` = Kiválasztható 'Admin' vagy 'Felhasználó' szerepkör is.
- **Művelet:** A `Regisztráció` gomb megnyomásával elküldjük a formot.
- **Elvárt kimenet:** A rendszer figyelmeztet, hogy minden mező kitöltése kötelező.

#### 2.1.3. TC-03
- **TP:** TP-01
- **Leírás:** Olyan email-címet adunk meg, amely már használatban van, más felhasználónál.
- **Bemenet:** `Név` = Tetszőleges bemenet ; `E-mail` = Olyan email-cím, amellyel már korábban történt regisztráció. `Jelszó` = A jelszónak legalább négy karakterből kell állnia. `Jogosultság` = Kiválasztható 'Admin' vagy 'Felhasználó' szerepkör is.
- **Művelet:** A `Regisztráció` gomb megnyomásával elküldjük a formot.
- **Elvárt kimenet:** Az alkalmazás figyelmeztet, hogy a megadott email-cím már használatban van.

### 2.2. Bejelentkezés

#### 2.2.1. TC-01
- **TP:** TP-02
- **Leírás:** Helyes adatokat adunk meg minden mezőben. A folyamat sikerességét az jelzi, ha a főoldalon találjuk magunkat, ahol a munkamenet elindul.
- **Bemenet:** `E-mail` = Létező regisztrált email-cím. `Jelszó` = A regisztráció során megadott jelszó.
- **Művelet:** A `Bejelentkezés` gomb megnyomásával elküldjük a formot.
- **Elvárt kimenet:** Az alkalmazás a főoldalra navigál, ahol a munkamenet elkezdődik.

#### 2.2.2. TC-02
- **TP:** TP-02
- **Leírás:** Ebben a tesztesetben mindkét input mezőt üresen hagyjuk, és megfigyeljük, hogy a rendszer hogyan reagál erre az esetre.
- **Bemenet:** `E-mail` = Üresen hagyjuk. `Jelszó` = Üresen hagyjuk.
- **Művelet:** A `Bejelentkezés` gomb megnyomásával elküldjük a formot.
- **Elvárt kimenet:** A rendszer figyelmeztet, hogy mindkét mező kitöltése kötelező.

#### 2.2.3. TC-03
- **TP:** TP-02
- **Leírás:** Rossz jelszót adunk meg a bejelentkezés során.
- **Bemenet:** `E-mail` = Létező regisztrált email-cím `Jelszó` = Helytelen jelszó.
- **Művelet:** A `Bejelentkezés` gomb megnyomásával elküldjük a formot.
- **Elvárt kimenet:** Az alkalmazás jelzi, hogy a bejelentkezés sikertelen volt.

### 2.6. Időpont hozzáadás

#### 2.6.1. TC-01
- **TP:** TP-06
- **Leírás:** Ellenőrizzük, hogy az időpont sikeresen hozzáadódik-e az adatbázishoz, és megjelenik-e a módosító legördülő menüben.
- **Bemenet:** Választott dátum és idő az időpont hozzáadásához.
- **Művelet:** Az `Időpont Hozzáadása` gomb megnyomásával elküldjük a formot.
- **Elvárt kimenet:** Az új időpont sikeresen hozzáadódik az adatbázishoz, és az időpont megjelenik a módosító legördülő menüben.

#### 2.6.2. TC-02
- **TP:** TP-06
- **Leírás:** Ellenőrizzük, hogy a felhasználók számára látható-e a felvitt időpont.
- **Bemenet:** Már létező dátum és idő az időpont hozzáadásához.
- **Művelet:** Az `Időpont Hozzáadása` gomb megnyomásával elküldjük a formot. Átjelentkezünk felhasználói fiókba.
- **Elvárt kimenet:** Az admin által felvitt időpont látható a felhasználók Időpontok menüpontjában.

#### 2.6.3. TC-03
- **TP:** TP-06
- **Leírás:** Ellenőrizzük, hogy az újonnan hozzáadott időpont megjelenik-e a törlés legördülő menüben.
- **Bemenet:** Választott dátum és idő az időpont hozzáadásához.
- **Művelet:** Az `Időpont Hozzáadása` gomb megnyomásával elküldjük a formot.
- **Elvárt kimenet:** Az újonnan hozzáadott időpont megjelenik a törlés legördülő menüben.


### 2.11. Név és email-cím módosítás

#### 2.11.1. TC-01
- **TP:** TP-11
- **Leírás:** A felhasználó megváltoztatja a nevét és az email-címét és ellenőrizzük, hogy a rendszer helyesen kezeli-e ezeket a változásokat.
- **Bemenet:** `Név` = Felhasználó által választott új név `E-mail` = Felhasználó által választott új email.
- **Művelet:** A `Mentés` gomb megnyomásával elküldjük a formot.
- **Elvárt kimenet:** A rendszer frissíti a felhasználó adatait abban az esetben, ha a felhasználó által választott új email cím még nincsen használatban. Végül az új név és email-cím megjelenik a Profil oldalon.

#### 2.11.2. TC-02
- **TP:** TP-11
- **Leírás:** Ebben a tesztesetben az input mezőket üresen hagyjuk, és megfigyeljük, hogy a rendszer hogyan reagál erre az esetre.
- **Bemenet:** `Név` = Üresen hagyjuk. `E-mail` = Üresen hagyjuk.
- **Művelet:** A `Mentés` gomb megnyomásával elküldjük a formot.
- **Elvárt kimenet:** A rendszer figyelmeztet, hogy minden mező kitöltése kötelező.

#### 2.11.3. TC-03
- **TP:** TP-11
- **Leírás:** A felhasználó megpróbálja olyan email-címet megadni, amely már egy másik felhasználóhoz tartozik.
- **Bemenet:** `Név` = Felhasználó által választott új név `E-mail` = Létező másik felhasználó regisztrált email-címe.
- **Művelet:** A `Mentés` gomb megnyomásával elküldjük a formot.
- **Elvárt kimenet:** A rendszer figyelmezteti a felhasználót, hogy a megadott email-cím már használatban van.

### 2.12. Jelszó módosítás

#### 2.12.1. TC-01
- **TP:** TP-12
- **Leírás:** Helyes adatokat adunk meg minden mezőben. A folyamat sikerességét az jelzi, ha a profil oldalon találjuk magunkat, nem kapunk hibaüzenetet..
- **Bemenet:** `Jelenlegi jelszó` = Regisztrációkor megadott vagy azóta módosított jelenleg érvényes jelszavunk. `Új jelszó` = A jelszónak legalább négy karakterből kell állnia. `Jelszó megerősítése` = A jelszónak legalább négy karakterből kell állnia és egyeznie kell az új jelszóval.
- **Művelet:** A `Jelszó változtatása` gomb megnyomásával elküldjük a formot.
- **Elvárt kimenet:** Az alkalmazás a profil oldalra navigál.

#### 2.12.2. TC-02
- **TP:** TP-12
- **Leírás:** Ebben a tesztesetben az input mezőket üresen hagyjuk, és megfigyeljük, hogy a rendszer hogyan reagál erre az esetre.
- **Bemenet:** `Jelenlegi jelszó` = Üresen hagyjuk. `Új jelszó` = Üresen hagyjuk. `Jelszó megerősítése` = Üresen hagyjuk.
- **Művelet:** A `Jelszó változtatása` gomb megnyomásával elküldjük a formot.
- **Elvárt kimenet:** A rendszer figyelmeztet, hogy minden mező kitöltése kötelező.

#### 2.12.3. TC-03
- **TP:** TP-12
- **Leírás:** Olyan jelenlegi jelszót adunk meg, amely nincs használatban.
- **Bemenet:** `Jelenlegi jelszó` = Tetszőleges bemenet. `Új jelszó` = A jelszónak legalább négy karakterből kell állnia. `Jelszó megerősítése` = A jelszónak legalább négy karakterből kell állnia és egyeznie kell az új jelszóval.
- **Művelet:** A `Jelszó változtatása` gomb megnyomásával elküldjük a formot.
- **Elvárt kimenet:** Az alkalmazás figyelmeztet, hogy a megadott jelszó helytelen.

#### 2.12.4. TC-04
- **TP:** TP-12
- **Leírás:** A felhasználó ugyanazt az új jelszót adja meg, amely már a jelenlegi jelszója.
- **Bemenet:** `Jelenlegi jelszó` = Jelenlegi érvényes jelszó. `Új jelszó` = Jelenlegi érvényes jelszó. `Jelszó megerősítése` = Jelenlegi érvényes jelszó.
- **Művelet:** A `Jelszó változtatása` gomb megnyomásával elküldjük a formot.
- **Elvárt kimenet:** A rendszer figyelmeztet, hogy az új jelszó nem lehet ugyanaz, mint a jelenlegi jelszó.

#### 2.12.5. TC-05
- **TP:** TP-12
- **Leírás:** A felhasználó olyan új jelszót ad meg, amely nem felel meg az elvárásoknak.
- **Bemenet:** `Jelenlegi jelszó` = Jelenlegi érvényes jelszó. `Új jelszó` = Csak három karakter hosszú jelszó. `Jelszó megerősítése` = Csak három karakter hosszú jelszó.
- **Művelet:** A `Jelszó változtatása` gomb megnyomásával elküldjük a formot.
- **Elvárt kimenet:** Az alkalmazás figyelmeztet, hogy az új jelszó nem felel meg a minimális karakterhossz elvárásának és nem egyezik meg a megerősítéssel.

## 3. Tesztriportok (TR)

### 3.2. Bejelentkezés

#### 3.2.1. TR-01(TC-01)
- **TP:** TP-02
    1. lépés: Létező regisztrált email-címet adtam meg.
    2. lépés: A regisztráció során megadott jelszót adtam meg.
    3. lépés: A Bejelentkezés gombot egyszer megnyomtam.
    4. lépés: Az alkalmazás a főoldalra navigált.
    5. lépés: A munkamenet sikeresen elindult.

#### 3.2.2. TR-02(TC-02)
- **TP:** TP-02
    1. lépés: Mindkét input mezőt üresen hagytam.
    2. lépés: A Bejelentkezés gombot egyszer megnyomtam.
    3. lépés: A rendszer figyelmeztetést adott ki a kötelező mezőkről.

#### 3.2.3. TR-03(TC-03)
- **TP:** TP-02
    1. lépés: Létező regisztrált email-címet adtam meg.
    2. lépés: Helytelen jelszót adtam meg.
    3. lépés: A Bejelentkezés gombot egyszer megnyomtam.
    4. lépés: Az alkalmazás jelzi, hogy a bejelentkezés sikertelen volt.

### 3.11. Név és email-cím módosítás

#### 3.11.1. TR-01(TC-01)
- **TP:** TP-11
    1. lépés: Felhasználó által választott új nevet adtam meg.
    2. lépés: Felhasználó által választott új email-címet adtam meg.
    3. lépés: A Mentés gombot egyszer megnyomtam.
    4. lépés: A rendszer frissítette a felhasználó adatait.
    5. lépés: Az új név és email-cím megjelent a Profil oldalon.

#### 3.11.2. TR-02(TC-02)
- **TP:** TP-11
    1. lépés: Mindkét input mezőt üresen hagytam.
    2. lépés: A Mentés gombot egyszer megnyomtam.
    3. lépés: A rendszer figyelmeztetést adott ki a kötelező mezőkről.

#### 3.11.3. TR-03(TC-03)
- **TP:** TP-11
    1. lépés: Felhasználó által választott új nevet adtam meg.
    2. lépés: Már létező másik felhasználó regisztrált email-címét adtam meg.
    3. lépés: A Mentés gombot egyszer megnyomtam.
    4. lépés: A rendszer figyelmeztett, hogy a megadott email-cím már használatban van.

#### 3.12.1. TR-01 (TC-01)
- **TP:** TP-12
    1. lépés: 'csigabiga' jelszót adtam meg.
    2. lépés: 'cicamica' jelszót adtam meg.
    3. lépés: 'cicamica' jelszót adtam meg.
    4. lépés: a Jelszó módosítása gombot egyszer megnyomtam.
    5. lépés: az alkalmazás a profil oldalra navigált.

#### 3.12.2. TR-02 (TC-02)
- **TP:** TP-12
    1. lépés: '' jelszót adtam meg.
    2. lépés: '' jelszót adtam meg.
    3. lépés: '' jelszót adtam meg.
    4. lépés: a Jelszó módosítása gombot egyszer megnyomtam.
    5. lépés: az alkalmazás figyelmeztet arról, hogy minden mező kitöltése kötelező.

#### 3.12.3. TR-03 (TC-03)
- **TP:** TP-12
    1. lépés: 'nemcsigabiga' jelszót adtam meg.
    2. lépés: 'cicamica' jelszót adtam meg.
    3. lépés: 'cicamica' jelszót adtam meg.
    4. lépés: a Jelszó módosítása gombot egyszer megnyomtam.
    5. lépés: az alkalmazás figyelmeztet arról, hogy helytelen jelenlegi jelszót adtam meg.

#### 3.12.2. TR-04 (TC-04)
- **TP:** TP-12
    1. lépés: 'csigabiga' jelszót adtam meg.
    2. lépés: 'csigabiga' jelszót adtam meg.
    3. lépés: 'csigabiga' jelszót adtam meg.
    4. lépés: a Jelszó módosítása gombot egyszer megnyomtam.
    5. lépés: az alkalmazás figyelmeztet arról, hogy az új jelszó nem lehet ugyanaz, mint a jelenlegi.

#### 3.12.5. TR-05 (TC-05)
- **TP:** TP-12
    1. lépés: 'csigabiga' jelszót adtam meg.
    2. lépés: 'asd' jelszót adtam meg.
    3. lépés: 'asd' jelszót adtam meg.
    4. lépés: a Jelszó módosítása gombot egyszer megnyomtam.
    5. lépés: az alkalmazás figyelmeztet arról, hogy az új jelszó nem felel meg a minimális karakterhossz elvárásának.
