# CSFW Individueel project

Webmanagement, keeping track of clients, products & services.

## CSFW-Client

Client-Side of CSFW application

Server-Side found here: https://github.com/RDAxRoadkill/CSFW-Server/

## Update

client: `git subtree push --prefix client heroku-client master`

## Requirements

### Original Requirements
|Requirement|Progress  |
|--|--|
|De applicatie gebruikt routing en childrouting zodat de informatie in het systeem gebruiksvriendelijk te navigeren is.  | WIP  |
|CRUD-functionaliteit voor tenminste één entiteit is uitgewerkt in componenten en (eenvoudige) schermen. Er is een listview (overzicht, lijst) van waaruit de gebruiker naar het detailscherm van een geselecteerde entiteit kan navigeren. Er is een edit-scherm, en een entiteit kan verwijderd worden. Je maakt gebruik van een module. | WIP |
|De applicatie gebruikt authenticatie zodat een gebruiker kan inloggen en alleen zijn eigen data kan aanpassen. Alle gebruikers kunnen wel data van elkaar raadplegen/inzien. | Not Started|
|Je volgt bij het coderen de styleguide van de frontend technologie die je gebruikt |WIP|
|Alle formuliervelden van alle formulieren die de applicatie gebruikt worden gevalideerd. |Not Started |
|Het type van de invoervelden in de formulieren sluit naadloos aan bij het type van de achterliggende data. | WIP |
|Gerelateerde entiteiten worden gekoppeld via (bijvoorbeeld dropdown-) selectie. | Not Started|
|Je gebruikt een CSS framework zoals Bootstrap, Material of UIKit voor de styling van je applicatie.  | Not Started
Je past UX-design principes toe, zodat een gebruiksvriendelijke toepassing ontstaat. |Not Started |
|Voor iedere component heb je een minimale testcase die succesvol uitgevoerd kan worden. | Not Started|
|Bij tenminste twee componenten heb je uitgebreide tests voor de functionaliteit van die componenten toegevoegd. |Not Started |
|Je maakt een weloverwogen keuze voor een noSql database op basis van je projectcasus, en je verantwoordt deze. | WIP|
|Je visualiseert het datamodel van de noSql database die je gebruikt in een relevant diagram. |WIP |  
| Je applicatie bevat een of meer componenten die inzicht geven in het functioneel ontwerp (use cases, projectbeschrijving, beschrijving van entiteiten) van je applicatie. Hier toon je ook jouw naam en studentnummer.| WIP |
|De applicatie is gebouwd volgens een onderhoudbare, robuuste en modulaire architectuur. Samenhangende functionaliteit is gevat in een heldere mappenstructuur. |WIP |  
|De applicatie is gedeployed en online toegankelijk. Er worden geen foutmeldingen getoond in de console van de browser in de opgeleverde versie. |WIP |
| Je hebt voor tenminste één raadpleegactie en één updateactie een gedetailleerd sequence diagram gemaakt.| WIP|  
|Het mag voor een gebruiker nooit nodig zijn om een refresh uit te voeren na het wijzigen van gegevens via de user interface. Dit bereik je doordat je asynchrone programmeertaalconcepten gebruikt. | WIP|
| | |  
### Additional Requirements

|Requirement| Progress |
|--|--|
|Je gebruikt in je formulieren velden en validatie voor datum, dropdown selectieveld, en radiobuttons of checkboxes, naast invoervelden voor string en number.  | Not Started |
| Je gebruikt herbruikbare en configureerbare componenten met inputparameters en outputevents. | Not Started |
| Je hebt de componentstructuur zodanig ver doorgevoerd dat relevante user interface onderdelen door een component gerealiseerd zijn. |Not Started  |
| Je hebt voor alle componenten testcases voor de functionaliteit van die componenten. |Not Started  |
|Je hebt end-to-end testcases voor tenminste twee relevante gebruikspaden (userflows) door de applicatie heen.  | Not Started |
| Je gebruikt een continuous integration/continuous deployment (CI/CD) ontwikkelstraat. Een push naar je Git repo triggert het uitvoeren van de testcases en, indien deze succesvol zijn, deployment naar de cloud provider. Toegevoegd: CI/CD genereert ook SonarQube kwaliteitsmetrieken. | Not Started |
| Je gebruikt geavanceerde functionaliteit van rxjs om complexere functionaliteit, zoals live search, te realiseren. Functies die je hierbij zou kunnen toepassen zijn debounce, switchMap, filter, map en reduce. | Not Started |
|De state van de applicatie wordt altijd realtime bijgehouden en getoond. |Not Started |


### Added by resit

- De kwaliteitsmetrieken van de frontend- en backendapplicatie zijn inzichtelijk via SonarQube of een gelijksoortig platform.

- De code voldoet aan de metrieken van de standaard quality gate. Dit betekent dat je applicaties beide het label 'passed' hebben.

- Het genereren van metrieken is geautomatiseerd en is onderdeel van de CI/CD ontwikkelstraat.