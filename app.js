let friends = ['Kyle', 'Will', 'Jacob', 'Bryant', 'Jp'];
document.getElementById("myBtn").addEventListener("click", function () {
    for (let i = 0; i < friends.length; i++) {
        console.log(friends[i] + ':');

        let div = document.createElement('div');
        let h3 = document.createElement('h3');
        let friendClass = document.createAttribute('class');
        let array = document.createTextNode(friends[i] + ':');
        friendClass.value = "friend";

        h3.appendChild(array);
        div.setAttributeNode(friendClass);
        div.appendChild(h3);
        document.body.appendChild(div);

        for (let j = 99; j > 0; j--) {
            if (j > 2) {
                let p1 = document.createElement('p');
                let p1Text = document.createTextNode(j + ' lines of code in the file,' + ' ' + j + ' lines of code;' + ' ' + friends[i] + ' ' + 'strikes one out, clears it all out,' + ' ' + [j - 1] + ' ' + 'lines of code in the file');
                p1.appendChild(p1Text);
                div.appendChild(p1);
            }
            else if (j === 2) {
                    let p2 = document.createElement('p');
                    let p2Text = document.createTextNode(j + ' lines of code in the file,' + ' ' + j + ' lines of code;' + ' ' + friends[i] + ' ' + 'strikes one out, clears it all out,' + ' ' + [1] + ' ' + 'line of code in the file');
                    p2.appendChild(p2Text);
                    div.appendChild(p2);
            }
            else {
                let p3 = document.createElement('p');
                let p3Text = document.createTextNode(j + ' line of code in the file,' + ' ' + j + ' line of code;' + ' ' + friends[i] + ' ' + 'strikes one out, clears it all out, no more lines of code in the file');
                p3.appendChild(p3Text);
                div.appendChild(p3);
            }
        }
    }
});