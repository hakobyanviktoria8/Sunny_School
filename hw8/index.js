//1.Ստեղծել ֆունկցիա, որը որպես պարամետր ընդունում է կամայական քանակությամբ թվեր և ստեղծում է մի նոր զանգված իրեն փոխանցած
// այն արգումենտներից, որոնք պարունակում են զրո թվանշան:
//

function f1(a, s, d, g, h, j, k) {
    return [a, s, d, g, h, j, k].filter(x => x.toString().includes("0"))
}

console.log(f1(1, 2, 30, 4, 6, 50, 7));

// 2.Ունենք զանգված : Կլոնավորել այդ զանգվածը այնպես, որ նոր զանգվածին անդամ ավելացնենք հինը չփոխվի(spread operator):
//

function f2(arr) {
    const newArr = [...arr]
    newArr.push(111)
    return {arr, newArr}
}

console.log(f2([1, 2, 34, 5, 6, 7, 8, 9, 0, 0]));

// 3.Գրել ֆունկցիա , որը գեներացնում է պատահական թիվ 0 ից 10 միջակայքում , թիվը 5ից փոքր լինելու դեպքում կանչում է callback-ը
// 'success' արժեքով , իսկ հակառակ դեպքում 'error' արժեքով։
// callback-ի մեջ տպել արժեքը։
//
function f3() {
    const num = Math.floor(Math.random() * 11)
    if (num < 5) {
        setTimeout(() => {
            console.log("success", num);
        })
    } else {
        console.log("error", num);
    }
}

console.log(f3());

// 4.ՈՒնենք բառերի զանգված: Ստեղծել ֆունկցիա որը զանգվածից կհեռացնի նույն տառերը ունեցող բառերը(կթողնի միայն մեկը) ընդորում
// մեծատառ փոքրատառ կապ չունի և կվերադարձնի նոր զանգված :
// Օրինակ՝
// ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"] -> [PAN, hectares, era];
// Օգտագործել Map

function f4(arr) {
    return new Set(arr.map(x => x.toLowerCase().split("").sort().join("")))
}

console.log(f4(["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"]));

//
// 5.Ստեղծել Cart անունով constructor ֆունկցիա ․ Այն պետք է ունենա մեթոդ addProduct ,
// որով կկրողանանք հավաքել ապրանքներ ։
// Ամեն ապրանքը օբեկտ է , որը ունի անուն և գին հատկություն։
// Ավելացնել մեթոդ , որը կվերադարձնի ավբողջ գումարը հավաքված ապրանքների։

function Cart() {
    this.products = [{
        price: 100,
        name: "apple"
    }]

    this.addProduct = (x) => {
        this.products.push(x)
    }
    this.sum = () => {
        console.log("Here ", this.products);
        return this.products.reduce((a, b) => a.price + b.price)
    }
}

const cart = new Cart()
cart.addProduct(
    {
        price: 200,
        name: "banana"
    })
console.log(cart.products);
console.log("Sum is ", cart.sum());