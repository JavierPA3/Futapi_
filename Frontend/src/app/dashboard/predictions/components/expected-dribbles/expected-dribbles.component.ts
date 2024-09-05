import { Component } from '@angular/core';
import { Field, FieldType } from '../../../interfaces/form.interface';
import { Player, Comp } from '../../../interfaces/jugador';
import { JugadoresService } from '../../../services/jugadores.service';

@Component({
  selector: 'app-expected-dribbles',
  templateUrl: './expected-dribbles.component.html',
  styleUrl: './expected-dribbles.component.css'
})
export class ExpectedDribblesComponent {
  public players: Player[] = [];
  selectedPlayerRk: string | number | null = null;
  selectedPlayer: Player | null = null;
  public form: Array<Field> = [
    {
      name: 'Pos',
      label: 'Posición',
      disabled: false,
      type: FieldType.select,
      options: [
        { value: 0, description: "Portero", default: true },
        { value: 1, description: "Defensa", default: false },
        { value: 2, description: "Centrocampista", default: false },
        { value: 3, description: "Delantero", default: false },
      ],
      value: "",
    },
    {
      name: 'Age',
      label: 'Edad',
      min: 15,
      max: 50,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'Born',
      label: 'Nacimiento',
      min: 1970,
      max: 2010,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'MP',
      label: 'Partidos jugados',
      min: 0,
      max: 1000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'Starts',
      label: 'Partidos jugados de inicio',
      min: 0,
      max: 1000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'Min',
      label: 'Minutos jugados',
      min: 0,
      max: 100000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: '90s',
      label: 'Minutos jugados/partido',
      min: 0,
      max: 100000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'Goals',
      label: 'Goles',
      min: 0,
      max: 1000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'Shots',
      label: 'Tiros',
      min: 0,
      max: 100000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'SoT',
      label: 'Tiros a puerta',
      min: 0,
      max: 100000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'SoT%',
      label: 'Precisión de los tiros a puerta',
      min: 0,
      max: 100,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'G/Sh',
      label: 'Goles/Tiro',
      min: 0,
      max: 100,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'G/SoT',
      label: 'Goles/Tiro a puerta',
      min: 0,
      max: 100,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'ShoDist',
      label: 'Distancia de tiro (yardas)',
      min: 0,
      max: 100,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'ShoFK',
      label: 'Lanzamientos de falta',
      min: 0,
      max: 10000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'ShoPK',
      label: 'Penaltis marcados',
      min: 0,
      max: 1000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'PKatt',
      label: 'Penaltis lanzados',
      min: 0,
      max: 10000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'PasTotCmp',
      label: 'Pases totales completados',
      min: 0,
      max: 1000000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'PasTotAtt',
      label: 'Pases totales intentados',
      min: 0,
      max: 1000000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'PasTotCmp%',
      label: 'Precisión de los pases',
      min: 0,
      max: 100,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'PasTotDist',
      label: 'Distancia recorrida por los pases',
      min: 0,
      max: 1000000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'PasTotPrgDist',
      label: 'Distancia de los pases progresivos',
      min: 0,
      max: 1000000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'PasShoCmp',
      label: 'Pases que acaban en tiro completados',
      min: 0,
      max: 100000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'PasShoAtt',
      label: 'Pases que acaban en tiro intentados',
      min: 0,
      max: 100000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'PasShoCmp%',
      label: 'Precisión de pases que llevan a tiro',
      min: 0,
      max: 100,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'PasMedCmp',
      label: 'Pases completados en 1/2 campo',
      min: 0,
      max: 100000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'PasMedAtt',
      label: 'Pases intentados en 1/2 campo',
      min: 0,
      max: 100000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'PasMedCmp%',
      label: 'Precisión de pase en 1/2 campo',
      min: 0,
      max: 100,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'PasLonCmp',
      label: 'Pases largos completados',
      min: 0,
      max: 100000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'PasLonAtt',
      label: 'Pases largos intentados',
      min: 0,
      max: 100000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'PasLonCmp%',
      label: 'Precisión de pase largo',
      min: 0,
      max: 100,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'Assists',
      label: 'Asistencias',
      min: 0,
      max: 10000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'PasAss',
      label: 'Pases que acaban en asistencia',
      min: 0,
      max: 10000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'Pas3rd',
      label: 'Pases en tercio final',
      min: 0,
      max: 100000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'PPA',
      label: 'Pases en el área rival completados',
      min: 0,
      max: 100000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'CrsPA',
      label: 'Centros completados',
      min: 0,
      max: 1000000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'PasProg',
      label: 'Pases progresivos',
      min: 0,
      max: 100000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'PasAtt',
      label: 'Pases intentados',
      min: 0,
      max: 10000000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'PasLive',
      label: 'Pases con balón en juego',
      min: 0,
      max: 1000000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'PasDead',
      label: 'Pases a balón parado',
      min: 0,
      max: 1000000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'PasFK',
      label: 'Pases sacados de una falta',
      min: 0,
      max: 100000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'TB',
      label: 'Balones al espacio realizados',
      min: 0,
      max: 100000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'Sw',
      label: 'Cambio de juego (Pase de una banda a otra)',
      min: 0,
      max: 100000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'PasCrs',
      label: 'Balones colgados al área',
      min: 0,
      max: 100000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'TI',
      label: 'Toques con el interior',
      min: 0,
      max: 1000000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'CK',
      label: 'Saques de esquina',
      min: 0,
      max: 100000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'CkIn',
      label: 'Saques de esquina cerrados',
      min: 0,
      max: 100000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'CkOut',
      label: 'Saques de esquina abiertos',
      min: 0,
      max: 100000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'CkStr',
      label: 'Saques de esquina rectos',
      min: 0,
      max: 100000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'PasCmp',
      label: 'Pases completados',
      min: 0,
      max: 100000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'PasOff',
      label: 'Pases a un jugador en fuera de juego',
      min: 0,
      max: 1000000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'PasBlocks',
      label: 'Pases bloqueados',
      min: 0,
      max: 100000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'SCA',
      label: 'Acciones de creacion de disparo (Pases clave, regates...)',
      min: 0,
      max: 100000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'ScaPassLive',
      label: 'Pases que llevan a un intento de disparo',
      min: 1,
      max: 100,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'ScaPassDead',
      label: 'Pases a balón parado que llevan a un intento de disparo',
      min: 0,
      max: 100,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'ScaDrib',
      label: 'Acciones de creacion de disparo con regate',
      min: 0,
      max: 100000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'ScaSh',
      label: 'Rechaces',
      min: 0,
      max: 1000000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'ScaFld',
      label: 'Faltas que llevan a un intento de disparo',
      min: 0,
      max: 10000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'ScaDef',
      label: 'Rechace que llevan a un intento de disparo (en contra)',
      min: 0,
      max: 100,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'GCA',
      label: 'Acciones de creacion de gol',
      min: 0,
      max: 100000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'GcaPassLive',
      label: 'Acciones de creacion de gol con balón en juego',
      min: 0,
      max: 100000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'GcaPassDead',
      label: 'Acciones de creacion de gol con pase a balón parado',
      min: 0,
      max: 100000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'GcaDrib',
      label: 'Acciones de creacion de gol regateando',
      min: 0,
      max: 100000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'GcaSh',
      label: 'Rebotes',
      min: 0,
      max: 100000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'GcaFld',
      label: 'Acciones de creacion de gol a partir de una falta',
      min: 0,
      max: 100000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'GcaDef',
      label: 'Acciones defensivas que acaban en gol',
      min: 0,
      max: 1000000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'Tkl',
      label: 'Entradas',
      min: 0,
      max: 100000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'TklWon',
      label: 'Entradas ganadas',
      min: 0,
      max: 1000000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'TklDef3rd',
      label: 'Entradas en el 1/3',
      min: 0,
      max: 1000000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'TklMid3rd',
      label: 'Entradas en 1/2',
      min: 0,
      max: 10000000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'TklAtt3rd',
      label: 'Entradas en 3/3',
      min: 0,
      max: 1000000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'TklDri',
      label: 'Regateadores bloqueados',
      min: 0,
      max: 100000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'TklDriAtt',
      label: 'Número de intentos de detener un regate',
      min: 0,
      max: 10000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'TklDri%',
      label: 'Porcentaje de regates detenidos',
      min: 0,
      max: 100,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'TklDriPast',
      label: 'Número de veces regateado',
      min: 0,
      max: 10000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'Blocks',
      label: 'Bloqueos',
      min: 0,
      max: 10000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'BlkSh',
      label: 'Bloqueos de tiro',
      min: 0,
      max: 10000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'BlkPass',
      label: 'Bloqueos de pase (acaba en posesion del rival)',
      min: 0,
      max: 10000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'Int',
      label: 'Intercepciones (no siempre acaba en posesion del rival)',
      min: 0,
      max: 10000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'Tkl+Int',
      label: 'Entradas e intercepciones',
      min: 0,
      max: 100000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'Clr',
      label: 'Despejes',
      min: 0,
      max: 10000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'Err',
      label: 'Errores que llevan a que el oponente tire',
      min: 0,
      max: 100000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'Touches',
      label: 'Toques',
      min: 0,
      max: 100000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'TouDefPen',
      label: 'Toques en el area de penalti',
      min: 0,
      max: 10000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'TouDef3rd',
      label: 'Toques en 1/3',
      min: 0,
      max: 10000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'TouMid3rd',
      label: 'Toques en 1/2',
      min: 0,
      max: 100000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'TouAtt3rd',
      label: 'Toques en 3/3',
      min: 0,
      max: 100000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'TouAttPen',
      label: 'Toques en el área rival',
      min: 0,
      max: 10000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'TouLive',
      label: 'Toques con balón en juego',
      min: 0,
      max: 10000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'ToAtt',
      label: 'Intentos de regate',
      min: 10,
      max: 10000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'ToSuc%',
      label: 'Porcentaje de regates completados',
      min: 0,
      max: 100,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'ToTkl',
      label: 'Regates fallidos',
      min: 0,
      max: 10000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'ToTkl%',
      label: 'Porcentaje de regates fallidos',
      min: 0,
      max: 100,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'Carries',
      label: 'Toques ofensivos',
      min: 0,
      max: 100000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'CarTotDist',
      label: 'Distancia recorrida (yardas) en carrera',
      min: 0,
      max: 100000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'CarPrgDist',
      label: 'Distancia recorrida (yardas) en carrera (progresivo)',
      min: 0,
      max: 10000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'CarProg',
      label: 'Número de veces que lleva el balón a área rival',
      min: 0,
      max: 10000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'Car3rd',
      label: 'Número de veces que lleva el balón al 3/3',
      min: 0,
      max: 100000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'CPA',
      label: 'Llevar el balón hacia el área rival',
      min: 0,
      max: 10000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'CarMis',
      label: 'Controles de balón fallidos',
      min: 0,
      max: 10000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'CarDis',
      label: 'Número de posesiones perdidas',
      min: 0,
      max: 10000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'Rec',
      label: 'Número de veces que un jugador recibió un pase',
      min: 0,
      max: 10000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'RecProg',
      label: 'Número de veces que un jugador recibió un pase progresivo',
      min: 0,
      max: 10000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'CrdY',
      label: 'Tarjetas amarillas',
      min: 0,
      max: 1000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'CrdR',
      label: 'Tarjetas rojas',
      min: 0,
      max: 100,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: '2CrdY',
      label: 'Segundas tarjetas amarillas',
      min: 0,
      max: 1000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'Fls',
      label: 'Faltas',
      min: 0,
      max: 10000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'Fld',
      label: 'Faltas recibidas',
      min: 0,
      max: 10000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'Off',
      label: 'Fueras de juego',
      min: 0,
      max: 10000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'Crs',
      label: 'Centros',
      min: 0,
      max: 10000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'TklW',
      label: 'Entradas ganadas',
      min: 0,
      max: 10000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'PKwon',
      label: 'Penaltis provocados(favorable)',
      min: 0,
      max: 10000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'PKcon',
      label: 'Penaltis provocados (en contra)',
      min: 0,
      max: 10000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'OG',
      label: 'Autogoles',
      min: 0,
      max: 10000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'Recov',
      label: 'Recuperaciones',
      min: 0,
      max: 10000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'AerWon',
      label: 'Duelos aéreos ganados',
      min: 0,
      max: 10000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'AerLost',
      label: 'Duelos aéreos perdidos',
      min: 0,
      max: 10000,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },
    {
      name: 'AerWon%',
      label: 'Porcentaje de duelos aéreos ganados',
      min: 0,
      max: 100,
      disabled: false,
      type: FieldType.number,
      value: 0,
    },

  ]
  driblesSuc = 0;
  mostrardriblesSuc = "";
  constructor(private jugadoresService: JugadoresService) { }

