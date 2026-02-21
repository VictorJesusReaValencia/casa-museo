import './styles.css';
import { Viewer } from '@photo-sphere-viewer/core';
import { VirtualTourPlugin } from '@photo-sphere-viewer/virtual-tour-plugin';
import { MarkersPlugin } from '@photo-sphere-viewer/markers-plugin';

const entradaImage = 'https://i.imgur.com/2o8A3Vv.jpeg';
const pasilloImage = 'https://i.imgur.com/o74TMI8.jpeg';
const salaImage = 'https://i.imgur.com/ZFOEptt.jpeg';
import loaderGif from './images/loader.gif';
import img01 from './images/01.jpg';
import img02 from './images/02.jpg';
import img1 from './images/1.jpg';
import img2 from './images/2.jpg';
import salaUnoEntradaDerecha from './images/5.jpg';
import centroSalaUno from './images/14.jpg';
import centroBustoAmadoNervo from './images/6.jpg';
import segundaEsquinaSalaUno from './images/7.jpg';
import centroDeLaSalaFondo from './images/8.jpg';
import terceraEsquinaSalaUno from './images/9.jpg';
import aladoTerceraEsquinaSalaUno from './images/10.jpg';
import cuartaEsquinaSalaUno from './images/11.jpg';
import primeraSalaDos from './images/16.jpg';
import segundaSalaDos from './images/18.jpg';
import terceraSalaDos from './images/26.jpg';
import cuartaSalaDos from './images/20.jpg';
import quintaSalaDos from './images/22.jpg';
import sextaSalaDos from './images/23.jpg';
import septimaSalaDos from './images/25.jpg';
import pasillo1 from './images/pasillo1.jpg';
import pasillo2 from './images/pasillo2.jpg';
import pasillo3 from './images/pasillo3.jpg';
import pasillo4 from './images/pasillo4.jpg';
import primeraSala4 from './images/primeraSala4.jpg';
import segundaSala4 from './images/segundaSala4.jpg';
import terceraSala4 from './images/terceraSala4.jpg';
import cuartaSala4 from './images/cuartaSala4.jpg';
import segundaEsquinaSala4 from './images/segundaEsquinaSala4.jpg';
import terceraEsquinaSala4 from './images/terceraEsquinaSala4.jpg';
import conexionSala4a3 from './images/conexionSala4a3.jpg';
import primeraSala3 from './images/primeraSala3.jpg';
import centroSala3 from './images/centroSala3.jpg';
import estatuaAmado from './images/estatuaAmado.jpg';

