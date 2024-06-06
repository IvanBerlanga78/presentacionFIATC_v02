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

const mouse = document.querySelector(".portada svg")


gsap.to(mouse, {y:20, repeat:-1, yoyo:true, ease: Power2.easeInOut})


const btnArchivo = document.querySelector(".archivoInformes")

btnArchivo.addEventListener("click", function(event){
  event.preventDefault();
  document.querySelector(".btnSecundario2022").classList.toggle('active');
  document.querySelector(".btnSecundario2023").classList.toggle('active');
})

const titulosSeccion = document.querySelectorAll(".tituloSeccion")

// Animación Títulos de sección
titulosSeccion.forEach((tituloSeccion, index) => {

  let titulo = tituloSeccion.querySelector("h2") 


const animation = gsap.from(titulo, {
  opacity: 0,
  duration:1.5
})
ScrollTrigger.create({
  trigger:titulo,
  start:"50 80%",
  end:"70% 60%",
  animation:animation,
  toggleActions: "play none none reverse"
})
})



const grafica1Fondo = document.querySelector("#cartera-negocio #G1-fondo");
const grafica2Fondo = document.querySelector("#cartera-negocio #G2-fondo");
const grafica1Ano = document.querySelector("#cartera-negocio #G1-ano");
const grafica2Ano = document.querySelector("#cartera-negocio #G2-ano");
const grafica1dataVida = document.querySelector("#cartera-negocio #G1-vida");
const grafica2dataVida = document.querySelector("#cartera-negocio #G2-vida");
const grafica1dataVidaTxt = document.querySelector("#cartera-negocio #G1-vida-txt");
const grafica2dataVidaTxt = document.querySelector("#cartera-negocio #G2-vida-txt");
const grafica1dataSalud = document.querySelector("#cartera-negocio #G1-salud");
const grafica2dataSalud = document.querySelector("#cartera-negocio #G2-salud");
const grafica1dataSaludTxt = document.querySelector("#cartera-negocio #G1-salud-txt");
const grafica2dataSaludTxt = document.querySelector("#cartera-negocio #G2-salud-txt");
const grafica1dataAutos = document.querySelector("#cartera-negocio #G1-autos");
const grafica2dataAutos = document.querySelector("#cartera-negocio #G2-autos");
const grafica1dataAutosTxt = document.querySelector("#cartera-negocio #G1-autos-txt");
const grafica2dataAutosTxt = document.querySelector("#cartera-negocio #G2-autos-txt");
const grafica1dataMultirriesgos = document.querySelector("#cartera-negocio #G1-multirriesgos");
const grafica2dataMultirriesgos = document.querySelector("#cartera-negocio #G2-multirriesgos");
const grafica1dataMultirriesgosTxt = document.querySelector("#cartera-negocio #G1-multirriesgos-txt");
const grafica2dataMultirriesgosTxt = document.querySelector("#cartera-negocio #G2-multirriesgos-txt");
const grafica1dataDiversos = document.querySelector("#cartera-negocio #G1-diversos");
const grafica2dataDiversos = document.querySelector("#cartera-negocio #G2-diversos");
const grafica1dataDiversosTxt = document.querySelector("#cartera-negocio #G1-diversos-txt");
const grafica2dataDiversosTxt = document.querySelector("#cartera-negocio #G2-diversos-txt");

