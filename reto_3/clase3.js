
// anotaciones de clase 3
const users = [{"id":1,"first_name":"Ilka","last_name":"Patman","email":"ipatman0@mozilla.com","gender":"Female","ip_address":"211.127.84.22","bank":"FIRSTBANK","bep20_address":"1PwEYMWoY2yVQdb49xLCgq3wJAxR7QB58K","btc":27,"city":"Shiquan","country":"China"},
{"id":2,"first_name":"Amelina","last_name":"Bulcock","email":"abulcock1@google.com.au","gender":"Female","ip_address":"1.212.121.82","bank":"PEOPLES STATE BANK","bep20_address":"1NgCssggeCyCPWrWstCsaCTPUcy3FgE8jY","btc":24,"city":"Tegalgede","country":"Indonesia"},
{"id":3,"first_name":"Erik","last_name":"Kleinstern","email":"ekleinstern2@un.org","gender":"Male","ip_address":"106.224.161.165","bank":"UNION STATE BANK","bep20_address":"1Hdr3y9N8LMcGEQhZ4MVjFvxkRjE91oZAD","btc":81,"city":"Helie","country":"China"},
{"id":4,"first_name":"Cleveland","last_name":"Iglesiaz","email":"ciglesiaz3@yellowpages.com","gender":"Male","ip_address":"186.28.173.45","bank":"State Bank of India","bep20_address":"167uQHMpSAKYx7vYvo88ioy2uv23nztSDW","btc":26,"city":"Soe","country":"Indonesia"},
{"id":5,"first_name":"Bastian","last_name":"MacCostigan","email":"bmaccostigan4@quantcast.com","gender":"Male","ip_address":"92.223.30.89","bank":"BANK OF AMERICA","bep20_address":"1QFRRaN2gy8XkptrmqQR4Patz4K7PvaDjF","btc":32,"city":"Michałowo","country":"Poland"},
{"id":6,"first_name":"Lewie","last_name":"Hagland","email":"lhagland5@xinhuanet.com","gender":"Male","ip_address":"42.163.27.130","bank":"Avanza Bank AB","bep20_address":"148TvhBebqyT95sguo49MCEW2xLcEr33BQ","btc":24,"city":"Maco","country":"Philippines"},
{"id":7,"first_name":"Faina","last_name":"Wilks","email":"fwilks6@oracle.com","gender":"Female","ip_address":"202.157.204.179","bank":"VAN DE PUT & CO Banquiers Privés","bep20_address":"1MgbYndoFdbTzVp5T4U8Gx6KCaqAgRgqda","btc":67,"city":"Camacupa","country":"Angola"},
{"id":8,"first_name":"Salli","last_name":"Bitcheno","email":"sbitcheno7@meetup.com","gender":"Female","ip_address":"120.64.245.116","bank":"Raiffeisen Bank International AG","bep20_address":"14LnwHSGvj1dTccNGDuRu1qGfTbxE7DCM2","btc":90,"city":"Yamaguchi-shi","country":"Japan"},
{"id":9,"first_name":"Shaylah","last_name":"Cranstone","email":"scranstone8@scribd.com","gender":"Female","ip_address":"103.255.71.57","bank":"APS BANK P.L.C.","bep20_address":"1MUhJZXh9sKkUqJeL4MCNut2S5264cju6T","btc":29,"city":"Santa Cruz del Quiché","country":"Guatemala"},
{"id":10,"first_name":"Ali","last_name":"Clousley","email":"aclousley9@geocities.com","gender":"Male","ip_address":"210.211.8.229","bank":"Volksbank in der Region eG","bep20_address":"1LTnHAoF61ViNaVJe8QVaJduZ7XMFdoshM","btc":59,"city":"Rognedino","country":"Russia"},
{"id":11,"first_name":"Pembroke","last_name":"Slinger","email":"pslingera@google.cn","gender":"Male","ip_address":"238.158.144.100","bank":"Nordea Bank Abp","bep20_address":"1MmjjGvSwwxGQ62SqhHNCBjtGhat8cJTyg","btc":69,"city":"Pertunmaa","country":"Finland"},
{"id":12,"first_name":"Aleda","last_name":"Vallentine","email":"avallentineb@vimeo.com","gender":"Female","ip_address":"155.127.79.68","bank":"FIRST NATIONAL BANK","bep20_address":"15qmPWVWwfxWnFnFagy2y1Z2yz9dmMCmwD","btc":46,"city":"Phoenix","country":"United States"},
{"id":13,"first_name":"Malanie","last_name":"Child","email":"mchildc@plala.or.jp","gender":"Female","ip_address":"113.244.22.168","bank":"BANCA DI ANCONA E FALCONARA MARITTIMA CREDITO COOPERATIVO - SOCIETA' COOPERATIVA","bep20_address":"1BxPoU6dXtpsPM14opnqmVGU5Rg27LXKFm","btc":73,"city":"Kilifi","country":"Kenya"},
{"id":14,"first_name":"Dorolice","last_name":"Setchell","email":"dsetchelld@smugmug.com","gender":"Female","ip_address":"57.229.128.131","bank":"Raiffeisenbank Schladming-Gröbming eGen","bep20_address":"1GsBftjAGiofkJCvXYoycLpUtg4y5j6GG3","btc":50,"city":"Ravne","country":"Slovenia"},
{"id":15,"first_name":"Kenna","last_name":"Longhorn","email":"klonghorne@goodreads.com","gender":"Female","ip_address":"37.46.63.191","bank":"Raiffeisenbank Bobingen eG","bep20_address":"1DrFhYP3h5QEsqFxV484nTr5uDtBg6FTYw","btc":87,"city":"Sunchales","country":"Argentina"},
{"id":16,"first_name":"Dulcea","last_name":"Matushenko","email":"dmatushenkof@instagram.com","gender":"Female","ip_address":"51.160.57.165","bank":"“Swedbank”, AB","bep20_address":"14SaQsur3anFppv4q536eEfNNYgZDwZXgJ","btc":9,"city":"Balangkayan","country":"Philippines"},
{"id":17,"first_name":"Gardie","last_name":"Petric","email":"gpetricg@ibm.com","gender":"Polygender","ip_address":"51.56.58.98","bank":"CREDITO COOPERATIVO MEDIOCRATI - SOCIETA' COOPERATIVA","bep20_address":"198yaXEswXgxALtgkiLxCkE8jJtC1oK1N1","btc":61,"city":"Zhenlong","country":"China"},
{"id":18,"first_name":"Estelle","last_name":"Crosby","email":"ecrosbyh@gov.uk","gender":"Female","ip_address":"0.9.38.6","bank":"BANK OF AMERICA","bep20_address":"14LVMYtgQzshecLSKoYuvzhwXuQyuMqTcj","btc":74,"city":"Syktyvkar","country":"Russia"},
{"id":19,"first_name":"Morgen","last_name":"Lanigan","email":"mlanigani@hexun.com","gender":"Female","ip_address":"85.237.152.35","bank":"Arainn Credit Union Limited","bep20_address":"1EQeZY3ce3gKMBT7aZ9ejUMEg3jsdwCTny","btc":83,"city":"Al Midyah","country":"Palestinian Territory"},
{"id":20,"first_name":"Lin","last_name":"Fairclough","email":"lfaircloughj@tamu.edu","gender":"Male","ip_address":"34.138.90.150","bank":"BANCO BPM SOCIETA' PER AZIONI","bep20_address":"1DdM1qGhEF4L6ubqKAWoX9yZ85uYbwPVv3","btc":96,"city":"Balung Barat","country":"Indonesia"},
{"id":21,"first_name":"Rania","last_name":"Struttman","email":"rstruttmank@nature.com","gender":"Female","ip_address":"141.154.77.191","bank":"BANK OF AMERICA","bep20_address":"1FeogYJj8iynigRmfzjt7JupAS7XPRtrWp","btc":16,"city":"Adamantina","country":"Brazil"},
{"id":22,"first_name":"Erek","last_name":"Gianelli","email":"egianellil@chronoengine.com","gender":"Male","ip_address":"36.152.167.63","bank":"North Midlands Credit Union Limited","bep20_address":"15vzAYpSaMU7Mig3JpZb4BgNaYGB9y4goK","btc":22,"city":"Hadayang","country":"China"},
{"id":23,"first_name":"Rhiamon","last_name":"Mozzini","email":"rmozzinim@reference.com","gender":"Female","ip_address":"42.162.31.100","bank":"Sparkasse Westmünsterland","bep20_address":"12EHkegohVRJfTN3zKL7gQu6xPWh6LW7YQ","btc":65,"city":"Bogale","country":"Myanmar"},
{"id":24,"first_name":"Penelopa","last_name":"Cockrem","email":"pcockremn@yellowpages.com","gender":"Female","ip_address":"113.28.220.115","bank":"FIRSTBANK","bep20_address":"1A7he9kXAWZAbXbuSMALXxcpLBN93Uo3E6","btc":44,"city":"Ashkāsham","country":"Afghanistan"},
{"id":25,"first_name":"Hyacintha","last_name":"Rubinov","email":"hrubinovo@census.gov","gender":"Female","ip_address":"184.193.182.212","bank":"FARMERS STATE BANK","bep20_address":"1E7jeC7MnmnYyTR9HKHsmDMaDC72Uhh3GK","btc":89,"city":"Al Karāmah","country":"Syria"},
{"id":26,"first_name":"Ellyn","last_name":"Balke","email":"ebalkep@tripod.com","gender":"Female","ip_address":"36.57.116.78","bank":"PayPal (Europe) S.à r.l. et Cie, S.C.A.","bep20_address":"1tEtyep8SzpQYwUVtQGSkPGRjzkE5T6se","btc":3,"city":"Boticas","country":"Portugal"},
{"id":27,"first_name":"Mechelle","last_name":"Goode","email":"mgoodeq@naver.com","gender":"Female","ip_address":"209.32.190.68","bank":"CACEIS Bank Spain, S.A.","bep20_address":"1KRMcKxDmedF6EyYPBAK6jSLwxs5TaMdwW","btc":3,"city":"Bogo","country":"Cameroon"},
{"id":28,"first_name":"Barty","last_name":"Hardi","email":"bhardir@noaa.gov","gender":"Male","ip_address":"147.179.63.203","bank":"BANK OF NEW YORK MELLON","bep20_address":"1Jw1DmWVhyyMwf63qov4XFYRNL6mr7jeVu","btc":39,"city":"Qādirpur Rān","country":"Pakistan"},
{"id":29,"first_name":"Ken","last_name":"Carnell","email":"kcarnells@bloomberg.com","gender":"Male","ip_address":"206.111.52.205","bank":"CITY NATIONAL BANK","bep20_address":"1t3gZvpQPZEGVRfUHNyReoqqd5WEZn357","btc":6,"city":"Ngudu","country":"Tanzania"},
{"id":30,"first_name":"Avie","last_name":"Norwich","email":"anorwicht@xing.com","gender":"Genderqueer","ip_address":"122.101.53.180","bank":"St. Columba's Credit Union Limited","bep20_address":"1Ltc8tJwgcPyD1Lwuh2LaX58AxHZCQqFAL","btc":54,"city":"Envigado","country":"Colombia"},
{"id":31,"first_name":"Aeriell","last_name":"Bamlett","email":"abamlettu@cisco.com","gender":"Female","ip_address":"198.160.253.52","bank":"Athenry Credit Union Limited","bep20_address":"12KWYck7sVd1uSdwRSnzt5nqq1Fd6XZ2LV","btc":81,"city":"Balogo","country":"Philippines"},
{"id":32,"first_name":"Max","last_name":"Abrahmovici","email":"mabrahmoviciv@netscape.com","gender":"Male","ip_address":"198.123.160.5","bank":"Crédit Agricole S.A.","bep20_address":"1N9FcM89diFY8HykNXJgSof1uhnq3gnMAT","btc":11,"city":"Kępice","country":"Poland"},
{"id":33,"first_name":"Craig","last_name":"Horley","email":"chorleyw@ftc.gov","gender":"Male","ip_address":"137.8.177.40","bank":"Volksbank Raiffeisenbank Regensburg-Schwandorf eG","bep20_address":"182ECsC6PGV7FfbRExk3J3qTJvfiuxi9kh","btc":53,"city":"Jayune","country":"Peru"},
{"id":34,"first_name":"Maisie","last_name":"Newling","email":"mnewlingx@constantcontact.com","gender":"Female","ip_address":"26.56.57.119","bank":"SOUTH STATE BANK","bep20_address":"17Y2TFPvy32L3v7q6iFEiciunjzxr2Vsbj","btc":100,"city":"Mingyue","country":"China"},
{"id":35,"first_name":"Jeana","last_name":"Rignoldes","email":"jrignoldesy@ucoz.com","gender":"Female","ip_address":"170.51.9.104","bank":"ANDELSKASSEN FÆLLESKASSEN","bep20_address":"1JDzUjTJ2pnZQ32gLeCivXthoowED5kif3","btc":41,"city":"Jugezhuang","country":"China"},
{"id":36,"first_name":"Joey","last_name":"Bittlestone","email":"jbittlestonez@blogs.com","gender":"Male","ip_address":"5.112.92.178","bank":"BANCA NAZIONALE DEL LAVORO S.P.A. (IN FORMA CONTRATTA BNL S.P.A.)","bep20_address":"1EvbMoE4FxueV5cTUGUVrQWbgXNhSyhKnP","btc":41,"city":"Qingshui","country":"China"},
{"id":37,"first_name":"Effie","last_name":"Siddon","email":"esiddon10@oakley.com","gender":"Female","ip_address":"222.55.17.135","bank":"Westpac Europe GmbH","bep20_address":"16FEhUauJ994VUossXCFuhd6m8fVg3DvjG","btc":92,"city":"Huazhou","country":"China"},
{"id":38,"first_name":"Darb","last_name":"Dowtry","email":"ddowtry11@homestead.com","gender":"Female","ip_address":"1.29.151.70","bank":"KBC Bank","bep20_address":"1AzhssKEcBE1ZwCSJmf4rg4ZYLjLhTyemc","btc":18,"city":"Zhendong","country":"China"},
{"id":39,"first_name":"Hetti","last_name":"Hirthe","email":"hhirthe12@e-recht24.de","gender":"Female","ip_address":"161.167.189.255","bank":"CATHAY BANK","bep20_address":"1GJMzN9BZn9toDGVevynW67NMqA9M5F4Z","btc":48,"city":"San Pedro de Ycuamandiyú","country":"Paraguay"},
{"id":40,"first_name":"Elbertine","last_name":"Rapsey","email":"erapsey13@ebay.com","gender":"Polygender","ip_address":"223.125.91.189","bank":"ANDELSKASSEN FÆLLESKASSEN","bep20_address":"1KcJYX3RWThwaF7yTmFgiozmhKPEx2Ghpv","btc":83,"city":"Artimet","country":"Armenia"},
{"id":41,"first_name":"Valentijn","last_name":"Bracken","email":"vbracken14@studiopress.com","gender":"Male","ip_address":"211.93.192.21","bank":"IBERIABANK","bep20_address":"1B3mEt6DQ8s6TUX1kYSW8ih4KRVxHP88Tw","btc":36,"city":"Lewokluok","country":"Indonesia"},
{"id":42,"first_name":"Dela","last_name":"Devanney","email":"ddevanney15@engadget.com","gender":"Female","ip_address":"167.219.5.43","bank":"Holm Bank AS","bep20_address":"1J85o7kJXn7LGkHcgJUZE5Bk7SYhPbET8o","btc":25,"city":"Blagoevgrad","country":"Bulgaria"},
{"id":43,"first_name":"Lishe","last_name":"Moulson","email":"lmoulson16@huffingtonpost.com","gender":"Female","ip_address":"133.46.179.17","bank":"Raiffeisenbank Steinbach-Grünburg eGen","bep20_address":"153pABsxWXHGaJg194XsTDw5SgbiA8Q7QG","btc":84,"city":"Marseille","country":"France"},
{"id":44,"first_name":"Wileen","last_name":"Maccaddie","email":"wmaccaddie17@clickbank.net","gender":"Female","ip_address":"165.126.58.183","bank":"PINNACLE BANK","bep20_address":"1F7uPUkwcZFdRZxW2s1pDzt68pS17iGfjK","btc":93,"city":"Yeni Suraxanı","country":"Azerbaijan"},
{"id":45,"first_name":"Jessey","last_name":"Giffkins","email":"jgiffkins18@nsw.gov.au","gender":"Male","ip_address":"45.204.171.87","bank":"Sogefimur","bep20_address":"1LDiY6VRQE7X7eAKkK4taPb5CSMyE3pgTC","btc":45,"city":"Chợ Mới","country":"Vietnam"},
{"id":46,"first_name":"Ralph","last_name":"Gravenell","email":"rgravenell19@bbb.org","gender":"Male","ip_address":"232.246.225.62","bank":"UNICREDIT, SOCIETA' PER AZIONI","bep20_address":"1CkksjtDz2MCPVqExPHsRxFcWnBxqWRX9M","btc":11,"city":"Surkhakhi","country":"Russia"},
{"id":47,"first_name":"Brynna","last_name":"Ilyukhov","email":"bilyukhov1a@tuttocitta.it","gender":"Female","ip_address":"12.227.142.48","bank":"FIRST NATIONAL BANK","bep20_address":"1BtsLyAa7BrZayMtXCUhmwCKm8crKoGa2e","btc":1,"city":"Taungoo","country":"Myanmar"},
{"id":48,"first_name":"Janeczka","last_name":"Sphinxe","email":"jsphinxe1b@live.com","gender":"Female","ip_address":"213.153.221.44","bank":"WELLS FARGO BANK","bep20_address":"1PiDjRg1EqjEC2gASwAvh4akADosnjcU4a","btc":41,"city":"Batumi","country":"Georgia"},
{"id":49,"first_name":"Jody","last_name":"Hollows","email":"jhollows1c@paginegialle.it","gender":"Agender","ip_address":"19.60.169.225","bank":"COMERICA BANK","bep20_address":"1B78UACrkTpeu9zvCmjzqVpUh1CDtt91JW","btc":48,"city":"Omīdcheh","country":"Iran"},
{"id":50,"first_name":"Reagan","last_name":"Pinnere","email":"rpinnere1d@delicious.com","gender":"Male","ip_address":"200.212.72.93","bank":"Stadt-Sparkasse Gelsenkirchen","bep20_address":"1LYfdnXULgU9mNKicZiPSWLH3SMh7NinVe","btc":74,"city":"Uryupinsk","country":"Russia"},
{"id":51,"first_name":"Kleon","last_name":"Bullin","email":"kbullin1e@macromedia.com","gender":"Male","ip_address":"116.198.36.103","bank":"Clearstream Banking S.A.","bep20_address":"1LKQU1fYsXXTf27zsCox1xRPqgkVvVU6FV","btc":74,"city":"Batulawang","country":"Indonesia"},
{"id":52,"first_name":"Mile","last_name":"Vedenyapin","email":"mvedenyapin1f@furl.net","gender":"Male","ip_address":"246.37.97.201","bank":"BANCA NAZIONALE DEL LAVORO S.P.A. (IN FORMA CONTRATTA BNL S.P.A.)","bep20_address":"1F5pEJoCLbWjH9DCKXMMBj1aPggAtXUHmg","btc":76,"city":"Kotabaru","country":"Indonesia"},
{"id":53,"first_name":"Chelsea","last_name":"Roussel","email":"croussel1g@sfgate.com","gender":"Female","ip_address":"69.143.59.115","bank":"CENTRAL BANK","bep20_address":"1LxZJqrVddNyb8uooPGU9KVCXLU7ZjqEiJ","btc":24,"city":"Blangkejeren","country":"Indonesia"},
{"id":54,"first_name":"Thebault","last_name":"Pollastrino","email":"tpollastrino1h@comcast.net","gender":"Male","ip_address":"208.67.12.224","bank":"Raiffeisenbank Regenstauf eG","bep20_address":"186yjWvwSHcefMBMJu3uCbrc74zVL44AZq","btc":60,"city":"Sekongkang Bawah","country":"Indonesia"},
{"id":55,"first_name":"Berti","last_name":"Wardle","email":"bwardle1i@lulu.com","gender":"Female","ip_address":"174.73.50.11","bank":"VESTJYSK BANK A/S","bep20_address":"1Q29yS3Yo8foUPFaWgtvgypqGav8QST2kC","btc":46,"city":"Igbo Ora","country":"Nigeria"},
{"id":56,"first_name":"Bibbie","last_name":"Pratt","email":"bpratt1j@sphinn.com","gender":"Female","ip_address":"227.111.123.140","bank":"FIFTH THIRD BANK","bep20_address":"1HKTyqCjcqqxhkr9p6yTYzjt2ZSpWPJYn7","btc":4,"city":"Heshang","country":"China"},
{"id":57,"first_name":"Tobit","last_name":"Kneaphsey","email":"tkneaphsey1k@etsy.com","gender":"Male","ip_address":"205.161.105.75","bank":"FARMERS STATE BANK","bep20_address":"168JLVG4N3CFycpq355E969K1XVdVQ1Vyi","btc":29,"city":"Pereira","country":"Portugal"},
{"id":58,"first_name":"Jilli","last_name":"Scullin","email":"jscullin1l@blogs.com","gender":"Female","ip_address":"208.70.161.1","bank":"FIFTH THIRD BANK","bep20_address":"1BogdGjTdnwXjYTWUgFu4tgYnsBkmb5eAz","btc":11,"city":"Podbuzh","country":"Ukraine"},
{"id":59,"first_name":"Madlen","last_name":"Sustin","email":"msustin1m@twitpic.com","gender":"Female","ip_address":"200.15.174.95","bank":"BANNER BANK","bep20_address":"1HSeAsU1JDMfTJTGb5fEGvWvDQHpbsj5VP","btc":61,"city":"Kastornoye","country":"Russia"},
{"id":60,"first_name":"Herc","last_name":"Squire","email":"hsquire1n@ning.com","gender":"Male","ip_address":"131.24.253.85","bank":"Portarlington Credit Union Limited","bep20_address":"1hYfi5KVRzHG75VwfPnPpohaQHK8B6rDv","btc":55,"city":"Kabac","country":"Philippines"},
{"id":61,"first_name":"Saw","last_name":"Gillings","email":"sgillings1o@ucla.edu","gender":"Male","ip_address":"190.135.95.79","bank":"Raiffeisenbank Montfort eGen","bep20_address":"1DiSUjP2QQatiduXcWXR6TF5c2nDMtA6zp","btc":36,"city":"Kharagauli","country":"Georgia"},
{"id":62,"first_name":"Zacharias","last_name":"Mowsdale","email":"zmowsdale1p@friendfeed.com","gender":"Male","ip_address":"26.4.188.210","bank":"Raiffeisenbank Kreuzenstein eGen","bep20_address":"1KRu2btshUbaaBuNnSu43UWDTzHbf44XEC","btc":84,"city":"Cungking","country":"Indonesia"},
{"id":63,"first_name":"Bertrando","last_name":"Rymmer","email":"brymmer1q@stumbleupon.com","gender":"Male","ip_address":"8.127.25.14","bank":"PROSPERITY BANK","bep20_address":"1FKbP82odesrkjVeDtUN9ddLNa8qGq382Q","btc":14,"city":"Najd al Jumā‘ī","country":"Yemen"},
{"id":64,"first_name":"Jesus","last_name":"Sutworth","email":"jsutworth1r@ovh.net","gender":"Polygender","ip_address":"244.220.90.13","bank":"BANK OF AMERICA","bep20_address":"14GbXEBJ4ruEaYwAK77AiDohJwhUZ67dAU","btc":46,"city":"Gandu","country":"Indonesia"},
{"id":65,"first_name":"Juliann","last_name":"Schole","email":"jschole1s@globo.com","gender":"Female","ip_address":"44.19.120.225","bank":"Raiffeisenbank St.Gilgen-Fuschl-Strobl eGen","bep20_address":"1Md2fHRg9Rrftm3bZwUuaDENaiWZbBVpHg","btc":48,"city":"Corralito","country":"Argentina"},
{"id":66,"first_name":"Jessee","last_name":"Lucia","email":"jlucia1t@nifty.com","gender":"Male","ip_address":"154.134.251.233","bank":"US BANK","bep20_address":"1HaXNjbCvfur1RpLKWiuKkTTiMkEvm7DXX","btc":34,"city":"Ängelholm","country":"Sweden"},
{"id":67,"first_name":"Eunice","last_name":"Canet","email":"ecanet1u@ft.com","gender":"Female","ip_address":"184.170.251.32","bank":"BRANCH BANKING & TRUST COMPANY","bep20_address":"1JDxMc2ufFABVHEzKLEoHpKex5sz4wMaaf","btc":56,"city":"Cabudare","country":"Venezuela"},
{"id":68,"first_name":"Bobine","last_name":"Wescott","email":"bwescott1v@wix.com","gender":"Female","ip_address":"58.135.6.171","bank":"Savvi Credit Union Limited","bep20_address":"1NNGuXsj5vnxNCfvDNnUgWfKg87HBCkr2E","btc":60,"city":"Xianghu","country":"China"},
{"id":69,"first_name":"Roselin","last_name":"De Wolfe","email":"rdewolfe1w@auda.org.au","gender":"Female","ip_address":"129.157.176.69","bank":"BPCE","bep20_address":"1DZkKD5r2uxuvapMx9NHjtPnJtzCYmQwtv","btc":90,"city":"Romans-sur-Isère","country":"France"},
{"id":70,"first_name":"Dilan","last_name":"Harrild","email":"dharrild1x@jimdo.com","gender":"Male","ip_address":"85.132.196.201","bank":"DEUTSCHE BANK AKTIENGESELLSCHAFT","bep20_address":"1F4JmALJ1ccKsVHg59mzNsSrF6ojJWMSzB","btc":52,"city":"Aimin","country":"China"},
{"id":71,"first_name":"Helena","last_name":"Bierton","email":"hbierton1y@bigcartel.com","gender":"Female","ip_address":"58.216.171.219","bank":"BANCA NAZIONALE DEL LAVORO S.P.A. (IN FORMA CONTRATTA BNL S.P.A.)","bep20_address":"18cdSxnztpAopQEWMg8asNyX5r5jBWrmas","btc":37,"city":"Lérida","country":"Colombia"},
{"id":72,"first_name":"Marietta","last_name":"McCardle","email":"mmccardle1z@bravesites.com","gender":"Female","ip_address":"181.143.171.53","bank":"SELF-HELP CREDIT UNION","bep20_address":"1Hcxd1xNuA98mj5EhMjqDHvRxKiYbUosUm","btc":90,"city":"Xiaolin","country":"China"},
{"id":73,"first_name":"Germana","last_name":"Cucuzza","email":"gcucuzza20@seesaa.net","gender":"Female","ip_address":"14.145.202.206","bank":"SANTANDER BANK","bep20_address":"1J1fZDHnyA5z6irxiA22TmYbLAyx11xYsu","btc":89,"city":"Shuangzhong","country":"China"},
{"id":74,"first_name":"Ranice","last_name":"McClancy","email":"rmcclancy21@blogspot.com","gender":"Female","ip_address":"202.127.173.199","bank":"COMMERZBANK Aktiengesellschaft","bep20_address":"1FoxxLvudBxkoEyAmEa9xaNZpyWaW1zEn","btc":92,"city":"Ishiki","country":"Japan"},
{"id":75,"first_name":"Jere","last_name":"Darrington","email":"jdarrington22@usa.gov","gender":"Female","ip_address":"90.3.136.146","bank":"BANCA POPOLARE DI SONDRIO SOCIETA' PER AZIONI","bep20_address":"1CcBqb93kgD6ccTGvvo8BPDbBVifuc3Ywc","btc":32,"city":"Zalantun","country":"China"},
{"id":76,"first_name":"Roley","last_name":"Eldershaw","email":"reldershaw23@ucla.edu","gender":"Male","ip_address":"142.57.199.226","bank":"BANCO BPM SOCIETA' PER AZIONI","bep20_address":"19heh8Abjd4A3JoEeHC4cvhCXVkQjThCBM","btc":61,"city":"Yelyzavethradka","country":"Ukraine"},
{"id":77,"first_name":"Merralee","last_name":"Tucsell","email":"mtucsell24@multiply.com","gender":"Female","ip_address":"253.164.209.181","bank":"FIRST NATIONAL BANK","bep20_address":"1PZ5vF33yRGRRJd4QWxCDqythM7rresWbB","btc":63,"city":"Nuevo Chamelecón","country":"Honduras"},
{"id":78,"first_name":"Eduardo","last_name":"Domeney","email":"edomeney25@phpbb.com","gender":"Male","ip_address":"38.177.163.108","bank":"CENTRAL BANK","bep20_address":"1NctfjbRtkWdSNjTsaNGYinh2kRrb5nhAW","btc":34,"city":"Rungis","country":"France"},
{"id":79,"first_name":"Kaia","last_name":"Belham","email":"kbelham26@biglobe.ne.jp","gender":"Polygender","ip_address":"94.230.146.45","bank":"BEAR STATE BANK","bep20_address":"1GB1dA8ikKEc5Kg7Q48ZEszUhhXzN6EJJE","btc":32,"city":"Benito Juarez","country":"Mexico"},
{"id":80,"first_name":"Kendal","last_name":"Verden","email":"kverden27@tripod.com","gender":"Male","ip_address":"241.44.65.41","bank":"BANCA DEL PIEMONTE S.P.A.","bep20_address":"14GdFpcnxsk4f1b5aMzUTxxLJSUGk6Ysvz","btc":83,"city":"Aibura","country":"Indonesia"},
{"id":81,"first_name":"Felic","last_name":"July","email":"fjuly28@imgur.com","gender":"Male","ip_address":"71.239.229.111","bank":"FIRSTBANK","bep20_address":"1MaP4nRXT5jsb3Ba8wnQkZhiZmRzABYVta","btc":87,"city":"Panzhou","country":"China"},
{"id":82,"first_name":"Guenevere","last_name":"Heimes","email":"gheimes29@statcounter.com","gender":"Female","ip_address":"55.83.236.154","bank":"UNION BANK & TRUST","bep20_address":"1KchSLiihWspcqHx6u3yeMbR6XvBPRMDF","btc":19,"city":"Dobje pri Planini","country":"Slovenia"},
{"id":83,"first_name":"Phoebe","last_name":"Maine","email":"pmaine2a@trellian.com","gender":"Female","ip_address":"202.131.99.210","bank":"Raiffeisenbank Donau-Ameisberg eGen","bep20_address":"1KobtBAAQGBUDHpCWCddw3d7tEPKfkDr9S","btc":24,"city":"Yidu","country":"China"},
{"id":84,"first_name":"Ediva","last_name":"MacPhaden","email":"emacphaden2b@latimes.com","gender":"Female","ip_address":"61.211.157.16","bank":"FINECOBANK BANCA FINECO S.P.A. (IN BREVE FINECOBANK S.P.A. OVVERO BANCA FINECO S.P.A. OVVERO FINECO BANCA S.P.A.)","bep20_address":"1Fo2wwSR5WeAudpy9Y3zaT5Ywcq8X7BQ3b","btc":5,"city":"Piraquara","country":"Brazil"},
{"id":85,"first_name":"Cicily","last_name":"Morman","email":"cmorman2c@deviantart.com","gender":"Female","ip_address":"217.218.133.182","bank":"FARMERS STATE BANK","bep20_address":"16eWB8d1mvDXEF367iP7k6pqvchqfNTGCS","btc":71,"city":"Kut Bak","country":"Thailand"},
{"id":86,"first_name":"Zonda","last_name":"Juniper","email":"zjuniper2d@bing.com","gender":"Non-binary","ip_address":"94.190.163.17","bank":"BANK OF AMERICA","bep20_address":"171i2RLoaeNfFLqJrCCtWBXe9KGK5YcuCG","btc":75,"city":"Helmas","country":"Albania"},
{"id":87,"first_name":"Haywood","last_name":"Royds","email":"hroyds2e@noaa.gov","gender":"Male","ip_address":"86.107.18.52","bank":"CREDIT UNION OF SOUTHERN CALIFORNIA","bep20_address":"1BhuEKz4Cgw9W6ccAp1d3iSCHbtkU3uQWp","btc":89,"city":"Catia La Mar","country":"Venezuela"},
{"id":88,"first_name":"Gertrude","last_name":"Siss","email":"gsiss2f@fema.gov","gender":"Female","ip_address":"146.40.89.228","bank":"GERMAN AMERICAN BANCORP","bep20_address":"1KAnY2yacZvGEYaNb6X8ck9ZYLaKiUjv1Z","btc":68,"city":"Curepipe","country":"Mauritius"},
{"id":89,"first_name":"Sheri","last_name":"Hackelton","email":"shackelton2g@mysql.com","gender":"Female","ip_address":"16.59.115.209","bank":"FIRST COMMUNITY BANK","bep20_address":"1LgpCAG3Z6eQP3CBCv6KcxCBCQc7NCJWzS","btc":100,"city":"Shirone","country":"Japan"},
{"id":90,"first_name":"Teriann","last_name":"Jezard","email":"tjezard2h@slideshare.net","gender":"Female","ip_address":"220.190.43.71","bank":"Volkskreditbank AG","bep20_address":"1PqmcvGnSW7KfSy6Jj8rd52UzA822GF9Re","btc":88,"city":"Bebedouro","country":"Brazil"},
{"id":91,"first_name":"Vitia","last_name":"Skirlin","email":"vskirlin2i@redcross.org","gender":"Female","ip_address":"35.64.111.140","bank":"BANK OF AMERICA","bep20_address":"1QEWsGjodFsuLfJeZZguWRzBHpZuMe4Z7U","btc":99,"city":"‘Ayn al Bayḑā","country":"Palestinian Territory"},
{"id":92,"first_name":"Adrian","last_name":"Ivanenkov","email":"aivanenkov2j@europa.eu","gender":"Female","ip_address":"118.18.246.219","bank":"BANNER BANK","bep20_address":"1Rmyk63HwLSAcgT1GEeYviPcFQJHKDxjY","btc":30,"city":"Maleevsk","country":"Kazakhstan"},
{"id":93,"first_name":"Georgeanna","last_name":"Scarlett","email":"gscarlett2k@eepurl.com","gender":"Female","ip_address":"101.154.58.226","bank":"FIRST NATIONAL BANK","bep20_address":"1FBvPbhwdWkizmNpgUehnkVknak3Tzkz7L","btc":1,"city":"Chunjing","country":"China"},
{"id":94,"first_name":"Welbie","last_name":"Matuszinski","email":"wmatuszinski2l@sina.com.cn","gender":"Agender","ip_address":"53.68.147.235","bank":"Raiffeisenbank Ossiacher See eG","bep20_address":"17Bg2tFHPYTwqc6Q1eciZwd8aWqgZy1gCM","btc":11,"city":"Bidikotak","country":"Indonesia"},
{"id":95,"first_name":"Hurlee","last_name":"Rockhall","email":"hrockhall2m@storify.com","gender":"Male","ip_address":"27.104.49.144","bank":"GRANDPOINT BANK","bep20_address":"1BXsB4mGuEcB8BAY57KC8xzVXGPGz1dPuM","btc":19,"city":"Kigoma","country":"Tanzania"},
{"id":96,"first_name":"Ronni","last_name":"Keal","email":"rkeal2n@constantcontact.com","gender":"Female","ip_address":"218.126.34.23","bank":"FARMERS STATE BANK","bep20_address":"1Etu5dfysr5JBZ9RADfscLKeDHCV15jrxj","btc":67,"city":"Chīchāwatni","country":"Pakistan"},
{"id":97,"first_name":"Lisha","last_name":"Lintot","email":"llintot2o@springer.com","gender":"Female","ip_address":"113.210.135.37","bank":"BANCA LAZIO NORD CREDITO COOPERATIVO - SOCIETA' COOPERATIVA PER AZIONI","bep20_address":"1PjbZnaLhVhZ5fGQ1MNvrJAk82ZPAPWdRD","btc":27,"city":"Bassila","country":"Benin"},
{"id":98,"first_name":"Adria","last_name":"Gook","email":"agook2p@usa.gov","gender":"Female","ip_address":"116.143.234.223","bank":"Bank Spółdzielczy w Nasielsku","bep20_address":"13ejbVnev31UjYbyxmmP1xXqawmtTqX4tQ","btc":66,"city":"Sandachō","country":"Japan"},
{"id":99,"first_name":"Kienan","last_name":"Haggish","email":"khaggish2q@jalbum.net","gender":"Male","ip_address":"63.96.154.50","bank":"DEUTSCHE BANK S.P.A.","bep20_address":"1Pinphui9rW9dZn3ANBTkv83YAysdLi4rJ","btc":44,"city":"Esik","country":"Kazakhstan"},
{"id":100,"first_name":"Melba","last_name":"Haddleton","email":"mhaddleton2r@google.nl","gender":"Female","ip_address":"252.113.240.248","bank":"Raiffeisenbank Hirschau eG","bep20_address":"15o8tE5KWu9rc1uar7Z7QohiQ1F4mT5WTR","btc":100,"city":"Bogo","country":"Cameroon"}]

