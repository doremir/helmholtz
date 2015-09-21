# helmholtz

<small>Fork of https://github.com/saebekassebil/interval-coords,
using `[steps, semitones]` instead of `[fifths, octaves]`

See the teoria fork at https://github.com/erikronstrom/teoria for more info.</small>

Parsing notes written in
[Helmholtz pitch notation](http://en.wikipedia.org/wiki/Helmholtz_pitch_notation)
returning intervals in steps and semitones relative to A4 (or `a'`)

```js
var helmholtz = require('helmholtz');

helmholtz('a\'') // -> [ 0, 0 ]
helmholtz(',,C') //  -> [ -33, -57 ]
helmholtz('d#\'') // -> [ -4, -6 ]
helmholtz('a\'\'') // -> [ 7, 12 ]
```

## usage

```js
var helmholtz = require('helmholtz');
```

### helmholtz(note)

Takes a `note` string in the Helmholtz notation and returns an array
describing the interval of that note relative to A4. The returned interval is
in the format `[steps, semitones]` - that is, an array consisting of two
numbers, the first the number of diatonic steps, the second the number
of semitones between the notes.
