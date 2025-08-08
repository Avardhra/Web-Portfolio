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
const btnAbout = document.getElementById('avdAboutBTN');
const btnContact = document.getElementById('avdContactBTN');
const subAbout = document.getElementById('subAbout');
const menuBtn = [btnHome, btnContact];
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
vscodeWelcomeBTN.style.backgroundColor = "rgb(32,32,32)";
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
                ? "rgb(32,32,32)"
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
// LOGIC SUB SHOW UP SUB ABOUT [PC ONLY]
btnAbout.addEventListener('click', (e) => {
    e.stopPropagation();
    subAbout.style.display = 'flex';
});
document.addEventListener('click', (e) => {
    if (!subAbout.contains(e.target)) {
        subAbout.style.display = 'none';
    }
});
subAbout.addEventListener('click', (e) => {
    e.stopPropagation();
})
// END
// LOGIC CHANGE ICON 
const avd_icon = document.getElementById('avd-icon');
const AllText = [
    "<img src='img/Gupta-icon.png' title='Gupta Icon'>",
    "<h1 style='color: var(--avd-color-2); font-size:1.9em;'>Gupta</h1>"
    // "<div class='robot-beranda'><div class='avd-robot' style='margin-top:0px; margin-bottom:1vh;'><div class='rbt-mata'><div class='mata-one'><div class='alis-mata-one'></div><div class='bola-mata-one'></div></div><div class='mata-two'><div class='alis-mata-two'></div><div class='bola-mata-two'></div></div></div></div></div>"
];
let index = 0;
setInterval(() => {
    fadeOut(() => {
        index = (index + 1) % AllText.length;
        avd_icon.innerHTML = AllText[index];
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
// END
// LOGIC SHOW END POP UP [JIKA VIDEO DIPUTAR MAKA STOP LALU EXIT]
const closePopUp = document.getElementById('closePopUp');
const closePopUpBTN = document.getElementById('closePopUpBTN');
const fullscreenBTN = document.getElementById('fullscreenBTN');
const boxPopup = document.getElementById('boxPopup');

fullscreenBTN.addEventListener('click', () => {
    boxPopup.style = "max-width:100%; height:100%;";
})

closePopUpBTN.addEventListener('click', () => {
    closePopUp.style = "display: none;";
})
// END