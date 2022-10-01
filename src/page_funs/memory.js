const memory_fun = () => {
    const leftcol = document.querySelector('.leftboy');
    const content = document.querySelector('.rightboy');

        // the "share embed code"
    const embed_the2gold =  '<iframe width="560" height="315" src="https://www.youtube.com/embed/qA6qJ5Od_V8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    const embed_networks =  '<iframe width="560" height="315" src="https://www.youtube.com/embed/V8m-ElBiBSs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    const embed_hippocampus =  '<iframe width="560" height="315" src="https://www.youtube.com/embed/zitLOtaf-bA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    const embed_alternativememory =  '<iframe width="560" height="315" src="https://www.youtube.com/embed/m7nTdKQcMxU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    const embed_thousands =  '<iframe width="560" height="315" src="https://www.youtube.com/embed/wuRwU5kjcOo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';

    leftcol.addEventListener('click',e=>{
        console.log("Listener activated");
        // Present Tense
        if(e.target.classList.contains('the2gold')){content.innerHTML = embed_the2gold;}
        else if(e.target.classList.contains('networks')){content.innerHTML = embed_networks;}
        else if(e.target.classList.contains('hippocampus')){content.innerHTML = embed_hippocampus;}
        else if(e.target.classList.contains('alternativememory')){content.innerHTML = embed_alternativememory;}
        else if(e.target.classList.contains('thousands')){content.innerHTML = embed_thousands;}

    });
    
};

export {memory_fun};