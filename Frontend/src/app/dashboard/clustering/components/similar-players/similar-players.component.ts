import { Component } from '@angular/core';
import { Field, FieldType } from '../../../interfaces/form.interface';
import { Player, Comp } from '../../../interfaces/jugador';
import { JugadoresService } from '../../../services/jugadores.service';

@Component({
  selector: 'app-similar-players',
  templateUrl: './similar-players.component.html',
  styleUrl: './similar-players.component.css'
})
export class SimilarPlayersComponent {

  public players: Player[] = [];
  selectedPlayerRk: string | number | null = null;
  selectedPlayer: Player | null = null;
  public form: Array<Field> = [
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
      name: 'PasTotCmp',
      label: 'Pases totales completados',
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
      name: 'Assists',
      label: 'Asistencias',
      min: 0,
      max: 10000,
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
      name: 'GcaDrib',
      label: 'Acciones de creacion de gol regateando',
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
      name: 'Int',
      label: 'Intercepciones (no siempre acaba en posesion del rival)',
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


  ]
  
  jugadores = [];
  cantidadJugadores = this.jugadores.length;

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

    // Llama al método de jugadoresService para adivinar los goles esperados
    this.jugadoresService.searchSimilarPlayers(playerData)
      .subscribe(
        response => {
          this.jugadores = response['searchSimilarPlayers'];
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
    this.jugadores = [];

  }
}
