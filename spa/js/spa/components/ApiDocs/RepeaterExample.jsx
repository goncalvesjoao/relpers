import React from 'react';
import Prism from '../Prism';
import { Repeater } from '../../../../../src';

const EmptyCompoment = React.createClass({
  render() { return <h2>No data found!</h2>; },
});
const ParentComponent = React.createClass({
  render() { return <div><h2>Parent div</h2>{ this.props.children }</div>; },
});
const ChildComponent1 = React.createClass({
  render() { return <div>({ this.props.object.id }) { this.props.object.name }</div>; },
});
const ChildComponent2 = React.createClass({
  render() { return <div>({ this.props.object.id }) { this.props.object.name }</div>; },
});
const ChildComponent3 = ({ item, itemSelected }) => (
  <li className="list-group-item" onClick={ itemSelected }><span className="badge">{ item.id }</span>{ item.name }</li>
);

const RepeaterExample = React.createClass({

  getInitialState() {
    return {
      items: [
        [{ id: 1, name: 'one' }, { id: 2, name: 'two' }],
        [],
        [{ id: 1, name: 'one' }, { id: 2, name: 'two' }],
      ],
    };
  },

  addItem(index) {
    this.state.items[index].push({ id: +(new Date()), name: +(new Date()) });
    this.setState({ items: this.state.items });
  },

  removeItem(index) {
    this.state.items[index].pop();
    this.setState({ items: this.state.items });
  },

  handleClick(item) {
    /*eslint-disable */
    alert('item ' + item.id + ' has been clicked!');
    /*eslint-enable */
  },

  render() {
    return (
      <div>
        <Prism className="language-jsx">
          { `import { Repeater } from 'relpers';` }
        </Prism>

        <p>&nbsp;</p>

        <section>
          <div className='panel panel-default'>
            <div className='panel-heading'>
              <h3 className='panel-title'>Default mode: requires 'data' and 'childComponent' props</h3>
            </div>

            <div className='panel-body'>
              <Repeater
                data={ [{ id: 1, name: 'one' }, { id: 2, name: 'two' }] }
                childComponent={ ChildComponent1 }
              />
            </div>

            <div className='panel-footer'>
              <span className="label label-default">Code:</span>
              <Prism className='language-jsx'>
                {
                  `class ChildComponent extends React.Component {
  render() { return <div>({ this.props.object.id }) { this.props.object.name }</div>; },
}

class App extends React.Component {
  render() {
    return (
      <Repeater
        data={ [{ id: 1, name: 'one' }, { id: 2, name: 'two' }] }
        childComponent={ ChildComponent }
      />
    );
  }
}`
                }
              </Prism>
            </div>
          </div>
        </section>

        <section>
          <div className='panel panel-default'>
            <div className='panel-heading'>
              <h3 className='panel-title'>emptyComponent prop</h3>
            </div>

            <div className='panel-body'>
              <Repeater data={ this.state.items[1] } emptyComponent={ EmptyCompoment } />
            </div>

            <div className='panel-footer'>
              <span className="label label-default">Code:</span>
              <Prism className='language-jsx'>
                {
                  `class EmptyCompoment extends React.Component {
  render() { return <h2>No data found!</h2>; },
}

class App extends React.Component {
  render() {
    return (
      <Repeater
        data={ [] }
        emptyComponent={ EmptyCompoment }
      />
    );
  }
}`
                }
              </Prism>
            </div>
          </div>
        </section>

        <section>
          <div className='panel panel-default'>
            <div className='panel-heading clearfix'>
              <h3 className='pull-left panel-title'>parentComponent prop</h3>

              <div className="pull-right">
                <button onClick={ this.addItem.bind(null, 0) }>add and item</button>
                <button onClick={ this.removeItem.bind(null, 0) }>remove an item</button>
              </div>
            </div>

            <div className='panel-body'>
              <Repeater
                data={ this.state.items[0] }
                childComponent={ ChildComponent2 }
                parentComponent={ ParentComponent }
              />
            </div>

            <div className='panel-footer'>
              <span className="label label-default">Code:</span>
              <Prism className='language-jsx'>
                {
                  `class ParentComponent extends React.Component {
  render() { return <div><h2>Parent div</h2>{ this.props.children }</div>; },
}

class ChildComponent extends React.Component {
  render() { return <div>({ this.props.object.id }) { this.props.object.name }</div>; },
}

class App extends React.Component {
  render() {
    return (
      <Repeater
        data={ [{ id: 1, name: 'one' }, { id: 2, name: 'two' }] }
        childComponent={ ChildComponent }
        parentComponent={ ParentComponent }
      />
    );
  }
}`
                }
              </Prism>
            </div>
          </div>
        </section>

        <section>
          <div className='panel panel-default'>
            <div className='panel-heading clearfix'>
              <h3 className='pull-left panel-title'>Full example</h3>

              <div className="pull-right">
                <button onClick={ this.addItem.bind(null, 2) }>add and item</button>
                <button onClick={ this.removeItem.bind(null, 2) }>remove an item</button>
              </div>
            </div>

            <div className='panel-body'>
              <Repeater
                data={ this.state.items[2] }
                emptyComponent={ () => <div className="alert alert-warning">no results here!</div> }
                childComponent={ ({ object }) => <ChildComponent3 item={ object } itemSelected={ this.handleClick.bind(this, object) }/> }
                parentComponent={ 'ul' }
                clasName="list-group"
              />
            </div>

            <div className='panel-footer'>
              <span className="label label-default">Code:</span>
              <Prism className='language-jsx'>
                {
                  `const ChildComponent ({ item, itemSelected }) => (
  <li className="list-group-item" onClick={ itemSelected }><span className="badge">{ item.id }</span>{ item.name }</li>
);

class App extends React.Component {
  handleClick(item) { alert('item ' + item.id + ' has been clicked!'); },

  render() {
    return (
      <Repeater
        data={ [{ id: 1, name: 'one' }, { id: 2, name: 'two' }] }
        emptyComponent={ () => <div className="alert alert-warning">no results here!</div> }
        childComponent={ ({ object }) => <ChildComponent item={ object } itemSelected={ this.handleClick.bind(this, object) }/> }
        parentComponent={ 'ul' }
        clasName="list-group"
      />
    );
  }
}`
                }
              </Prism>
            </div>
          </div>
        </section>
      </div>
    );
  },

});

module.exports = RepeaterExample;
