function calcular() {
    const salariobruto = Number(document.getElementById("salariobruto").value);
    let vt = salariobruto * 0.06;
    let inss = salariobruto * 0.08;
    let salarioliquido = salariobruto - vt - inss;

    document.getElementById("vt").value = vt;
    document.getElementById("inss").value = inss;
    document.getElementById("salarioliquido").value = salarioliquido;

}