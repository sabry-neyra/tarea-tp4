function chooseMove(state) {

    let movements = {};

    for (let fila = 0; fila < state.tablero.length; fila++) {

        for (let columna = 0; columna < state.tablero[fila].length; columna++) {

            let celda = state.tablero[fila][columna];

            if (celda[0] === state.jugador) {

                let pieceId = celda;

                if (state.dado === 1) {
                    movements[pieceId] = "N";
                }
                else if (state.dado === 2) {
                    movements[pieceId] = "E";
                }
                else if (state.dado === 3) {
                    movements[pieceId] = "S";
                }

            }

        }

    }

    return movements;
}

module.exports = { chooseMove };