//1. Գրել ծրագիր , որ կփոխի img1.jpg div-ի մեջ գտնվող p-երի  տեքստերը New text արտահայտությունով:

const demo = document.getElementById("demo").children
console.log(demo);
[...demo].map(x => x.innerText = "New text")
//

// 2.Ունենք 7 տողանոց և 7 սյունյականոց  աղյուսակ, որի բոլոր բջիջներում գրված է cell: Գրել կոդ , որը  անկյունագծի cell փոխարինի թվերով ինչպես img2-ում է:
//

const id = document.getElementById("table")
const table = document.createElement("table")

for (let r = 0; r < 7; r++) {
    const tr = document.createElement("tr")
    for (let d = 0; d < 7; d++) {
        const td = document.createElement("td")
        tr.append(td)
        if (d === r){
            td.innerHTML= "000"
        } else{
            td.innerHTML= "cell"
        }
    }
    table.append(tr)
}
// table.append(tr)
id.append(table)

// 3․Ունենք էջ , որում կա p  թեգեր: Ստանալ զանգված որում հավաքված կլինի p թեգերի պարունակությունները և
// արտածել այդ զանգվածը:
//
const p = document.getElementsByTagName("p")
console.log(p);
const arr = [...p].map(x=>x.innerText)
console.log(arr);
console.log((arr.join(" ")));
// 4․Ունենք վեբ էջ : Ստուգել արդյոք այդ body-ի մեջ գտնվող թեգերում  կա SUNNY SCHOOL բառը և արտածել այն թեգերի
// անուները որում այդ արտահայտությունը կա:
//
const body= document.body.children
console.log([...body]);
const x=[...body].map(x=>x.includes("SUNNY SCHOOL"))
console.log(x);
// 5.Ստեղծել ծրագիր որը կգտնի էջում գտնվող p թեգի  տեքստում քանի թիվ կա և արտածել այդ թվերի զանգվածը:

