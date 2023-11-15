# Tesztjegyzőkönyv

Az alábbi tesztdokumentum a `2023_IB153I-12_A` projekt alap funkcióihoz készült. Felelőse: `Durucz Ádám` 

``` 
A tesztelési dokumentáció részletesen bemutatja és leírja a Projekttervben meghatározott főbb funkciók tesztelési procedúráját, beleértve a specifikus teszteseteket és azok eredményeit. 
``` 

## 1. Teszteljárások (TP)

### 1.1. Regisztráció
- **Azonosító:** TP-01
- **Tesztesetek:** TC-01, TC-02, TC-03
- **Leírás:** A regisztrációs folyamat tesztelése során gondosan ellenőrizzük a felhasználói adatok helyes rögzítését és a felhasználói fiókok sikeres létrehozását. A teszt magában foglalja az űrlapmezők érvényességének ellenőrzését, valamint a visszajelzések és hibauzenetek helyes megjelenítését.
    0. lépés: Indítsuk el az alkalmazást egy tetszőleges webböngészőben.
    1. lépés: Mozgassuk az egeret a jobb felső sarokban található felhasználói ikonra, és válasszuk ki a megjelenő menüből a `Regisztráció` opciót.
    2. lépés: A form kitöltésekor három kötelező mezőt kell kitölteni: a `Név`, az `Email` és a `Jelszó` mezőket. Ezenkívül egy legördülő menü segítségével ki kell választani a `Jogosultság` szintet. Az email cím formátumát csak a kliensoldalon ellenőrizzük, tehát a megadott email címnek meg kell felelnie a szabványos formátumnak. A jelszó esetében nincsenek különleges követelmények vagy megszorítások.
    3. lépés: Miután kitöltöttük az összes mezőt, kattintsunk a `Regisztráció` gombra.
    4. lépés: Sikeres regisztráció után automatikusan a főoldalra irányít minket az alkalmazás. Ha hiba történik, az alkalmazás jelzi, hogy melyik mezőt töltöttük ki helytelenül. _Elvárt eredmény:_ A főoldalra irányít minket az alkalmazás.

### 1.2. Bejelentkezés
- **Azonosító:** TP-02
- **Tesztesetek:** TC-04, TC-05, TC-06
- **Leírás:** A bejelentkezési folyamat tesztelése során alaposan megvizsgáljuk a felhasználói hitelesítési folyamatot, biztosítva, hogy a felhasználónév és jelszó kombináció helyes kezelése megtörténik. A teszt magában foglalja a beviteli mezők, mint például a felhasználónév és jelszó mezők érvényességének ellenőrzését. Különös figyelmet fordítunk arra, hogy a rendszer hogyan reagál helytelen bejelentkezési adatok esetén.
    0. lépés:Indítsuk el az alkalmazást egy tetszőleges webböngészőben.
    1. lépés: Mozgassuk az egeret a jobb felső sarokban található felhasználói ikonra, és válasszuk ki a megjelenő menüből a `Bejelentkezés` opciót.
    2. lépés: A bejelentkezési folyamat során két kötelező mezőt kell kitölteni: az `Email` és a `Jelszó` mezőket. A bejelentkezés előtt minden esetben regisztrálni kell.
    3. lépés: Miután kitöltöttük az összes mezőt, kattintsunk a `Bejelentkezés` gombra.
    4. lépés: Sikeres bejelentkezés után automatikusan a főoldalra irányít minket az alkalmazás. Ha hiba történik, az alkalmazás jelzi a felhasználónak. _Elvárt eredmény:_ A főoldalra irányít minket az alkalmazás.

### 1.3. Kijelentkezés
- **Azonosító:** TP-03
- **Tesztesetek:** TC-07, TC-08, TC-09
- **Leírás:** A kijelentkezési folyamat tesztelése során alaposan megvizsgáljuk, hogy a rendszer hogyan kezeli a felhasználói munkamenetek lezárását. A teszt célja annak ellenőrzése, hogy a kijelentkezési folyamat megfelelően megszakítja-e a felhasználói munkamenetet és törli a felhasználói adatokat a kliens oldalról, biztosítva a biztonságos kijelentkezést. 
    0. lépés: Indítsuk el az alkalmazást egy tetszőleges webböngészőben, majd jelentkezzünk be.
    1. lépés: Mozgassuk az egeret a jobb felső sarokban található felhasználói ikonra, és válasszuk ki a megjelenő menüből a `Kijelentkezés` opciót.
    4. lépés: Miután rákattintunk a gombra, az alkalmazásnak minden esetben meg kell szakítania a munkamenetet, majd a főoldalra kell irányítania. _Elvárt eredmény:_ A főoldalra irányít minket az alkalmazás.

