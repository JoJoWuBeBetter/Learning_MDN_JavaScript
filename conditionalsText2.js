var select = document.querySelector('select');
var html = document.querySelector('.output');

select.onchange = function () {
    var choice = select.value;

    // ADD SWITCH STATEMENT
    switch (choice) {
        case 'white':
            update('white', 'black')
            break;
        case 'black':
            update('black', 'purple')
            break;
        case 'purple':
            update('purple', 'yellow')
            break;
        case 'yellow':
            update('yellow', 'darkgray')
            break;
        case 'psychedelic':
            update('lime', 'white')
            break;
    }
}

function update(bgColor, textColor) {
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;
}