var paginaA = {
		id : 1,
		links : [paginaB,paginaC,paginaD]
	}
	var paginaB = {
		id : 2,
		links : [paginaA,paginaD]
	}
	var paginaC = {
		id : 3,
		links : [paginaA,paginaD,paginaE,paginaF]
	}
	var paginaD = {
		id : 4,
		links : [paginaA,paginaB,paginaC,paginaE]
	}
	var paginaE = {
		id : 5,
		links : [paginaC,paginaD,paginaF]
	}
	var paginaF = {
		id : 6,
		links : [paginaC,paginaE]
	}

	var d = 0.85;
	var listaPaginas = [];
	var aux = 0;

function pageRank(pagina){
	listaPaginas.push(pagina.id);
	console.log("Lista de páginas visitadas");
	console.log(listaPaginas);
	var PR = 1-d;
	for (var i in pagina.links){
		console.log("Iteración "+i+" de la página "+pagina.id)
		console.log("ID nodo: "+pagina.links[i].id)
		if(listaPaginas.indexOf(pagina.links[i].id) < 0){
			console.log("!")
			aux += pageRank(pagina.links[i])/paginaA.links[i].links.length;
		}
	}
	return PR + d*aux;
}




































var ejemplo = pageRank(paginaA);
module.exports = ejemplo;



