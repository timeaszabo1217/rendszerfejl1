# Tesztjegyzőkönyv

Az alábbi tesztdokumentum a `2023_IB153I-12_A` projekt alap funkcióihoz készült. Felelőse: `Durucz Ádám` 

``` 
A tesztelési dokumentáció részletesen bemutatja és leírja a Projekttervben meghatározott főbb funkciók tesztelési procedúráját, beleértve a specifikus teszteseteket és azok eredményeit. 
``` 

## 1. Teszteljárások (TP)

### 1.1. Regisztráció
- **Azonosító:** TP-01
- **Tesztesetek:** TC-01, TC-02, TC-03, TC-04, TC-5
- **Leírás:** A regisztrációs folyamat tesztelése során gondosan ellenőrizzük a felhasználói adatok helyes rögzítését és a felhasználói fiókok sikeres létrehozását. A teszt magában foglalja az űrlapmezők érvényességének ellenőrzését, valamint a visszajelzések és hibauzenetek helyes megjelenítését.
    ** 0. lépés:** Indítsuk el az alkalmazást egy tetszőleges webböngészőben.
    **1. lépés:** Mozgassuk az egeret a jobb felső sarokban található felhasználói ikonra, és válasszuk ki a megjelenő menüből a `Regisztráció` opciót.
    **2. lépés:** A form kitöltésekor három kötelező mezőt kell kitölteni: a `Név`, az `Email` és a `Jelszó` mezőket. Ezenkívül egy legördülő menü segítségével ki kell választani a `Jogosultság` szintet. Az email cím formátumát csak a kliensoldalon ellenőrizzük, tehát a megadott email címnek meg kell felelnie a szabványos formátumnak. A jelszó esetében nincsenek különleges követelmények vagy megszorítások.
    **3. lépés: **Miután kitöltöttük az összes mezőt, kattintsunk a `Regisztráció` gombra.
    **4. lépés:** Sikeres regisztráció után automatikusan a főoldalra irányít minket az alkalmazás. Ha hiba történik, az alkalmazás jelzi, hogy melyik mezőt töltöttük ki helytelenül. _Elvárt eredmény:_ A főoldalra irányít minket az alkalmazás.

### 1.2. Bejelentkezés
- Azonosító: TP-02
- Tesztesetek: TC-01
- Leírás: négyzetre emelés funkció tesztelése
    0. lépés: Nyissuk meg az alkalmazást, és indítsuk el a négyzetre emelés funkciót
    1. lépés: Az `INPUT` szövegbeviteli mezőbe írjunk be a `NUMBER1` számot
    2. lépés: Nyomjuk meg az `NEGYZETREEMEL` gombot 
    3. lépés: Ellenőrizzük az eredményt. Elvárt eredmény: `NUMBER2`

### 1.3. Kijelentkezés
- Azonosító: TP-02
- Tesztesetek: TC-01
- Leírás: négyzetre emelés funkció tesztelése
    0. lépés: Nyissuk meg az alkalmazást, és indítsuk el a négyzetre emelés funkciót
    1. lépés: Az `INPUT` szövegbeviteli mezőbe írjunk be a `NUMBER1` számot
    2. lépés: Nyomjuk meg az `NEGYZETREEMEL` gombot 
    3. lépés: Ellenőrizzük az eredményt. Elvárt eredmény: `NUMBER2`


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


    
