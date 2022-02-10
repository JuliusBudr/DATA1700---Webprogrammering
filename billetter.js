
let billettReg = [];
function kjopBillett() {
    if (document.getElementById("filmMeny").value === "Velg film her" ||
        document.getElementById("antall").value.length === 0 ||
        document.getElementById("fornavn").value.length === 0 ||
        document.getElementById("etternavn").value.length === 0 ||
        document.getElementById("telefonnr").value.length === 0 ||
        document.getElementById("epost").value.length === 0) {
        billettReg.push(null);
    } else {
        billettReg = [];
    }

    if (document.getElementById("filmMeny").value === "Velg film her") {
        document.getElementById("tomFilm").innerHTML = "Velg film";
    } else {
        document.getElementById("tomFilm").innerHTML = "";
    }

    if (document.getElementById("antall").value.length === 0) {
        document.getElementById("tomAntall").innerHTML = "Må skrive noe inn i antall";
    } else {
        document.getElementById("tomAntall").innerHTML = "";
    }

    if (document.getElementById("fornavn").value.length === 0) {
        document.getElementById("tomFornavn").innerHTML = "Må skrive noe inn i fornavnet";
    } else {
        document.getElementById("tomFornavn").innerHTML = "";
    }

    if (document.getElementById("etternavn").value.length === 0) {
        document.getElementById("tomEtternavn").innerHTML = "Må skrive noe inn i etternavnet";
    } else {
        document.getElementById("tomEtternavn").innerHTML = "";
    }

    if (document.getElementById("telefonnr").value.length === 0) {
        document.getElementById("tomTelefonnr").innerHTML = "Må skrive noe inn i telefonnr";
    } else {
        document.getElementById("tomTelefonnr").innerHTML = "";
    }

    if (document.getElementById("epost").value.length === 0) {
        document.getElementById("tomEpost").innerHTML = "Må skrive noe inn i epost";
    } else {
        document.getElementById("tomEpost").innerHTML = "";
    }

    const billett = {
        film: document.getElementById("filmMeny").value,
        antall: document.getElementById("antall").value,
        fornavn: document.getElementById("fornavn").value,
        etternavn: document.getElementById("etternavn").value,
        telefonnr: document.getElementById("telefonnr").value,
        epost: document.getElementById("epost").value
    };
    billettReg.push(billett);

    let utData = "";
    for (i=0; i<billettReg.length; i++) {
        utData += "<tr><td>" + billettReg[i].antall + "</td>" +
            "<td><b>" + billettReg[i].film + "</b></td>" +
            "<td>" + billettReg[i].fornavn + "</td>" +
            "<td>" + billettReg[i].etternavn + "</td>" +
            "<td>" + billettReg[i].telefonnr + "</td>" +
            "<td>" + billettReg[i].epost + "</td></tr>"
    }
    let ut = "<table><tr>" +
        "<th><strong>Antall</th><th>Film</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</strong></th><tr/>" +
        utData + "<table/>";
    document.getElementById("billetter").innerHTML = ut;

    document.getElementById("antall").value = "";
    document.getElementById("fornavn").value = "";
    document.getElementById("etternavn").value = "";
    document.getElementById("telefonnr").value = "";
    document.getElementById("epost").value = "";
}

function slettBilletter() {
    billettReg = [];
    document.getElementById("billetter").innerHTML = "";
}