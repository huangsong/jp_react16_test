import { Children, Mixin } from "react"


const arr1:Array<number> = [1,2,3]

const arr2:number[] = [1,2,3]

//元组
const arr3:[number,number,string] = [1,2,'aaa']

const obj1:{
    name:string,
    bar:number
} = {
    name:'alala',
    bar:3
}

const obj2:{
    name?:string,
    bar:number
} = {
    bar:34
}

interface obj3 {
    name:string
    bar:number
}

//接口是用来约束一个对象的结构





const obj3:{
    [key:string]:obj3
} = {
    name:{
        name:'aaa',
        bar:332
    }
}

type obj4 = {
    [key:string]:string
}


const obj5:obj4 = {
    baba:'alal'
}



/**
 * 
 * @param callback 
 */
function foo (callback:(v:string,n:number) => void){
    callback('stt',1)
}

//字面量类型 联合类型
const type:'success'|'warning'|'danger' = 'danger';
const type1:string | number = 45;

//类型别名
type type = string | number;
const type2:type = 23;

//maybe 类型
const gander:number = 34;


function pass (val:any):void{

}

const s:symbol = Symbol(23)

let x:[string,number] = ['aa',112];

x[0] = '2323';

console.log(x[0])

const enum STDD {
    dd,
    wlla,
    adda
}

const ll = STDD.dd

console.log(ll)

//定义方法
interface callback {
    ():void
}

function bilib (callback:callback){
    callback()
}

//定义数组
interface arr {
    [index:number]:string
}

//定义类
interface clas {
    pring():void;
}


//接口继承

interface arrclss extends clas {
    color:string
}

class bb implements arrclss {
    color:string;

    constructor(aa:string){
        this.color = aa;
    }

    pring(){
        console.log('pring')
    }
}

let qq = new bb('red');
qq.color;
qq.pring()

interface An {
    (f:string):void
}

//抽象类
abstract class Animal {
    eat:An = (food:string)=>{
        console.log('eat')
    }
    //抽象方法
    abstract run(distance:number):void
}

class Dog extends Animal {
    run(distance: number): void {
        console.log('run')
    }
}

let dog:Dog 
dog = new Dog();

dog.eat('lala')


//泛型
function createArray<T> (length:number,value:T):T[]{
    const arr = Array<T>(length).fill(value);
    return arr;

}

['(','[',')',']']

:first-child
:last-child
:nth-child