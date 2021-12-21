var v = [["Roberts L.", "Vēlu Jums priecīgus un baltus Ziemassvētkus!"],
        ["Markuss Z.","Lai ir pacietības visu dienu čakarēties ar skolas datoriem un skolēniem."],
        ["Jānis Helvijs J.","Vēlos pateikt paldies par šiem 4 mēnešiem prieka, tuvības, labvēlības un citām izcilām iezīmēm, kuras Jums piemīt! Paldies Jums liels!"],
        ["Maksis Kārlis G.","Sievietes ir kā vīns - jo vecāks, jo labāks. Novēlu kļūt vecākai un nebaidīties no tā!"],
        ["Ernests K.", "Priecīgus Ziemassvētkus un, lai jaunais gads, atnes prieku un laimi."],
        ["Veronika L.", "Jaukus Ziemassvētkus un lai visas programmas strādātu no pirmas reizes!"],
        ["Kārlis Z.", "Lai viss izdodas!"],
        ["Elza P.", "Novēlu, lai silti šie svētki un izdodas pavadīt laiku ar savu ģimeni!"],
        ["Agnese K", "Lai Jums jauki svētki un skaists gada noslēgums!"],
        ["Nils Ž.", "Lai gaišums tas, kas sveču liesmās plīvo, Iet katrai svētku dienai līdz! Sirds gaišus un Priecīgus šos svētkus!"],
        ["Kristers M.", "Priecīgus un gaišus Ziemassvētkus un Jauno gadu, lai piepildās visas vēlmes!"],
        ["Dāvis M.", "Novēlu jums gaišus un priekpilnus Ziemassvētkus!"],
        ["Kristaps T.","Priecīgus Ziemassvētkus un vēlmi nākamgad paveikt vēl vairāk!"],
        ["Raimonds V.","Novēlu Jums priecīgus Ziemassvētkus, veiksmīgu nākamo gadu un lai Rīgas domes serveri nākamgad strādā bez problēmām!"],
        ["Kristaps Andris B.", "Lai jums jauki ziemassvētki!"],
        ["Lenija L.", "priecīgus un gaišus svētkus!! <3"],
        ["Gabriella K.", "Novēlu Jums 2022.gadu aizpildīt ar neaizmirstamiem notikumiem un atmiņām :)"],
        ["Gustavs Z.", "Paldies par Jūsu ikdienišķo siltumu un pozitīvo enerģiju, tā tik turpināt! Priecīgus Ziemassvētkus un laimīgu Jauno gadu!"],
        ["Elīna B.", "Lai gaidāmie svētki sagādā jums tikai patīkamus pārsteigumus un priecīgus brīžus, ar balto sniegu aiznesot visas aizejošā gada rūpes, bēdas un grūtības."],
        ["Alekss R.", "Novēlu jums nosvinēt priekpilnus, baltus ziemassvētkus"],
        ["Deivids L.", "Pateicos par to, ko Jūs darījāt mūsu labā."],
        ["Gustavs G.", "Laimīgus Ziemassvētkus un priecīgo Jauno gadu!"]];
var i = 0;


function UpdateText(){
    document.getElementById("Quote").innerHTML = v[i][1];
    document.getElementById("Name").innerHTML = v[i][0];
}

function startGame()
{
    window.location.href = "game.html";
}

function moveForward(){
    if (i == v.length-1){
        i = 0;
    } else {
        i = i + 1;
    }
    UpdateText();
}

function moveBack(){
    if (i==0){
        i = v.length-1;
    } else {
        i = i - 1;
    }
    UpdateText();
}
