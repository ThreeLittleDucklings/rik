README

om te starten moet je een terminal openen en "cd rik" typen, vervolgenstype je "git pull".

voila we zijn klaar om er aan te beginnen!

het belangrijkst zijn de foto's, foto's op de website zijn bijna altijd omvat in een 'div' element of een 'a'.
als je meer fot's toevoegd of je haalt foto's weg, dan is het belangrijk je het volledige element verwijdert/kopieert. 
Om de foto aan te passen hoefje enkel de src aan te passen. BELANGRIJK, op pagina's waar er een gallery is (waar je op een foto kan duwen om een grotere foto te krijgen) zit er in het 'a' element ook een src. in deze src zet je dezelfde link of een andere link naar de zelfde foto in hogere qualiteit.

Dit zijn alle foto soorten die je kan tegenkomen.

<div class="image-grid-col-2 image-grid-row-2 containerforimage first"><img id="slide-1" class="image-grid-col-2 image-grid-row-2" src="images/people/meg1.jpg" width="2000" height="3000" alt="people" />
                <div class="centered" ><a href="portret.html">PORTRET</a></div>
            </div>
---------------------------------------------------------------------
 <div class="container">
        <img  class="image" src="images/square/foto1.jpg" width="2000" height="1512" alt="urban" draggable="false"/>
        <div class="centered" id="c2"><a href="architectuur.html">ARCHITECTUUR</a></div>
            </div>

---------------------------------------------------------------------
 <a data-src="images/people/foto4.jpg">
    <img class="thumbnail" src="images/people/foto4.jpg" alt="Sara on a red bike" loading="lazy">
  </a>
---------------------------------------------------------------------
<img class="image" src="images/people/6-Meganck-P9.jpg">
---------------------------------------------------------------------

voor de rest hebben de meeste foto's een alt. dit zijn tekstjes die de website laat zijn als er iets zou mislopen en een foto word niet ingeladen of ze worden voorgelezen wanneer een blind/slechtziend persoon je website bezoekt.

nieuwe foto's of mapjes toevoegen is geen enkel probleem, ik raad aan een nieuwe map te maken met hogere qualiteit foto's. Foto's/mappen verwijderen of verplaatsen kan wel voor problemen zorgen. als je dit toch wilt doen omdat je mijn structuur haat, doe dit dan meteen wanneer je begint zodat je niet twee keer hetzelfde werk moet doen (als je ze verplaatst moet je nieuwe linken ingeven, vandaar).

Wanneer je klaar bent, of het even beu bent sluit je best deftig af, dit doe je door terug een terminal te openen, 
"cd rik" 
"git add ."
"git commit -m rik#" (die # vervangen door een getal, zo kan ik terug vinden wanneer er een probleem is ontstaan). 
"git push"
je aanpassingen zijn opgeslaan, en je kan verder met je dag