const nodes = [
  {
    id: '1',
    panorama: img01,
    name: 'Entrada Museo',
    caption: 'Casa museo Amado Nervo <b>&copy; FYTBV</b>',
    links: [
      {
        nodeId: '2',
        position: { yaw: 21, pitch: 0.1 },
      },
    ],
    sphereCorrection: { pan: '58deg' },
  },
  {
    id: '2',
    panorama: img02,
    name: 'Pasillo',
    caption: 'Casa museo Amado Nervo <b>&copy; FYTBV</b>',
    links: [
      {
        nodeId: '3',
        position: { yaw: Math.PI / 2 + 0.2, pitch: 0.1 },
      },
      {
        nodeId: '1',
        position: { yaw: -Math.PI / 2 + 0.2, pitch: 0.2 },
      },
    ],
    sphereCorrection: { pan: '80deg' },
  },
  {
    id: '3',
    panorama: img1,
    name: 'Entrada',
    caption: 'Casa museo Amado Nervo <b>&copy; FYTBV</b>',
    links: [
      {
        nodeId: '2',
        position: { yaw: 99, pitch: 0.1 },
      },
      {
        nodeId: '4',
        position: { yaw: -Math.PI / 4 + 180, pitch: 0.2 },
      },
      {
        nodeId: 'pasillo1',
        position: { yaw: Math.PI / 2 + 0.2, pitch: 0.2 },
      },
      {
        nodeId: 'primeraSala4',
        position: { yaw: 13, pitch: 0.2 },
      }
    ],
    sphereCorrection: { pan: '80deg' },
  },
  {
    id: '4',
    panorama: img2,
    name: 'Sala de exposiciones',
    caption: 'Casa museo Amado Nervo <b>&copy; FYTBV</b>',
    links: [
      {
        nodeId: '5',
        position: { yaw: -Math.PI / 8, pitch: 0.1 },
      },
      {
        nodeId: 'centroSalaUno',
        position: { yaw: Math.PI / 4 + 179.9, pitch: 0.1 },
      },
      {
        nodeId: 'cuartaEsquinaSalaUno',
        position: { yaw: Math.PI / 2 + 89.7, pitch: 0.1 },
      },
      {
        nodeId: '3',
        position: { yaw: -Math.PI / 4 + 360, pitch: 0.2 },
      }
    ],
  },
  {
    id: '5',
    panorama: salaUnoEntradaDerecha,
    name: 'Entrada derecha de la sala',
    caption: 'Casa museo Amado Nervo <b>&copy; FYTBV</b>',
    links: [
      {
        nodeId: '4',
        position: { yaw: Math.PI / 4 + 360, pitch: 0.1 },
      },
      {
        nodeId: 'centroSalaUno',
        position: { yaw: Math.PI / 4 + 285.7, pitch: 0.1 },
      },
      {
        nodeId: 'centroBustoAmadoNervo',
        position: { yaw: -190, pitch: 0.1 },
      }
    ]
      
  },
  {
    id: 'centroSalaUno',
    panorama: centroSalaUno,
    name: 'Centro de la sala',
    caption: 'Casa museo Amado Nervo <b>&copy; FYTBV</b>',
    links: [
      {
        nodeId: 'segundaEsquinaSalaUno',
        position: { yaw: 300, pitch: 0.1 },
      },
      {
        nodeId: '5',
        position: { yaw: 120, pitch: 0.1 },
      },
      {
        nodeId:'terceraEsquinaSalaUno',
        position: { yaw: 60, pitch: 0.1 },
      },
      {
        nodeId: 'cuartaEsquinaSalaUno',
        position: { yaw: 90, pitch: 0.1 },
      }
    ]
    
  },

  {
    id: 'centroBustoAmadoNervo',
    panorama: centroBustoAmadoNervo,
    name: 'Busto de Amado Nervo',
    caption: 'Casa museo Amado Nervo <b>&copy; FYTBV</b>', 
    links: [
      {
        nodeId: '5',
        position: { yaw: 190, pitch: 0.1 },
      },
      {
        nodeId: 'centroSalaUno',
        position: { yaw: 279, pitch: 0.1 },
      },
      {
        nodeId: 'segundaEsquinaSalaUno',
        position: { yaw: 381, pitch: 0.1 },
      }
    ]
  },
  {
    id: 'segundaEsquinaSalaUno',
    panorama: segundaEsquinaSalaUno,
    name: 'Segunda esquina de la sala',
    caption: 'Casa museo Amado Nervo <b>&copy; FYTBV</b>',
    links: [
      {
        nodeId: 'centroBustoAmadoNervo',
        position: { yaw: 220, pitch: 0.1 },
      },
      {
        nodeId: 'centroSalaUno',
        position: { yaw: -300.1, pitch: 0.1 },
      },
      {
        nodeId: 'centroDeLaSalaFondo',
        position: { yaw: -299, pitch: 0.1 },
      }
    ]
  },
  {
    id: 'centroDeLaSalaFondo',
    panorama: centroDeLaSalaFondo,
    name: 'Centro de la sala (fondo)',
    caption: 'Casa museo Amado Nervo <b>&copy; FYTBV</b>',
    links: [
      {
        nodeId: 'segundaEsquinaSalaUno',
        position: { yaw: 300, pitch: 0.1 },
      },
      {
        nodeId: 'centroSalaUno',
        position: { yaw: -289, pitch: 0.1 },
      },
      {
        nodeId: 'terceraEsquinaSalaUno',
        position: { yaw: -294, pitch: 0.1 },
      }
    ]
  },
  {
    id: 'terceraEsquinaSalaUno',
    panorama: terceraEsquinaSalaUno,
    name: 'Tercera esquina de la sala',
    caption: 'Casa museo Amado Nervo <b>&copy; FYTBV</b>',
    links: [
      {
        nodeId: 'centroSalaUno',
        position: { yaw: 294, pitch: 0.1 },
      },
      {
        nodeId: 'centroDeLaSalaFondo',
        position: { yaw: 180, pitch: 0.1 },
      },
      {
        nodeId: 'aladoTerceraEsquinaSalaUno',
        position: { yaw: 20, pitch: 0.1 },
      }
    ]
  },
  {
    id: 'aladoTerceraEsquinaSalaUno',
    panorama: aladoTerceraEsquinaSalaUno,
    name: 'Al lado de la tercera esquina de la sala',
    caption: 'Casa museo Amado Nervo <b>&copy; FYTBV</b>',
    links: [
      {
        nodeId: 'terceraEsquinaSalaUno',
        position: { yaw: -40, pitch: 0.1 },
      },
      {
        nodeId: 'centroSalaUno',
        position: { yaw: -20, pitch: 0.1 },
      },
      {
        nodeId: 'cuartaEsquinaSalaUno',
        position: { yaw: 25, pitch: 0.1 },
      },
      {
        nodeId: 'primeraSalaDos',
        position: { yaw: 39, pitch: 0.1 },
      }
    ]
  },
  {
    id: 'cuartaEsquinaSalaUno',
    panorama: cuartaEsquinaSalaUno,
    name: 'Cuarta esquina de la sala',
    caption: 'Casa museo Amado Nervo <b>&copy; FYTBV</b>',
    links: [
      {
        nodeId: 'aladoTerceraEsquinaSalaUno',
        position: { yaw: -25, pitch: 0.1 },
      },
      {
        nodeId: 'centroSalaUno',
        position: { yaw: -155, pitch: 0.1 },
      },
      {
        nodeId: '4',
        position: { yaw: -160, pitch: 0.1 },
      }
    ]
  },
  {
    id: 'primeraSalaDos',
    panorama: primeraSalaDos,
    name: 'Primera sala de la segunda planta',
    caption: 'Casa museo Amado Nervo <b>&copy; FYTBV</b>',
    links: [
      {
        nodeId: 'aladoTerceraEsquinaSalaUno',
        position: { yaw: -39, pitch: 0.1 },
      },
      {
        nodeId: 'segundaSalaDos',
        position: { yaw: 40, pitch: 0.1 },
      },
      {
        nodeId: 'terceraSalaDos',
        position: { yaw: 20, pitch: 0.1 },
      }
    ]
  },
  {
    id: 'segundaSalaDos',
    panorama: segundaSalaDos,
    name: 'Segunda foto de la segunda sala',
    caption: 'Casa museo Amado Nervo <b>&copy; FYTBV</b>',
    links: [
      {
        nodeId: 'primeraSalaDos',
        position: { yaw: -20, pitch: 0.1 },
      },
      {
        nodeId: 'cuartaSalaDos',
        position: { yaw: -181, pitch: 0.1 },
      }
    ]
  },
  {
    id: 'terceraSalaDos',
    panorama: terceraSalaDos,
    name: 'Tercera foto de la segunda sala',
    caption: 'Casa museo Amado Nervo <b>&copy; FYTBV</b>',
    links: [
      {
        nodeId: 'septimaSalaDos',
        position: { yaw: 180, pitch: 0.1 },
      },
      {
        nodeId: 'primeraSalaDos',
        position: { yaw: -20, pitch: 0.1 },
      }
    ]
  },
  {
    id: 'cuartaSalaDos',
    panorama: cuartaSalaDos,
    name: 'Cuarta foto de la segunda sala',
    caption: 'Casa museo Amado Nervo <b>&copy; FYTBV</b>',
    links: [
      {
        nodeId: 'segundaSalaDos',
        position: { yaw: -160, pitch: 0.1 },
      },
      {
        nodeId: 'quintaSalaDos',
        position: { yaw: 19, pitch: 0.1 },
      }
    ]
  },
  {
    id: 'quintaSalaDos',
    panorama: quintaSalaDos,
    name: 'Quinta foto de la segunda sala',
    caption: 'Casa museo Amado Nervo <b>&copy; FYTBV</b>',
    links: [
      {
        nodeId: 'cuartaSalaDos',
        position: { yaw: -19, pitch: 0.1 },
      },
      {
        nodeId: 'sextaSalaDos',
        position: { yaw: 10, pitch: 0.1 },
      }
    ]
  },
  {
    id: 'sextaSalaDos',
    panorama: sextaSalaDos,
    name: 'Sexta foto de la segunda sala',
    caption: 'Casa museo Amado Nervo <b>&copy; FYTBV</b>',
    links: [
      {
        nodeId: 'quintaSalaDos',
        position: { yaw: 200, pitch: 0.1 },
      },
      {
        nodeId: 'septimaSalaDos',
        position: { yaw: 190, pitch: 0.1 },
      }
    ]
  },
  {
    id: 'septimaSalaDos',
    panorama: septimaSalaDos,
    name: 'Séptima foto de la segunda sala',
    caption: 'Casa museo Amado Nervo <b>&copy; FYTBV</b>',
    links: [
      {
        nodeId: 'sextaSalaDos',
        position: { yaw: -190, pitch: 0.1 },
      },
      {
        nodeId: 'segundaSalaDos',
        position: { yaw: 20, pitch: 0.1 },
      },
      {
        nodeId: 'pasillo3',
        position: { yaw: 60, pitch: 0.2 },
      }
    ]
  },
  {
    id: 'pasillo1',
    panorama: pasillo1,
    name: 'Pasillo 1',
    caption: 'Casa museo Amado Nervo <b>&copy; FYTBV</b>',
    links: [
      {
        nodeId: '3',
        position: { yaw: Math.PI / 2 - 5, pitch: 0.2 },
      },
      {
        nodeId: 'pasillo2',
        position: { yaw: Math.PI / 2 + 5, pitch: 0.2 },
      }
    ]
  },
  {
    id: 'pasillo2',
    panorama: pasillo2,
    name: 'Pasillo 2',
    caption: 'Casa museo Amado Nervo <b>&copy; FYTBV</b>',
    links: [
      {
        nodeId: 'pasillo1',
        position: { yaw: Math.PI / 2 - 5, pitch: 0.2 },
      },
      {
        nodeId: 'pasillo3',
        position: { yaw: Math.PI / 2 + 5, pitch: 0.2 },
      },
      
    ]
  },
  {
    id: 'pasillo3',
    panorama: pasillo3,
    name: 'Pasillo 3',
    caption: 'Casa museo Amado Nervo <b>&copy; FYTBV</b>',
    links: [
      {
        nodeId: 'pasillo2',
        position: { yaw: Math.PI / 2 - 5, pitch: 0.2 },
      },
      {
        nodeId: 'pasillo4',
        position: { yaw: Math.PI / 2 + 5, pitch: 0.2 },
      },
      {
        nodeId: 'septimaSalaDos',
        position: { yaw: 360, pitch: 0.2 },
      },
      {
        nodeId: 'centroSala3',
        position: { yaw: 130, pitch: 0.2 },
      }
    ]
  },
  {
    id: 'pasillo4',
    panorama: pasillo4,
    name: 'Pasillo 4',
    caption: 'Casa museo Amado Nervo <b>&copy; FYTBV</b>',
    links: [
      {
        nodeId: 'pasillo3',
        position: { yaw: Math.PI / 2 - 5, pitch: 0.2 },
      },
      {
        nodeId: 'estatuaAmado',
        position: { yaw: Math.PI / 2 + 5, pitch: 0.2 },
      }
    ]
  },
  {
    id: 'primeraSala4',
    panorama: primeraSala4,
    name: 'Primera sala de la cuarta planta',
    caption: 'Casa museo Amado Nervo <b>&copy; FYTBV</b>',
    links: [
      {
        nodeId: '3',
        position: { yaw: 5, pitch: 0.2 },
      },
      {
        nodeId: 'segundaSala4',
        position: { yaw: 90, pitch: 0.2 },
      },
      {
        nodeId: 'conexionSala4a3',
        position: { yaw: 60, pitch: 0.2 },
      }
    ]
  },
  {
    id: 'segundaSala4',
    panorama: segundaSala4,
    name: 'Segunda sala de la cuarta planta',
    caption: 'Casa museo Amado Nervo <b>&copy; FYTBV</b>',
    links: [
      {
        nodeId: 'terceraSala4',
        position: { yaw: 89.8, pitch: 0.2 },
      },
      {
        nodeId: 'primeraSala4',
        position: { yaw: 5, pitch: 0.2 },
      }
    ]
  },
  {
    id: 'conexionSala4a3',
    panorama: conexionSala4a3,
    name: 'Conexión entre la primera sala de la cuarta planta y el pasillo',
    caption: 'Casa museo Amado Nervo <b>&copy; FYTBV</b>',
    links: [
      {
        nodeId: 'primeraSala4',
        position: { yaw: -60, pitch: 0.2 },
      },
      {
        nodeId: 'primeraSala3',
        position: { yaw: 120, pitch: 0.2 },
      }
    ]
  },
  {
    id: 'terceraSala4',
    panorama: terceraSala4,
    name: 'Tercera sala de la cuarta planta',
    caption: 'Casa museo Amado Nervo <b>&copy; FYTBV</b>',
    links: [
      {
        nodeId: 'segundaSala4',
        position: { yaw: 5, pitch: 0.2 },
      },
      {
        nodeId: 'segundaEsquinaSala4',
        position: { yaw: 178, pitch: 0.2 },
      },
      {
        nodeId: 'terceraEsquinaSala4',
        position: { yaw: 120, pitch: 0.2 },
      }
    ]
  },
  {
    id: 'segundaEsquinaSala4',
    panorama: segundaEsquinaSala4,
    name: 'Segunda esquina de la cuarta planta',
    caption: 'Casa museo Amado Nervo <b>&copy; FYTBV</b>',
    links: [
      {
        nodeId: 'terceraSala4',
        position: { yaw: -178, pitch: 0.2 },
      }
    ]
  },
  {
    id: 'terceraEsquinaSala4',
    panorama: terceraEsquinaSala4,
    name: 'Tercera esquina de la cuarta planta',
    caption: 'Casa museo Amado Nervo <b>&copy; FYTBV</b>',
    links: [
      {
        nodeId: 'terceraSala4',
        position: { yaw: -9, pitch: 0.2 },
      }
    ]

  },
  {
    id: 'primeraSala3',
    panorama: primeraSala3,
    name: 'Primera sala de la tercera planta',
    caption: 'Casa museo Amado Nervo <b>&copy; FYTBV</b>',
    links: [
      {
        nodeId: 'centroSala3',
        position: { yaw: 188, pitch: 0.2 },
      },
      {
        nodeId: 'conexionSala4a3',
        position: { yaw: -180, pitch: 0.2 },
      }
    ]
  },
  {
    id: 'centroSala3',
    panorama: centroSala3,
    name: 'Centro de la sala de la tercera planta',
    caption: 'Casa museo Amado Nervo <b>&copy; FYTBV</b>',
    links: [
      {
        nodeId: 'primeraSala3',
        position: { yaw: -180, pitch: 0.2 },
      },
      {
        nodeId: 'pasillo3',
        position: { yaw: -201, pitch: 0.2 },
      }
    ]
  },
  {
    id: 'estatuaAmado',
    panorama: estatuaAmado,
    name: 'Estatua de Amado Nervo',
    caption: 'Casa museo Amado Nervo <b>&copy; FYTBV</b>',
    links: [
      {
          nodeId: 'pasillo4',
          position: { yaw: -Math.PI / 2 - 5, pitch: 0.2 },
      }
    ]
  },
];

// Inicialización del visor
const viewer = new Viewer({
  container: 'viewer',
  loadingImg: loaderGif,
  touchmoveTwoFingers: false,
  mousewheelCtrlKey: true,
  defaultYaw: '130deg',
  navbar: 'zoom move gallery caption fullscreen',
  defaultZoomLvl: 0,
  plugins: [
    MarkersPlugin,
    [VirtualTourPlugin, {
      positionMode: 'manual',
      nodes: nodes,
      startNodeId: '1',
    }],
  ],
});
