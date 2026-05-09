// Requisitos obligatorios
// No se permite hacer todo el código suelto sin funciones. 
// Evitar repetir lógica, si dos puntos hacen algo similar, deben reutilizar funciones o crear una función general

/*
Objetivo:
Hacer un programa en JavaScript que trabaje con un array de usuarios generado con Mockaroo.
Generen un archivo JSON con 50 registros que incluya al menos estos campos:
{
  "id": 1,
  "first_name": "Juan",
  "last_name": "Pérez",
  "bank": "BANK OF AMERICA",
  "city": "New York",
  "country": "United States",
  "salary": 3500,
  "expenses": 2200
}
Pueden dejar el resto de valores por defecto.
*/
const users = [{"id":1,"first_name":"Wendel","last_name":"Sango","bank":"XENITH BANK","country":"Ghana","salary":1353,"expenses":5967},
{"id":2,"first_name":"Minta","last_name":"Dmitrievski","bank":"UNITED BANK","country":"Poland","salary":4268,"expenses":2346},
{"id":3,"first_name":"Howey","last_name":"Biermatowicz","bank":"Volksbank in Ostwestfalen eG","country":"Peru","salary":7818,"expenses":1454},
{"id":4,"first_name":"Daria","last_name":"Henkens","bank":"FIFTH THIRD BANK","country":"Czech Republic","salary":3931,"expenses":2469},
{"id":5,"first_name":"Silvio","last_name":"Hulburt","bank":"Natixis","country":"Indonesia","salary":9706,"expenses":3024},
{"id":6,"first_name":"Christoph","last_name":"Treadgall","bank":"FIRST NATIONAL BANK","country":"Brazil","salary":2029,"expenses":8188},
{"id":7,"first_name":"Tanny","last_name":"Sherrington","bank":"DEUTSCHE BANK AKTIENGESELLSCHAFT","country":"Portugal","salary":5984,"expenses":5092},
{"id":8,"first_name":"Alford","last_name":"Whitter","bank":"COMMUNITY BANK","country":"Russia","salary":6212,"expenses":8342},
{"id":9,"first_name":"Ari","last_name":"Roloff","bank":"Cooley Credit Union Limited","country":"France","salary":8219,"expenses":2213},
{"id":10,"first_name":"Ethel","last_name":"Musla","bank":"KEYBANK","country":"Portugal","salary":6411,"expenses":2863},
{"id":11,"first_name":"Elston","last_name":"Van Dijk","bank":"UNITED BANK","country":"Poland","salary":9657,"expenses":4230},
{"id":12,"first_name":"Wilhelm","last_name":"Arney","bank":"CITIBANK","country":"Russia","salary":9138,"expenses":5337},
{"id":13,"first_name":"Barbabas","last_name":"Davall","bank":"Banque Banorient FRANCE S.A. PARIS - ROMANIAN BRANCH","country":"Luxembourg","salary":3470,"expenses":8067},
{"id":14,"first_name":"Titos","last_name":"Bambery","bank":"BANCO BPM SOCIETA' PER AZIONI","country":"Sweden","salary":4100,"expenses":1115},
{"id":15,"first_name":"Far","last_name":"Vasenkov","bank":"DANSKE BANK A/S","country":"Saudi Arabia","salary":8502,"expenses":5221},
{"id":16,"first_name":"Herold","last_name":"Cawsy","bank":"FIRST STATE BANK","country":"China","salary":9696,"expenses":1314},
{"id":17,"first_name":"Louie","last_name":"MacLese","bank":"BANNER BANK","country":"Peru","salary":8099,"expenses":9580},
{"id":18,"first_name":"Hanny","last_name":"Pashen","bank":"CHIANTIBANCA - CREDITO COOPERATIVO S.C.","country":"Venezuela","salary":4061,"expenses":3306},
{"id":19,"first_name":"Helaina","last_name":"Rigler","bank":"Raiffeisenbank Neusiedlersee-Hügelland eGen","country":"China","salary":5024,"expenses":5726},
{"id":20,"first_name":"Beryl","last_name":"Halfacree","bank":"COMMUNITY STATE BANK","country":"China","salary":2972,"expenses":2618},
{"id":21,"first_name":"Olia","last_name":"Kynvin","bank":"CITIZENS STATE BANK","country":"Serbia","salary":3370,"expenses":1599},
{"id":22,"first_name":"Hulda","last_name":"Knoton","bank":"Raiffeisenbank Südliches Ostallgäu eG","country":"Japan","salary":2103,"expenses":1128},
{"id":23,"first_name":"Kordula","last_name":"Himpson","bank":"Banco Bilbao Vizcaya Argentaria, S.A.","country":"Burkina Faso","salary":6366,"expenses":1191},
{"id":24,"first_name":"Leanor","last_name":"Huggins","bank":"BANK OF NORTH CAROLINA","country":"Indonesia","salary":3922,"expenses":2778},
{"id":25,"first_name":"Adelina","last_name":"Langdale","bank":"CFM Indosuez Wealth","country":"Brazil","salary":9416,"expenses":2591},
{"id":26,"first_name":"Bobby","last_name":"Spaducci","bank":"BANCO POPULAR","country":"China","salary":2960,"expenses":8049},
{"id":27,"first_name":"Derek","last_name":"ffrench Beytagh","bank":"St. Jarlath's Credit Union Limited","country":"Peru","salary":7364,"expenses":4537},
{"id":28,"first_name":"Suzette","last_name":"Prium","bank":"Raiffeisenbank Neumarkt-St. Veit - Reischach eG","country":"China","salary":8427,"expenses":8311},
{"id":29,"first_name":"Renaldo","last_name":"Sueter","bank":"VILNIAUS KREDITO UNIJA","country":"Portugal","salary":1871,"expenses":9546},
{"id":30,"first_name":"Angelo","last_name":"Bigham","bank":"FIRST STATE BANK","country":"Colombia","salary":4166,"expenses":1862},
{"id":31,"first_name":"Ted","last_name":"Plumtree","bank":"Raiffeisenbank Region Graz Nord eGen","country":"Czech Republic","salary":5081,"expenses":2141},
{"id":32,"first_name":"Gunner","last_name":"Ionn","bank":"BUSEY BANK","country":"Switzerland","salary":7541,"expenses":7282},
{"id":33,"first_name":"Carla","last_name":"Wakelam","bank":"Ardee Credit Union Limited","country":"China","salary":4269,"expenses":2281},
{"id":34,"first_name":"Matelda","last_name":"Krol","bank":"State Bank of India","country":"Poland","salary":5616,"expenses":6943},
{"id":35,"first_name":"Catharine","last_name":"Stoter","bank":"FIFTH THIRD BANK","country":"United States","salary":6638,"expenses":7449},
{"id":36,"first_name":"Jessica","last_name":"Mains","bank":"US BANK","country":"Armenia","salary":2253,"expenses":4733},
{"id":37,"first_name":"Daryle","last_name":"Dell'Abbate","bank":"Bank Spółdzielczy Rzemiosła w Krakowie","country":"United States","salary":2792,"expenses":4813},
{"id":38,"first_name":"Henrie","last_name":"Biggerstaff","bank":"Stadtsparkasse Bad Pyrmont","country":"China","salary":3921,"expenses":7758},
{"id":39,"first_name":"Alfreda","last_name":"Mapstone","bank":"BANCA NAZIONALE DEL LAVORO S.P.A. (IN FORMA CONTRATTA BNL S.P.A.)","country":"China","salary":8487,"expenses":5805},
{"id":40,"first_name":"Ryun","last_name":"Brockway","bank":"CITIBANK","country":"Philippines","salary":6356,"expenses":3159},
{"id":41,"first_name":"Mariana","last_name":"Bucknall","bank":"Mirabaud & Cie (Europe) S.A.","country":"China","salary":2015,"expenses":4487},
{"id":42,"first_name":"Rori","last_name":"Saggs","bank":"FIRST COMMUNITY BANK","country":"Gambia","salary":5237,"expenses":1778},
{"id":43,"first_name":"Binni","last_name":"von Grollmann","bank":"Volksbank Ulrichstein eG","country":"Sri Lanka","salary":6818,"expenses":4233},
{"id":44,"first_name":"Cole","last_name":"Creedland","bank":"Member First Credit Union Limited","country":"Sweden","salary":3969,"expenses":5137},
{"id":45,"first_name":"Kellby","last_name":"Huish","bank":"Raiffeisenbank Weinviertel Nordost eGen","country":"Andorra","salary":6261,"expenses":1217},
{"id":46,"first_name":"Carmine","last_name":"McDunlevy","bank":"Caja Rural San José de Almassora, S. Coop. de Crédito V.","country":"Thailand","salary":8551,"expenses":4957},
{"id":47,"first_name":"Carey","last_name":"Beckitt","bank":"BANCA DI CREDITO COOPERATIVO VICENTINO - POJANA MAGGIORE (VICENZA) - SOCIETA' COOPERATIVA","country":"Nigeria","salary":5563,"expenses":3359},
{"id":48,"first_name":"Ann-marie","last_name":"O'Dogherty","bank":"State Bank of India","country":"Ukraine","salary":2833,"expenses":1537},
{"id":49,"first_name":"Clare","last_name":"Roderighi","bank":"Raiffeisen Bank International AG","country":"Brazil","salary":1793,"expenses":5653},
{"id":50,"first_name":"Kristina","last_name":"Wrixon","bank":"UniCredit Bank Hungary Zártkörûen Mûködõ Rt.","country":"Bulgaria","salary":7295,"expenses":3245}]
/*
1) Función de balance mensual
Crear una función que reciba un usuario por prompt y devuelva:
nombre completo
banco
ahorro mensual (salary - expenses)
Ejemplo de salida:
{
  nombre: "Juan Pérez",
  banco: "BANK OF AMERICA",
  ahorro: 1300
}
*/
function calcularBalance(usuario) {
  let nombreCompleto = `${usuario.first_name} ${usuario.last_name}`;
  let ahorroMensual = usuario.salary - usuario.expenses;
  return {
    nombre: nombreCompleto,
    banco: usuario.bank,
    ahorro: ahorroMensual
  };
}


