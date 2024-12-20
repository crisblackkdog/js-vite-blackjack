import{pedirCarta, valorCarta, crearCartaHtml} from './'
// turno de la computadora
/**
 * 
 * @param {number} puntosMinimos puntos minimos que la computadora necesita para ganar
 *@param {HTMLElement}puntosHTML elemento html para mostrar los puntos
 *@param {HTMLElement}divCartasComputadora elemento HTML para mostrar cartas
 * @param {Array<String>} deck 
 */

export const turnoComputadora = ( puntosMinimos,puntosHTML,divCartasComputadora,deck=[] ) => {

    if (!puntosMinimos) throw new error('puntos minimos son necesario')
    if (!puntosHTML) throw new error('Argumento puntosHTML es necesario')
    if (!divCartasComputadora) throw new error('Argumento divComputadora es necesario')
    let puntosComputadora = 0;

    do {
        const carta = pedirCarta( deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML[1].innerText = puntosComputadora;
        
        const imgCarta = crearCartaHtml( carta );
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}