for (let i = 0; i < users.length; i++) {
	const user = users[i];
	msg =`El usuario ${users.first_name} tiene una cuenta de banco en ${users.bank}`;
//    console.log(msg)
}

for (const user of users) {
	for (const key in user) {
		console.log(`${key}: ${user[key]}`);
	}
	msg =`El usuario ${users.first_name} tiene una cuenta de banco en ${users.bank}`;
  console.log(msg)    
}

for(const user in users) {
	msg =`El usuario ${users.first_name} tiene una cuenta de banco en ${users.bank}`;
//    console.log(msg)
}

let i = 0 ;

while (i < users.length) {
	const user = user[i]
	const msg = `Bienvenido Usuario ${users.first_name} ${user.last_name}`;
	// console.log(msg);
	i++;
}

let opcion = "no";

// do {
// 	nuevoUsuario = prompt("Ingrese un nuevo usuario: ");
// 	console.log(`Nuevo usuario agregado: ${nuevoUsuario}`);
// 	opcion = prompt("¿Desea agregar otro nuevo usuario?: ");
// } while (opcion === "si");

// forEach map find filter reduce

users.forEach((user) => {
	const msg = `User ${user.email} - btc: ${user.btc} - location: ${user.city}, ${user.country}`
	console.log(msg) 
})

