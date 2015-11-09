# relpers [![Build Status](https://travis-ci.org/croudcare/relpers.svg?branch=master)](https://travis-ci.org/croudcare/relpers)
A group of small React Helpers to reduce your React boilerplate.

```
$> npm install relpers --save
```

Documentation: https://croudcare.github.io/relpers/v1.2/

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

---

## Notes:
This tool was built using:
- node 5.0
- npm 3.3.6

---

## Contribute:
```
$> git clone git@github.com:croudcare/relpers.git
$> cd relpers
$> npm install
$> npm start
```
"npm start" will launch the site that you see at: https://croudcare.github.io/relpers/v1.1/
where you can preview your changes in real-time and document how your helper should be used.

Then create some specs in 'test/specs/' directory and make sure all tests are green with:
```
$> npm test
```
