// את הקוד שלכם תכתבו כאן

//  1. Rectangle - מלבן
/*class Rectangle{
    haite : number
    length: number

    constructor(haite:number,length:number){
        this.haite = haite
        this.length = length
    }
    area():number{
        return this.haite *this.length
    }   
}
*/

//  2. Square - ריבוע
/*class Square extends Rectangle{

    constructor(haite:number){
        super(haite,length)
    }
    area():number{
        return this.haite *this.haite
    }

}
*/

// 3. Shape - צורה
/*class Shape{
    constructor(){

    }
    info():string{
        return"this is a shipe"
    }
}

class Rectangle extends Shape{
    haite : number
    length: number

    constructor(haite:number,length:number){
        super()
        this.haite = haite
        this.length = length
    }
    area():number{
        return this.haite *this.length
    }   
    info():string{
        return"this is a Rectangle "
    }

}
class ColorRectangle extends Rectangle{
    color : string

    constructor(haite:number,length:number,color:string){
        super(haite,length)
        this.color = color
    }
    info():string{
        return `this is a Rectangle in color ${this.color}`
    }

}
*/
// 4. Method Chaining
class Rectangle{
    haite : number
    length: number

    constructor(haite:number,length:number){
        this.haite = haite
        this.length = length
    }
    area():number{
        return this.haite *this.length
    }   
       scale(n:number):void{
        this.haite = this.haite * n
        this.length = this.length * n
         this.area() * n
    }
    static nweRectangle(rectangle1,rectangle2):number{
        return rectangle1 + rectangle2
    }
}

// 5. Shape with draw method
class Shape{
    draw():void{
        console.log("drawing a shape")
    }

}

class Traingel extends Shape{
    constructor(){
        super()
    }
    draw(): void {
        console.log("drawing a Traingel")
    }
}

class Circele extends Shape{
    constructor(){
        super()
    }
    draw(): void {
         console.log("drawing a circele")
    }
}

class Square extends Shape{
    constructor(){
        super()
    }
    draw(): void {
        console.log ("drawing a square")
    }
}

type n= (Square | Circele | Traingel | Shape)[]

function RenderSheps(arr:n){
    for (let obj of arr){
        obj.draw()
        console.log(obj.draw())
    }
}

