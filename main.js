var i = 0;

function addNewTask() {
    var container = document.getElementsByClassName('container-inicial')[0];
    var newDiv = document.createElement('div');

    if (i <= 5) {
        newDiv.className = 'child';
        i++;
    } else if (i > 5 && i <= 8) {
        newDiv.className = 'child-pink';
        i++;
    } else {
        newDiv.className = 'child-black';
        i = 0;
    }

    container.appendChild(newDiv);
}

function formHeart() {
    addNewTask(); // Primeira linha do coração
    addNewTask(); // Segunda linha do coração
    addNewTask(); // Terceira linha do coração

    // Quarta linha do coração (parte superior)
    for (var j = 0; j < 3; j++) {
        addNewTask();
    }

    // Quinta linha do coração (parte superior)
    for (var k = 0; k < 5; k++) {
        addNewTask();
    }

    // Sexta linha do coração (parte inferior)
    for (var l = 0; l < 4; l++) {
        addNewTask();
    }

    // Sétima linha do coração (parte inferior)
    for (var m = 0; m < 3; m++) {
        addNewTask();
    }

    // Oitava linha do coração (parte inferior)
    for (var n = 0; n < 2; n++) {
        addNewTask();
    }

    // Nona linha do coração (parte inferior)
    addNewTask();
}

function coracao(){
    for(var num = 0; num < 500; num++){
        formHeart();
    }
}
