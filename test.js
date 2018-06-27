var tape = require('tape')
var yunik = require('./index.js')
var arr = [1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,4,4,4,4,4,4,4,4,4,5,5,5,5,5]
var names = ['Mikey', 'Allday', 'Allday', '419', 'Momford',
             'Allday', '419', 'Momford', 'Momford', '419',
             'Mikey', 'Allday']

tape('Output is', function (t) {
  t.ok(yunik(names))
  t.end()
})

tape('Unique numbers work too', function (t) {
  t.ok(yunik(arr))
  t.end()
})
