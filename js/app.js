addEventListener("DOMContentLoaded", (event) => {

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);



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

const btnArchivo = document.querySelector(".archivoInformes")

btnArchivo.addEventListener("click", function(event){
  event.preventDefault();
  document.querySelector(".btnSecundario2022").classList.toggle('active');
  document.querySelector(".btnSecundario2023").classList.toggle('active');
})

const titulosSeccion = document.querySelectorAll(".tituloSeccion .btnPrincipal")

// Animación Títulos de sección
titulosSeccion.forEach((tituloSeccion, index) => {

  let titulo = tituloSeccion.querySelector("h2") 


const animation = gsap.from(titulo, {
  opacity: 0,
  duration:1
})
ScrollTrigger.create({
  trigger:titulo,
  start:"50 80%",
  end:"70% 60%",
  animation:animation,
  toggleActions: "play none none reverse"
})
})


/*
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
const grafica1 = document.getElementById("cartera-negocio");
const graficaContainer = document.querySelector(".cartera-negocio-container");
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
    start:"30% 60%",
    end:"80% 80%",

  })
*/
  const graficaPrimasFondo = document.querySelector("#primas-fondo");
  const graficaPrimasAno = document.querySelector("#primas-ano");
  const dataPrimasVida = document.getElementById("primas-vida");
  const dataPrimasVidaTxt = document.getElementById("primas-vida-txt");
  const dataPrimasNoVida = document.getElementById("primas-no-vida");
  const dataPrimasNoVidaTxt = document.getElementById("primas-no-vida-txt");
  const graph2Ani = gsap.timeline({paused:true})
  .from ([graficaPrimasFondo, graficaPrimasAno], {scale:0, ease:Back, transformOrigin:"50% 50%", stagger:0.1})
  .from ([dataPrimasVida, dataPrimasVidaTxt], {opacity:0, ease:Back, transformOrigin:"50% 50%", stagger:0.1})
  .from ([dataPrimasNoVida, dataPrimasNoVidaTxt], {opacity:0, ease:Back, transformOrigin:"50% 50%", stagger:0.1})
  
    ScrollTrigger.create({
      trigger:".primas-container",
      animation:graph2Ani,
      pin:true,
      scrub:1,
      start:"10% 20%",
      end:"60% 60%",
  
    })

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
          start: "top 50%",
          end: "bottom 60%",
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
          start: "top 50%",
          end: "bottom 60%",
          toggleActions: "play none none reverse"
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
            start: "top 50%",
            end: "bottom 60%",
            toggleActions: "play none none reverse"
        }
    }); })

  function formatNumber(value, decimals) {
    let s = (+value).toLocaleString('de-DE').split(",");
    return decimals ? s[0] + "," + ((s[1] || "") + "00000000").substr(0, decimals) : s[0];
  }

  gsap.set('.VSlide.anim1 p', {autoAlpha: 0, yPercent: 100});

  ScrollTrigger.batch(".VSlide.anim1", {
    onEnter: batch => {
      batch.forEach((section, i) => {
        gsap.to(section.querySelectorAll(".VSlide.anim1 p"), {
          autoAlpha: 1,
          yPercent: 0,
          duration: 0.8,
          ease: "power1.inOut", 
          stagger: 0.1,
          delay: i * 0.3
        });
      });
    },
    start: "100px top",
    end: "bottom bottom"
  });


// create
let mm = gsap.matchMedia();

// add a media query. When it matches, the associated function will run
mm.add("(min-width: 1100px)", () => {

  const mainHeadingAnim  = gsap.timeline({paused:true})

  .to(".intro h2 .line1", {x:90}, "<")
  .to(".intro h2 .line2", {x:-90}, "<")
  
    ScrollTrigger.create({
      trigger:".intro",
      start:"top 30%",
      end:"bottom 80%",
      animation:mainHeadingAnim,
      scrub:true
    })


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
      scrub:true,
      pin: sidebar[index]
    })
  });



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

  const graficaBarra1BarraExterior = document.querySelector(".grafica-barras.contrato-indefinido .barra-exterior");
  const graficaBarra1BarraInterior = document.querySelector(".grafica-barras.contrato-indefinido .barra-interior");
  gsap.timeline({repeat: -1, repeatDelay: 1})
.to(graficaBarra1BarraExterior,{yPercent:-100, transformOrigin:"bottom bottom", duration:1})
.to(graficaBarra1BarraInterior,{yPercent:-90 ,transformOrigin:"bottom bottom",duration:2})


const graficaBarra2BarraExterior = document.querySelector(".grafica-barras.plantilla .barra-exterior");
const graficaBarra2BarraInterior = document.querySelector(".grafica-barras.plantilla .barra-interior");
gsap.timeline({repeat: -1, repeatDelay: 1})
.to(graficaBarra2BarraExterior,{yPercent:-100, transformOrigin:"bottom bottom", duration:1})
.to(graficaBarra2BarraInterior,{yPercent:-11 ,transformOrigin:"bottom bottom",duration:2})


const graficaBarra3BarraExterior = document.querySelector(".grafica-barras.labor .barra-exterior");
const graficaBarra3BarraInterior = document.querySelector(".grafica-barras.labor .barra-interior");
gsap.timeline({repeat: -1, repeatDelay: 1})
.to(graficaBarra3BarraExterior,{yPercent:-100, transformOrigin:"bottom bottom", duration:1})
.to(graficaBarra3BarraInterior,{yPercent:-80 ,transformOrigin:"bottom bottom",duration:2})



const containerTexts = gsap.utils.toArray(".container-text")



containerTexts.forEach(containerText => {

  const titulo = containerText.querySelector("h3");
  const imagen = containerText.querySelector("img");
  const parrafos = containerText.querySelectorAll("p");

  gsap.set(titulo, { opacity: 0, transformOrigin: "50% 50%" });
  gsap.set(imagen, { opacity: 0, transformOrigin: "50% 50%" });
  gsap.set(parrafos, { opacity: 0, transformOrigin: "50% 50%" });

  gsap.timeline()  
 .to(titulo, {
    opacity: 1,
    ease: "none",
    duration:1,
    scrollTrigger: {
      trigger: containerText,
      start: "40% 60%",
      end: "90% 70%",
      scrub: 1
    }
  })

  .to(imagen, {
    opacity: 1,
    ease: "none",
    duration:1,
    scrollTrigger: {
      trigger: containerText,
      start: "40% 60%",
      end: "90% 70%",
      scrub: 1
    }
  })

  
    gsap.to(parrafos, {
      opacity: 1,
      y:5,
      ease: "none",
      duration:1,
      stagger:0.3,
      scrollTrigger: {
        trigger: containerText,
        start: "40% 60%",
        end: "90% 70%",
        scrub: 1
      }

  })
})