/*
Hacer un programa en JavaScript que trabaje con un array de usuarios como este:

const usuarios = [
{"id":1,"first_name":"Harmony","last_name":"Twohig","email":"htwohig0@businesswire.com","gender":"Female","ip_address":"188.185.115.201"}
];

En base a los datos descargados:

1) Agregar un buscador con prompt, donde se ingrese el ID del usuario, el sistema debe mostrar por consola todos los datos del usuario seleccionado, en caso de no existir debe mostrar una alerta de usuario no encontrado.
*/

const usuarios = [{"id":1,"first_name":"Horatia","last_name":"Howkins","email":"hhowkins0@ucoz.com","gender":"Female","ip_address":"6.131.113.201"},
{"id":2,"first_name":"Wilmette","last_name":"Djorevic","email":"wdjorevic1@is.gd","gender":"Female","ip_address":"229.0.60.80"},
{"id":3,"first_name":"Katey","last_name":"Dowthwaite","email":"kdowthwaite2@deliciousdays.com","gender":"Female","ip_address":"188.159.201.43"},
{"id":4,"first_name":"Thorndike","last_name":"Scourgie","email":"tscourgie3@purevolume.com","gender":"Male","ip_address":"20.162.149.216"},
{"id":5,"first_name":"Janith","last_name":"McCandie","email":"jmccandie4@dagondesign.com","gender":"Female","ip_address":"80.199.86.113"},
{"id":6,"first_name":"Phyllys","last_name":"Mackett","email":"pmackett5@baidu.com","gender":"Female","ip_address":"25.14.155.162"},
{"id":7,"first_name":"Levey","last_name":"Fullman","email":"lfullman6@surveymonkey.com","gender":"Male","ip_address":"211.66.235.230"},
{"id":8,"first_name":"Maurene","last_name":"Kettley","email":"mkettley7@alexa.com","gender":"Female","ip_address":"64.130.130.132"},
{"id":9,"first_name":"Jessika","last_name":"Busk","email":"jbusk8@printfriendly.com","gender":"Female","ip_address":"177.206.35.229"},
{"id":10,"first_name":"Allix","last_name":"Motto","email":"amotto9@eepurl.com","gender":"Female","ip_address":"98.125.96.39"},
{"id":11,"first_name":"Flem","last_name":"Everley","email":"feverleya@delicious.com","gender":"Male","ip_address":"27.251.45.37"},
{"id":12,"first_name":"Danette","last_name":"Winser","email":"dwinserb@cnbc.com","gender":"Female","ip_address":"233.39.87.0"},
{"id":13,"first_name":"Tommi","last_name":"Hyland","email":"thylandc@ocn.ne.jp","gender":"Female","ip_address":"95.232.97.135"},
{"id":14,"first_name":"Christian","last_name":"Sammut","email":"csammutd@t.co","gender":"Male","ip_address":"212.65.180.87"},
{"id":15,"first_name":"Lance","last_name":"Isitt","email":"lisitte@is.gd","gender":"Male","ip_address":"139.65.30.210"},
{"id":16,"first_name":"Thomasine","last_name":"Piatek","email":"tpiatekf@yahoo.com","gender":"Female","ip_address":"241.116.6.79"},
{"id":17,"first_name":"Franky","last_name":"Lyst","email":"flystg@ebay.co.uk","gender":"Female","ip_address":"152.3.236.216"},
{"id":18,"first_name":"Bobbi","last_name":"Lestrange","email":"blestrangeh@surveymonkey.com","gender":"Female","ip_address":"28.122.41.247"},
{"id":19,"first_name":"Shanie","last_name":"Ledgley","email":"sledgleyi@omniture.com","gender":"Female","ip_address":"96.88.2.157"},
{"id":20,"first_name":"Christabel","last_name":"Longo","email":"clongoj@sfgate.com","gender":"Female","ip_address":"142.149.21.4"},
{"id":21,"first_name":"Shane","last_name":"Clopton","email":"scloptonk@webnode.com","gender":"Female","ip_address":"83.180.30.154"},
{"id":22,"first_name":"Alfred","last_name":"Scougall","email":"ascougalll@walmart.com","gender":"Male","ip_address":"20.67.141.173"},
{"id":23,"first_name":"Crysta","last_name":"Westcot","email":"cwestcotm@amazon.co.jp","gender":"Female","ip_address":"170.55.234.21"},
{"id":24,"first_name":"Tibold","last_name":"Haining","email":"thainingn@ameblo.jp","gender":"Male","ip_address":"96.53.34.77"},
{"id":25,"first_name":"Marillin","last_name":"Tireman","email":"mtiremano@europa.eu","gender":"Female","ip_address":"246.217.251.186"},
{"id":26,"first_name":"Rosalinde","last_name":"Borborough","email":"rborboroughp@slate.com","gender":"Female","ip_address":"87.6.143.71"},
{"id":27,"first_name":"Benjamen","last_name":"Sjostrom","email":"bsjostromq@qq.com","gender":"Male","ip_address":"116.124.181.195"},
{"id":28,"first_name":"Dyanne","last_name":"Sutherington","email":"dsutheringtonr@mapquest.com","gender":"Female","ip_address":"3.56.235.170"},
{"id":29,"first_name":"Friedrich","last_name":"Aizlewood","email":"faizlewoods@imdb.com","gender":"Male","ip_address":"109.107.151.19"},
{"id":30,"first_name":"Christen","last_name":"Calcut","email":"ccalcutt@squarespace.com","gender":"Female","ip_address":"26.54.81.249"},
{"id":31,"first_name":"Lyndel","last_name":"Gabrieli","email":"lgabrieliu@tiny.cc","gender":"Female","ip_address":"0.51.116.7"},
{"id":32,"first_name":"Jacky","last_name":"Shear","email":"jshearv@jiathis.com","gender":"Male","ip_address":"73.93.161.219"},
{"id":33,"first_name":"Miguel","last_name":"Crowth","email":"mcrowthw@fema.gov","gender":"Male","ip_address":"51.58.177.118"},
{"id":34,"first_name":"Pat","last_name":"Lamputt","email":"plamputtx@biblegateway.com","gender":"Female","ip_address":"73.186.187.192"},
{"id":35,"first_name":"Tobin","last_name":"Seine","email":"tseiney@nhs.uk","gender":"Male","ip_address":"195.252.41.122"},
{"id":36,"first_name":"Nickolai","last_name":"Beirne","email":"nbeirnez@smh.com.au","gender":"Male","ip_address":"127.108.180.87"},
{"id":37,"first_name":"Aidan","last_name":"McRobb","email":"amcrobb10@sphinn.com","gender":"Female","ip_address":"50.58.74.182"},
{"id":38,"first_name":"Gun","last_name":"Cragoe","email":"gcragoe11@earthlink.net","gender":"Male","ip_address":"44.83.15.189"},
{"id":39,"first_name":"Aarika","last_name":"Yeowell","email":"ayeowell12@abc.net.au","gender":"Genderqueer","ip_address":"243.229.166.226"},
{"id":40,"first_name":"Sansone","last_name":"Ramble","email":"sramble13@slate.com","gender":"Male","ip_address":"169.91.180.217"},
{"id":41,"first_name":"Louie","last_name":"Niccolls","email":"lniccolls14@hubpages.com","gender":"Male","ip_address":"24.179.0.0"},
{"id":42,"first_name":"Nicolle","last_name":"McCambrois","email":"nmccambrois15@go.com","gender":"Female","ip_address":"26.124.218.239"},
{"id":43,"first_name":"Ramona","last_name":"Junes","email":"rjunes16@umn.edu","gender":"Female","ip_address":"33.210.189.69"},
{"id":44,"first_name":"Cathlene","last_name":"Bront","email":"cbront17@dedecms.com","gender":"Female","ip_address":"46.14.39.191"},
{"id":45,"first_name":"Dev","last_name":"Dyster","email":"ddyster18@reddit.com","gender":"Male","ip_address":"152.46.102.47"},
{"id":46,"first_name":"Rhonda","last_name":"Worling","email":"rworling19@theguardian.com","gender":"Female","ip_address":"30.45.11.138"},
{"id":47,"first_name":"Coralyn","last_name":"Patriche","email":"cpatriche1a@utexas.edu","gender":"Female","ip_address":"132.196.233.19"},
{"id":48,"first_name":"Augy","last_name":"MacColgan","email":"amaccolgan1b@skype.com","gender":"Male","ip_address":"116.26.207.226"},
{"id":49,"first_name":"Fulvia","last_name":"Yelden","email":"fyelden1c@zdnet.com","gender":"Female","ip_address":"61.205.237.54"},
{"id":50,"first_name":"Obie","last_name":"Hofton","email":"ohofton1d@macromedia.com","gender":"Male","ip_address":"73.60.163.54"}
]

let Buscar = parseInt(prompt("Elija un ID por favor: ")); 
let usuarioEncontrado = false;

for (const user of usuarios) {
  if (user.id === Buscar) {
    console.log(`El ID seleccionado: ${Buscar} está en la lista de usuarios.`);
    console.log(user);
    usuarioEncontrado = true;
  }
}

if (usuarioEncontrado === false) {
  console.log("Usuario no encontrado");
}


// 2) Reducir a una nueva variable los datos de los géneros de los usuarios y contar cuantos usuarios hay de cada género.

const conteoGeneros = usuarios.reduce((acc, genero) => {
	let gender = genero.gender;
	if (acc[gender]) {
		acc[gender]++;
	} else {
		acc[gender] = 1;
	}
	return acc;
});

console.log(conteoGeneros);