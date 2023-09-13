function Horas24({ habitacion }) {
  let values = Array(96)
    .fill()
    .map((_, i) => i + 1);

  return values.map((value) => (
    <td key={habitacion + "_" + value} id={habitacion + "_" + value}></td>
  ));
}

function Habitaciones({ listaDeHabitaciones }) {
  return listaDeHabitaciones.map((habitacion) => {
    return (
      <tr
        key={habitacion.replace(/\s+/g, "").toLowerCase()}
        id={habitacion.replace(/\s+/g, "").toLowerCase()}
      >
        <td>{habitacion}</td>
        <Horas24
          habitacion={habitacion.replace(/\s+/g, "").toLowerCase()}
        ></Horas24>
      </tr>
    );
  });
}

function AgregarReservacion() {
  return (
    <div className="flex-col justify-center">
      <h2>Nueva Reservación</h2>
      <form className="flex-col justify-center" action="./" method="get">
        <div>
          <label htmlFor="clienteAReservar">Cliente</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="tipoDeHabitacion">Tipo de habitación</label>
          <select name="tipoDeHabitacion" id="tipoDeHabitacion">
            <option value="Regular">Regular</option>
            <option value="VIP">VIP</option>
            <option value="Premium">Premium</option>
          </select>
        </div>
        <div>
          <label for="diaAReservar">Dia</label>
          <select name="diaAReservar" id="diaAReservar" size="2">
            <option value="hoy">Hoy</option>
            <option value="mañana">Mañana</option>
          </select>
        </div>
        <div>
          <label htmlFor="horaAReservar">Hora</label>
          <select name="horaAReservar" id="horaAReservar">
            <option value="11:45">11:45 am</option>
            <option value="12:00">12:00 pm</option>
            <option value="12:15">12:15 pm</option>
            <option value="12:30">12:30 pm</option>
            <option value="12:45">12:45 pm</option>
            <option value="13:00">01:00 pm</option>
          </select>
        </div>
        <div>
          <input type="button" value="Reservar" />
        </div>
      </form>
    </div>
  );
}

export default function Home() {
  let listaDeHabitaciones = [
    "Regular 1",
    "Regular 2",
    "Regular 3",
    "VIP 1",
    "VIP 2",
    "Premium 1",
  ];
  return (
    <main className="flex-col justify-center border-8 border-amber-300 text-center h-screen">
      <h1>Control de Habitaciones</h1>
      <div className="">
        <select name="dia" id="dia" size="2">
          <option value="hoy">Hoy</option>
          <option value="mañana">Mañana</option>
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>Habitación</th>
            <th rowspan="0">Horas</th>
          </tr>
        </thead>
        <tbody>
          <Habitaciones
            listaDeHabitaciones={listaDeHabitaciones}
          ></Habitaciones>
        </tbody>
      </table>
      <AgregarReservacion></AgregarReservacion>
    </main>
  );
}
