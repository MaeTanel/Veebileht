loo_listid();
loo_tabel();
arvuta();

function lisa(){
    var kategooria = document.getElementById("Kategooria").value;
    var kirjeldus = document.getElementById("kirjeldus").value;
    var summa = Number(document.getElementById("summa").value);
    var kuupäev = Date();

    console.log(kirjeldus);
    console.log(summa);

    const kategooriad = localStorage.getItem("kategooria").split(",");
    kategooriad.push(kategooria);
    localStorage.setItem("kategooria", kategooriad);

    const kirjeldused = localStorage.getItem("kirjeldus").split(",");
    kirjeldused.push(kirjeldus);
    localStorage.setItem("kirjeldus", kirjeldused);

    const summad = localStorage.getItem("summa").split(",");
    summad.push(summa);
    localStorage.setItem("summa", summad);

    const kuupäevad = localStorage.getItem("kuupäev").split(",");
    kuupäevad.push(kuupäev);
    localStorage.setItem("kuupäev", kuupäevad);

    loo_tabel();
    arvuta();
}

function loo_tabel(){
    const kategooriad = localStorage.getItem("kategooria").split(",");
    const kirjeldused = localStorage.getItem("kirjeldus").split(",");
    const summad = localStorage.getItem("summa").split(",");
    const kuupäevad = localStorage.getItem("kuupäev").split(",");

    var table = document.getElementById("kulud");
    var ridu = table.rows.length

    for(i=1; i < ridu; i++) {
        table.deleteRow(1);
    }
    if (kirjeldused.length > 0) {
        for (i=0; i < kirjeldused.length; i++) {
            table.insertRow(i+1).outerHTML = "<tr><td>" + kategooriad[kirjeldused.length-1-i] + "</td><td>" + kirjeldused[kirjeldused.length-1-i] + "</td><td>"+summad[kirjeldused.length-1-i] + "</td><td>" + kuupäevad[kirjeldused.length-1-i] + "</td></tr>";
        }
    }
}

function loo_listid(){
    if (localStorage.getItem("kirjeldus")==null){
        const kategooriad = [];
        localStorage.setItem("kategooria", kategooriad);
    }
    if (localStorage.getItem("kirjeldus")==null){
        const kirjeldused = [];
        localStorage.setItem("kirjeldus", kirjeldused);
    }
    if (localStorage.getItem("summa")==null){
        const summad = [];
        localStorage.setItem("summa", summad);
    }
    if (localStorage.getItem("kuupäev")==null){
        const kuupäevad = [];
        localStorage.setItem("kuupäev", kuupäevad);
    }
}

