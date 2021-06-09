/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 * 
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
    var count = 0;
Object.keys(objects).forEach((key,index)=>{
    if(objects[key].x === objects[key].y){
    count++;}
})
    return count;
}
