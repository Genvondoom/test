let a = ['a', 'b', 'c', 'd']
let random = []
function rand() {
    for (let index = 0; index <= a.length; index++) {

        let randomNo = Math.floor(Math.random() * (a.length));
        console.log(a[randomNo])
        if (random.includes(a[randomNo])) {
            console.log('yay')
        }
        else {
            if (random.length != 5) {
                random.push(a[randomNo])
            }
        }
    }
}
rand()
if (random.length != 4) {
    rand()
}



console.log(random);
