function openFeatures(){
        var allElems = document. querySelectorAll('.elems');
    var containerElems = document. querySelectorAll('.allElems');
    var allFullElems = document.querySelectorAll('.fullElem');
    var FullElemsBackBtn = document.querySelectorAll('.back');
    
    allElems.forEach(function(elem){
        elem.addEventListener('click', function(){
            allFullElems[elem.id].style.display = 'block';
        })
    })
    
    FullElemsBackBtn.forEach(function(back){
        back.addEventListener('click', function(){
            allFullElems[back.id].style.display = 'none';
        })
    })
}

openFeatures();