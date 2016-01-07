import applyMixin from '../../src/applyMixin';

var ContextWrapper = React.createClass({
  childContextTypes: {
    history: React.PropTypes.string
  },

  getChildContext: function() {
    return { history: 'history was passed down' };
  },

  render: function() {
    return <div>{ this.props.children }</div>;
  }
});

const HistoryMixin = {
  contextTypes: {
    history: React.PropTypes.string
  },

  componentWillMount() {
    this.history = this.context.history
  }
};

const LabelMixin = {
  labelWrapper(children) {
    return <label>Label: { children }</label>;
  }
};

const Label2Mixin = {
  labelWrapper(children) {
    return <label>Label2: { children }</label>;
  }
};

describe('applyMixin', () => {
  context('as a decorator', () => {
    context('given just one Mixin', () => {
      @applyMixin(HistoryMixin)
      class Link extends React.Component {
        render() {
          return <div>{ this.history }</div>;
        }
      }

      it('should be able to handle both static attributes like contextTypes and instance methods like componentWillMount', () => {
        const $contextWrapper = $(<ContextWrapper><Link /></ContextWrapper>).render();

        expect($contextWrapper.text()).to.equal('history was passed down');
      });
    });

    context('given multiple (none confliting) Mixins', () => {
      @applyMixin(HistoryMixin, LabelMixin)
      class LabelLink extends React.Component {
        render() {
          return this.labelWrapper(<div>{ this.history }</div>);
        }
      }

      it('all of the mixins attributes should have been imported', () => {
        const $contextWrapper = $(<ContextWrapper><LabelLink /></ContextWrapper>).render();

        expect($contextWrapper.text()).to.equal('Label: history was passed down');
      });
    });

    context('given multiple (confliting) Mixins', () => {
      @applyMixin(Label2Mixin, LabelMixin)
      class LabelLink extends React.Component {
        render() {
          return this.labelWrapper('history was passed down');
        }
      }

      it('the last mixin method must not be imported', () => {
        const $contextWrapper = $(<ContextWrapper><LabelLink /></ContextWrapper>).render();

        expect($contextWrapper.text()).to.equal('Label2: history was passed down');
      });
    });


    context('given that both the host class and the mixin have the same attributes', () => {
      @applyMixin(LabelMixin)
      class LabelLink extends React.Component {
        labelWrapper(children) {
          return <label>Label3: { children }</label>;
        }

        render() {
          return this.labelWrapper('history was passed down');
        }
      }

      it('the mixin method must not be imported', () => {
        const $contextWrapper = $(<ContextWrapper><LabelLink /></ContextWrapper>).render();

        expect($contextWrapper.text()).to.equal('Label3: history was passed down');
      });
    });
  });

  context('as a function', () => {
    class BasicLink extends React.Component {
      render() {
        return <div>{ this.history }</div>;
      }
    }

    const ComplexLink = applyMixin(HistoryMixin)(BasicLink);

    it('should be able to handle both static attributes like contextTypes and instance methods like componentWillMount', () => {
      const $contextWrapper = $(<ContextWrapper><ComplexLink /></ContextWrapper>).render();

      expect($contextWrapper.text()).to.equal('history was passed down');
    });
  });
});
