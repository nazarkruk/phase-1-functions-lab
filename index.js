// Code your solution in this file!
function distanceFromHqInBlocks(pickUp){
    return Math.abs(pickUp - 42)
}

function distanceFromHqInFeet(pickUp){
    let distance  = Math.abs(pickUp - 42)
    return distance * 264
}

function distanceTravelledInFeet(start, destination){
    return (Math.abs(destination - start)) * 264;
}

function calculatesFarePrice(start, destination){
    let feedDist = distanceTravelledInFeet(start, destination);
    if (feedDist<=400){
        return 0;
    }else if (feedDist<=2000){
        return (feedDist - 400)*0.02; 
    }else if (feedDist<=2500){
        return 25;
    }else {
        return 'cannot travel that far'
    }

}