const arrayverbs = [
    ["abide", "abode", "abode", "respecter, se conformer à"],
    ["arise", "arose", "arisen", "survenir"],
    ["awake", "awoke", "awoken", "se réveiller"],
    ["be", "was, were", "been", "être"],
    ["bear", "bore", "borne, born", "porter, supporter, naître"],
    ["beat", "beat", "beaten", "battre"],
    ["become", "became", "become", "devenir"],
    ["beget", "begat, begot", "begotten", "engendrer"],
    ["begin", "began", "begun", "commencer"],
    ["bend", "bent", "bent", "plier, se courber"],
    ["bet", "bet", "bet", "parier"],
    ["bid", "bid, bade", "bid, bidden", "offrir"],
    ["bite", "bit", "bitten", "mordre"],
    ["bleed", "bled", "bled", "saigner"],
    ["blow", "blew", "blown", "souffler, gonfler"],
    ["break", "broke", "broken", "casser"],
    ["breed", "bred", "bred", "élever (des animaux)"],
    ["bring", "brought", "brought", "apporter"],
    ["broadcast", "broadcast", "broadcast", "diffuser, émettre"],
    ["build", "built", "built", "construire"],
    ["burn", "burnt, burned", "burnt, burned", "brûler"],
    ["burst", "burst", "burst", "éclater"],
    ["buy", "bought", "bought", "acheter"],
    ["can", "could", "could", "pouvoir"],
    ["cast", "cast", "cast", "jeter, distribuer (rôles)"],
    ["catch", "caught", "caught", "attraper"],
    ["chide", "chid, chode", "chid, chidden", "gronder"],
    ["choose", "chose", "chosen", "choisir"],
    ["cling", "clung", "clung", "s'accrocher"],
    ["clothe", "clad, clothed", "clad, clothed", "habiller, recouvrir"],
    ["come", "came", "come", "venir"],
    ["cost", "cost", "cost", "coûter"],
    ["creep", "crept", "crept", "ramper"],
    ["cut", "cut", "cut", "couper"],
    ["deal", "dealt", "dealt", "distribuer"],
    ["dig", "dug", "dug", "creuser"],
    ["dive", "dived", "dived, dove", "plonger"],
    ["do", "did", "done", "faire"],
    ["draw", "drew", "drawn", "dessiner, tirer"],
    ["dream", "dreamt, dreamed", "dreamt, dreamed", "rêver"],
    ["drink", "drank", "drunk", "boire"],
    ["drive", "drove", "driven", "conduire"],
    ["dwell", "dwelt", "dwelt, dwelled", "habiter"],
    ["eat", "ate", "eaten", "manger"],
    ["fall", "fell", "fallen", "tomber"],
    ["feed", "fed", "fed", "nourrir"],
    ["feel", "felt", "felt", "se sentir, ressentir"],
    ["fight", "fought", "fought", "se battre"],
    ["find", "found", "found", "trouver"],
    ["flee", "fled", "fled", "s'enfuir"],
    ["fling", "flung", "flung", "lancer"],
    ["fly", "flew", "flown", "voler"],
    ["forbid", "forbade", "forbidden", "interdire"],
    ["forecast", "forecast", "forecast", "prévoir"],
    ["foresee", "foresaw", "foreseen", "prévoir, presentir"],
    ["forget", "forgot", "forgotten, forgot", "oublier"],
    ["forgive", "forgave", "forgiven", "pardonner"],
    ["forsake", "forsook", "forsaken", "abandonner"],
    ["freeze", "froze", "frozen", "geler"],
    ["get", "got", "gotten, got", "obtenir"],
    ["give", "gave", "given", "donner"],
    ["go", "went", "gone", "aller"],
    ["grind", "ground", "ground", "moudre, opprimer"],
    ["grow", "grew", "grown", "grandir, pousser"],
    ["hang", "hung", "hung", "tenir, pendre"],
    ["have", "had", "had", "avoir"],
    ["hear", "heard", "heard", "entendre"],
    ["hide", "hid", "hidden", "cacher"],
    ["hit", "hit", "hit", "taper, appuyer"],
    ["hold", "held", "held", "tenir"],
    ["hurt", "hurt", "hurt", "blesser"],
    ["keep", "kept", "kept", "garder"],
    ["kneel", "knelt, knelled", "knelt, kneeled", "s'agenouiller"],
    ["know", "knew", "known", "connaître, savoir"],
    ["lay", "laid", "laid", "poser"],
    ["lead", "led", "led", "mener, guider"],
    ["lean", "leant, leaned", "leant, leaned", "s'incliner, se pencher"],
    ["leap", "leapt, leaped", "leapt, leaped", "sauter, bondir"],
    ["learn", "learnt", "learnt", "apprendre"],
    ["leave", "left", "left", "laisser, quitter, partir"],
    ["lend", "lent", "lent", "prêter"],
    ["let", "let", "let", "permettre, louer"],
    ["lie", "lay", "lain", "s'allonger"],
    ["light", "lit, lighted", "lit, lighted", "allumer"],
    ["lose", "lost", "lost", "perdre"],
    ["make", "made", "made", "fabriquer"],
    ["mean", "meant", "meant", "signifier"],
    ["meet", "met", "met", "rencontrer"],
    ["mow", "mowed", "mowed, mown", "tondre"],
    ["offset", "offset", "offset", "compenser"],
    ["overcome", "overcame", "overcome", "surmonter"],
    ["partake", "partook", "partaken", "prendre part à"],
    ["pay", "paid", "paid", "payer"],
    ["plead", "pled, pleaded", "pled, pleaded", "supplier, plaider"],
    ["preset", "preset", "preset", "programmer"],
    ["prove", "proved", "proven, proved", "prouver"],
    ["put", "put", "put", "mettre"],
    ["quit", "quit", "quit", "quitter"],
    ["read", "read", "read", "lire"],
    ["relay", "relaid", "relaid", "relayer"],
    ["rend", "rent", "rent", "déchirer"],
    ["rid", "rid", "rid", "débarrasser"],
    ["ride", "rode", "ridden", "monter (vélo, cheval)"],
    ["ring", "rang", "rung", "sonner, téléphoner"],
    ["rise", "rose", "risen", "lever"],
    ["run", "ran", "run", "courir"],
    ["saw", "saw, sawed", "sawn, sawed", "scier"],
    ["say", "said", "said", "dire"],
    ["see", "saw", "seen", "voir"],
    ["seek", "sought", "sought", "chercher"],
    ["sell", "sold", "sold", "vendre"],
    ["send", "sent", "sent", "envoyer"],
    ["set", "set", "set", "fixer"],
    ["shake", "shook", "shaken", "secouer"],
    ["shed", "shed", "shed", "répandre, laisser tomber"],
    ["shine", "shone", "shone", "briller"],
    ["shoe", "shod", "shod", "chausser"],
    ["shoot", "shot", "shot", "tirer, fusiller"],
    ["show", "showed", "shown", "montrer"],
    ["shut", "shut", "shut", "fermer"],
    ["sing", "sang", "sung", "chanter"],
    ["sink", "sank, sunk", "sunk, sunken", "couler"],
    ["sit", "sat", "sat", "s'asseoir"],
    ["slay", "slew", "slain", "tuer"],
    ["sleep", "slept", "slept", "dormir"],
    ["slide", "slid", "slid", "glisser"],
    ["slink", "slunk, slinked", "slunk, slinked", "s'en aller furtivement"],
    ["slit", "slit", "slit", "fendre"],
    ["smell", "smelt", "smelt", "sentir"],
    ["sow", "sowed", "sown, sowed", "semer"],
    ["speak", "spoke", "spoken", "parler"],
    ["speed", "sped", "sped", "aller vite"],
    ["spell", "spelt", "spelt", "épeler, orthographier"],
    ["spend", "spent", "spent", "dépenser, passer du temps"],
    ["spill", "spilt, spilled", "spilt, spilled", "renverser"],
    ["spin", "spun", "spun", "tourner, faire tourner"],
    ["spit", "spat, spit", "spat, spit", "cracher"],
    ["split", "split", "split", "fendre"],
    ["spoil", "spoilt", "spoilt", "gâcher, gâter"],
    ["spread", "spread", "spread", "répandre"],
    ["spring", "sprang", "sprung", "surgir, jaillir, bondir"],
    ["stand", "stood", "stood", "être debout"],
    ["steal", "stole", "stolen", "voler, dérober"],
    ["stick", "stuck", "stuck", "coller"],
    ["sting", "stung", "stung", "piquer"],
    ["stink", "stank", "stunk", "puer"],
    ["strew", "strewed", "strewn, strewed", "éparpiller"],
    ["strike", "struck", "stricken, struck", "frapper"],
    ["strive", "strove", "striven", "s'efforcer"],
    ["swear", "swore", "sworn", "jurer"],
    ["sweat", "sweat, sweated", "sweat, sweated", "suer"],
    ["sweep", "swept", "swept", "balayer"],
    ["swell", "swelled, sweated", "swollen", "gonfler, enfler"],
    ["swim", "swam", "swum", "nager"],
    ["swing", "swung", "swung", "se balancer"],
    ["take", "took", "taken", "prendre"],
    ["teach", "taught", "taught", "enseigner"],
    ["tear", "tore", "torn", "déchirer"],
    ["tell", "told", "told", "dire, raconter"],
    ["think", "thought", "thought", "penser"],
    ["thrive", "throve, thrived", "thriven, thrived", "prospérer"],
    ["throw", "threw", "thrown", "jeter"],
    ["thrust", "thrust", "thrust", "enfoncer"],
    ["tread", "trod", "trodden", "piétiner quelque chose"],
    ["typeset", "typeset", "typeset", "composer"],
    ["undergo", "underwent", "undergone", "subir"],
    ["understand", "understood", "understood", "comprendre"],
    ["wake", "woke", "woken", "réveiller"],
    ["wear", "wore", "worn", "porter (avoir sur soi)"],
    ["weep", "wept", "wept", "pleurer"],
    ["wet", "wet, wetted", "wet, wetted", "mouiller"],
    ["win", "won", "won", "gagner"],
    ["wind", "wound", "wound", "enrouler, remonter"],
    ["withdraw", "withdrew", "withdrawn", "se retirer"],
    ["wring", "wrung", "wrung", "tordre"],
    ["write", "wrote", "written", "écrire"]]

