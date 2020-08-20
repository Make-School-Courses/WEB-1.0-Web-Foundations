console.log('in fragments')

p_tags = document.querySelectorAll('section > p')
console.log(p_tags)

Array.prototype.forEach.call(document.querySelectorAll('section > p'), function(ele){ 
    console.log("got ele " + ele);
    ele.className = 'fragment'; 
});