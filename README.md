# relpers
A group of small React Helpers to reduce your React boilerplate.

```
$> npm install relpers --save
```

Documentation: https://croudcare.github.io/relpers/

---

injectProps
----
```javascript
import { injectProps } from 'relpers';

class Profile extends React.Component {
  @injectProps
  render({ firstName, lastName, email }) {
    return <p>{ firstName } { lastName } - { email }</p>;
  }
}
```

killEvent
----
```javascript
import { killEvent } from 'relpers';

class App extends React.Component {
  @killEvent
  onLinkClick() { alert('Link as been clicked!'); }

  render() {
    return (
      <a href="#" onClick={ this.onLinkClick }>
        <span>"Notice that your browser's URL is not being updated with '#' in it."</span>
      </a>
    );
  }
}
```

Input
----
```javascript
import { Input } from 'relpers';

class App extends React.Component {
  render() {
    const user = {
      firstName: 'John',
      lastName: 'Snow',
      errors: {
        firstName: ['is taken'],
      },
    };

    return (
      <div>
        <Input data={ user } field="firstName" />
        <Input data={ user } field="lastName" />
      </div>
    );
  }
}
```
will render (with bootstrap):

![input_render](https://raw.github.com/croudcare/relpers/master/readme/input/render.png)

![input_html](https://raw.github.com/croudcare/relpers/master/readme/input/html.png)

Form
----
```javascript
import { Form } from 'relpers';

class App extends React.Component {
  render() {
    const user = {
      firstName: 'John',
      lastName: 'Snow',
      errors: {
        firstName: ['is taken'],
      },
    };

    return (
      <Form data={ user }>
        <Input field="firstName" />
        <Input field="lastName" />
      </div>
    );
  }
}
```
will render the same as the Input example above.

Repeater
----
```javascript
import { Repeater } from 'relpers';

const ChildComponent ({ item, itemSelected }) => (
  <div className="list-group-item">
    <span className="badge">{ item.id }</span>{ item.name }
  </div>
);

class App extends React.Component {
  render() {
    return (
      <Repeater
        data={ [{ id: 1, name: 'one' }, { id: 2, name: 'two' }] }
        emptyComponent={ () => <p>no results here!</p> }
        childComponent={ ({ object }) => <ChildComponent item={ object } /> }
      />
    );
  }
}
```
will render (with bootstrap):

![repeater_render](https://raw.github.com/croudcare/relpers/master/readme/repeater/render.png)

---

TODO
---
- proper specs
