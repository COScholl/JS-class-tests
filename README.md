# JS Class Tests

Because there is so much said about classes in JS, in TS, and not much to back up
claims.

I have been working with React since 2018, and in 2019 I first heard about TypeScript.
The company I was working for was interviewing front end developers, and one was
of our interviewees had a really strong opinion about TypeScript over JavaScript.

As a junior, and as someone who learned programming on his own, I did not have
the benefit of a Computer Science education, and so while searching for the
differences between TypeScript and JavaScript, I came upon some new concepts,
one of which is the concept of JavaScript being a "scripting language" and not
an "object-oriented" language. The first time I heard this was in an article
called "Difference between TypeScript and JavaScript" (https://www.geeksforgeeks.org/difference-between-typescript-and-javascript/) in which the author proclaims "TypesScript is known as [object-
oriented] programming language whereas JavaScript is a scripting language."

The author then goes on to say that TypeScript is trans-compiled to vanilla
JavaScript. That immediately got me asking the question: "If TypeScript compiles
to JavaScript, and TypeScript is object-oriented, then JavaScript has to be
object-oriented, right?"

In time, I would ask other questions about the real diffrences between TypeScript
and JavaScript, and what makes a language object-oriented. I would then find
articles on medium.com or dev.to making claims about what "true" object-oriented
languages are, and what they are not, and why TypeScript is superior to JavaScript,
which usually included something about how classes are different in TypeScript and
JavaScript.

This project is about:
- What an object-oriented language is
- What arguments people leverage against JavaScript's claim to being object-oriented
- What is a class in object-oriented programming
- What TypeScript classes are about
- What TypeScript classes compile to
- What JavaScript classes are about
- What JavaScript classes compile to

I intend to show that JavaScript is object-oriented, and that TypeScript is
JavaScript at the end of the day, by trans-compiling TypeScript to different
ECMAScript standards. I will then trans-compile the resulting JavaScript into
the most recently adopted ECMAScript standards for all major browsers and for
NodeJS.

I hope to address the strongest arguments for why individuals believe that object-
oriented programming is implemented better in other languages, and to resolve
criticisms leveraged against vanilla JavaScript in favor of TypeScript regarding
object-oriented programming. My method will be to write classes and trans-compile
(or _transpile_) between different JavaScript standards set by Ecma International
and the most up-to-date version of TypeScript.


In the `javascript/` directory, I will write a class in the style of
different ECMAScript standards using the recommended style for that standard, and
save each one as its own `.js` file in its own directory. The directories will be:
- `es3/`
- `es5/`
- `es6/`
- `es2016/`
- `es2017/`
- `es2018/`
- `es2019/`
- `es2020/`
- `esNext/`

I will then write the same class as a `.ts` file in the `typescript/` directory,
demonstrating the best style for class-based object-oriented design currently
recommended for TypeScript. Next, I will trans-compile the TypeScript file into
each ECMAScript standards into its own `javascript/<standard>` directory, and
compare the trans-compiled TypeScript to each other and the JavaScript classes
written to its best practice.

After performing an analysis on the differences between compiled TypeScript and
the bespoke JavaScript classes, I will then trans-compile all of the classes using
Babel to a `public` directory, to see if there are any glaring differences between
the trans-compiled TypeScript and bespoke JavaScript classes of differing standard.

Babel compiles to ES5.
TypeScript can compile to several different ECMAScript standards.

`$ npm init`
`$ npm install --save gulp`
`$ touch gulpfile.js`
`$ npm install --save-dev @babel/core @babel/preset-env gulp-babel`
Add to package.json after "dependencies" and "devDependencies":
```  
"presets": [
    "@babel/preset-env"
],
```
`$ touch .babelrc`
Add to .babelrc
`{
  "presets": ["@babel/preset-env"]
}
`
Rename "gulpfile.js" file to "gulpfile.babel.js"
`$ npm i --save-dev eslint@latest`
`$ ./node_modules/.bin/eslint --init`

`$npm install --save-dev typescript gulp-typescript`
Add script to run gulp task runner
```
"scripts": {
  ... ,
  "babelTest": "gulp babelTest"
},
```
`$ touch tsconfig.json`
TypeScript compiles to set value using `--target` tag or `-t`. "ES3" is default.
- "ES3" (default)
- "ES5"
- "ES6"/"ES2015"
- "ES2016"
- "ES2017"
- "ES2018"
- "ES2019"
- "ES2020"
- "ESNext" - targets latest supported ES proposed features.
