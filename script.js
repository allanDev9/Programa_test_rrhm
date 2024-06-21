// script.js

document.addEventListener('DOMContentLoaded', () => {
    const cuestionario = document.getElementById('cuestionario');

    // Preguntas 
    const preguntas = [
        {
            pregunta: "1. ¿En una fiesta, interactúa usted?",
            opciones: {
                a: "a) con muchas personas, incluyendo desconocidas",
                b: "b) con pocas personas, conocidas por usted"
            }
        },
        {
            pregunta: "2. ¿Es usted más?",
            opciones: {
                a: "a) realista que especulativo",
                b: "b) especulativo que realista"
            }
        },
        {
            pregunta: "3. ¿Qué es peor?",
            opciones: {
                a: "a) tener su mente en 'las nubes'",
                b: "b) vivir 'en una rutina'"
            }
        },
        {
            pregunta: "4. ¿Qué le impresiona a usted más?",
            opciones: {
                a: "a) los principios",
                b: "b) las emociones"
            }
        },
        {
            pregunta: "5. ¿Es usted más atraído por?",
            opciones: {
                a: "a) lo convincente aunque sea teórico",
                b: "b) lo experimentable"
            }
        },
        {
            pregunta: "6. ¿Prefiere usted trabajar?",
            opciones: {
                a: "a) con base en fechas límites",
                b: "b) de acuerdo a 'cuando se pueda'"
            }
        },
        {
            pregunta: "7. ¿Toma usted sus decisiones?",
            opciones: {
                a: "a) muy cuidadosamente",
                b: "b) algo impulsivamente"
            }
        },
        {
            pregunta: "8. Cuando usted va a una fiesta, ¿usted?",
            opciones: {
                a: "a) se queda hasta muy tarde y sus energías crecen",
                b: "b) se retira temprano y con energías reducidas"
            }
        },
        {
            pregunta: "9. A usted le atraen más",
            opciones: {
                a: "a) las personas sensibles",
                b: "b) las personas imaginativas"
            }
        },
        {
            pregunta: "10. ¿Está o es usted más interesado por?",
            opciones: {
                a: "a) lo que es real",
                b: "b) lo que es posible"
            }
        },
        {
            pregunta: "11. Cuando usted juzga a otras personas, ¿es influenciado más por?",
            opciones: {
                a: "a) leyes o normas que por circunstancias",
                b: "b) circunstancias que por leyes"
            }
        },
        {
            pregunta: "12. Cuándo se relaciona o se dirige a otras personas, ¿su inclinación es más?",
            opciones: {
                a: "a) objetiva",
                b: "b) personal"
            }
        },

        {
            pregunta: "13. En general, usted tiende a ser",
            opciones: {
                a: "a) puntual en sus responsabilidades.",
                b: "b) algo impuntual, a veces se atrasa."
            }
        },
        {
            pregunta: "14. Qué le molesta más a usted",
            opciones: {
                a: "a) tener sus cosas sin terminar?",
                b: "b) tener sus cosas terminadas?"
            }
        },
        {
            pregunta: "15. En los grupos sociales se mantiene usted",
            opciones: {
                a: "a) informado de lo que le pasa a otros?",
                b: "b) apartado de las noticias sobre lo que le pasa a otros?"
            }
        },
        {
            pregunta: "16. Cuando usted debe hacer cosas ordinarias o normales",
            opciones: {
                a: "a) las hace en forma convencional?",
                b: "b) las hace a su propia manera?"
            }
        },
        {
            pregunta: "17. Los escritores deberían",
            opciones: {
                a: "a) decir lo que ellos quieren decir e interpretar lo que ellos dicen.",
                b: "b) expresar las cosas más bien en forma de analogías."
            }
        },
        {
            pregunta: "18. Qué le atrae a usted más",
            opciones: {
                a: "a) consistencia en el razonamiento?",
                b: "b) armonía en las relaciones humanas?"
            }
        },
        {
            pregunta: "19. Usted se siente mejor emitiendo",
            opciones: {
                a: "a) juicios lógicos",
                b: "b) juicios basados en valores"
            }
        },
        {
            pregunta: "20. Cómo prefiere usted las cosas",
            opciones: {
                a: "a) establecidas y decididas?",
                b: "b) no establecidas y no decididas?"
            }
        },
        {
            pregunta: "21. Diría usted que se considera",
            opciones: {
                a: "a) Determinado?",
                b: "b) Flexible?"
            }
        },
        {
            pregunta: "22. Cuando usted va a hacer una llamada telefónica",
            opciones: {
                a: "a) rara vez repasa qué es lo que va a decir en forma completa",
                b: "b) repasa lo que va a decir"
            }
        },
        {
            pregunta: "23. Los hechos",
            opciones: {
                a: "a) hablan por sí mismos.",
                b: "b) ilustran principios."
            }
        },


        {
            pregunta: "24. Las personas visionarias",
            opciones: {
                a: "a) son algo molestas.",
                b: "b) son fascinantes."
            }
        },
        {
            pregunta: "25. Usted es una persona",
            opciones: {
                a: "a) que actúa con 'cabeza fría'",
                b: "b) que actúa con 'corazón caliente'"
            }
        },
        {
            pregunta: "26. Es peor ser",
            opciones: {
                a: "a) injusto.",
                b: "b) poco comprensivo, tener poca compasión."
            }
        },
        {
            pregunta: "27. Uno debería dejar que los eventos ocurran",
            opciones: {
                a: "a) solo por cuidadosa selección.",
                b: "b) de acuerdo a la suerte o al azar."
            }
        },
        {
            pregunta: "28. Usted se siente mejor",
            opciones: {
                a: "a) habiendo comprado algo.",
                b: "b) habiendo tenido la opción para comprar, aún sin haberlo comprado."
            }
        },
        {
            pregunta: "29. Cuando usted está con otra persona",
            opciones: {
                a: "a) inicia la conversación.",
                b: "b) espera que la otra persona la inicie."
            }
        },
        {
            pregunta: "30. El sentido común es",
            opciones: {
                a: "a) raramente cuestionable.",
                b: "b) frecuentemente cuestionable."
            }
        },
        {
            pregunta: "31. Usted aprecia más en los niños",
            opciones: {
                a: "a) que ellos practiquen sus propias habilidades.",
                b: "b) que ellos ejerciten sus fantasías."
            }
        },
        {
            pregunta: "32. En la toma de decisiones se siente usted mejor considerando como base",
            opciones: {
                a: "a) Criterios fijos (estándares)?",
                b: "b) Sentimientos?"
            }
        },
        {
            pregunta: "33. Es usted",
            opciones: {
                a: "a) más firme que gentil?",
                b: "b) más gentil que firme?"
            }
        },
        {
            pregunta: "34. Qué es más admirable",
            opciones: {
                a: "a) la habilidad para organizar y ser metódico?",
                b: "b) la habilidad para adaptarse y ejecutar las cosas?"
            }
        },
        {
            pregunta: "35. Qué valora usted más",
            opciones: {
                a: "a) lo definido?",
                b: "b) lo flexible?"
            }
        },
        {
            pregunta: "36. Cuando usted experimenta nuevas o no rutinarias interacciones personales",
            opciones: {
                a: "a) se siente usted con más estímulo y energía?",
                b: "b) siente usted que su energía se reduce?"
            }
        },
        {
            pregunta: "37. Usted es más frecuentemente una",
            opciones: {
                a: "a) persona de tipo práctico",
                b: "b) persona de tipo imaginativo"
            }
        },
        {
            pregunta: "38. Usted tiende más a",
            opciones: {
                a: "a) ver cómo otros pueden ser útiles",
                b: "b) ver cómo otros ven y perciben."
            }
        },
        {
            pregunta: "39. Qué le satisface más",
            opciones: {
                a: "a) discutir un asunto exhaustivamente?",
                b: "b) arribar a una decisión en un asunto?"
            }
        },
        {
            pregunta: "40. Qué le controla a usted más",
            opciones: {
                a: "a) la cabeza?",
                b: "b) el corazón?"
            }
        },
        {
            pregunta: "41. Se siente usted mejor con un trabajo",
            opciones: {
                a: "a) siendo contratado, fijo?",
                b: "b) hecho en forma casual?"
            }
        },
        {
            pregunta: "42. Tiende usted a buscar",
            opciones: {
                a: "a) lo ordenado",
                b: "b) 'lo que salga'"
            }
        },
        {
            pregunta: "43. Usted prefiere",
            opciones: {
                a: "a) muchos amigos y poco contacto con ellos.",
                b: "b) pocos amigos y mucho contacto con ellos."
            }
        },
        {
            pregunta: "44. Usted busca más",
            opciones: {
                a: "a) los hechos.",
                b: "b) los principios."
            }
        },
        {
            pregunta: "45. Qué le interesa a usted más",
            opciones: {
                a: "a) producción y distribución?",
                b: "b) diseño e investigación?"
            }
        },
        {
            pregunta: "46. Cuál frase le agradaría a usted escuchar más",
            opciones: {
                a: "a) 'esa es una persona muy lógica'",
                b: "b) 'esa es una persona muy sentimental'"
            }
        },
        {
            pregunta: "47. Qué valora más, en usted mismo",
            opciones: {
                a: "a) ser seguro, no dudoso.",
                b: "b) ser fiel, devoto, comprometido."
            }
        },
        {
            pregunta: "48. Qué prefiere usted con más frecuencia",
            opciones: {
                a: "a) afirmaciones finales e inalterables?",
                b: "b) afirmaciones preliminares y tentativas?"
            }
        },
        {
            pregunta: "49. Usted se siente más confortable",
            opciones: {
                a: "a) después de tomar una decisión.",
                b: "b) antes de tomar una decisión."
            }
        },
        {
            pregunta: "50. Usted",
            opciones: {
                a: "a) habla fácil y largamente con extraños.",
                b: "b) encuentra poco que decir a extraños."
            }
        },
        {
            pregunta: "51. Usted confía más en su",
            opciones: {
                a: "a) experiencia.",
                b: "b) corazonadas, intuición."
            }
        },
        {
            pregunta: "52. Usted se percibe como una persona",
            opciones: {
                a: "a) más práctica que ingeniosa.",
                b: "b) más ingeniosa que práctica."
            }
        },
        {
            pregunta: "53. ¿Cuál persona merece más reconocimiento?",
            opciones: {
                a: "a) una con claro razonamiento y lógica.",
                b: "b) una con sentimientos profundos."
            }
        },
        {
            pregunta: "54. Usted tiende a ser más",
            opciones: {
                a: "a) justo, objetivo.",
                b: "b) empático, subjetivo."
            }
        },
        {
            pregunta: "55. Usted prefiere",
            opciones: {
                a: "a) estar seguro de que las cosas y detalles están bien arreglados.",
                b: "b) dejar que las cosas pasen, con flexibilidad."
            }
        },
        {
            pregunta: "56. En las relaciones personales, las cosas deberían ser",
            opciones: {
                a: "a) renegociables, redefinibles.",
                b: "b) circunstanciales, espontáneas."
            }
        },
        {
            pregunta: "57. Cuando el teléfono suena",
            opciones: {
                a: "a) usted quiere ser el primero en contestar.",
                b: "b) usted desea que alguien más lo conteste."
            }
        },
        {
            pregunta: "58. ¿Qué aprecia usted más en una persona?",
            opciones: {
                a: "a) un fuerte sentido de la realidad.",
                b: "b) una viva imaginación."
            }
        },
        {
            pregunta: "59. Usted es más atraído por",
            opciones: {
                a: "a) lo fundamental, lo básico, en cada situación.",
                b: "b) lo sobresaliente, lo distinto, en cada situación."
            }
        },
        {
            pregunta: "60. ¿Qué error es más grave?",
            opciones: {
                a: "a) ser demasiado apasionado.",
                b: "b) ser demasiado objetivo."
            }
        },
        {
            pregunta: "61. Usted se ve a sí mismo básicamente como",
            opciones: {
                a: "a) una persona de \"cabeza dura\"",
                b: "b) una persona de \"corazón suave\""
            }
        },
        {
            pregunta: "62. ¿Qué situación le atrae más?",
            opciones: {
                a: "a) lo estructurado y programado",
                b: "b) lo no estructurado y no programado"
            }
        },
        {
            pregunta: "63. Usted es una persona",
            opciones: {
                a: "a) más rutinaria que caprichosa o antojadiza.",
                b: "b) más caprichosa y antojadiza que rutinaria."
            }
        },
        {
            pregunta: "64. Usted es una persona más inclinada a",
            opciones: {
                a: "a) interactuar con facilidad.",
                b: "b) ser reservada."
            }
        },
        {
            pregunta: "65. En lo escrito, usted prefiere más",
            opciones: {
                a: "a) lo literal.",
                b: "b) lo figurativo."
            }
        },
        {
            pregunta: "66. Es más difícil para usted",
            opciones: {
                a: "a) identificarse con otros.",
                b: "b) utilizar a otros."
            }
        },
        {
            pregunta: "67. ¿Qué desea usted más para usted mismo?",
            opciones: {
                a: "a) claridad de razonamiento.",
                b: "b) tener fuerte compasión hacia otros."
            }
        },
        {
            pregunta: "68. ¿Qué podría ser peor?",
            opciones: {
                a: "a) No ser diferente, parecido a los otros.",
                b: "b) ser muy criticado."
            }
        },
        {
            pregunta: "69. Usted prefiere acontecimientos y eventos",
            opciones: {
                a: "a) planeados.",
                b: "b) no planeados."
            }
        },
        {
            pregunta: "70. Usted tiende a ser",
            opciones: {
                a: "a) más deliberado y planeador que espontáneo.",
                b: "b) más espontáneo que deliberado y planeador."
            }
        }

    ];

    preguntas.forEach((item, index) => {
        const preguntaDiv = document.createElement('div');
        preguntaDiv.classList.add('mb-4');

        const preguntaLabel = document.createElement('label');
        preguntaLabel.classList.add('block', 'text-lg', 'font-medium', 'mb-2');
        preguntaLabel.textContent = item.pregunta;

        const opcionesDiv = document.createElement('div');
        opcionesDiv.classList.add('flex', 'space-x-4');

        const opcionA = document.createElement('input');
        opcionA.type = 'radio';
        opcionA.id = `pregunta${index}_a`;
        opcionA.name = `pregunta${index}`;
        opcionA.value = 'a';
        opcionA.classList.add('mr-2');

        const opcionALabel = document.createElement('label');
        opcionALabel.setAttribute('for', `pregunta${index}_a`);
        opcionALabel.textContent = item.opciones.a;

        const opcionB = document.createElement('input');
        opcionB.type = 'radio';
        opcionB.id = `pregunta${index}_b`;
        opcionB.name = `pregunta${index}`;
        opcionB.value = 'b';
        opcionB.classList.add('mr-2');

        const opcionBLabel = document.createElement('label');
        opcionBLabel.setAttribute('for', `pregunta${index}_b`);
        opcionBLabel.textContent = item.opciones.b;

        opcionesDiv.appendChild(opcionA);
        opcionesDiv.appendChild(opcionALabel);
        opcionesDiv.appendChild(opcionB);
        opcionesDiv.appendChild(opcionBLabel);

        preguntaDiv.appendChild(preguntaLabel);
        preguntaDiv.appendChild(opcionesDiv);

        cuestionario.appendChild(preguntaDiv);
    });

    const submitBtn = document.getElementById('submitBtn');
    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const respuestas = {};
        let todasRespondidas = true;

        preguntas.forEach((item, index) => {
            const respuesta = document.querySelector(`input[name="pregunta${index}"]:checked`);
            if (!respuesta) {
                todasRespondidas = false;
            }
            respuestas[`pregunta${index}`] = respuesta ? respuesta.value : 'sin responder';
        });

        if (!todasRespondidas) {
            alert('Por favor, responde todas las preguntas antes de enviar.');
        } else {
            console.log(respuestas);
            calcular_mbti_e_i(respuestas);
            alert('Respuestas enviadas. Ver la consola para detalles.');
        }
    });
    
    function calcular_mbti_e_i(respuestas) {
  // calcular e o i
        let contadorA = 0;
        let contadorB = 0;
        const array = new Array(4);


        // Preguntas específicas para E/I
        const preguntasEI = [0, 7, 14, 21, 28, 35, 42, 49, 56, 63];

        // Contar las respuestas 'a' y 'b' solo para las preguntas específicas
        preguntasEI.forEach(index => {
            const pregunta = `pregunta${index}`;
            if (respuestas.hasOwnProperty(pregunta)) {
                if (respuestas[pregunta] === 'a') {
                    contadorA++;
                } else if (respuestas[pregunta] === 'b') {
                    contadorB++;
                }
            }
        });



        if (contadorA>=contadorB) {
            array[0] = "e"
        }else{
            array[0] = "i"
        }

        console.log("las a son: " + contadorA, "las b son:"+ contadorB);
        console.log(array[0]);

  // fin de calcular e o i
    }
});




