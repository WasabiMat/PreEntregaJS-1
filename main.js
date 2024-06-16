// Simulacion de un Cajero Automatico}
function cajero() {
    let usuario = prompt("Ingrese su usuario:");
    let pin = parseInt(prompt("Ingrese su pin:"));
    let saldo = 1000
    let siguiente = true;

    while (siguiente) {
        let opciones = prompt("Bienvenido "+usuario+".\nSelecciona una opción:\n1. Consultar saldo\n2. Depositar dinero\n3. Retirar dinero\n4. Salir")


    switch(opciones) {
        case "1":
            alert("Consulta realizada. Su saldo es de $"+saldo);
            break;
        case "2":
            let depositar = parseFloat(prompt("Cuanto deseas depositar?"));
            if (depositar > 0) {
                saldo += depositar;
                alert("Deposito exitoso. Su saldo es de $"+saldo)
            } else {
                alert("Monto no valido, intentar de nuevo.");
            }
            break;
        case "3":
            let retirar = prompt("Cuando quieres retirar?");
            retirar = parseFloat(retirar);
            if (retirar > 0 && retirar <= saldo) {
                saldo -= retirar;
                alert("Retiro Exitoso. Su saldo actual es de: $"+saldo);
            }else {
                alert("Monto invalido. Fondos insuficientes. Intentalo de nuevo");
            }
            break;
        case "4":
            siguiente = false;
            alert("Gracias por usar el cajero automatico!. Chau!");
            break;
        default:
            alert("No valido");
        }
    }
}

cajero();

