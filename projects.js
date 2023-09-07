const project_list = `[
    {
        "title" : "Audio Visualization",
        "info"  : "This project is an audio visualizer using the P5.js framework. This was implemented by Zohiab and Rinki.",
        "image" : "/Assets/audio_playing.jpeg",
        "skills" : ["HTML", "CSS", "Javascript", "P5.js"],
        "link"  : "https://github.com/ZDON-Official/Audio-Visualization"
    },
    {
        "title" : "Processor Simulator",
        "info"  : "This project is a computer simulation which uses logisim to simulate a working processor and other I/O devices, This was implemented by Zohaib and Ying.",
        "image" : "/Assets/Processor.jpeg",
        "skills" : ["HTML", "CSS", "Javascript"],
        "link"  : "https://github.com/ZDON-Official/Processor-Simulator"
    },
    {
        "title" : "MIPS Assembler",
        "info"  : "This project converts MIPS instructions into binary to be used by a processor simulator. The project is implemented in C++.",
        "image" : "/Assets/mips_assembler.jpeg",
        "skills" : ["HTML", "CSS", "Javascript"],
        "link"  : "https://github.com/ZDON-Official/MIPS-Assembler"
    },
    {
        "title" : "Ultimate Tic-Tac-Toe",
        "info"  : "This project is an implementation of Ultimate Tic-Tac-Toe in Python. This game utilizes the Pygame Python library to implement music and visuals.",
        "image" : "/Assets/ultimate.jpeg",
        "skills" : ["HTML", "CSS", "Javascript"],
        "link"  : "https://github.com/ZDON-Official/UltimateTicTacToe"
    },
    {
        "title" : "Spydur Research",
        "info"  : "In this project, my team and I designed a website for finding research opportunities on campus. Our main goal was to streamline the process of finding and applying to research opportunities.",
        "image" : "/Assets/Spydur_research.jpeg",
        "skills" : ["HTML", "CSS", "Javascript"],
        "link"  : "https://github.com/ZDON-Official/Spydur_research"
    },
    {
        "title" : "Discord Invest",
        "info"  : "Final submission for GryphHacks 2022. The goal of this project was to create a mock trading Discord bot.",
        "image" : "/Assets/DInvestLogo.jpeg",
        "skills" : ["HTML", "CSS", "Javascript"],
        "link"  : "https://github.com/ZDON-Official/DiscordInvest"
    },
    {
        "title" : "HeART of the Sea",
        "info"  : "Final submission for AhoyHacks. Won hidden treasure award for best UI/UX. Pirates of the Caribbean inspired game made in Python using the Pygame library.",
        "image" : "/Assets/HeartofSea.jpg",
        "skills" : ["Python", "Pygame"],
        "link"  : "https://github.com/ZDON-Official/AhoyHacks"
    },
    {
        "title" : "ODIN Landing Page",
        "info"  : "Implementation of a website landing page template, for ODIN Project, using HTML and CSS.",
        "image" : "/Assets/ODIN_Landing_page.jpeg",
        "skills" : ["HTML", "CSS", "Javascript"],
        "link"  : "https://github.com/ZDON-Official/Odin-Landing-Page"
    },
    {
        "title" : "Portfolio Website",
        "info"  : "This is my personal portfolio website created using HTML, CSS, and Javascript.",
        "image" : "/Assets/ZDON_Portfolio_website.jpeg",
        "skills" : ["HTML", "CSS", "Javascript"],
        "link"  : "https://github.com/ZDON-Official/ZDON-Official.github.io"
    },
    {
        "title" : "ODIN Rock Paper Scissors",
        "info"  : "This is an implementation of a Rock, Paper, Scissors game using HTML, CSS, and Javascript.",
        "image" : "/Assets/ODIN-Rock-Paper-Scissor.jpeg",
        "skills" : ["HTML", "CSS", "Javascript"],
        "link"  : "https://zdon-official.github.io/Odin-Rock-Paper-Scissors/"
    },
    {
        "title" : "ODIN Etch-a-Sketch",
        "info"  : "Etch-a-Sketch for The ODIN Project. This project utilizes HTML, CSS, and Javascript.",
        "image" : "/Assets/ODIN-Etch-a-Sketch.jpeg",
        "skills" : ["HTML", "CSS", "Javascript"],
        "link"  : "https://zdon-official.github.io/Odin-Etch-a-Sketch/"
    }
]`;

//! Code to load projects

const parent = document.getElementById("project_box");

function loadResources(jsonItem) {
  if (parent && jsonItem) {
    const jsList = JSON.parse(jsonItem);
    let skills = ``;

    for (i in jsList) {
      let child = document.createElement("li");
      child.className = "prj";
      skills = "";

      for (j in jsList[i].skills) {
        // console.log(`j is ${jsList[i].skills[j]}`);
        skills += `<span>${jsList[i].skills[j]}</span>`;
      }

      let content = `
            <h2>${jsList[i].title}</h2>
            <img src="${jsList[i].image}" alt="${jsList[i].title}" />
            <div class="skills">
                ${skills}
            </div>
            <p>${jsList[i].info}</p>
            <button class="prj_gtb_btn">Github</button>
        `;
      child.innerHTML = content;
      parent.appendChild(child);
    }
  }
}

loadResources(project_list);
