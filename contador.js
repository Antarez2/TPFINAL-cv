const final = moment('2023-07-01');
setInterval(function () {
  const inicio = moment();
  const duracion = final.diff(inicio);
  const intervalo = moment(duracion);
  const mes = intervalo.month() + 1;
  const diaDelMes = intervalo.date();
  const hora = intervalo.hour();
  const minuto = intervalo.minute();
  const segundo = intervalo.second();
  //const resultado = intervalo.format('MM/DD HH:mm:ss');
  $('#resultado').html(
    mes +
      ' Meses ' +
      diaDelMes +
      ' Dias ' +
      hora +
      ' Horas ' +
      minuto +
      ' Minutos ' +
      segundo +
      ' Segundos',
  );
}, 1000);
