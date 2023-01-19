lae_andmed()
genereeri()

function genereeri(){
    var eluase = Number(document.getElementById("eluase").value);
    var arved = Number(document.getElementById("arved").value);
    var söök = Number(document.getElementById("söök").value);
    var vaba_aeg = Number(document.getElementById("vaba_aeg").value);
    var investeerimine = Number(document.getElementById("investeerimine").value);
    var meelerahufond = Number(document.getElementById("meelerahufond").value);
    var laekumised = Number(document.getElementById("laekumised").value);

    const väärtused = [eluase, arved, söök, vaba_aeg, investeerimine, meelerahufond];
    localStorage.setItem("väärtused", väärtused);
    localStorage.setItem("laekumised", laekumised);
    const summa = väärtused.reduce((a, b) => a+b,0);

    const kulutada = [
        Math.round(eluase/summa*laekumised*100)/100,
        Math.round(arved/summa*laekumised*100)/100,
        Math.round(söök/summa*laekumised*100)/100,
        Math.round(vaba_aeg/summa*laekumised*100)/100,
        Math.round(investeerimine/summa*laekumised*100)/100,
        Math.round(meelerahufond/summa*laekumised*100)/100
    ];
    localStorage.setItem("kulutada", kulutada);

    document.getElementById("eluase_väärtus").innerHTML = Math.round(eluase/summa*laekumised*100)/100;
    document.getElementById("arved_väärtus").innerHTML = Math.round(arved/summa*laekumised*100)/100;
    document.getElementById("söök_väärtus").innerHTML = Math.round(söök/summa*laekumised*100)/100;
    document.getElementById("vaba_aeg_väärtus").innerHTML = Math.round(vaba_aeg/summa*laekumised*100)/100;
    document.getElementById("investeerimine_väärtus").innerHTML = Math.round(investeerimine/summa*laekumised*100)/100;
    document.getElementById("meelerahufond_väärtus").innerHTML = Math.round(meelerahufond/summa*laekumised*100)/100; 
}

function lae_andmed(){
    if (localStorage.getItem("väärtused")!==null && localStorage.getItem("laekumised")!==null) {
        väärtused = localStorage.getItem("väärtused").split(",");
        document.getElementById("eluase").value = väärtused[0];
        document.getElementById("arved").value = väärtused[1];
        document.getElementById("söök").value = väärtused[2];
        document.getElementById("vaba_aeg").value = väärtused[3];
        document.getElementById("investeerimine").value = väärtused[4];
        document.getElementById("meelerahufond").value = väärtused[5];
        document.getElementById("laekumised").value = localStorage.getItem("laekumised");
    }
}

