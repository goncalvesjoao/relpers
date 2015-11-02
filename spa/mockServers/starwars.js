function Starwars(app) {

  var droids = [
    { id: 1, name: 'R2-D2', avatar: 'imgs/r2d2.jpg' },
    { id: 2, name: 'C-3PO', avatar: 'imgs/c3po.jpg' },
    { id: 3, name: '2-1B', avatar: 'imgs/21b.jpg' },
    { id: 4, name: 'Probe Droid', avatar: 'imgs/probe_droid.jpg' },
  ];

  app.get('/droids.json', function(request, response) {
    response.json(droids);
  });

}

module.exports = Starwars;
