// 
const now = new Date();
const jam = now.getHours();
const menit = now.getMinutes();
let GoodDay;
if (jam >= 19) {
    GoodDay = "Selamat Malam";
} else if (jam >= 15) {
    GoodDay = "Selamat Sore";
} else if (jam >= 11) {
    GoodDay = "Selamat Siang";
} else if (jam >= 6) {
    GoodDay = "Selamat Pagi";
} else {
    GoodDay = "Selamat Begadang";
}
const ThanksGodForGoodKarma = document.getElementById('ThanksGodForGoodKarma').innerText = `${GoodDay}`;
// END
// LOGIC LOAD SHOW END
window.addEventListener("load", () => {
    const loader = document.querySelector('.avd-loadScreen');
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none'
        }, 100);
    }, 2500)

});
// END
// LOGIC VSCODE SHOW UP AND SHOW END
const detailExperience = document.getElementById('detailExperience');
let detailExperienceOpenBTN = document.querySelectorAll(".detailExperienceOpenBTN");
const detailExperienceExitBTN = document.getElementById('detailExperienceExitBTN');
detailExperienceExitBTN.addEventListener('click', () => {
    detailExperience.style.display = "none";
})
detailExperienceOpenBTN.forEach(function (button) {
    button.addEventListener('click', function () {
        detailExperience.style.display = "flex";
    })
})
// END
// LOGIC KLIK ICON SEARCH SUPAYA MENGARAH FOKUS KE INPUT SEARCH
function SearchFile() {
    document.getElementById('inputSearchFile').focus();
}
// END
// LOGIC BTN HOME [HEADER] CHANGE COLOR AND BORDER BOTTOM COLOR
const btnHome = document.getElementById('avdHomeBTN');
const btnExpc = document.getElementById('avdExpcBTN');
const btnAcdmc = document.getElementById('avdAcdmcBTN');
const btnContact = document.getElementById('avdContactBTN');
const menuBtn = [btnHome, btnExpc, btnAcdmc,btnContact];
btnHome.style = "color: var(--avd-color-3); border-bottom : 2px solid  var(--avd-color-3); ";
menuBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        menuBtn.forEach(b => {
            b.style.borderBottom = (b === btn)
                ? "2px solid  var(--avd-color-3)"
                : "2px solid transparent"
            b.style.color = (b === btn)
                ? " var(--avd-color-3)"
                : "white"
        })
    })
})
// END
btnContact.addEventListener('click', () => {
    detailExperience.style.display = "flex";
    vscodeAllBTN.forEach(b => {
        b.style.backgroundColor = (b === vscodeDesainBTN)
            ? "rgb(54,54,54)"
            : "";
    });
    vscodeAllMain.forEach(main => {
        main.style.display = (main === vscodeDesain)
            ? "flex"
            : "none";
    });
    vscodeAllSFILE.forEach(sfile => {
        sfile.style.backgroundColor = (sfile === vscodeDesainSFILE)
            ? "rgb(24,24,24)"
            : "transparent";
    });
    vscodeDesainSFILE.style.display = "flex";
});

// LOGIC BTN DETAIL EXPERIENCE UI VS CODE || SHOW UP AND SHOW END AND MORE
const vscodeWelcome = document.getElementById('vscodeWelcome');
const vscodeWelcomeBTN = document.getElementById('vscodeWelcomeBTN');
const vscodeWelcomeSFILE = document.getElementById('vscodeWelcomeSFILE');
const vscodeProfile = document.getElementById('vscodeProfile');
const vscodeProfileBTN = document.getElementById('vscodeProfileBTN');
const vscodeProfileSFILE = document.getElementById('vscodeProfileSFILE');
const vscodeDesain = document.getElementById('vscodeDesain');
const vscodeDesainBTN = document.getElementById('vscodeDesainBTN');
const vscodeDesainSFILE = document.getElementById('vscodeDesainSFILE');
const sfileWelcomeExitBTN = document.getElementById('sfileWelcomeExitBTN');
const sfileProfileExitBTN = document.getElementById('sfileProfileExitBTN');
const sfileDesainExitBTN = document.getElementById('sfileDesainExitBTN');
// SET DEFAULT ----------------------------------------------
vscodeWelcomeBTN.style.backgroundColor = "rgb(54,54,54)";
vscodeWelcome.style.display = "flex";
vscodeWelcomeSFILE.style.backgroundColor = "rgb(24, 24, 24)";
const vscodeAllMainfad = [vscodeWelcome, vscodeProfile, vscodeDesain];
// -----------------------------------------------------------
const vscodeAllBTN = document.querySelectorAll('[data-target]');
const vscodeAllMain = document.querySelectorAll('.avd-frame');
const vscodeAllSFILE = document.querySelectorAll('.avd-SFILE');
// -----------------------------------------------------------
// LOGIC SHOW UP EXPLORER VS CODE 
const openFileExplorer = document.getElementById('openFileExplorer');
const detailExplorer = document.getElementById('detailExplorer');
openFileExplorer.addEventListener('click', () => {
    if (detailExplorer.style.display === 'none' || detailExplorer.style.display === '') {
        detailExplorer.style.display = "block";
        openFileExplorer.style.color = "var(--avd-color-2)";

    } else {
        openFileExplorer.style.color = "";
        detailExplorer.style.display = "none";
    }
})
// -----------------------------------------------------------
// LOGIC FILE BTN EXPLORER BGC
vscodeAllBTN.forEach(btn => {
    btn.addEventListener('click', () => {
        const targetIds = btn.dataset.target.split(',');
        vscodeAllBTN.forEach(b => {
            b.style.backgroundColor = (b === btn)
                ? "rgb(54,54,54)"
                : ""
        });
        vscodeAllMain.forEach(main => {
            main.style.display = targetIds.includes(main.id)
                ? "flex"
                : "none"
        })
        vscodeAllSFILE.forEach(sfile => {
            sfile.style.backgroundColor = targetIds.includes(sfile.id)
                ? "rgb(24,24,24)"
                : "transparent"
        })
    })
})
// END
// LOGIC VSCODE S FILE OPEN, BGC
vscodeAllSFILE.forEach(btnsfile => {
    btnsfile.addEventListener('click', () => {
        const targetIdst = btnsfile.dataset.target.split(',');
        vscodeAllSFILE.forEach(sf => {
            sf.style.backgroundColor = (sf === btnsfile)
                ? "rgb(24,24,24)"
                : "transparent"
        })
        vscodeAllMain.forEach(main => {
            main.style.display = targetIdst.includes(main.id)
                ? "flex"
                : "none"
        })
        vscodeAllBTN.forEach(b => {
            b.style.backgroundColor = targetIdst.includes(b.id)
                ? "rgb(32,32,32)"
                : ""
        });
    })
})
// END
// LOGIC SFILE EXIT BTN AND S FILE SHOW
vscodeWelcomeBTN.addEventListener('click', () => {
    vscodeWelcomeSFILE.style.display = "flex";
})
vscodeProfileBTN.addEventListener('click', () => {
    vscodeProfileSFILE.style.display = "flex";
})
vscodeDesainBTN.addEventListener('click', () => {
    vscodeDesainSFILE.style.display = "flex";
})
sfileWelcomeExitBTN.addEventListener('click', () => {
    vscodeWelcomeSFILE.style.display = "none";
    vscodeWelcome.style.display = "none";
})
sfileProfileExitBTN.addEventListener('click', () => {
    vscodeProfileSFILE.style.display = "none";
    vscodeProfile.style.display = "none";
})
sfileDesainExitBTN.addEventListener('click', () => {
    vscodeDesainSFILE.style.display = "none";
    vscodeDesain.style.display = "none";
})
// END

// LOGIC CHANGE ICON 
const avd_icon = document.getElementById('avd-icon');
const AllText = [
    "<img src='assets/img/Gupta-icon.png' title='Gupta Icon'>",
    "<h1 style='color: var(--avd-color-2); font-size:1.9em;'>Gupta</h1>"
    // "<div class='robot-beranda'><div class='avd-robot' style='margin-top:0px; margin-bottom:1vh;'><div class='rbt-mata'><div class='mata-one'><div class='alis-mata-one'></div><div class='bola-mata-one'></div></div><div class='mata-two'><div class='alis-mata-two'></div><div class='bola-mata-two'></div></div></div></div></div>"
];
let indexHdr = 0;
setInterval(() => {
    fadeOut(() => {
        indexHdr = (indexHdr + 1) % AllText.length;
        avd_icon.innerHTML = AllText[indexHdr];
        fadeIn(() => {
        });
    });

}, 10000);

