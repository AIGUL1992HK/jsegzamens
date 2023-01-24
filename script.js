console.log("hello")
const arr=["1","43","23","54","2", "3","89"]

//первая задания
const nevString=arr.join("")
console.log(nevString)
//4- задания
console.log(arr.reverse())
//6- задания
const nevStr=arr.join(",")
console.log(nevStr)



let max =arr[0]
let min =arr[0]
for(let i = 0; i< arr.length; i++){
    if(max<arr[i]){
        max=arr[i]
    }
    if(min>arr[i]){
        min=arr[i]
    }

}
console.log(max)
console.log(min)

let last = 0

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {

    }
}
console.log(last)
for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i])
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i])
    }
}






