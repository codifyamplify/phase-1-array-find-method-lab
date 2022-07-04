// code your solution here
function superbowlWin(record){
    for(const element of record){
        if (element.result === "W"){
            return element.year
        }
    }
}