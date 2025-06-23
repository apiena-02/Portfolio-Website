particlesJS("tsparticles", {
      particles: {
        number: {
          value: 800,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: ["#32e2fd", "#4e08d0", "#ff60c7", "#ffffff"]
        },
        shape: {
          type: "circle"
        },
        opacity: {
          value: 0.5,
          random: true
        },
        size: {
          value: 2,
          random: true
        },
        move: {
          enable: true,
          speed: 0.6
        },
        line_linked: {
          enable: false
        }
      },
      interactivity: {
        events: {
          onhover: {
            enable: false
          },
          onclick: {
            enable: false
          }
        }
      },
      retina_detect: true
    });

document.getElementById("year").textContent = new Date().getFullYear();
var sidemenu = document.getElementById("sidemenu")

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}