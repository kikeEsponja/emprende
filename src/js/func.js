let demo = document.getElementById('demo');
if(demo){
    demo.addEventListener('click', () =>{
        window.location.href = './src/html/demo.html';
    });
}

let volver = document.getElementById('volver');
if(volver){
    volver.addEventListener('click', () =>{
        window.history.back();
    });
}