var people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

var admitted = document.querySelector('.admitted');
var refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: '

var i = 0;

while (i < people.length) {
    var name = people[i];
    if (name === "Phil" | name === "Lola") {
        refused.textContent += name + ', ';
    } else {
        admitted.textContent += name + ', ';
    }
    i++;
}

refused.textContent = refused.textContent.slice(0, refused.textContent.length - 2) + '.'
admitted.textContent = admitted.textContent.slice(0, admitted.textContent.length - 2) + '.'