const graph1Ani = gsap.timeline({paused:true})
.from ([grafica1Fondo, grafica2Fondo], {scale:0, ease:Back, transformOrigin:"50% 50%", stagger:0.1})
.from ([grafica1Ano, grafica2Ano], {opacity:0, ease:Back, transformOrigin:"50% 50%", stagger:0.1})
.from ([grafica1dataVida, grafica2dataVida], {opacity:0, ease:Back, transformOrigin:"50% 50%", stagger:0.1})
.from ([grafica1dataVidaTxt, grafica2dataVidaTxt], {opacity:0, ease:Back, transformOrigin:"50% 50%", stagger:0.1})
.from ([grafica1dataSalud, grafica2dataSalud], {opacity:0, ease:Back, transformOrigin:"50% 50%", stagger:0.1})
.from ([grafica1dataSaludTxt, grafica2dataSaludTxt], {opacity:0, ease:Back, transformOrigin:"50% 50%", stagger:0.1})
.from ([grafica1dataAutos, grafica2dataAutos], {opacity:0, ease:Back, transformOrigin:"50% 50%", stagger:0.1})
.from ([grafica1dataAutosTxt, grafica2dataAutosTxt], {opacity:0, ease:Back, transformOrigin:"50% 50%", stagger:0.1})
.from ([grafica1dataMultirriesgos, grafica2dataMultirriesgos], {opacity:0, ease:Back, transformOrigin:"50% 50%", stagger:0.1})
.from ([grafica1dataMultirriesgosTxt, grafica2dataMultirriesgosTxt], {opacity:0, ease:Back, transformOrigin:"50% 50%", stagger:0.1})
.from ([grafica1dataDiversos, grafica2dataDiversos], {opacity:0, ease:Back, transformOrigin:"50% 50%", stagger:0.1})
.from ([grafica1dataDiversosTxt, grafica2dataDiversosTxt], {opacity:0, ease:Back, transformOrigin:"50% 50%", stagger:0.1})

  ScrollTrigger.create({
    trigger:".cartera-negocio-container",
    animation:graph1Ani,
    scrub:1,
    start:"40% 60%",
    end:"60% 50%"
  })

  const graficaPrimasFondo = document.querySelector("#primas #fondo");
  const graficaPrimasAno = document.querySelector("#primas #año");
  const dataPrimasVida = document.querySelector("#primas #vida");
  const dataPrimasVidaTxt = document.querySelector("#primas #vida-txt");
  const dataPrimasNoVida = document.querySelector("#primas #no-vida");
  const dataPrimasNoVidaTxt = document.querySelector("#primas #no-vida-txt");
  const graph2Ani = gsap.timeline({paused:true})
  .from ([graficaPrimasFondo, graficaPrimasAno], {scale:0, ease:Back, transformOrigin:"50% 50%", stagger:0.1})
  .from ([dataPrimasVida, dataPrimasVidaTxt], {opacity:0, ease:Back, transformOrigin:"50% 50%", stagger:0.1})
  .from ([dataPrimasNoVida, dataPrimasNoVidaTxt], {opacity:0, ease:Back, transformOrigin:"50% 50%", stagger:0.1})
  
    ScrollTrigger.create({
      trigger:".primas-container",
      animation:graph2Ani,
      pin:true,
      scrub:1,
      start:"30% 40%",
      end:"100% 60%",
  
    })

  document.querySelectorAll(".scrolltotop").forEach((btnlogo, index) => {
    btnlogo.addEventListener("click", () => {
      gsap.to(window, {duration: 1, scrollTo:{y:"#portada"}});
    });
  });  


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

/*  HScrollContainer.forEach((HScrollContainerItem) => {
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
*/
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

  gsap.utils.toArray(".animNumber").forEach(number => {
    var tler =  gsap.to(number, {
        scale:1.1,
        duration:1,
        ease:"back",
        pin:true,
        markers:true,
        scrollTrigger: {
            trigger: number,
            start: "top 50%",
            end: "bottom 60%",
            toggleActions: "play none none none" 
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
              start: "top 90%",
              end: "bottom 100%",
              toggleActions: "play none none none"
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
                start: "top 90%",
                end: "bottom 100%",
                toggleActions: "play none none none"
            }
        }); })


   
const containerTexts = gsap.utils.toArray(".container-text")

containerTexts.forEach(containerText => {

  const titulo = containerText.querySelector("h3");
  const imagen = containerText.querySelector("img");
  const parrafos = containerText.querySelectorAll("p");

  gsap.set(titulo, { opacity: 0, transformOrigin: "0% 50%" });
  gsap.set(imagen, { opacity: 0, transformOrigin: "0% 50%" });
  gsap.set(parrafos, { opacity: 0, transformOrigin: "0% 50%" });

  gsap.timeline()  
 .to(titulo, {
    opacity: 1,
    ease: "none",
    scrollTrigger: {
      trigger: containerText,
      start: "10% 70%",
      end: "90% 80%",
      scrub: 1
    }
  })
  
   .to(parrafos, {
      opacity: 1,
      y:5,
      ease: "none",
      stagger:3,
      scrollTrigger: {
        trigger: containerText,
        start: "50% 70%",
        end: "90% 80%",
        scrub: 1
      }

  })
  .to(imagen, {
    opacity: 1,
    ease: "none",
    scrollTrigger: {
      trigger: containerText,
      start: "70% 70%",
      end: "90% 80%",
      scrub: 1
    }
  })
})     


}) //End responsive >1100

