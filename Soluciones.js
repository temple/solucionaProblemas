function solucionameProblema( funciona, lo_has_tocado, lo_sabe_alguien, 
                              puedes_culpar_a_otro, nos_dara_problema ){
    if (funciona) {      
		messages.push('funciona');
        var no_lo_toques = true;
        
    }
    // no funciona
    else {
    	messages.push('No funciona');
        if (lo_has_tocado) {
        	messages.push('Lo he tocado');
            var eres_burro = true;
            
            if (lo_sabe_alguien) {
				messages.push('Lo sabe alguien');                
                do{
                    var la_has_cagado = true;
                    log("La he cagado");
                    if (!puedes_culpar_a_otro)   
                       messages.push('No puedo culpar a otro');
                }
                while(!puedes_culpar_a_otro)
                messages.push('Puedo culpar a otro');
            }
            // no lo sabe nadie
            else {
				messages.push('No lo sabe alguien');            	
                var escondelo = true;
                log("Lo escondo");

            }
        }
        // no lo has tocado
        else {
        	messages.push('No lo he tocado');
            log("No Lo he tocado");
            if (nos_dara_problema) {
            	messages.push('Nos dara problema');
                var la_has_cagado = false;
				do {
                        if (la_has_cagado)
                          return false;
                  
	                    if (!puedes_culpar_a_otro)   
	                       messages.push('No puedo culpar a otro');
                        
                        la_has_cagado = true;
                        log("La he cagado");
                    }
                while (! puedes_culpar_a_otro);
				messages.push('Puedo culpar a otro');
            } else {
                messages.push('No nos dara problema');
                var lanzalo = true;
                log("Lo lanzo");
            }
        }
    }
  
    return true;
}
