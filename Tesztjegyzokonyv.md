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
- **TP: **TP-01
- **Leírás:** Megfelelő és helyes adatokat adunk meg minden mezőben. A folyamat sikerességét az jelzi, ha a kezdőoldalon találjuk magunkat, ahol a munkamenet elindul.
- **Bemenet:** `Név` = Tetszőleges karakterekből és számokból álló sorozat, melynek hossza meghaladja az 1-et. ; `E-mail` = Olyan karaktersorozat, amely megfelel az email cím formátumnak. `Jelszó` = Tetszőleges karakterekből és számokból álló sorozat, melynek hossza meghaladja az 3-at. `Jogosultság` = Tetszőlegesen választható 'Admin' vagy 'Felhasználó' szerepkör.
- **Művelet:** A `Regisztráció` gomb megnyomásával küldhető el a form.
- **Elvárt kimenet:** Az alkalmazás a kezdőlapra navigál, ahol a munkamenet megkezdődik.

#### 2.1.2. TC-02
- **TP: **TP-02
- **Leírás:** Ebben a tesztesetben az input mezőket üresen hagyjuk, és megfigyeljük, hogy a rendszer hogyan reagál erre az esetre.
- **Bemenet:** `Név` = Üresen hagyjuk. ; `E-mail` = Üresen hagyjuk. `Jelszó` = Üresen hagyjuk. `Jogosultság` = Tetszőlegesen választható 'Admin' vagy 'Felhasználó' szerepkör.
- **Művelet:** A `Regisztráció` gomb megnyomásával küldhető el a form.
- **Elvárt kimenet:** A rendszer figyelmeztetést küld arról, hogy minden mező kitöltése kötelező.

#### 2.1.3. TC-03
- **TP: **TP-03
- **Leírás:** Olyan email címet adunk meg, amely már szerepel az adatbázisban, így azt már használatban van.
- **Bemenet:** `Név` = Tetszőleges karakterekből és számokból álló sorozat, melynek hossza meghaladja az 1-et. ; `E-mail` = Olyan email cím, amellyel már korábban történt regisztráció. `Jelszó` = etszőleges karakterekből és számokból álló sorozat, melynek hossza meghaladja az 3-at. `Jogosultság` = Tetszőlegesen választható 'Admin' vagy 'Felhasználó' szerepkör.
- **Művelet:** A `Regisztráció` gomb megnyomásával küldhető el a form.
- **Elvárt kimenet:** Az alkalmazás tájékoztat arról, hogy az adott email cím már használatban van.

### 2.2. Négyzetre emelés funkció tesztesetei

#### 2.2.1. TC-01
- TP: TP-02
- Leírás: négyzetre emelés funkció tesztelése
- Bemenet: `NUMBER1` = 2 
- Művelet: nyomjuk meg az `NEGYZETREEMEL` gombot 
- Elvárt kimenet: az eredmény mező tartalma: `NUMBER2` = 4

## 3. Tesztriportok (TR)

### 3.1. Összeadás funkció tesztriportjai

#### 3.1.1. TR-01 (TC-01)
- TP: TP-01
    1. lépés: 0-t beírtam
    2. lépés: 3-t beírtam 
    3. lépés: a gomb egyszeri megnyomás után inaktív lett
    4. lépés: helyes eredményt kaptam (3)
    

#### 3.1.2. TR-02 (TC-02)
- TP: TP-01
    1. lépés: X-t beírtam
    2. lépés: 3-t beírtam 
    3. lépés: a gomb egyszeri megnyomás után inaktív lett
    4. lépés: helyes eredményt kaptam (HIBA)

### 3.2. Négyzetre emelés funkció tesztriportjai

#### 3.2.1. TR-01 (TC-01)
- TP: TP-02
    1. lépés: 2-t beírtam
    2. lépés: a gomb egyszeri megnyomás után inaktív lett
    3. lépés: helyes eredményt kaptam (4)


    