const nombres = users.map((user) => {
	console.log(`Procesando al usuario ${user.first_name} ${user.last_name}`);
	return user.first_name;
})

// console.log(nombres);
// console.log(users);


const ip_address = "139.110.16.135"

const usuarioEncontrado = users.find((user) => {
	return user.ip_address === ip_address;	
})

// console.log(usuarioEncontrado);

const usuarioMujeres = users.filter((user) => {
	return user.gender === "Female";
})

// console.log(usuarioMujeres);

const conteoBanco = user.reduce((acc, user) => {
	const bank = user.bank;
	if (acc[bank] {
		acc[bank]++ ;
	} else {
		acc[bank] = 1;
	}
	return acc;
}, {});

// console.log(conteoBanco);

const conteoPaís = user.reduce((acc, user) => {
	const country = user.country;
	if (acc[country] {
		acc[country]++ ;
	} else {
		acc[country] = 1;
	}
	return acc;
}, {});

// console.log(conteoPaís);
*/
const frutas = [{nombre: "Manzanas", color: "Rojo"},
	{nombre: "Banana", color: "Amarillo"},
	{nombre: "Uva", color: "Morado"},
	{nombre: "Naranja", color:"Naranja"},
	{nombre: "Kiwi", color: "Verde"}
];

const conteoporcolor = frutas.reduce((acc, fruta) => {
	let color = fruta.color;
	if (acc[color]) {
		acc[color]++;
	} else {
		acc[color] = 1;
	}
	return acc;
}, {});

console.log(conteoporcolor)