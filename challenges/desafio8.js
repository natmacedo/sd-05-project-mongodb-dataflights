// Retorne a quantidade de voos em que o ano seja maior do que 2016.
// Especificando valor do ano emm novo documento, maior que 2016
db.voos.find({ ano: { $gt: 2016 } });
