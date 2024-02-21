
let index=0

function switchcolour(){
    let colours = ['blue','hotpink','purple','yellow','green', 'red'];
    document.body.style.backgroundColor=colours[index++];
    // index++ is used for increment

    if (index>colours.length-1) {
        index=0
    }

}
