const pron_fun = () => {
    const leftcol = document.querySelector('.leftboy');
    const content = document.querySelector('.rightboy');

        // the "share embed code"
    const embed_intro = '<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/141152d00d2b4168aaa0abacd096d019" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>';
    const embed_spanishe = '';
    const embed_spanisho = '';
    const embed_spanishu =  '';
    const embed_singler ='';
    const embed_trilledr ='';
    const embed_spanishj ='';
    const embed_spanishbv ='';
    const embed_spanishg =  ''; 

    leftcol.addEventListener('click',e=>{
        console.log("Listener activated");
        // Present Tense
        if(e.target.classList.contains('intro')){content.innerHTML = embed_intro;}
        else if(e.target.classList.contains('spanishe')){content.innerHTML = embed_spanishe;}
        else if(e.target.classList.contains('spanisho')){content.innerHTML = embed_spanisho;}
        else if(e.target.classList.contains('spanishu')){content.innerHTML = embed_spanishu;}
        else if(e.target.classList.contains('singler')){content.innerHTML = embed_singler;}
        else if(e.target.classList.contains('trilledr')){content.innerHTML = embed_trilledr;}
        else if(e.target.classList.contains('spanishj')){content.innerHTML = embed_spanishj;}
        else if(e.target.classList.contains('spanishbv')){content.innerHTML = embed_spanishbv;}
        else if(e.target.classList.contains('spanishg')){content.innerHTML = embed_spanishg;}

    });
    
};

export {pron_fun};