const questionnumber = document.querySelector(".questionnumber")
const answersblock = document.querySelector(".answersblock")
const displayscore = document.querySelector(".scorebar .cursor .score")
const cursor = document.querySelector(".scorebar .cursor")

async function valider() {
    if(canvalidate){
        canvalidate=false
        answer = myInput.value.trim().toLowerCase()
        const arraypossible = arrayverbs[verb][askind].split(', ')
        if(answer==arrayverbs[verb][askind] || arraypossible.includes(answer)){
            score+=1
        }
        
        loadquestion()
        await new Promise(resolve => setTimeout(resolve,1000))
        canvalidate=true
    }
}
let canvalidate=true
let question = 0
let score=0
let verb
let askind
let myInput
function loadquestion() {
    question+=1
    verb =  Math.floor(Math.random() * arrayverbs.length)
    askind = Math.floor(Math.random() * 3)

    questionnumber.innerHTML=`<h1>Question ${question}</h1>`
    answersblock.innerHTML=""
    for(let i=0;i<4;i++) {
        answersblock.innerHTML+=`
        <div class=${i!=askind ?"help" : "ask"}>
            <p>${i!=askind ? arrayverbs[verb][i] : `<input class="inputask" type="text" placeholder="???">`}</p>
        </div>`
    }
    displayscore.innerText = `${score} sur ${question - 1}`;
    const percent = score/(question-1)*90
    cursor.style["bottom"]=`${percent}%`
    cursor.style["top"]=`${90-percent}%`
    myInput = document.querySelector(".inputask");
    myInput.focus();
}

loadquestion()
document.addEventListener("keypress",function(event){
    if(event.key==="Enter"){
        event.preventDefault()
        document.querySelector(".enterbtn").click()
    }
})