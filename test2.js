function getAroundNum(tableClumnNum,tableRowNum,num) {
    let left = num-1;
    let top = num-tableClumnNum;
    let right = num+1;
    let bottom = num+tableClumnNum;
    let aroundNumAry = [];
    //判断left
    if(left != 0 && left%tableClumnNum != 0){
        aroundNumAry.push(left);
    }
    //判断top,也可以不判断
    if(num > tableClumnNum){
        aroundNumAry.push(top);
    }
    //判断right
    if(num%tableClumnNum != 0){
        aroundNumAry.push(right)
    }
    //判断bottom,也可以不判断
    if(bottom < tableClumnNum*tableRowNum){
        aroundNumAry.push(bottom)
    }
    return aroundNumAry;
}

//console.log(getAroundNum(8,8,21));
let tableFillAry = [1,20,10,15,21,23,24,28,31,35,54,55,62];
//tableFillAry = [1,2]
let blockAry = [];

for (let i = 0;i<tableFillAry.length;i++){
    let item = tableFillAry[i];
    let aroundNums = getAroundNum(8,8,item);
    
    let canLAry = [];
    let noLAry = [];
    blockAry.forEach(bfItem=>{
        let has = aroundNums.filter(v=>{
            return bfItem.includes(v)
        })
        if(has.length > 0){
            canLAry.push(bfItem)
        }else {
            noLAry.push(bfItem)
        }
    })
    if(canLAry.length == 0){
        blockAry.push([item])
    }else {
        let lAry = [...canLAry.flat(),item];
        blockAry = [lAry,...noLAry]
    }
}


console.log(blockAry)












180.17
3188.14
2113.16
648.54


939.89
1252.13
288.47
72.08
998.6



742.794
298.148
2872.317
156.536
25581.716
8348.662


511.741
2353.714
732.627
6318.774
3735.477
2097.648


20000
3.145
1301.001
7668.412



















