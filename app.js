let friends = ['Kyle', 'Will', 'Jacob', 'Bryant', 'Jp'];
document.getElementById("myBtn").addEventListener("click", function() {
    for (let i = 0; i < friends.length; i++) {
        console.log(friends[i] + ':');

        let div = document.createElement('div');
        let h3 = document.createElement('h3');
        let friendClass = document.createAttribute('class');
        let array = document.createTextNode(friends[i]);
        friendClass.value = "friend";

        h3.appendChild(array);
        div.setAttributeNode(friendClass);
        div.appendChild(h3);
        document.body.appendChild(div);

        for (let j = 99; j > 0; j--) {
            if (j > 2) {
            console.log(j + ' lines of code in the file,' + ' ' + j + ' lines of code;' + ' ' + friends[i] + ' ' + 'strikes one out, clears it all out,' + ' ' + [j - 1] + ' ' + 'lines of code in the file');
            }
            else if (j === 2) {
                console.log(j + ' lines of code in the file,' + ' ' + j + ' lines of code;' + ' ' + friends[i] + ' ' + 'strikes one out, clears it all out,' + ' ' + [1] + ' ' + 'line of code in the file');
            }
            else {
                console.log(j + ' line of code in the file,' + ' ' + j + ' line of code;' + ' ' + friends[i] + ' ' + 'strikes one out, clears it all out, no more lines of code in the file');
            }
        }
    }
});