  ngOnInit(): void {
    this.jugadoresService.getPlayers()
      .subscribe((players: Player[]) => {
        this.players = players;
        this.players.sort((a, b) => a.Player.localeCompare(b.Player));
      });
  }


  pickPlayer(selectedPlayerRk: string | number | null) {
    if (selectedPlayerRk === null) {
      console.error('El valor seleccionado es nulo. Por favor, seleccione un jugador válido.');
      return;
    }

    // Usa JugadoresService para obtener el jugador por Rk
    this.jugadoresService.getPlayerByRk(selectedPlayerRk)
      .subscribe(
        (players: Player[]) => {
          if (players && players.length > 0) {
            this.selectedPlayer = players[0];
            console.log(`Jugador seleccionado: ${this.selectedPlayer.Player}`);
            this.form.forEach((field: Field) => {
              switch (field.name) {
                case 'Rk':
                  field.value = this.selectedPlayer?.Rk || 0;
                  break;
                case 'Player':
                  field.value = this.selectedPlayer?.Player || '';
                  break;
                case 'Nation':
                  field.value = this.selectedPlayer?.Nation || '';
                  break;
                case 'Pos':
                  field.value = this.selectedPlayer?.Pos !== undefined ? this.selectedPlayer.Pos : field.value;
                  break;
                case 'Squad':
                  field.value = this.selectedPlayer?.Squad || '';
                  break;
                case 'Comp':
                  field.value = this.selectedPlayer?.Comp || '';
                  break;
                case 'Age':
                  field.value = this.selectedPlayer?.Age || 0;
                  break;
                case 'Born':
                  field.value = this.selectedPlayer?.Born || 0;
                  break;
                case 'MP':
                  field.value = this.selectedPlayer?.MP || 0;
                  break;
                case 'Starts':
                  field.value = this.selectedPlayer?.Starts || 0;
                  break;
                case 'Min':
                  field.value = this.selectedPlayer?.Min || 0;
                  break;
                case '90s':
                  field.value = this.selectedPlayer ? this.selectedPlayer['90s'] : 0;
                  break;
                case 'Goals':
                  field.value = this.selectedPlayer?.Goals || 0;
                  break;
                case 'Shots':
                  field.value = this.selectedPlayer?.Shots || 0;
                  break;
                case 'SoT':
                  field.value = this.selectedPlayer?.SoT || 0;
                  break;
                case 'SoT%':
                  field.value = this.selectedPlayer ? this.selectedPlayer['SoT%'] : 0;
                  break;
                case 'G/Sh':
                  field.value = this.selectedPlayer ? this.selectedPlayer['G/Sh'] : 0;
                  break;
                case 'G/SoT':
                  field.value = this.selectedPlayer ? this.selectedPlayer['G/SoT'] : 0;
                  break;
                case 'ShoDist':
                  field.value = this.selectedPlayer ? this.selectedPlayer.ShoDist : 0;
                  break;
                case 'ShoFK':
                  field.value = this.selectedPlayer ? this.selectedPlayer.ShoFK : 0;
                  break;
                case 'ShoPK':
                  field.value = this.selectedPlayer ? this.selectedPlayer.ShoPK : 0;
                  break;
                case 'PKatt':
                  field.value = this.selectedPlayer ? this.selectedPlayer.PKatt : 0;
                  break;
                case 'PasTotCmp':
                  field.value = this.selectedPlayer ? this.selectedPlayer.PasTotCmp : 0;
                  break;
                case 'PasTotAtt':
                  field.value = this.selectedPlayer ? this.selectedPlayer.PasTotAtt : 0;
                  break;
                case 'PasTotCmp%':
                  field.value = this.selectedPlayer ? this.selectedPlayer['PasTotCmp%'] : 0;
                  break;
                case 'PasTotDist':
                  field.value = this.selectedPlayer ? this.selectedPlayer.PasTotDist : 0;
                  break;
                case 'PasTotPrgDist':
                  field.value = this.selectedPlayer ? this.selectedPlayer.PasTotPrgDist : 0;
                  break;
                case 'PasShoCmp':
                  field.value = this.selectedPlayer ? this.selectedPlayer.PasShoCmp : 0;
                  break;
                case 'PasShoAtt':
                  field.value = this.selectedPlayer ? this.selectedPlayer.PasShoAtt : 0;
                  break;
                case 'PasShoCmp%':
                  field.value = this.selectedPlayer ? this.selectedPlayer['PasShoCmp%'] : 0;
                  break;
                case 'PasMedCmp':
                  field.value = this.selectedPlayer ? this.selectedPlayer.PasMedCmp : 0;
                  break;
                case 'PasMedAtt':
                  field.value = this.selectedPlayer ? this.selectedPlayer.PasMedAtt : 0;
                  break;
                case 'PasMedCmp%':
                  field.value = this.selectedPlayer ? this.selectedPlayer['PasMedCmp%'] : 0;
                  break;
                case 'PasLonCmp':
                  field.value = this.selectedPlayer ? this.selectedPlayer.PasLonCmp : 0;
                  break;
                case 'PasLonAtt':
                  field.value = this.selectedPlayer ? this.selectedPlayer.PasLonAtt : 0;
                  break;
                case 'PasLonCmp%':
                  field.value = this.selectedPlayer ? this.selectedPlayer['PasLonCmp%'] : 0;
                  break;
                case 'Assists':
                  field.value = this.selectedPlayer ? this.selectedPlayer.Assists : 0;
                  break;
                case 'PasAss':
                  field.value = this.selectedPlayer ? this.selectedPlayer.PasAss : 0;
                  break;
                case 'Pas3rd':
                  field.value = this.selectedPlayer ? this.selectedPlayer.Pas3rd : 0;
                  break;
                case 'PPA':
                  field.value = this.selectedPlayer ? this.selectedPlayer.PPA : 0;
                  break;
                case 'CrsPA':
                  field.value = this.selectedPlayer ? this.selectedPlayer.CrsPA : 0;
                  break;
                case 'PasProg':
                  field.value = this.selectedPlayer ? this.selectedPlayer.PasProg : 0;
                  break;
                case 'PasAtt':
                  field.value = this.selectedPlayer ? this.selectedPlayer.PasAtt : 0;
                  break;
                case 'PasLive':
                  field.value = this.selectedPlayer ? this.selectedPlayer.PasLive : 0;
                  break;
                case 'PasDead':
                  field.value = this.selectedPlayer ? this.selectedPlayer.PasDead : 0;
                  break;
                case 'PasFK':
                  field.value = this.selectedPlayer ? this.selectedPlayer.PasFK : 0;
                  break;
                case 'TB':
                  field.value = this.selectedPlayer ? this.selectedPlayer.TB : 0;
                  break;
                case 'Sw':
                  field.value = this.selectedPlayer ? this.selectedPlayer.Sw : 0;
                  break;
                case 'PasCrs':
                  field.value = this.selectedPlayer ? this.selectedPlayer.PasCrs : 0;
                  break;
                case 'TI':
                  field.value = this.selectedPlayer ? this.selectedPlayer.TI : 0;
                  break;
                case 'CK':
                  field.value = this.selectedPlayer ? this.selectedPlayer.CK : 0;
                  break;
                case 'CkIn':
                  field.value = this.selectedPlayer ? this.selectedPlayer.CkIn : 0;
                  break;
                case 'CkOut':
                  field.value = this.selectedPlayer ? this.selectedPlayer.CkOut : 0;
                  break;
                case 'CkStr':
                  field.value = this.selectedPlayer ? this.selectedPlayer.CkStr : 0;
                  break;
                case 'PasCmp':
                  field.value = this.selectedPlayer ? this.selectedPlayer.PasCmp : 0;
                  break;
                case 'PasOff':
                  field.value = this.selectedPlayer ? this.selectedPlayer.PasOff : 0;
                  break;
                case 'PasBlocks':
                  field.value = this.selectedPlayer ? this.selectedPlayer.PasBlocks : 0;
                  break;
                case 'SCA':
                  field.value = this.selectedPlayer ? this.selectedPlayer.SCA : 0;
                  break;
                case 'ScaPassLive':
                  field.value = this.selectedPlayer ? this.selectedPlayer.ScaPassLive : 0;
                  break;
                case 'ScaPassDead':
                  field.value = this.selectedPlayer ? this.selectedPlayer.ScaPassDead : 0;
                  break;
                case 'ScaDrib':
                  field.value = this.selectedPlayer ? this.selectedPlayer.ScaDrib : 0;
                  break;
                case 'ScaSh':
                  field.value = this.selectedPlayer ? this.selectedPlayer.ScaSh : 0;
                  break;
                case 'ScaFld':
                  field.value = this.selectedPlayer ? this.selectedPlayer.ScaFld : 0;
                  break;
                case 'ScaDef':
                  field.value = this.selectedPlayer ? this.selectedPlayer.ScaDef : 0;
                  break;
                case 'GCA':
                  field.value = this.selectedPlayer ? this.selectedPlayer.GCA : 0;
                  break;
                case 'GcaPassLive':
                  field.value = this.selectedPlayer ? this.selectedPlayer.GcaPassLive : 0;
                  break;
                case 'GcaPassDead':
                  field.value = this.selectedPlayer ? this.selectedPlayer.GcaPassDead : 0;
                  break;
                case 'GcaDrib':
                  field.value = this.selectedPlayer ? this.selectedPlayer.GcaDrib : 0;
                  break;
                case 'GcaSh':
                  field.value = this.selectedPlayer ? this.selectedPlayer.GcaSh : 0;
                  break;
                case 'GcaFld':
                  field.value = this.selectedPlayer ? this.selectedPlayer.GcaFld : 0;
                  break;
                case 'GcaDef':
                  field.value = this.selectedPlayer ? this.selectedPlayer.GcaDef : 0;
                  break;
                case 'Tkl':
                  field.value = this.selectedPlayer ? this.selectedPlayer.Tkl : 0;
                  break;
                case 'TklWon':
                  field.value = this.selectedPlayer ? this.selectedPlayer.TklWon : 0;
                  break;
                case 'TklDef3rd':
                  field.value = this.selectedPlayer ? this.selectedPlayer.TklDef3rd : 0;
                  break;
                case 'TklMid3rd':
                  field.value = this.selectedPlayer ? this.selectedPlayer.TklMid3rd : 0;
                  break;
                case 'TklAtt3rd':
                  field.value = this.selectedPlayer ? this.selectedPlayer.TklAtt3rd : 0;
                  break;
                case 'TklDri':
                  field.value = this.selectedPlayer ? this.selectedPlayer.TklDri : 0;
                  break;
                case 'TklDriAtt':
                  field.value = this.selectedPlayer ? this.selectedPlayer.TklDriAtt : 0;
                  break;
                case 'TklDri%':
                  field.value = this.selectedPlayer ? this.selectedPlayer['TklDri%'] : 0;
                  break;
                case 'TklDriPast':
                  field.value = this.selectedPlayer ? this.selectedPlayer.TklDriPast : 0;
                  break;
                case 'Blocks':
                  field.value = this.selectedPlayer ? this.selectedPlayer.Blocks : 0;
                  break;
                case 'BlkSh':
                  field.value = this.selectedPlayer ? this.selectedPlayer.BlkSh : 0;
                  break;
                case 'BlkPass':
                  field.value = this.selectedPlayer ? this.selectedPlayer.BlkPass : 0;
                  break;
                case 'Int':
                  field.value = this.selectedPlayer ? this.selectedPlayer.Int : 0;
                  break;
                case 'Tkl+Int':
                  field.value = this.selectedPlayer ? this.selectedPlayer['Tkl+Int'] : 0;
                  break;
                case 'Clr':
                  field.value = this.selectedPlayer ? this.selectedPlayer.Clr : 0;
                  break;
                case 'Err':
                  field.value = this.selectedPlayer ? this.selectedPlayer.Err : 0;
                  break;
                case 'Touches':
                  field.value = this.selectedPlayer ? this.selectedPlayer.Touches : 0;
                  break;
                case 'TouDefPen':
                  field.value = this.selectedPlayer ? this.selectedPlayer.TouDefPen : 0;
                  break;
                case 'TouDef3rd':
                  field.value = this.selectedPlayer ? this.selectedPlayer.TouDef3rd : 0;
                  break;
                case 'TouMid3rd':
                  field.value = this.selectedPlayer ? this.selectedPlayer.TouMid3rd : 0;
                  break;
                case 'TouAtt3rd':
                  field.value = this.selectedPlayer ? this.selectedPlayer.TouAtt3rd : 0;
                  break;
                case 'TouAttPen':
                  field.value = this.selectedPlayer ? this.selectedPlayer.TouAttPen : 0;
                  break;
                case 'TouLive':
                  field.value = this.selectedPlayer ? this.selectedPlayer.TouLive : 0;
                  break;
                case 'ToAtt':
                  field.value = this.selectedPlayer ? this.selectedPlayer.ToAtt : 0;
                  break;
                case 'ToSuc':
                  field.value = this.selectedPlayer ? this.selectedPlayer.ToSuc : 0;
                  break;
                case 'ToSuc%':
                  field.value = this.selectedPlayer ? this.selectedPlayer['ToSuc%'] : 0;
                  break;
                case 'ToTkl':
                  field.value = this.selectedPlayer ? this.selectedPlayer.ToTkl : 0;
                  break;
                case 'ToTkl%':
                  field.value = this.selectedPlayer ? this.selectedPlayer['ToTkl%'] : 0;
                  break;
                case 'Carries':
                  field.value = this.selectedPlayer ? this.selectedPlayer.Carries : 0;
                  break;
                case 'CarTotDist':
                  field.value = this.selectedPlayer ? this.selectedPlayer.CarTotDist : 0;
                  break;
                case 'CarPrgDist':
                  field.value = this.selectedPlayer ? this.selectedPlayer.CarPrgDist : 0;
                  break;
                case 'CarProg':
                  field.value = this.selectedPlayer ? this.selectedPlayer.CarProg : 0;
                  break;
                case 'Car3rd':
                  field.value = this.selectedPlayer ? this.selectedPlayer.Car3rd : 0;
                  break;
                case 'CPA':
                  field.value = this.selectedPlayer ? this.selectedPlayer.CPA : 0;
                  break;
                case 'CarMis':
                  field.value = this.selectedPlayer ? this.selectedPlayer.CarMis : 0;
                  break;
                case 'CarDis':
                  field.value = this.selectedPlayer ? this.selectedPlayer.CarDis : 0;
                  break;
                case 'Rec':
                  field.value = this.selectedPlayer ? this.selectedPlayer.Rec : 0;
                  break;
                case 'RecProg':
                  field.value = this.selectedPlayer ? this.selectedPlayer.RecProg : 0;
                  break;
                case 'CrdY':
                  field.value = this.selectedPlayer ? this.selectedPlayer.CrdY : 0;
                  break;
                case 'CrdR':
                  field.value = this.selectedPlayer ? this.selectedPlayer.CrdR : 0;
                  break;
                case '2CrdY':
                  field.value = this.selectedPlayer ? this.selectedPlayer['2CrdY'] : 0;
                  break;
                case 'Fls':
                  field.value = this.selectedPlayer ? this.selectedPlayer.Fls : 0;
                  break;
                case 'Fld':
                  field.value = this.selectedPlayer ? this.selectedPlayer.Fld : 0;
                  break;
                case 'Off':
                  field.value = this.selectedPlayer ? this.selectedPlayer.Off : 0;
                  break;
                case 'Crs':
                  field.value = this.selectedPlayer ? this.selectedPlayer.Crs : 0;
                  break;
                case 'TklW':
                  field.value = this.selectedPlayer ? this.selectedPlayer.TklW : 0;
                  break;
                case 'PKwon':
                  field.value = this.selectedPlayer ? this.selectedPlayer.PKwon : 0;
                  break;
                case 'PKcon':
                  field.value = this.selectedPlayer ? this.selectedPlayer.PKcon : 0;
                  break;
                case 'OG':
                  field.value = this.selectedPlayer ? this.selectedPlayer.OG : 0;
                  break;
                case 'Recov':
                  field.value = this.selectedPlayer ? this.selectedPlayer.Recov : 0;
                  break;
                case 'AerWon':
                  field.value = this.selectedPlayer ? this.selectedPlayer.AerWon : 0;
                  break;
                case 'AerLost':
                  field.value = this.selectedPlayer ? this.selectedPlayer.AerLost : 0;
                  break;
                case 'AerWon%':
                  field.value = this.selectedPlayer ? this.selectedPlayer['AerWon%'] : 0;
                  break;
                default:
                  break;
              }
            });

          }
        })
  }

