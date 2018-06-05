var select = document.querySelector('select');
var list = document.querySelector('ul');
var h1 = document.querySelector('h1');

select.onchange = function () {
    var choice = select.value;

    // ADD CONDITIONAL HERE
    var mouths_days = ['January:31', 'February:28', 'March:31', 'April:30', 'May:31', 'June:30', 'July:31', 'August:31', 'September:30', 'October:31', 'November:30', 'December:31'];

    for (let index = 0; index < mouths_days.length; index++) {
        var mouthsInfo = mouths_days[index];
        if (mouthsInfo.indexOf(choice) != -1) {
            mouthsInfo = mouthsInfo.split(':');
            console.log(mouthsInfo);
            createCalendar(mouthsInfo[1], choice);
            break
        }
    }
}

function createCalendar(days, choice) {
    list.innerHTML = '';
    h1.textContent = choice;
    for (var i = 1; i <= days; i++) {
        var listItem = document.createElement('li');
        listItem.textContent = i;
        list.appendChild(listItem);
    }
}