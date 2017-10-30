/**
 * Created by alexis on 30/10/2017.
 */

var word = ['manger', 'courir', 'sport', 'programme', 'interface'];
var letter = document.querySelector('#letter');
var btn = document.querySelector('#button');
var para = document.querySelector('p');
var find = document.querySelector('h3');

var random = word[Math.floor(word.length * Math.random())];

var cpt = 1;
var nbtent = 5;
var nbLetter = 0;

console.log(random);

    btn.addEventListener('click', function (e) {
        if (cpt<5){
            if (letter.value == random[nbLetter]){
                letter.value = '';git
                find.innerHTML = find.innerHTML + random[nbLetter];
                nbLetter ++;
                cpt++
                console.log(random[nbLetter])
            }else{
                letter.value = '';
                para.innerHTML = 'il vous reste ' + (nbtent - cpt) + ' vie';
                cpt++;
                console.log(random[nbLetter])
            }
        }
    });
