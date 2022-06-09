// Code your solution in this file!

function distanceFromHqInBlocks(someValue) {
  let hqLocation = 42;

  if (someValue < hqLocation) {
    return hqLocation % someValue;
  }

  return someValue % hqLocation;
}

distanceFromHqInBlocks(43);
distanceFromHqInBlocks(50);
distanceFromHqInBlocks(34);

function distanceFromHqInFeet(someValue) {
  let feetInBlock = 264;
  return feetInBlock * distanceFromHqInBlocks(someValue);
}

function distanceTravelledInFeet(start, destination) {
  let feetInBlock = 264;
  if (start < destination) {
    return (destination - start) * feetInBlock;
  } else return (start - destination) * feetInBlock;
}

distanceTravelledInFeet(43, 48);
distanceTravelledInFeet(50, 60);
distanceTravelledInFeet(34, 28);

function calculatesFarePrice(start, destination) {
  if (distanceTravelledInFeet(start, destination) <= 400) {
    return 0;
  } else if (
    distanceTravelledInFeet(start, destination)  >= 400 &&
    distanceTravelledInFeet(start, destination) <= 2000
  ) {
    return 0.02 * (distanceTravelledInFeet(start, destination) - 400);
  } else if (
    distanceTravelledInFeet(start, destination) >= 2000 &&
    distanceTravelledInFeet(start, destination) <= 2500
  ) {
    return 25;
  } else return "cannot travel that far";
}

calculatesFarePrice(43, 44);
calculatesFarePrice(34, 32);
calculatesFarePrice(50, 58);
calculatesFarePrice(34, 24);
