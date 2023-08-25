EU Template Oppgave

Målet med denne oppgaven er å forstå og beherske rutinene Prios har rundt produksjon av såkalte “EU-prosjektsider”. Prios har utviklet en wireframe mal som må redesignes for hvert prosjekt. Hvert enkelt EU prosjekt har sin egen fargepalett, egen logo, egen informasjon osv. Dette må tilpasses for hvert prosjekt.  
Her vil du få i oppgave å bruke malen og sette opp en egen EU-side i Vue 3. Oppgaven er basert på en tidligere bestilling og reelle kundekrav.

Referanser til EU-sider basert på malen:  
https://ca4gf.eu/
https://ecoach.site/  
https://i4u-project.eu/
https://empoweremployees.eu/  
smartbusiness (smab-project.eu)

Prios Vue 3 Guidelines: https://github.com/TorMagne/Vue-3-style-guide-beste-praktiser/blob/main/README.md  
Guidelines skal følges. Dette er for at beste praksiser blir vedlikeholdt.
Er det noen spørsmål rundt Guidelines, Vue3 eller Pinia store generelt. Snakk med Tor Magne/Bjørn.

Kundebestilling - Siden skal inneholde følgende:  
Prosjektlogo
Riktig fargepalett
Informasjon om prosjektet
Informasjon om partnere i prosjektet med logo, tekst og link til hjemmesider
Kontaktinformasjon
Kobling til nyhetsmodul – Snakk med Rodal for info
Kobling til RSS-modul – Snakk med Rodal for info
Kobling til Kursmodul – Snakk med Rodal for info
Kobling til kartleggingsmodul – Snakk med Rodal for info
Banner med Erasmus+ logo og Disclaimer  
Link til innhold for siden, fyllt ut av kunden på tre språk: https://docs.google.com/spreadsheets/d/1byiZNidHPa7Fpc9pMOscE1OJ76otJl7H/edit?usp=sharing&ouid=104579849024374974443&rtpof=true&sd=true

Tekniske krav:  
Global:
Global Konfigurering:
Skal kunne legge til logo, så skal Footer, Navbar og andre steder oppdateres.
Skal kunne legge inn tema farger på siden, så skal siden oppdateres deretter.
Bruke en .env fil, slik at man lagrer sensitiv informasjon her og ikke åpent i koden.
Språkstyring:
All tekst skal være i18n styrt, noe som betyr:
Skifter man språk. så skal hele siden bli oversatt.
Skal da ha en språk skifter i Navbar, som da blir presentert som en dropdown.
Denne skal da ha Flagg og forkortelse av land (eksempel en, de, es også videre).
Navbar:  
Navbar skal da følge med når du scroller nedover siden.
Skal ha en logo i starten av navbaren.
Logoen skal være klikkbar, og lede til hovedsiden.
Logoen skal automatisk skiftes og vises på rett måte når du legger denne inn i prosjektet.  
Skal da bare være å slette Template logoen, og legge til en logo med samme filnavn.
Skal også ha ett sett med Linker, som da leder til de forskjellige under sidene.
Contact blir da nevnt mer om nedenfor.
Login Blir da nevnt mer om nedenfor.
På Mobil eller ipad, så blir Navbaren litt annerledes.
Logo vil fortsatt være der, men alle linkene vil da være borte.
I stedet for så har du to ikoner helt til høyre av navbaren.
Icon nummer 1, skal toggle sidemenyen (mer info nedenfor).
Icon nummer 2, skal da være knyttet til Contact komponenten.
Sidemenyen:
Skal da bare kunne vises når er på ipad eller mindre skjermer.
Skal trigges fra navbaren, fra hamburger ikonet.
Skal som navbar, ha logo. Denne helt øverst på siden.
Logoen skal være klikkbar og lede til hjemmesiden.
Nedenfor skal det være en border, som da viser skille og fremhever linkene nedenfor.
Linkene skal være pent presentert, lette å klikke på. (tenk da at man skal klikke på dette med fingeren og ikke mus) og lede mot rett underside eller komponent.
Sidemenyen skal ikke være åpen som default, siden dette kan virke distraherende.
Contact:
Er da en komponent som blir trigget fra navbar og sidebar.
Skal være en modal, som da inneholder ett skjema.
I tillegg til de visbare feltene, så skal det også være med ett skjult felt som ikke bruker fyller ut.
Dette feltet går da under navn sentFrom og skal da bare være en string med prosjekt/side navn. (Brukes på followup for å se hvor skjemaet blir sendt fra).
Ha med grei validering, og bruker skal ikke kunne sende skjemaet uten at alle felt er fylt ut rett.
Ha med bekreftelse for bruker, når skjema er sendt eller at noe gikk galt.
Favicon:
Favicon er ikonet øverst oppe på fanen, ved side av side / prosjekt navn.
Man skal kunne lett skifte ikonet ved å bare legge til ett nytt ett, med samme navn
Footer:
Denne kan variere noe fra prosjekt til prosjekt, men generelt så har man en EU logo først.
Så kontakt informasjon, eller annen tekst.
Så side logo til slutt.
Footer skal ligge helt nederst på siden, selv på sider uten innhold.
Logo, tekst og eventuelt linker skal da bli oppdatert automatisk når man legger dette inn.
For eksempel: Ved å legge inn prosjekt logo, så blir navbar, sidebar og footer oppdatert.
Login:
Skal være en Komponent.
Skal kunne trigges fra Navbar og Sidebar.
Er en Modal som åpnes opp.
Når du IKKE er logget in, så skal den vise teksten Login.
Er du logget in, så skal den

Fremsiden:
Det at det skal være et stort bilde, som vist på referanse siden.
Bildet skal kunne ha en Tittel
Sub Tekst
Være Lett lesbar for Bruker, uansett Bilde bak.
Hint: Tenk skygge bak tekst
Bildet skal kunne lett erstattes, og da vises på rett måte.
Tre kort under bildet som viser til rett under-side.  
Disse kortene skal da være like, uansett om beskrivelsen tar 1 eller flere linjer.
På mobil så skal disse kortene bli presentert på en fin måte.
Kortene på desktop skal da ligge opp i det store bildet, som vist på referanse siden.
Seksjon med tittel og kort info under.
Ikke mye å si om dette.
Skal være sentrert og bli presentert på en fin måte.
Nyheter
Skal da vise frem de 6 nyeste nyhetene som kort, på 2 rader.
Disse nyhetene skal da være identiske av utseende, men forskjellig informasjon
Ved klikk av en nyhet, så skal en modal bli aktivert, med nyhet informasjonen.
Nyheten skal da bygges opp, basert på datagrunnlaget som kommer fra databasen.
Selve nyheten skal være en komponent, som da blir importert og vist på en fin måte.
Bonus: Nyheten er da delbar (tenk :slug som da får sin unike url – denne er bare ren bonus)
Eksterne Nyheter. Aka RSS.
Skal som nyhetene, bli presentert som 6 kort, på 2 rader.
Disse skal da åpne den eksterne nyheten i en ny fane.
Så det er bare kortene man egentlig må designe.
About:

Partnere:

Nyheter:

Training Modules / MOOC:

Ressurser:
