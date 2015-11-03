import injectProps from '../../src/injectProps';

describe('injectProps', () => {
  context('when the target does not need arguments', () => {
    class Profile extends React.Component {
      @injectProps
      render({ firstName, lastName }) {
        return <p>{ firstName } { lastName }</p>;
      }
    }

    it('this.props should be passed as 1st argument', () => {
      const profile = testTree(<Profile firstName="John" lastName="Snow"/>);

      expect(profile.innerText).to.equal('John Snow');
    });
  });

  context('when the target does need arguments', () => {
    class Profile extends React.Component {
      @injectProps
      fullName(title, { firstName, lastName }) {
        return <p>{ title } { firstName } { lastName }</p>;
      }
      render() {
        return this.fullName('Knight');
      }
    }

    it('this.props should be passed as the last argument', () => {
      const profile = testTree(<Profile firstName="John" lastName="Snow"/>);

      expect(profile.innerText).to.equal('Knight John Snow');
    });
  });
});
