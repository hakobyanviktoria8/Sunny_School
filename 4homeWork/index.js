// 1.Գրել կոդ , որը կստուգի մուտքագրված է արդյոք թիվ և եթե թիվ է այդ թվից քառակուսի արմատ կհանի:
//
let n = 6
console.log(typeof n);
//     2.Պատահական 5 թիվ գեներացնել 0-10 տիրույթում  այնպես որ , 0-5 տիրույթի թվերը կլորանան դեպի վերև իսկ
// 5-10 տիրույթի թվերը դեպի ներքև և արտածել պատահական թիվը և կլորացած թիվը :
//
//     3.Գրել ֆունկցիա, որը տրված բառի վերջին տառը կդարձնի մեծատառ:
//
//     4. Գրել Ֆունկցիա, որ մուտքագրված բառից կարտածի միայն զույգ ինդեքս ունեցող տառերը: Օրինակ barev կդառնա brv
//
let str = "barev"
for (let i = 0; i < str.length; i += 2) {
    console.log(str[i])
}
// 5.Գրել ծրագիր , որը Prompt պատուհանի title-ում կգեներացնի 5 նշանոց կոդ տառերից և թվերից կազմված և
// եթե այցելուն ճիշտ հավաքի այդ կոդը prompt պատուհանում և հաստատի ապա alert անի ճիշտ է, այլապես alert անի սխալ է:
//
//
const random = require("random")
console.log(random.int()*10)