### 1.4. Biztonsági mentés készítése
- **Azonosító:** TP-04
- **Tesztesetek:** TC-10
- **Leírás:** A biztonsági mentés tesztelése során részletesen ellenőrizzük, hogy a rendszer minden lényeges adatot megfelelően ment-e le JSON formátumban.
    0. lépés: A mentés csak abban az esetben működik, ha a szerveren fut a webalkalmazás.
    1. lépés: Minden nap automatikusan történik mentés 3:10-kor, emberi beavatkozás nélkül.
    2. lépés: A program lekérdezi az adatbázisban található összes táblát, majd ezt követően JSON formátumban eltárolja a szerveren. _Elvárt eredmény:_ Az időbélyeggel ellátott JSON fájlban található az összes adat.

## 2. Teszesetek (TC)

### 2.1. Regisztráció

#### 2.1.1. TC-01
- **TP: ** TP-01
- **Leírás:** Megfelelő és helyes adatokat adunk meg minden mezőben. A folyamat sikerességét az jelzi, ha a kezdőoldalon találjuk magunkat, ahol a munkamenet elindul.
- **Bemenet:** `Név` = Tetszőleges karakterekből és számokból álló sorozat, melynek hossza meghaladja az 1-et. ; `E-mail` = Olyan karaktersorozat, amely megfelel az email cím formátumnak. `Jelszó` = Tetszőleges karakterekből és számokból álló sorozat, melynek hossza meghaladja az 3-at. `Jogosultság` = Tetszőlegesen választható 'Admin' vagy 'Felhasználó' szerepkör.
- **Művelet:** A `Regisztráció` gomb megnyomásával küldhető el a form.
- **Elvárt kimenet:** Az alkalmazás a kezdőlapra navigál, ahol a munkamenet megkezdődik.

#### 2.1.2. TC-02
- **TP: ** TP-01
- **Leírás:** Ebben a tesztesetben az input mezőket üresen hagyjuk, és megfigyeljük, hogy a rendszer hogyan reagál erre az esetre.
- **Bemenet:** `Név` = Üresen hagyjuk. ; `E-mail` = Üresen hagyjuk. `Jelszó` = Üresen hagyjuk. `Jogosultság` = Tetszőlegesen választható 'Admin' vagy 'Felhasználó' szerepkör.
- **Művelet:** A `Regisztráció` gomb megnyomásával küldhető el a form.
- **Elvárt kimenet:** A rendszer figyelmeztetést küld arról, hogy minden mező kitöltése kötelező.

#### 2.1.3. TC-03
- **TP: ** TP-01
- **Leírás:** Olyan email címet adunk meg, amely már szerepel az adatbázisban, így azt már használatban van.
- **Bemenet:** `Név` = Tetszőleges karakterekből és számokból álló sorozat, melynek hossza meghaladja az 1-et. ; `E-mail` = Olyan email cím, amellyel már korábban történt regisztráció. `Jelszó` = etszőleges karakterekből és számokból álló sorozat, melynek hossza meghaladja az 3-at. `Jogosultság` = Tetszőlegesen választható 'Admin' vagy 'Felhasználó' szerepkör.
- **Művelet:** A `Regisztráció` gomb megnyomásával küldhető el a form.
- **Elvárt kimenet:** Az alkalmazás tájékoztat arról, hogy az adott email cím már használatban van.

### 2.2. Bejelentkezés

#### 2.2.1. TC-04
- **TP: ** TP-02
- **Leírás:** Azt teszteljük, hogy amennyiben helyes adatokat adunk meg, azaz olyanokat, amelyekkel korábban sikeres volt a regisztráció, a rendszer engedélyezi-e a belépést.
- **Bemenet:** `E-mail` = Egy olyan email cím, amely korábban már regisztrálva volt a rendszerben. `Jelszó` = A megadott email címhez kapcsolódó jelszó.
- **Művelet:** A `Bejelentkezés` gomb megnyomásával küldhető el a form.
- **Elvárt kimenet:** Az alkalmazás a kezdőlapra navigál, ahol a munkamenet megkezdődik.

#### 2.2.2. TC-05
- **TP: ** TP-02
- **Leírás:** Egy már regisztrált email címhez helytelen jelszót adunk meg, és megfigyeljük, hogy az alkalmazás hogyan kezeli ezt a helyzetet.
- **Bemenet:** `E-mail` = Egy olyan email cím, amely korábban már regisztrálva volt a rendszerben. `Jelszó` = Tetszőleges bemenet, amely nem egyezik meg az adott email címhez tartozó jelszóval.
- **Művelet:** A `Bejelentkezés` gomb megnyomásával küldhető el a form.
- **Elvárt kimenet:** Az alkalmazás hibaüzenetet jelenít meg, jelezve, hogy a belépés sikertelen, és nem engedi a felhasználót bejelentkezni.

#### 2.2.2. TC-06
- **TP: ** TP-02
- **Leírás:** Egy olyan email címet adunk meg, amellyel nem volt korábban regisztrálva.
- **Bemenet:** `E-mail` = Egy olyan email cím, amellyel korábban nem volt regisztrálva. `Jelszó` = Tetszőleges bemenet.
- **Művelet:** A `Bejelentkezés` gomb megnyomásával küldhető el a form.
- **Elvárt kimenet:** Az alkalmazás hibaüzenetet jelenít meg, jelezve, hogy a belépés sikertelen, és nem engedi a felhasználót bejelentkezni.

### 2.3. Kijelentkezés

#### 2.3.1. TC-07
- **TP: ** TP-03
- **Leírás:** A kijelentkezési folyamat tesztelése során azt ellenőrizzük, hogy megfelelően lezárul-e a munkamenet, a releváns sütik törlésre kerülnek-e, és az alkalmazás a kijelentkezés utáni megfelelő oldalra irányítja-e át a felhasználót.
- **Bemenet:** ` Nincs bemenet.
- **Művelet:** Mozgassuk az egeret a jobb felső sarokban található felhasználói ikonra, és válasszuk ki a megjelenő menüből a `Kijelentkezés` opciót.
- **Elvárt kimenet:** Az alkalmazás a főoldalra navigál minket, ahol a bejelentkezéshez kötött funkciók már nem hozzáférhetőek.

### 2.4. Biztonsági mentés készítése

#### 2.4.1. TC-08
- **TP: ** TP-04
- **Leírás:** A kijelentkezési folyamat tesztelése során azt ellenőrizzük, hogy megfelelően lezárul-e a munkamenet, a releváns sütik törlésre kerülnek-e, és az alkalmazás a kijelentkezés utáni megfelelő oldalra irányítja-e át a felhasználót.
- **Bemenet:** ` Nincs bemenet.
- **Művelet:** Mozgassuk az egeret a jobb felső sarokban található felhasználói ikonra, és válasszuk ki a megjelenő menüből a `Kijelentkezés` opciót.
- **Elvárt kimenet:** Az alkalmazás a főoldalra navigál minket, ahol a bejelentkezéshez kötött funkciók már nem hozzáférhetőek.

#### 2.4.2. TC-09
- **TP: ** TP-04
- **Leírás:** Ellenőrizzük, hogy a biztonsági mentési folyamat megfelelően működik-e, azaz minden nap 3:10-kor menti-e le az összes adatot JSON formátumban.
- **Bemenet:** ` Nincs bemenet.
- **Művelet:** Automatikusan beállított folyamat, amely minden nap hajnali 3:10-kor aktiválódik és végrehajtja a funkciót.
- **Elvárt kimenet:** A biztonsági mentési folyamat a szerver 'backup' mappájában rögzíti az összes adatbázistábla adatait JSON formátumban, minden egyes mentést dátummal és időbélyeggel ellátva.
