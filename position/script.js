function changePosition(position) {
    let screen = document.getElementById("screen");
    let explanation = document.getElementById("explanation");

    // Elimina todas las clases previas
    screen.classList.remove("static", "relative", "absolute", "fixed", "sticky");

    // Agrega la nueva clase
    screen.classList.add(position);

    // Texto de explicación según la posición
    let explanations = {
        static: "Static: El elemento sigue el flujo normal del documento.",
        relative: "Relative: El elemento se posiciona en relación a su posición original.",
        absolute: "Absolute: Se posiciona respecto a su primer ancestro posicionado.",
        fixed: "Fixed: Se fija en la pantalla y no se mueve con el scroll.",
        sticky: "Sticky: Actúa como relativo hasta que alcanza un punto donde se queda fijo."
    };

    // Muestra la explicación en el tooltip
    explanation.innerText = explanations[position];
    explanation.style.display = "block";

    // Ocultar tooltip después de 5 segundos
    setTimeout(() => {
        explanation.style.display = "none";
    }, 5000);
}
