

let elmodalbox=document.getElementById('modalBox');
let elmodalbtn=document.getElementById('modalBtn');
let elmodalclose=document.getElementById('closeBtn');

elmodalbtn.addEventListener('click',function () {
elmodalbox.classList.add('show');
});

elmodalclose.addEventListener('click',function () {
elmodalbox.classList.remove('show');
 });







document.getElementById('darkbtn').addEventListener('click', function () 
{document.body.classList.toggle('dark');

});