mm.add("(max-width: 1100px)", () => {

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
            start: "30% 80%",
            end: "bottom 100%",
            toggleActions: "play none none none"
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
              start: "30% 80%",
              end: "bottom 100%",
              toggleActions: "play none none none"
          }
      }); })


const containerTexts = gsap.utils.toArray(".container-text")

containerTexts.forEach(containerText => {

  const titulo = containerText.querySelector("h3");
  const imagen = containerText.querySelector("img");
  const parrafos = containerText.querySelectorAll("p");

  gsap.set(titulo, { opacity: 0, transformOrigin: "0% 50%" });
  gsap.set(imagen, { opacity: 0, transformOrigin: "0% 50%" });
  gsap.set(parrafos, { opacity: 0, transformOrigin: "0% 50%" });

  gsap.timeline()
  .to(imagen, {
    opacity: 1,
    ease: "none",
    scrollTrigger: {
      trigger: containerText,
      start: "0% 50%",
      end: "90% 80%",
      scrub: 1
    }
  })  
 .to(titulo, {
    opacity: 1,
    ease: "none",
    scrollTrigger: {
      trigger: containerText,
      start: "0% 50%",
      end: "90% 80%",
      scrub: 1
    }
  })
  
   .to(parrafos, {
      opacity: 1,
      y:5,
      ease: "none",
      stagger:3,
      scrollTrigger: {
        trigger: containerText,
        start: "50% 70%",
        end: "90% 80%",
        scrub: 1
      }

  })
  
})


})//End responsive <1100

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
//.to(graficaBarra1BarraExterior,{yPercent:-100, transformOrigin:"bottom bottom", duration:1})
.to(graficaBarra1BarraInterior,{yPercent:-95 ,transformOrigin:"bottom bottom",duration:2})


const graficaBarra2BarraExterior = document.querySelector(".grafica-barras.plantilla .barra-exterior");
const graficaBarra2BarraInterior = document.querySelector(".grafica-barras.plantilla .barra-interior");
gsap.timeline({repeat: -1, repeatDelay: 1})
//.to(graficaBarra2BarraExterior,{yPercent:-100, transformOrigin:"bottom bottom", duration:1})
.to(graficaBarra2BarraInterior,{yPercent:-35 ,transformOrigin:"bottom bottom",duration:2})


const graficaBarra3BarraExterior = document.querySelector(".grafica-barras.labor .barra-exterior");
const graficaBarra3BarraInterior = document.querySelector(".grafica-barras.labor .barra-interior");
gsap.timeline({repeat: -1, repeatDelay: 1})
//.to(graficaBarra3BarraExterior,{yPercent:-100, transformOrigin:"bottom bottom", duration:1})
.to(graficaBarra3BarraInterior,{yPercent:-65 ,transformOrigin:"bottom bottom",duration:2})


const Separators = document.querySelectorAll(".separator")

Separators.forEach(Separator=>{
  gsap.timeline({repeat: -1, repeatDelay: 1, yoyo:true})
  //.to(Separator,{backgroundColor:"#3b6dac" ,transformOrigin:"bottom bottom",duration:3})

  const animItem = Separator.querySelector(".animitem");

  gsap.timeline({repeat: -1,  yoyo:true})
  .to(animItem, {width:800,transformOrigin:"center", duration:6})
})





const card = document.querySelector(".portada .content");
const motionMatchMedia = window.matchMedia("(prefers-reduced-motion)");
const THRESHOLD = 15;

/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/a-3d-hover-effect-using-css-transforms
 */
function handleHover(e) {
  const { clientX, clientY, currentTarget } = e;
  const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

  const horizontal = (clientX - offsetLeft) / clientWidth;
  const vertical = (clientY - offsetTop) / clientHeight;
  const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
  const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);

  card.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
}

function resetStyles(e) {
  card.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
}

if (!motionMatchMedia.matches) {
  card.addEventListener("mousemove", handleHover);
  card.addEventListener("mouseleave", resetStyles);
}