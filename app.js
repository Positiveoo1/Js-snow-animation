window.onload = function () {
    const canvas = document.querySelector("#sky");
    const cntx = canvas.getContext("2d");

    const W  = window.innerWidth;
    const H = window.innerHeight;

    canvas.width = W;
    canvas.height = H;

    let mf = 1000;
    let flakes = [];

    for(f = 0; f < mf; f++) {

        flakes.push ({
            x: Math.random() * W,
            y: Math.random() * H,
            r: Math.random() * 5  + 2,
            d: Math.random() + 1
        })
    }
    function drawFlakes () {
        cntx.clearRect(0,0,W,H);
        cntx.fillStyle = "white";
        cntx.beginPath();
        for(let i = 0; i < mf; i++){
            let f = flakes[i]
            cntx.moveTo(f.x, f.y);
            cntx.arc(f.x, f.y, f.r, 0, Math.PI*4, true );
        }
        cntx.fill();
        moveFlakes(); 
    }
    let angle = 0;
    function moveFlakes () {
        angle += 0.01;
        for (let i = 0; i < mf; i++) {
            let f  =flakes [i]
            f.y += Math.pow(f.d, 2) +1;
            f.x += Math.sin(angle) * 2;
        }
        if( f.y > H) {
            flakes[i] = {x: Math.random() * W, y: 0, r: f.r, d: f.d};
        }
    }
    setInterval(drawFlakes, 40);
}