let Buscar = parseInt(prompt("Ingrese un ID: "));
let usuarioEncontrado = false;

for (const user of users) {
  if (user.id === Buscar) {
    
    let elBalance = calcularBalance(user);
    
    console.log(elBalance)
    
    let categoria = plata(elBalance.ahorro);
    console.log("La categoría del usuario es: " + categoria);
    
    usuarioEncontrado = true;
  }
}

if (usuarioEncontrado === false) {
  console.log("El usuario no está en la lista.");
}

/*
2) Clasificación financiera (usar switch o ternario)
Crear una función que clasifique a cada usuario según su ahorro mensual:
ahorro menor a 500 → "Ahorro bajo"
entre 500 y 1500 → "Ahorro medio"
mayor a 1500 → "Ahorro alto"
*/
function plata(money) {
  switch (true) {
    case money < 500:
      return"Ahorro bajo";
    case money >= 500 && money < 1500: 
      return "Ahorro medio";
    default:
      return "Ahorro alto";
  }
}
/*
3) Cantidad de ahorro por banco
Agrupar los usuarios por banco y:
Mostrar:
nombre del banco
cuántos usuarios tiene cada banco
ahorro total de cada banco
Ejemplo:
  {
    bank: "BANK OF AMERICA",
    cantidadUsuarios: 12,
    ahorroTotal: 11760
  }
*/
 function conteoBanco(listaUsuarios) {
  const contador = listaUsuarios.reduce((acc, usuario) => {
  
  let nombredelBanco = usuario.bank;
  let calcular = usuario.salary - usuario.expenses;

	if (acc[nombredelBanco]) {
		acc[nombredelBanco].cantidadUsuarios++;
    acc[nombredelBanco].ahorroTotal += calcular;
	} else {
    acc[nombredelBanco] = {
		  bank: nombredelBanco,
      cantidadUsuarios: 1,
      ahorroTotal: calcular
    }
  }
  return acc; 
}, {});
return Object.values(contador); // Object.values() lo que hace es extraer los valores del objeto acc y los devuelve en un formato de lista plana.
}

let reporteBanco = conteoBanco(users);
console.log(reporteBanco);
/*
4) País con mejor ahorro
Agrupar a los usuarios por país y:
Mostrar:
nombre del país
cantidad de usuarios de ese país
ahorro total de cada país
Ejemplo:
[
  {
    country: "Germany",
    cantidadUsuarios: 9,
    ahorroTotal: 15760
  }
]
*/


function conteoPais(listaUsuarios) {
  const contador = listaUsuarios.reduce((acc, usuario) => {
  
  let nombreDelPaís = usuario.country;
  let calcular = usuario.salary - usuario.expenses;

	if (acc[nombreDelPaís]) {
		acc[nombreDelPaís].cantidadUsuarios++;
    acc[nombreDelPaís].ahorroTotal += calcular;
	} else {
    acc[nombreDelPaís] = {
		  country: nombreDelPaís,
      cantidadUsuarios: 1,
      ahorroTotal: calcular
    }
  }
  return acc; 
}, {});
return contador; 
}

let reportePaís = conteoPais(users);
console.log(reportePaís);