function fadeOut(callback) {
    avd_icon.classList.remove('fade-in');
    avd_icon.classList.add('fade-out');

    setTimeout(() => {
        callback();
    }, 500);
}
function fadeIn(callback) {
        avd_icon.classList.remove('fade-out');
    avd_icon.classList.add('fade-in');

    setTimeout(() => {
        callback();
    }, 500);
}

const spanHomeID = document.getElementById("spanHome");
const allSpanHome = [
    "Gede Valendra<i class='bx bxs-badge-check'></i>",
    "Web Developer",
    "Designer"
];
let indexSpan = 0;
setInterval(() => {
    fadeOutSpan(() => {
      indexSpan = (indexSpan + 1) % allSpanHome.length;
        spanHomeID.innerHTML = allSpanHome[indexSpan];
        fadeInSpan(() => {

        });
    });

}, 8000);

function fadeOutSpan(callback) {

    spanHomeID.classList.remove('fade-in');
    spanHomeID.classList.add('fade-out');
    setTimeout(() => {
        callback();
    }, 400);
}
function fadeInSpan(callback) {
      
    spanHomeID.classList.remove('fade-out');
    spanHomeID.classList.add('fade-in');
    setTimeout(() => {
        callback();
    }, 400);
}
// END
// LOGIC SHOW END POP UP [JIKA VIDEO DIPUTAR MAKA STOP LALU EXIT]
const closePopUp = document.getElementById('closePopUp');
const closePopUpBTN = document.getElementById('closePopUpBTN');
const boxPopup = document.getElementById('boxPopup');

closePopUpBTN.addEventListener('click', () => {
    closePopUp.style = "display: none;";
})
document.addEventListener('click', function (e) {
    // Lingkaran besar
    const circleBig = document.createElement('span');
    circleBig.className = 'click-circle click-circle-big';
    // Lingkaran kecil
    const circleSmall = document.createElement('span');
    circleSmall.className = 'click-circle click-circle-small';

    document.body.appendChild(circleBig);
    document.body.appendChild(circleSmall);

    const color = getComputedStyle(document.documentElement).getPropertyValue('--avd-color-3') || '#00bcd4';

    [circleBig, circleSmall].forEach(circle => {
        circle.style.left = `${e.clientX}px`;
        circle.style.top = `${e.clientY}px`;
        circle.style.background = color.trim();
    });

    // Cari elemen dengan z-index tertinggi di posisi klik
    let maxZ = 0;
    let el = document.elementFromPoint(e.clientX, e.clientY);
    while (el && el !== document.body) {
        const z = parseInt(window.getComputedStyle(el).zIndex, 10);
        if (!isNaN(z) && z > maxZ) maxZ = z;
        el = el.parentElement;
    }
    // Set z-index lingkaran sedikit lebih tinggi dari elemen tertinggi
    [circleBig, circleSmall].forEach(circle => {
        circle.style.zIndex = maxZ > 0 ? maxZ + 1 : 9999;
    });

    setTimeout(() => {
        circleBig.style.transform = 'scale(2)';
        circleBig.style.opacity = '0';
        circleSmall.style.transform = 'scale(1.2)';
        circleSmall.style.opacity = '0';
    }, 10);

    setTimeout(() => {
        circleBig.remove();
        circleSmall.remove();
    }, 500);
});

const style = document.createElement('style');
style.textContent = `
.click-circle {
    position: fixed;
    pointer-events: none;
    border-radius: 50%;
    background: var(--avd-color-3, #00bcd4);
    left: 0; top: 0;
    margin-left: -16px;
    margin-top: -16px;
    opacity: 0.5;
    transform: scale(0);
    transition: transform 0.4s cubic-bezier(.4,0,.2,1), opacity 0.4s;
}
.click-circle-big {
    width: 32px;
    height: 32px;
    z-index: 9999;
}
.click-circle-small {
    width: 20px;
    height: 20px;
    margin-left: -10px;
    margin-top: -10px;
    opacity: 0.8;
    z-index: 9999;
}
`;
document.head.appendChild(style);
