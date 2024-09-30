# Procesverslag
---

## Ik
<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ###

  |Auteur✍🏽|Starniveau🏔️|Focus🤔|
  |---|---|---|
  |Vincent Pinas|Zwart+|Helemaal responsive|
 
</details>





## Je website

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht:
  voor deze opdracht ga ik een aantal pagina's van de [**Nasa website**](https://www.nasa.gov/) namaken.
  

  #### Screenshot(s) van de eerste pagina (small screen): 
  [Home screen](https://www.nasa.gov/)

  <img src="readme-images/Screenshot1.png" width="200px" alt="omschrijving van de pagina">
  <img src="readme-images/Screenshot2.png" width="200px" alt="omschrijving van de pagina">

  #### Screenshot(s) van de tweede pagina (small screen):
  [Missions screen](https://www.nasa.gov/missions/)

  <img src="readme-images/Screenshot3.png" width="200px" alt="omschrijving van de pagina">
  <img src="readme-images/Screenshot4.png" width="200px" alt="omschrijving van de pagina">
 
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 2<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen:

  - Heel veel errors in HTML validator
  - Niet elke knop is groot genoeg voor op mobiel
  - Er worden heading levels geskipped en er is helemaal geen h1
  - Er is een auto-play video, maar zonder flitsende beelden of geluid en met de optie om hem te pauzeren.
  - links die naar andere sites leiden lijken op normale links
  - Geen hoge contrast modus, in iedergeval niet gemerkt
  - Geen light of dark mode alleen normale kleuren
  - Geen prefers reduced motion query, maar ook vrijwel geen animaties gevonden.
  - Icoontjes over sommige afbeeldingen zijn niet heel goed te zien
  
</details>



## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 3<sup>e</sup> werkgroep</summary>

  ### de hele pagina: 
  <img src="readme-images/Breakdown1.png" width="375px" alt="breakdown van de hele pagina">

  ### dynamisch deel: 
  <img src="readme-images/Breakdown2.png" width="375px" alt="breakdown van een dynamisch deel">

</details>





## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | Vincent        | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  |   | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - Skip to content knop toevoegen voor screenreaders
  - Je kan verder ingaan op accessibility met bijv. aria-labels als er extra tijd voor over is
  - Er is niet echt een minimaal of maximaal voor functionaliteiten toevoegen, gewoon zoveel als je kan.
  - 

</details>





## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
- ...

</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 9<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):

  ### Bevindingen screen-reader test
  - **Probleem:** Als je in het menu tab klikt dan gaat hij verder in de body daarna en kan je het menu niet meer uit
  **Oplossing:** Als het menu actief is de body niet meer focusable maken to het menu niet meer actief is. ```body:has(header.active) main {
	display: none;
}```


  ### Bevindingen WCAG Test
  - 

</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - Readme verbeteren
  - Beoordelings formulier bekijken
  - Clamp bekijken voor font size responsiveness

</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="uitomst opdracht 1">


  ### Dit ging goed/Heb ik geleerd: 
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="top">


  ### Dit was lastig/Is niet gelukt:
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="bummer">
</details>





## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg). 
  Nb. ChatGpT en andere AI horen er ook bij.
  Nb. Vermeld de bronnen ook in je code.

  1. [aria-label & aria-labelledby info](https://stackoverflow.com/questions/26032089/in-html-how-can-i-have-text-that-is-only-accessible-for-screen-readers-i-e-fo)
  2. [CSS Scroll animatie](https://scroll-driven-animations.style/demos/reverse-scroll/css/)
  3. [Theme switcher voorbeeld](https://codepen.io/saadeghi/pen/OJypbNM)

</details>