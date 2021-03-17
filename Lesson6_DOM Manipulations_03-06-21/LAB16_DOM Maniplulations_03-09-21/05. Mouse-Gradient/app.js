function attachGradientEvents() {
    //DOM variables
    const box = document.getElementById('gradient');
    box.addEventListener('mousemove', findPercent);
}

function findPercent(e) {
    // box width
    const width = e.target.offsetWidth;
    // current mouse in X axis relative to the box
    const x = e.offsetX;

    document.getElementById('result').textContent =
        Math.floor((x / width) * 100) + '%';
}

/* 
// percentage diappears when not on box
function attachGradientEvents() {
    
    //DOM variables
    const box = document.getElementById('gradient');
    document.body.addEventListener('mousemove', findPercent);
}

function findPercent(e){
    if(e.target.id === 'gradient-box'){
        // box width
        const width = e.target.offsetWidth;
        // current mouse in X axis relative to the box
        const x = e.offsetX;
        document.getElementById('result').textContent = Math.floor((x / width) * 100) + '%';
    }else {
        document.getElementById('result').textContent = '';
    }
}
*/
