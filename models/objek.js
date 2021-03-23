const { json } = require('express')

let jajal = (tbl_name, values = null) => {
    console.log(tbl_name);
    // values.forEach(element => {
    //     console.log(element)
    // });

    let str = [{ a: 1, b: 2 }, { c: 3, d: 4 }]
    console.log(str[0])
    console.log("============== json =================")
    console.log(JSON.stringify(str))
    let prse = JSON.stringify(str)
    console.log("============== objek ================")
    console.log(JSON.parse(prse)[0])

}

let x = {
    "noAntri": "001",
    "panggil": 0,
    "loket": 0
}

for (f in x) {
    let field=f
    console.log(f + " : " + x)
}