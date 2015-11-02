const { Droids } = Relpers.components;
const mockedDroids = [
  { id: 1, name: 'r2d2', avatar: 'none' },
  { id: 2, name: 'c-3po', avatar: 'none' },
];

describe('Droids', () => {
  before(() => {
    sinon.stub(Droids.prototype, 'componentWillMount', function componentWillMount() {
      this.state.droids = mockedDroids;
    });
  });
  after(() => { Droids.prototype.componentWillMount.restore(); });

  context('when no props are used', () => {
    it('a list of droids with names should be returned', () => {
      const droids = testTree(<Droids />);

      expect(droids.get('droids').length).to.equal(2);

      droids.get('droids').map((droid) => {
        expect(droid.get('name')).to.exist;
      });
    });
  });

  context('when props.name = false', () => {
    it('a list of droids without names should be returned', () => {
      const droids = testTree(<Droids name={ false } />);

      expect(droids.get('droids').length).to.equal(2);

      droids.get('droids').map((droid) => {
        expect(droid.get('name')).to.not.exist;
      });
    });
  });
});
