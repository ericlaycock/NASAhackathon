const verb_fun = () => {

    console.log("VERBS ACTIVE");
    const leftcol = document.querySelector('.leftboy');
    const content = document.querySelector('.rightboy');

    const embed_pres_reg = '<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/Vu0BdYuRbCM" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>';
    const embed_pres_hirreg = '<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/7O1bNIFc8qM" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>';
    const embed_pres_oue = '<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/SHvNTP7LyIo" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>';
    const embed_pres_ei = '<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/6IElBxdOsfs" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>';
    const embed_pres_eie = '<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/bxiKM_VjiMU" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>';

    const embed_pret_reg = '<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/8931a0534b184dbe910d14af3c076405" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>';
    const embed_pret_hirreg = '<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/r9ZLr3SQUH4" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>';
    const embed_pret_stem = '<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/1aTeq7IG7Hw" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>';
    const embed_pret_ei = '<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/d0e6291979254eb1904c3345b02e7e1f" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>';
    const embed_pret_ducir = '<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/jG3PfYPSZSY" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>';
    const embed_pret_weird = '<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/eG2cCS7C90g" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>';
    const embed_pret_synth = '<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/M6W2LkvCwLA" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>';

    const embed_voy_a = '<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/QGJQpRlLrV0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>';
    const embed_reflex_reg = '<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/TteNDBPUFqg" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>';
    const embed_reflex_irreg = '<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/uXGKrCuoDtg" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>';
    const embed_gustar = '<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/1xsS_7QJPGw" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>';
    const embed_gerreg = '<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/Z5cBoyKzTyE" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>';
    const embed_gerirreg = '<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/Yqmh-GY0lYs" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>';
    const embed_tengoque = '<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/YK_H4OsXg5Y" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>';


    const embed_pretvimperf = '<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/5e379b68782d4c2dabc2427d4475b506" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>';
    const embed_imperf_reg = '<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/ffd76d3a011e4f5a94671adb0bbb43b3" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>';
    const embed_imperf_irreg = '<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/5083e0761e0347e4a0d230ec801bf030" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>';

    const embed_dop1 = '<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/az3Nd-uB2JA" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>';
    const embed_dop2 = '<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/-LlPNvO3Frc" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>';
    const embed_dop3 = '<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/8eZg8bDGiDU" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>';
    const embed_iop1 = '<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/jO9CR9y8qyU" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>';
    const embed_dopiop = '<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/bcd970fe24b943d4b85e9232c54175ba" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>';

    const embed_pres_perf = '<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/RuTuY7ZeIt0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>';
    const embed_pres_perf_irreg = '<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/vfEDC8fTRX8" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>';
    const embed_past_perf = '<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/AaJCbuII82k" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>';

    const embed_imptv_af_tu = '<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/O6zs-vR9nig" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>';
    const embed_imptv_af_ud = '<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/-4zy05jRDnc" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>';
    const embed_imptv_ng_tuud = '<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/AQ4g82x1lh8" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>';
    const embed_imptv_nos = '<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/Hi7tzvPUP9U" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>';
    const embed_imptv_uds = '<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/ap9SVKDjQuU" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>';

    const embed_fut_reg = '<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/YDrbnH8c24U" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>';
    const embed_fut_irreg = '<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/ExmU5Bf_vZQ" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>';
    const embed_fut_perf = '<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/op0Ei3yx6PY" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>';
    const embed_cond = '<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/qFF7wqKu_XM" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>';

    const embed_subj_pres = '<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/16C5WoornhY" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>';
    const embed_what_is_subj = '<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/8kOeglNbC9s" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>';
    const embed_subj_irreg = '<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/N163epReBhQ" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>';
    const embed_subj_trig = '<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/ofB7cfCMKcs" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>';
    const embed_subj_impf = '<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/uwtFPFzEz4k" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>';
    const embed_subj_perf = '<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/wMe1AqKuAyg" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>';
    
    console.log("Embeds loaded");
    
    leftcol.addEventListener('click',e=>{
        console.log("Listener activated");
        // Present Tense
        if(e.target.classList.contains('pres_reg')){content.innerHTML = embed_pres_reg;}
        else if(e.target.classList.contains('pres_hirreg')){content.innerHTML = embed_pres_hirreg;}
        else if(e.target.classList.contains('pres_ei')){content.innerHTML = embed_pres_ei;}
        else if(e.target.classList.contains('pres_oue')){content.innerHTML = embed_pres_oue;}
        else if(e.target.classList.contains('pres_eie')){content.innerHTML = embed_pres_eie;}
        
        // Preterite
        else if(e.target.classList.contains('pret_reg')){content.innerHTML = embed_pret_reg;}
        else if(e.target.classList.contains('pret_hirreg')){content.innerHTML = embed_pret_hirreg;}
        else if(e.target.classList.contains('pret_stem')){content.innerHTML = embed_pret_stem;}
        else if(e.target.classList.contains('pret_ei')){content.innerHTML = embed_pret_ei;}
        else if(e.target.classList.contains('pret_ducir')){content.innerHTML = embed_pret_ducir;}
        else if(e.target.classList.contains('pret_weird')){content.innerHTML = embed_pret_weird;}
        else if(e.target.classList.contains('pret_synth')){content.innerHTML = embed_pret_synth;}
        
        // Other Beginner
        else if(e.target.classList.contains('voy_a')){content.innerHTML = embed_voy_a;}
        else if(e.target.classList.contains('reflex_reg')){content.innerHTML = embed_reflex_reg;}
        else if(e.target.classList.contains('reflex_irreg')){content.innerHTML = embed_reflex_irreg;}
        else if(e.target.classList.contains('gustar')){content.innerHTML = embed_gustar;}
        else if(e.target.classList.contains('gerreg')){content.innerHTML = embed_gerreg;}
        else if(e.target.classList.contains('gerirreg')){content.innerHTML = embed_gerirreg;}
        else if(e.target.classList.contains('tengoque')){content.innerHTML = embed_tengoque;}

        // Imperfect
        else if(e.target.classList.contains('pretvimperf')){content.innerHTML = embed_pretvimperf;}
        else if(e.target.classList.contains('imperf_reg')){content.innerHTML = embed_imperf_reg;}
        else if(e.target.classList.contains('imperf_irreg')){content.innerHTML = embed_imperf_irreg;}

        // DOP
        else if(e.target.classList.contains('dop1')){content.innerHTML = embed_dop1;}
        else if(e.target.classList.contains('dop2')){content.innerHTML = embed_dop2;}
        else if(e.target.classList.contains('dop3')){content.innerHTML = embed_dop3;}
        else if(e.target.classList.contains('iop1')){content.innerHTML = embed_iop1;}
        else if(e.target.classList.contains('dopiop')){content.innerHTML = embed_dopiop;}

        // Perf
        else if(e.target.classList.contains('pres_perf')){content.innerHTML = embed_pres_perf;}
        else if(e.target.classList.contains('pres_perf_irreg')){content.innerHTML = embed_pres_perf_irreg;}
        else if(e.target.classList.contains('past_perf')){content.innerHTML = embed_past_perf;}

        // Imperative
        else if(e.target.classList.contains('imptv_af_tu')){content.innerHTML = embed_imptv_af_tu;}
        else if(e.target.classList.contains('imptv_af_ud')){content.innerHTML = embed_imptv_af_ud;}
        else if(e.target.classList.contains('imptv_ng_tuud')){content.innerHTML = embed_imptv_ng_tuud;}
        else if(e.target.classList.contains('imptv_nos')){content.innerHTML = embed_imptv_nos;}
        else if(e.target.classList.contains('imptv_uds')){content.innerHTML = embed_imptv_uds;}

        // Future
        else if(e.target.classList.contains('fut_reg')){content.innerHTML = embed_fut_reg;}
        else if(e.target.classList.contains('fut_irreg')){content.innerHTML = embed_fut_irreg;}
        else if(e.target.classList.contains('fut_perf')){content.innerHTML = embed_fut_perf;}
        else if(e.target.classList.contains('cond')){content.innerHTML = embed_cond;}

        // Subjunctive
        else if(e.target.classList.contains('subj_pres')){content.innerHTML = embed_subj_pres;}
        else if(e.target.classList.contains('what_is_subj')){content.innerHTML = embed_what_is_subj;}
        else if(e.target.classList.contains('subj_irreg')){content.innerHTML = embed_subj_irreg;}
        else if(e.target.classList.contains('subj_trig')){content.innerHTML = embed_subj_trig;}
        else if(e.target.classList.contains('subj_impf')){content.innerHTML = embed_subj_impf;}
        else if(e.target.classList.contains('subj_perf')){content.innerHTML = embed_subj_perf;}    

    })

};

export {verb_fun}; 