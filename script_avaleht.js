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
    var arved = 0;
    var söök = 0;
    var vaba_aeg = 0;
    var investeerimine = 0;
    var meelerahufond = 0;

    const kategooriad = localStorage.getItem("kategooria").split(",");
    const summad = localStorage.getItem("summa").split(",");

    for (i = 0; i < kategooriad.length; i++) {
        if (kategooriad[i] == 'Eluase') {
            eluase = eluase + Number(summad[i])
        }
        if (kategooriad[i] == 'Arved') {
            arved = arved + Number(summad[i])
        }
        if (kategooriad[i] == 'Söök') {
            söök = söök + Number(summad[i])
        }
        if (kategooriad[i] == 'Vaba aeg') {
            vaba_aeg = vaba_aeg + Number(summad[i])
        }
        if (kategooriad[i] == 'Investeerimine') {
            investeerimine = investeerimine + Number(summad[i])
        }
        if (kategooriad[i] == 'Meelerahufond') {
            meelerahufond = meelerahufond + Number(summad[i])
        }
    }

    document.getElementById("eluase_kulunud").innerHTML = Math.round(eluase*100)/100;
    document.getElementById("arved_kulunud").innerHTML = Math.round(arved*100)/100;
    document.getElementById("söök_kulunud").innerHTML = Math.round(söök*100)/100;
    document.getElementById("vabaaeg_kulunud").innerHTML = Math.round(vaba_aeg*100)/100;
    document.getElementById("invest_kulunud").innerHTML = Math.round(investeerimine*100)/100;
    document.getElementById("meelerahu_kulunud").innerHTML = Math.round(meelerahufond*100)/100;

    const kulutada = localStorage.getItem("kulutada").split(",");

    document.getElementById("eluase_kulutada").innerHTML = kulutada[0] - Math.round(eluase*100)/100;
    document.getElementById("arved_kulutada").innerHTML = kulutada[1] - Math.round(arved*100)/100;
    document.getElementById("söök_kulutada").innerHTML = kulutada[2] - Math.round(söök*100)/100;
    document.getElementById("vabaaeg_kulutada").innerHTML = kulutada[3] - Math.round(vaba_aeg*100)/100;
    document.getElementById("invest_kulutada").innerHTML = kulutada[4] - Math.round(investeerimine*100)/100;
    document.getElementById("meelerahu_kulutada").innerHTML = kulutada[5] - Math.round(meelerahufond*100)/100;

    document.getElementById("eluase_graafik").innerHTML = Math.round((kulutada[0] - Math.round(eluase*100)/100) / kulutada[0]*100*100)/100 + "%";
    document.getElementById("arved_graafik").innerHTML = Math.round((kulutada[0] - Math.round(arved*100)/100) / kulutada[0]*100*100)/100 + "%";
    document.getElementById("söök_graafik").innerHTML = Math.round((kulutada[0] - Math.round(söök*100)/100) / kulutada[0]*100*100)/100 + "%";
    document.getElementById("vabaaeg_graafik").innerHTML = Math.round((kulutada[0] - Math.round(vaba_aeg*100)/100) / kulutada[0]*100*100)/100 + "%";
    document.getElementById("invest_graafik").innerHTML = Math.round((kulutada[0] - Math.round(investeerimine*100)/100) / kulutada[0]*100*100)/100 + "%";
    document.getElementById("meelerahu_graafik").innerHTML = Math.round((kulutada[0] - Math.round(meelerahufond*100)/100) / kulutada[0]*100*100)/100 + "%";
    
}