/**
 * Created by alexis on 30/10/2017.
 */

var word = ['manger', 'courir', 'sport', 'programme', 'interface'];
var letter = document.querySelector('#letter');
var btn = document.querySelector('#button');
var para = document.querySelector('p');

var random = word[Math.floor(word.length * Math.random())];

var cpt = 0;
var nbLetter = 0;

console.log(random);

    btn.addEventListener('click', function (e) {
        if (cpt<5){
            if (letter.value == random[nbLetter]){
                alert('lettre ok ');
                nbLetter ++;
                cpt++
                console.log(random[nbLetter])
            }else{
                alert('faux');
                cpt++;
                console.log(random[nbLetter])
            }
        }
    });
