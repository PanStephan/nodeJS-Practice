const json2xls = require('json2xls')
const fs = require('fs')

const data = [ { 'Дата': '08.01.2020',
'Ссылка': 'https://ekaterinburg.flamp.ru/firm/sletat_ru_turisticheskoe_agentstvo-70000001027310918/otzyv-5881471',
'Скриншот': 'https://url-screens.s3-eu-central-1.amazonaws.com/A7pSorqhjXnfbDBYf/1578571414337-Screenshot_250.jpg',
'Оценка': 'Положительный',
'Источник': 'Естественный',
'Текст': '3 раза покупали путевки через это агентство. Все устраивает! В 2017 году впервые летали за границу-было страшновато. Нам ответили на все вопросы, слетали отлично. Теперь путевки берем здесь. Отели я подбираю всегда сама, а сюда уже прихожу покупать.' } ]

console.log(data)

// const buffer = Buffer.from('\ufeff'+json2xls(data));
// const buffer = json2xls(data)
fs.writeFileSync('data.xlsx', json2xls(data), 'binary'); 
console.log(buffer.toString())
// fs.writeFile('decr.xls', buffer)