addEventListener("DOMContentLoaded", (event) => {

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin)


let Hsections = gsap.utils.toArray(".Hpanel");
let VsectionsIzq = gsap.utils.toArray(".VpanelIzquierda");
let VpanelsDerecha = gsap.utils.toArray(".VpanelDerecha");
let Vpanels  = gsap.utils.toArray("seccion1 .Vpanel");


const mainHeadingAnim  = gsap.timeline({paused:true})
.from(".introContainer",{opacity:0.5})
.to(".intro img",{y:-20},"<")
.to(".intro h2 .line1", {x:90}, "<")
.to(".intro h2 .line2", {x:-90}, "<")

  ScrollTrigger.create({
    trigger:".intro",
    start:"top 30%",
    end:"bottom 80%",
    animation:mainHeadingAnim,
    scrub:true
  })

const animIntro2 = gsap.timeline()
.from(".portada2 p",{opacity:0, x:100})

ScrollTrigger.create({
  trigger:".portada2",
  start:"top top",
  end:"bottom 20%",
  animation:animIntro2,
  pin:true,
  scrub:1
})


const grafica1 = document.getElementById("cartera-negocio");
const graficaContainer = document.querySelector(".cartera-negocio-container");




  document.querySelectorAll(".nav .btn1").forEach((btn, index) => {
    btn.addEventListener("click", () => {
      gsap.to(window, {duration: 1, scrollTo:{y:"#seccion1"}});
    });
  });

  document.querySelectorAll(".nav .btn2").forEach((btn, index) => {
    btn.addEventListener("click", () => {
      gsap.to(window, {duration: 1, scrollTo:{y:"#seccion2"}});
    });
  });

  document.querySelectorAll(".nav .btn3").forEach((btn, index) => {
    btn.addEventListener("click", () => {
      gsap.to(window, {duration: 1, scrollTo:{y:"#seccion3"}});
    });
  });

  document.querySelectorAll(".nav .btn4").forEach((btn, index) => {
    btn.addEventListener("click", () => {
      gsap.to(window, {duration: 1, scrollTo:{y:"#seccion4"}});
    });
  });
 
});

gsap.utils.toArray(".animNumber").forEach(number => {
  var tler =  gsap.to(number, {
      scale:1.1,
      duration:1,
      ease:"back",
      pin:true,
      scrollTrigger: {
          trigger: number,
          start: "top 70%",
          end: "bottom 80%",
          toggleActions: "play none none reverse"
         
      }
  }); })

gsap.utils.toArray(".animCounter").forEach(box => {
  var tler =  gsap.from(box, {
      textContent: "0",
      duration: 2,
      ease: "power1.inOut",
      modifiers: {
          textContent: value => formatNumber(value, 2)
      },
      scrollTrigger: {
          trigger: box,
          start: "top 70%",
          end: "bottom 80%",
          toggleActions: "play none none reverse",
          markers: true
      }
  }); })

  gsap.utils.toArray(".animCounterNoDecimals").forEach(box => {
    var tler =  gsap.from(box, {
        textContent: "0",
        duration: 2,
        ease: "power1.inOut",
        modifiers: {
            textContent: value => formatNumber(value, 0)
        },
        scrollTrigger: {
            trigger: box,
            start: "top 70%",
            end: "bottom 80%",
            toggleActions: "play none none reverse"/*,
            markers: true*/
        }
    }); })

  function formatNumber(value, decimals) {
    let s = (+value).toLocaleString('de-DE').split(",");
    return decimals ? s[0] + "," + ((s[1] || "") + "00000000").substr(0, decimals) : s[0];
  }


// create
let mm = gsap.matchMedia();

// add a media query. When it matches, the associated function will run
mm.add("(min-width: 800px)", () => {
const graficaFondo = document.querySelector("#cartera-negocio #fondo");
const graficaAno = document.querySelector("#cartera-negocio #año");
const dataVida = document.getElementById("vida");
const dataVidaTxt = document.getElementById("vida-txt");
const dataSalud = document.getElementById("salud");
const dataSaludTxt = document.getElementById("salud-txt");
const dataAutos = document.getElementById("autos");
const dataAutosTxt = document.getElementById("autos-txt");
const dataMultirriesgos = document.getElementById("multirriesgos");
const dataMultirriesgosTxt = document.getElementById("multirriesgos-txt");
const dataDiversos = document.getElementById("diversos");
const dataDiversosTxt = document.getElementById("diversos-txt");
let VScrollContainer = gsap.utils.toArray(".VScrollContainer");
let HScrollContainer = gsap.utils.toArray(".HScrollContainer");

  gsap.to("nav",{opacity:1, y:80, height:80,
    scrollTrigger:{ 
      trigger:".main",
      start: "top top",
      end: "center 100%",
      toggleActions: "play none none reverse",
  }})

  HScrollContainer.forEach((HScrollContainerItem) => {
    gsap.to(HScrollContainerItem, {
      xPercent: -50,
      ease: "none",
      duration:2,
      scrollTrigger: {
        trigger: HScrollContainerItem,
        start: "top top",
        end: "bottom 70%",
        pin:true,
        scrub: 1
      }
    })
  });

  VScrollContainer.forEach((VScrollContainerItem, index) => {
    let sidebar=document.querySelectorAll(".VpanelIzquierda");
    
    ScrollTrigger.create({
      trigger:VScrollContainerItem,
      start:"top top",
      end:"bottom bottom",
      //animation:tween,
      scrub:true,
      pin: sidebar[index]
    })
  });

const graph1Ani = gsap.timeline({paused:true})
.from ([graficaFondo, graficaAno], {scale:0, ease:Back, transformOrigin:"50% 50%", stagger:0.1})
.from ([dataVida, dataVidaTxt], {opacity:0, ease:Back, transformOrigin:"50% 50%", stagger:0.1})
.from ([dataSalud, dataSaludTxt], {opacity:0, ease:Back, transformOrigin:"50% 50%", stagger:0.1})
.from ([dataAutos, dataAutosTxt], {opacity:0, ease:Back, transformOrigin:"50% 50%", stagger:0.1})
.from ([dataMultirriesgos, dataMultirriesgosTxt], {opacity:0, ease:Back, transformOrigin:"50% 50%", stagger:0.1})
.from ([dataDiversos, dataDiversosTxt], {opacity:0, ease:Back, transformOrigin:"50% 50%", stagger:0.1})

  ScrollTrigger.create({
    trigger:".cartera-negocio-container",
    animation:graph1Ani,
    pin:true,
    scrub:1,
    start:"top top",
    end:"bottom center",
    pinSpacing:false
  })

})

  const mobileButtons = document.querySelectorAll(".mobile-menu .btn") 
  const click= document.querySelector('.lineas');

  click.addEventListener('click', function(){
    click.classList.toggle('lineas-plegado');
    document.querySelector(".mobile-menu").classList.toggle('on')
    })
  mobileButtons.forEach(button=> {
    button.addEventListener("click", function() {
      click.classList.toggle('lineas-plegado');
      document.querySelector(".mobile-menu").classList.toggle('on')
    })
  })


