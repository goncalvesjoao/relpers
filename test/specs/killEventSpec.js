import killEvent from '../../src/killEvent';

describe('killEvent', () => {
  context('as a decorator', () => {
    class Buttons extends React.Component {
      constructor() {
        super();
        this.state = { divClicked: false, button1Clicked: false, button2Clicked: false };
      }

      onButton1Click() { this.setState({ button1Clicked: true }); }

      @killEvent
      onButton2Click() { this.setState({ button2Clicked: true }); }

      onDivClick()  { this.setState({ divClicked: true }); }

      render() {
        return (
          <div onClick={ this.onDivClick.bind(this) }>
            <button id="button1" onClick={ this.onButton1Click.bind(this) }>button1</button>
            <button id="button2" onClick={ this.onButton2Click.bind(this) }>button2</button>
          </div>
        );
      }
    }

    it('button2 should not let div click to be triggered', () => {
      const $buttons = $(<Buttons />).render();

      $buttons.find('[id="button2"]').trigger('click');

      expect($buttons.unwrap().state).to.deep.equal({ divClicked: false, button1Clicked: false, button2Clicked: true });
    });

    it('button1 should let div click to be triggered', () => {
      const $buttons = $(<Buttons />).render();

      $buttons.find('[id="button1"]').trigger('click');

      expect($buttons.unwrap().state).to.deep.equal({ divClicked: true, button1Clicked: true, button2Clicked: false });
    });
  });

  context('as a normal function', () => {
    class Buttons extends React.Component {
      constructor() {
        super();
        this.state = { divClicked: false, button1Clicked: false, button2Clicked: false };
      }

      onButton1Click() { this.setState({ button1Clicked: true }); }

      onButton2Click() { this.setState({ button2Clicked: true }); }

      onDivClick()  { this.setState({ divClicked: true }); }

      render() {
        return (
          <div onClick={ this.onDivClick.bind(this) }>
            <button id="button1" onClick={ this.onButton1Click.bind(this) }>button1</button>
            <button id="button2" onClick={ killEvent(() => this.onButton2Click()) }>button2</button>
          </div>
        );
      }
    }

    it('button2 should not let div click to be triggered', () => {
      const $buttons = $(<Buttons />).render();

      $buttons.find('[id="button2"]').trigger('click');

      expect($buttons.unwrap().state).to.deep.equal({ divClicked: false, button1Clicked: false, button2Clicked: true });
    });

    it('button1 should let div click to be triggered', () => {
      const $buttons = $(<Buttons />).render();

      $buttons.find('[id="button1"]').trigger('click');

      expect($buttons.unwrap().state).to.deep.equal({ divClicked: true, button1Clicked: true, button2Clicked: false });
    });
  });
});
