# relpers [![Build Status](https://travis-ci.org/goncalvesjoao/relpers.svg?branch=1.2)](https://travis-ci.org/goncalvesjoao/relpers)
A group of small React Helpers to reduce your React boilerplate.

```
$> npm install relpers --save
```

Documentation: https://goncalvesjoao.github.io/relpers/

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
or
```javascript
import { injectProps } from 'relpers';

class Profile extends React.Component {
  @injectProps
  fullName({ firstName, lastName }) {
    return firstName + ' ' + lastName;
  }

  render() {
    return <p>{ this.fullName() } - { this.props.email }</p>;
  }
}
```

killEvent
----
```javascript
import { killEvent } from 'relpers';

class App1 extends React.Component {
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
or
```javascript
import { killEvent } from 'relpers';

class App2 extends React.Component {
  render() {
    return (
      <a href="#" onClick={ killEvent(() => alert('Link as been clicked!')) }>
        <span>"Notice that your browser's URL is not being updated with '#' in it."</span>
      </a>
    );
  }
}
```

---

## Notes:
This tool was built using:
- node 5.0
- npm 3.3.6

---

## Contribute:
```
$> git clone git@github.com:goncalvesjoao/relpers.git
$> cd relpers
$> npm install
$> npm start
```
"npm start" will launch the site that you see at: https://goncalvesjoao.github.io/relpers/ but on your local machine at http://localhost:9000
where you can preview your changes in real-time and document how your helper should be used.

Then create some specs in 'test/specs/' directory and make sure all tests are green with:
```
$> npm test
```
