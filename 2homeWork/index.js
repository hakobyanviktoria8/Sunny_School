// 1.Տրված  են իրարից տարբեր 𝑎,𝑏,𝑐 և 𝑑 թվերը: Կազմել ծրագիր, որը կարտածի տրված թվերից մեծագույնի արժեքը:
//
// function home1(a, b, c, d) {
//     if (a > b && a > c && a > d) {
//         console.log(a);
//     } else if (b > a && b > c && b > d) {
//         console.log(b);
//     } else if (c > a && c > b && c > d) {
//         console.log(c);
//     } else {
//         console.log(d);
//     }
// }

//     2.For ցիկլի  միջոցով արտածել 1-ից 100 հատվածի թվերը, բացառությամբ 8 և 9 վրա բաժանվողների:
//     Թող ցիկլը ընդհատվի  երբ հանդիպի միաժամանակ և 6 և 7 վրա բաժանվող թվի:
//
// function home2() {
//     for (let i = 1; i < 100; i++) {
//         if (i % 8 === 0 || i % 9 === 0) {
//             continue
//         }
//         if (i % 6 === 0 && i % 7 === 0) {
//             break
//         }
//         console.log(i);
//     }
// }

// home2()
//     3.Քանի որ JavaScript-ում շաբաթվա օրերը համարակալված են 0-6 թվերով,  switch միջոցով ստանալ ծրագիր,
//     որ այդ միջակայքում մուտքագրված թվի համար կարտածի շաբաթվա տվյալ օրվա տառային տարբերակը:
//     Իսկ եթե թիվը այդ միջակայքից  դուրս է արտածի Error:
//
// const date = prompt("Please enter weekly day 1-6", 0)
//
// function home3(day) {
//     const dayArr = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
//     if (day > 6 || day < 0) {
//         console.log("Error");
//     } else {
//         console.log(dayArr[day])
//     }
// }
//
// home3(date)

//     4.Գրել ծրագիր, որ թույլ կտա հաշվել այցելուի կողմից մուտքագրած
//     թիվը պարզ թիվ է թե ոչ: Պարզ են այն թվերը, որոնք բաժանվում են իրենց և 1-ի վրա:
//
// function home4(num) {
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) return false;
//     }
//     return num;
//     // for (let i = 2; i < num ; i++) {
//     //     if (num % i === 0) return false
//     // }
//     // console.log("Prime number ", num)
// }
//
// console.log(home4(4))
// console.log(home4(5))
// console.log(home4(25))
// console.log(home4(131))

//         5.Գրել կոդ, որ թույլ կտա ստանալ նկար 5-ի տեսքը:


function home5(col = 4, row = 4, str="AAAA") {
    for (let j = 0; j < row; j++) {
        for (let k=(16-row)/2;k>0;k--){
            document.write("_")
        }
        for (let i = 0; i < row; i++) {
            document.write("*")
        }
        document.write("<br>")
        if (j === row-1) {
            row = row + 4
            if (row >16 ) break
        }
    }
}

home5()