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
    0. lépés:Indítsuk el az alkalmazást egy tetszőleges webböngészőben.
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
    0. lépés:Indítsuk el az alkalmazást egy tetszőleges webböngészőben, majd jelentkezzünk be.
    1. lépés: Mozgassuk az egeret a jobb felső sarokban található felhasználói ikonra, és válasszuk ki a megjelenő menüből a `Kijelentkezés` opciót.
    4. lépés: Miután rákattintunk a gombra, az alkalmazásnak minden esetben meg kell szakítania a munkamenetet, majd a főoldalra kell irányítania. _Elvárt eredmény:_ A főoldalra irányít minket az alkalmazás.

## 2. Teszesetek (TC)

### 2.1. Összeadás funkció tesztesetei

#### 2.1.1. TC-01
- TP: TP-01
- Leírás: összeadás funkció tesztelése 
- Bemenet: `NUMBER1` = 0 ; `NUMBER2` = 3 
- Művelet: nyomjuk meg az `OSSZEAD` gombot 
- Elvárt kimenet: az eredmény mező tartalma: `NUMBER3` = 3

#### 2.1.2. TC-02
- TP: TP-01
- Leírás: összeadás funkció tesztelése 
- Bemenet: `NUMBER1` = X ; `NUMBER2` = 3 
- Művelet: nyomjuk meg az `OSSZEAD` gombot 
- Elvárt kimenet: az eredmény mező tartalma: `NUMBER3`= HIBA (`NUMBER1` értéke nem szám)

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


    
