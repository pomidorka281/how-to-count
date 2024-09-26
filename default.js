document.ondragstart = noselect;
document.onselectstart = noselect;
document.oncontextmenu = noselect;
function noselect() {return false;}

const round = (num) => Math.round(num * 1000) / 1000;

function new_task (type_task) {
    if (type_task == 'mult' || type_task == 'div') {
        let num1 = Math.floor(Math.random() * 1000);
        let num2 = Math.floor(Math.random() * 1000);
        document.querySelector(".num1."+type_task).innerText = num1;
        document.querySelector(".num2."+type_task).innerText = num2;
    } else if (type_task == 'pow') {
        let num1 = Math.floor(Math.random() * 10);
        let num2 = Math.floor(Math.random() * 4);
        document.querySelector(".num1.pow").innerText = num1;
        document.querySelector(".num2.pow").innerText = num2;
    } else if (type_task == 'sqrt') {
        let num1 = Math.floor(Math.random() * 16);
        document.querySelector(".num1.sqrt").innerText = num1 * num1;
    }
}

function result (type_task, corr_ans) {
    let user_ans = parseFloat(document.querySelector(".number1."+type_task).value);
    if (user_ans == corr_ans) {
        document.querySelector(".result."+type_task).innerText = "correct";
        document.querySelector(".num1."+type_task).innerText = "";
        if (type_task != 'sqrt') {
            document.querySelector(".num2."+type_task).innerText = "";
        }
    } else {
        document.querySelector(".result."+type_task).innerText = "try again :(";
    }
}

function check (type_task) {
    if (type_task == 'mult') {
        let corr_ans = parseFloat(document.querySelector(".num1.mult").innerText) * parseFloat(document.querySelector(".num2.mult").innerText);
        result(type_task, corr_ans);
    } else if (type_task == 'div') {
        let corr_ans = round(parseFloat(document.querySelector(".num1.div").innerText) / parseFloat(document.querySelector(".num2.div").innerText));
        result(type_task, corr_ans);
    } else if (type_task == 'pow') {
        let corr_ans = parseFloat(document.querySelector(".num1.pow").innerText) ** parseFloat(document.querySelector(".num2.pow").innerText);
        result(type_task, corr_ans);
    } else if (type_task == 'sqrt') {
        let corr_ans = Math.sqrt(parseFloat(document.querySelector(".num1.sqrt").innerText));
        result(type_task, corr_ans);
    }
}

list_of_buts_nt = {'mult': 0, 'div': 0, 'pow': 0, 'sqrt': 0}
for (let elem in list_of_buts_nt) {
    list_of_buts_nt[elem] = document.querySelector('.new_task.'+elem);
    list_of_buts_nt[elem].addEventListener('click', function() {
        new_task(elem);
    });
}

list_of_buts_ch = {'mult': 0, 'div': 0, 'pow': 0, 'sqrt': 0}
for (let elem in list_of_buts_ch) {
    list_of_buts_ch[elem] = document.querySelector('.check.'+elem);
    list_of_buts_ch[elem].addEventListener('click', function() {
        check(elem);
    });
}