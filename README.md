# relpers
A group of small React Helpers to reduce your React boilerplate.

```
$> npm install relpers --save
```

Documentation: https://croudcare.github.io/relpers/v1.1/

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