function arvuta() {
    var eluase = 0;
    var kommunaalid = 0;
    var söök = 0;
    var transport = 0;
    var meelelahutus = 0;
    var reisifond = 0;
    var meelerahufond = 0;
    var investeerimine = 0;
    var muu = 0;

    const kategooriad = localStorage.getItem("kategooria").split(",");
    const summad = localStorage.getItem("summa").split(",");

    for (i = 0; i < kategooriad.length; i++) {
        if (kategooriad[i] == 'Eluase') {
            eluase = eluase + Number(summad[i])
        }
        if (kategooriad[i] == 'Kommunaalid') {
            kommunaalid = kommunaalid + Number(summad[i])
        }
        if (kategooriad[i] == 'Söök') {
            söök = söök + Number(summad[i])
        }
        if (kategooriad[i] == 'Transport') {
            transport = transport + Number(summad[i])
        }
        if (kategooriad[i] == 'Meelelahutus') {
            meelelahutus = meelelahutus + Number(summad[i])
        }
        if (kategooriad[i] == 'Reisifond') {
            reisifond = reisifond + Number(summad[i])
        }
        if (kategooriad[i] == 'Meelerahufond') {
            meelerahufond = meelerahufond + Number(summad[i])
        }
        if (kategooriad[i] == 'Investeerimine') {
            investeerimine = investeerimine + Number(summad[i])
        }
        if (kategooriad[i] == 'Muu') {
            muu = muu + Number(summad[i])
        }
    }

    document.getElementById("eluase_kulunud").innerHTML = Math.round(eluase * 100) / 100;
    document.getElementById("kommunaalid_kulunud").innerHTML = Math.round(kommunaalid*100)/100;
    document.getElementById("söök_kulunud").innerHTML = Math.round(söök * 100) / 100;
    document.getElementById("transport_kulunud").innerHTML = Math.round(transport * 100) / 100;
    document.getElementById("meelelahutus_kulunud").innerHTML = Math.round(meelelahutus * 100) / 100;
    document.getElementById("reisifond_kulunud").innerHTML = Math.round(reisifond * 100) / 100;
    document.getElementById("meelerahu_kulunud").innerHTML = Math.round(meelerahufond*100)/100;
    document.getElementById("invest_kulunud").innerHTML = Math.round(investeerimine * 100) / 100;
    document.getElementById("muu_kulunud").innerHTML = Math.round(muu * 100) / 100;
    

    const kulutada = localStorage.getItem("väärtused").split(",");

    document.getElementById("eluase_kulutada").innerHTML = kulutada[0] - Math.round(eluase*100)/100;
    document.getElementById("kommunaalid_kulutada").innerHTML = kulutada[1] - Math.round(kommunaalid*100)/100;
    document.getElementById("söök_kulutada").innerHTML = kulutada[2] - Math.round(söök*100)/100;
    document.getElementById("transport_kulutada").innerHTML = kulutada[3] - Math.round(transport * 100) / 100;
    document.getElementById("meelelahutus_kulutada").innerHTML = kulutada[4] - Math.round(meelelahutus * 100) / 100;
    document.getElementById("reisifond_kulutada").innerHTML = kulutada[5] - Math.round(reisifond * 100) / 100;
    document.getElementById("meelerahu_kulutada").innerHTML = kulutada[6] - Math.round(meelerahufond * 100) / 100;
    document.getElementById("invest_kulutada").innerHTML = kulutada[7] - Math.round(investeerimine*100)/100;
    document.getElementById("muu_kulutada").innerHTML = kulutada[8] - Math.round(muu*100)/100;

    document.getElementById("eluase_graafik").innerHTML = Math.round((kulutada[0] - Math.round(eluase*100)/100) / kulutada[0]*100*100)/100 + "%";
    document.getElementById("kommunaalid_graafik").innerHTML = Math.round((kulutada[1] - Math.round(kommunaalid*100)/100) / kulutada[1]*100*100)/100 + "%";
    document.getElementById("söök_graafik").innerHTML = Math.round((kulutada[2] - Math.round(söök*100)/100) / kulutada[2]*100*100)/100 + "%";
    document.getElementById("transport_graafik").innerHTML = Math.round((kulutada[3] - Math.round(transport * 100) / 100) / kulutada[3] * 100 * 100) / 100 + "%";
    document.getElementById("meelelahutus_graafik").innerHTML = Math.round((kulutada[4] - Math.round(meelelahutus * 100) / 100) / kulutada[4] * 100 * 100) / 100 + "%";
    document.getElementById("reisifond_graafik").innerHTML = Math.round((kulutada[5] - Math.round(reisifond*100)/100) / kulutada[5]*100*100)/100 + "%";
    document.getElementById("meelerahu_graafik").innerHTML = Math.round((kulutada[6] - Math.round(meelerahufond * 100) / 100) / kulutada[6] * 100 * 100) / 100 + "%";
    document.getElementById("invest_graafik").innerHTML = Math.round((kulutada[7] - Math.round(investeerimine * 100) / 100) / kulutada[7] * 100 * 100) / 100 + "%";
    document.getElementById("muu_graafik").innerHTML = Math.round((kulutada[8] - Math.round(muu * 100) / 100) / kulutada[8] * 100 * 100) / 100 + "%";
    
}
