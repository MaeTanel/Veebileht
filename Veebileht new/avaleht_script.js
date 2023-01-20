lae_andmed();
sum_kulud();

function sum_kulud() {
    var eluase = Number(document.getElementById("eluase").value);
    var kommunaalid = Number(document.getElementById("kommunaalid").value);
    var söök = Number(document.getElementById("söök").value);
    var transport = Number(document.getElementById("transport").value);
    var meelelahutus = Number(document.getElementById("meelelahutus").value);
    var reisifond = Number(document.getElementById("reisifond").value);
    var meelerahufond = Number(document.getElementById("meelerahufond").value);
    var investeerimine = Number(document.getElementById("investeerimine").value);
    var muu = Number(document.getElementById("muu").value);
    var kulud_kokku = document.getElementById("kulud_kokku");
    kulud_kokku.value = eluase + kommunaalid + söök + transport + meelelahutus + reisifond + meelerahufond + investeerimine + muu;

    var palk = Number(document.getElementById("palk").value);
    var dividendid = Number(document.getElementById("dividendid").value);
    var toetused = Number(document.getElementById("toetused").value);
    var muu_tulud = Number(document.getElementById("muu_tulud").value);
    var tulud_kokku = document.getElementById("tulud_kokku");
    tulud_kokku.value = palk + dividendid + toetused + muu_tulud

    var raha_alles = document.getElementById("raha_alles");
    raha_alles.value = tulud_kokku.value - kulud_kokku.value;

    const väärtused = [eluase, kommunaalid, söök, transport, meelelahutus, reisifond, meelerahufond, investeerimine, muu, palk, dividendid, toetused, muu_tulud];
    localStorage.setItem("väärtused", väärtused);
}


function lae_andmed(){
    if (localStorage.getItem("väärtused")!==null) {
        väärtused = localStorage.getItem("väärtused").split(",");
        document.getElementById("eluase").value = väärtused[0];
        document.getElementById("kommunaalid").value = väärtused[1];
        document.getElementById("söök").value = väärtused[2];
        document.getElementById("transport").value = väärtused[3];
        document.getElementById("meelelahutus").value = väärtused[4];
        document.getElementById("reisifond").value = väärtused[5];
        document.getElementById("meelerahufond").value = väärtused[6];
        document.getElementById("investeerimine").value = väärtused[7];
        document.getElementById("muu").value = väärtused[8];
        document.getElementById("palk").value = väärtused[9];
        document.getElementById("dividendid").value = väärtused[10];
        document.getElementById("toetused").value = väärtused[11];
        document.getElementById("muu_tulud").value = väärtused[12];
    }
}
