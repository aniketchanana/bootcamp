for(let i=0;i<10;i++) {
    let p = new Promise(function(resolve,reject) {
        var a = 10;
        var b = 10;
        if(a === b) {
            resolve('i am resolved');
        } else {
            reject('i am rejected')
        }
    })
    p.then(function(message) {
        setTimeout(function() {
            console.log(i);
        },1000);
    })
    .catch(function(err) {
        console.log(err);
    })    
}