  // Función para convertir el valor del formulario a número
  convertToNumber(value: any): number {
    return Number(value);
  }

  // Función para actualizar playerData con los valores del formulario convertidos a números
  updatePlayerData() {
    this.form.forEach(field => {
      const numericValue = this.convertToNumber(field.value);
      if (this.selectedPlayer) {
        // Asigna el valor numérico a la propiedad correspondiente en playerData
        this.selectedPlayer[field.name] = numericValue;
      }
    });
  }
  sendForm() {



    this.updatePlayerData();

    const playerData: Player = {
      Rk: 1,
      Player: '',
      Nation: '',
      Pos: 0,
      Age: 0,
      Born: 0,
      Squad: '',
      Comp: Comp.LaLiga,
      MP: 0,
      Starts: 0,
      Min: 0,
      "90s": 0,
      Goals: 0,
      Shots: 0,
      SoT: 0,
      "SoT%": 0,
      "G/Sh": 0,
      "G/SoT": 0,
      ShoDist: 0,
      ShoFK: 0,
      ShoPK: 0,
      PKatt: 0,
      PasTotCmp: 0,
      PasTotAtt: 0,
      "PasTotCmp%": 0,
      PasTotDist: 0,
      PasTotPrgDist: 0,
      PasShoCmp: 0,
      PasShoAtt: 0,
      "PasShoCmp%": 0,
      PasMedCmp: 0,
      PasMedAtt: 0,
      "PasMedCmp%": 0,
      PasLonCmp: 0,
      PasLonAtt: 0,
      "PasLonCmp%": 0,
      Assists: 0,
      PasAss: 0,
      Pas3rd: 0,
      PPA: 0,
      CrsPA: 0,
      PasProg: 0,
      PasAtt: 0,
      PasLive: 0,
      PasDead: 0,
      PasFK: 0,
      TB: 0,
      Sw: 0,
      PasCrs: 0,
      TI: 0,
      CK: 0,
      CkIn: 0,
      CkOut: 0,
      CkStr: 0,
      PasCmp: 0,
      PasOff: 0,
      PasBlocks: 0,
      SCA: 0,
      ScaPassLive: 0,
      ScaPassDead: 0,
      ScaDrib: 0,
      ScaSh: 0,
      ScaFld: 0,
      ScaDef: 0,
      GCA: 0,
      GcaPassLive: 0,
      GcaPassDead: 0,
      GcaDrib: 0,
      GcaSh: 0,
      GcaFld: 0,
      GcaDef: 0,
      Tkl: 0,
      TklWon: 0,
      TklDef3rd: 0,
      TklMid3rd: 0,
      TklAtt3rd: 0,
      TklDri: 0,
      TklDriAtt: 0,
      "TklDri%": 0,
      TklDriPast: 0,
      Blocks: 0,
      BlkSh: 0,
      BlkPass: 0,
      Int: 0,
      "Tkl+Int": 0,
      Clr: 0,
      Err: 0,
      Touches: 0,
      TouDefPen: 0,
      TouDef3rd: 0,
      TouMid3rd: 0,
      TouAtt3rd: 0,
      TouAttPen: 0,
      TouLive: 0,
      ToAtt: 0,
      ToSuc: 0,
      "ToSuc%": 0,
      ToTkl: 0,
      "ToTkl%": 0,
      Carries: 0,
      CarTotDist: 0,
      CarPrgDist: 0,
      CarProg: 0,
      Car3rd: 0,
      CPA: 0,
      CarMis: 0,
      CarDis: 0,
      Rec: 0,
      RecProg: 0,
      CrdY: 0,
      CrdR: 0,
      "2CrdY": 0,
      Fls: 0,
      Fld: 0,
      Off: 0,
      Crs: 0,
      TklW: 0,
      PKwon: 0,
      PKcon: 0,
      OG: 0,
      Recov: 0,
      AerWon: 0,
      AerLost: 0,
      "AerWon%": 0,
    };


    // Asigna los valores del formulario a las propiedades correspondientes de playerData
    this.form.forEach(field => {
      playerData[field.name] = field.value;
    });

    // Llama al método de jugadoresService para adivinar la posicion
    this.jugadoresService.expectedDribbles(playerData)
      .subscribe(
        response => {
          this.driblesSuc = response['expectedDribbles'];
          console.log(this.driblesSuc);
          this.mostrardriblesSuc = this.driblesSuc.toString().substring(0, 5);      
          console.log(this.mostrardriblesSuc);
              

        },
        error => {
          console.error('Error al enviar los datos:', error);
        }
      );
  }

  resetForm() {
    this.form.forEach(field => {
      field.value = '';
    });
    this.driblesSuc = 0;

  }

}


