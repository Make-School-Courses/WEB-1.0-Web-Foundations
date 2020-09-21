<!-- .slide: data-background="./Images/header.svg" data-background-repeat="none" data-background-size="40% 40%" data-background-position="center 10%" class="header" -->
# FEW 1.1 - Lesson 9 - JS Tip Calculator Part 2

<!-- Put a link to the slides so that students can find them -->

➡️ [**Slides**](/Syllabus-Template/Slides/Lesson1.html ':ignore')

<!-- > -->

## Warmup

Breakout groups of 3 (12 min):

- Solo, each person answers “what’s a hard experience you went through that helped you grow. 
    - Answer by telling a story with a beginning, middle, and end.”
- Next, pick a sharer, listener, and observer. The sharer tells their story, the listener listens and then reflects back the story in their own words. The Sharerer says if the story is accurate.

<!-- > -->

## Learning Objectives <!--5 min-->

- Creating design layout with Flexbox
- Using `parseInt()`, `parseFloat()`, and `isNaN()`
- Describe what `NaN` is

<!-- > -->

### Why learn this? 

We're tying two big concepts we've learned so far together in this lesson: styling with Flexbox and utilizing JavaScript. We'll dive a bit deeper into how to deal with various input types using JavaScript, and also what `NaN` is, and how to properly deal with it!

Why do this? We need to make sure our code is handling/expecting the right types, or else we will get errors and the data will get messy!

**Question:** Why do we need to ensure variables are the same type?

<!-- > -->


# WEB 1.0 - JS and the DOM

## Description 

JavaScript is used in a wide variety of applications none is greater than creating web pages. Understanding how JavaScript interacts with HTML and CSS is key to make amazing websites and experienes. 

### What is the DOM?

The DOM or Document, Object, Model is the structure defined by your HTML code. 

The HTML code your write creates a document that is structured and organized. This means your code can access elements based on the structure, or influence or control elements based on the their position in the DOM and their relation to other elements. 

Every element is an Object. An Object in computer terms is a collection of functions and variables. 

Imagine you have a web page that looks like this: 

```HTML
<html>
  <head>
    <title>Hello</title>
  </head>
  <body>
    <h1>Hello World</h1>
    <p>Foo bar</p>
  </body>
</html>
```

We could also describe the structure here in print like this: 

- html
  - head
    - title
  - body
    - h1
    - p

Imagine the diagram as an inverted tree. Here are a few pictures: 

- http://watershedcreative.com/naked/html-tree.html
- https://eloquentjavascript.net/1st_edition/chapter12.html

Here the nest lists show the structure. From the diagrams above we can talk about the elements and describe them based on their position in the tree. 

For example, we could say that html is the root of the tree, and head and body were it's children. 

You could say that h1 and p were siblings, they share the same parent. 

You could also say that h1 and p were children of body and html was their ancestor. 

You can also work your way around the DOM using code. This is something you'll do often in one form or another. You'll need to do this when you write code that needs to change the content or style of a DOM element. For example when someone clicks a button you might want to make an element visible by changing it's style, and display a message by changing the text inside side the tag (innerHTML.) You might do this to create an animated dialog box.

Here is an example:

```JS
const h1 = document.querySelector('h1') // selects the h1 tag
h1.innerHTML = 'JS FTW!' // Changes the text content of the tag
```

In the above example the first line finds an h1 tag using `document.querySelector()`. You provide a description of the element you're looking for, I used the tag name, and querySelector returns first tag that matches that description. 

Here we stored the tag in a variable with a descriptive name for convenience. 

On the second line you set the innerHTML property of the tag. We used the dot syntax. Use dot syntax to access the property of an object. `h1` (the `<h1>Hello World</h1>` in the DOM tree) is an object with properties that describe it. One of these properties is `innerHTML` this property sets the text content between the opening and closing tags.

Let's review. DOM is the Document, Object, Model. It's a tree structure where each element in the tree is an Object. All of these objects have properties that we can access using JS. 

What if we turned this into an anaolgy. Imagine your web page is an apple tree. It might look like this. 

- root
  - trunk
    - branch
      - leaf
      - apple

You could get a reference to the apple with: 

`const apple = document.querySelector('apple')`

The apple is an object with properties. You can access all of it's properties with dot syntax. For example: 

- `apple.hasWorm` might return true or false. 
- `apple.color` might return red or green

You can set properties with dot notation also. 

- `apple.color = 'golden'` changes the color of the apple to golden

Properties are variables that belong to an object. You'll always access these with dot syntax/notation. 

What about methods? Methods are functions that belong to an object. Let's imagine these with the tree analogy. 

The leaf might have a method `photosynthesize`. To call/invoke the method you'll need a reference to the leaf. 

`const leaf = document.querySelector('leaf')`

This would a get reference to the first leaf found in the DOM. 

Then you could call a method on your leaf like this: 

- `leaf.photosynthesize()` Calls the photosynthesize method of leaf. 
- `leaf.fall()` maybe leaves have a fall method you could call that also. 

Let's do this with real code. 

## Tip Calculator

Create a new HTML document and add the following code to it. Be sure to also include the default HTML code and add what's below to the body. 

```HTML
<main>
  <h1>Tip Calc</h1>
  <div id="display">0.00</div>
  <input id="bill" value="10.00" type="number">
  <input id="tip" value="15" type="number">
</main>
```

The code above would be good for a tip calculator app. It has a name, a place to display the tip amount, and two inputs that allow us to input the bill amount and tip percentage. 

What's missing is the logic to gather the numbers, make the calculation, and display the results. To do this we need JavaScript. 

### Where to put JavaScript

The JavaScript you write can go in one of two places.

You can write JavaScript inside the `<script>` tag in the same way you write CSS in the `<style>` tag. Here's an example:

```HTML
<script>
  // JavaScript code written here! 
  console.log('Hello World')
</script>
```

JavaScript can also be written in a file named with the .js file extension. You can link these files to your html documents with the script tag like this: 

`script.js`
```JS
// javaScript Code written here! 
console.log('Hello World')
```

In your html document write: 

```HTML
<script src="script.js"></script>
```

#### Where to put the script tag?

It's important that you place the script tag at the bottom of the body tag, below the rest of your HTML code. 

Here is an example: 

```HTML 
<!DOCTYPE html
<html>
  <head></head>
  <body>


    <!-- script at the bottom -->
    <script></script>
  </body>
</html>
```

**Why?** You want your code to run after the content of the document loads. Placing the code at the bottom ensures this happens. 

### document.querySelector()

In order to work with DOM elements you need a reference to that element. The browser API provides the `document.querySelector()` method. You cand use this to select an element the JavaScript similar to how you select elements with CSS. 

We decided that we needed a reference to the div#display, input#bill, and input#tip. 

```JavaScript
const display = document.querySelector('#display')
const billInput = document.querySelector('#bill')
const tipInput = document.querySelector('#tip')
```

Each of these variables now contain references to their repsective DOM element. These are objects and so have properties and methods. 

Try these experiements: 

```JavaScript
const display = document.querySelector('#display')
const billInput = document.querySelector('#bill')
const tipInput = document.querySelector('#tip')

console.log(display.innerHTML) // prints the text inside the tags
console.log(bill.value) // prints the value entered into the input

bill.value = 
```

<!-- > -->

## Solving problems and the tip calculator <!--3 min-->

The tip calculator presents some programming problems. Think of this as a interview question. 

<!-- > -->

Assumptions: name and list the assumptions? 

<!-- > -->

1. bill: float/number
1. tip: float/int/number
1. people: int/number

<!-- > -->

## Numbers, Strings, and NaN <!--40 min-->

Any value from an `<input>` will be a string even if the value is a number, even if the type  of the input is number.

Use `parseInt(value)` or `parseFloat(value)` to convert a value to a number. 

If the value can not be converted to a number these functions return `NaN`. This a special type that represents something that is "Not a Number". 

```javascript 
const bill = parsFloat(inputBill.value)
const people = parseInt(inputPeople.value)
```

To test if a value is `NaN` use `isNaN(value)`.

```javascript
const badNumber
isNaN('123') // true - Not a number!
isNaN(123)   // false - a Number!
```

<!-- > -->

Let's put that all together into something useful: 

```html
<input id="input-bill">
```

```javascript 
const inputBill = document.getElementById('input-bill')

let bill = 0

inputBill.addEventListener('input', handleBill)

function handleBill(e) {
  const newBill = parseFloat(e.target.value)

  if (!isNaN(newBill)) {
    bill = newBill
  } else {
    e.target.value = bill
  }
}
```

<!-- > -->

### Scope 

It's important to understand that these variables have different scope. As a reminder, Javascript has two scopes: **block** (only accessible within the code block it was declared in) and **function** (only accessible within the function it was declared)

To be the best developer you can be you should always ask the question yourself what the scope is for any variable you happen to be looking at. 

Read [this article on scoping](https://dmitripavlutin.com/javascript-scope/) and answer the following question with a partner:

In your own words, describe the following scopes, and how they all differ:

- block scope
- function scope
- module scope
- global scope
- lexical scope


<!-- v -->

Recall the prior example code:

```html
<input id="input-bill">
```

```javascript 
const inputBill = document.getElementById('input-bill')

let bill = 0

inputBill.addEventListener('input', handleBill)

function handleBill(e) {
  const newBill = parseFloat(e.target.value)

  if (!isNaN(newBill)) {
    bill = newBill
  } else {
    e.target.value = bill
  }
}
```

The sample code above uses the following variables: 

- inputBill
- bill 
- newBill

- **Question:** What is the scope of each variable in the list above? Discuss this with your group.

### Calculating the total and tip

```javascript
function calculateTip() {
  const tip = bill * tipPercent / 100
  const total = bill + tip
  const perPerson = total / people

  displayTip.innerHTML = tip.toFixed(2)
  displayTotal.innerHTML = total.toFixed(2)
  displayEach.innerHTML = perPerson.toFixed(2)
}
```

- Question: what is happening here? discuss this with your group? 
  - What variables are used and what is their scope? 

<!-- > -->

### Event Object

What is `e`? This is an object that describes the event. Handler functions always receive an event objects. 

Event Objects have many properties that are useful. 

<!-- > -->

### event.target

`event.target` is the object where the event originated. In this example it's `<input>`.

Why is the target useful? Allows for DRY code. 

<!-- > -->

## Check for understanding <!--7 min-->

Write out the following on your own, then discuss with a partner to try and answer each other's questions, then we'll discuss as a class any remaining questions:

- 3 things you learned today
- 2 interesting ideas
- 1 question on today's material

<!-- > -->

## 10 min Break

<!-- > -->

## Styling the Tip Calculator <!--Rest of Class-->

Flexbox is probably the best choice for making the tip calculator. 

Using nested flex parent's allows different levels to be aligned in columns and rows creating a complex layout. 

**Remember: when an element has `display: flex` it's children are arranged using the flex rules.**

Take a look at this image: 

Here is the starting tip calculator.

![Tip Calc 1](images/tip-calc-1.png)

Here is a wireframe of the tip calculator. Think of each box in the wire frame as one element in the DOM. 

![Tip Calc 2](images/tip-calc-2.png)

There is an outer container. `main.main`

![Tip Calc 3](images/tip-calc-3.png)

Use two innner elements to group the left and right side of the tip calculator. The blue line shows the main axis of of the flex container. Here flex direction is row. `div.left-side` and `div.output-container`

![Tip Calc 4](images/tip-calc-4.png)

The right side section has two children. This right side container can be display flex and have a direction of column. `div.display` `div.display > span`

![Tip Calc 5](images/tip-calc-5.png)

Inside these two child sections their parent can be display flex with a direction of row and space between. (The code below has three elements here). 

![Tip Calc 6](images/tip-calc-6.png)

In the left side the container here can be display flex with a direction of column. This arranges the labels and the inputs. `div.right-side`

![Tip Calc 7](images/tip-calc-7.png)

Each input can be grouped in a parent with it's two button elements. The parent can be flex with direction row. `div.input-container` 

![Tip Calc 8](images/tip-calc-8.png)

In markup it might look like this: 

```HTML
<main class="main">
  <div class="output left-side">
    <div class="display">Tip:<span id="display-tip"></span></div>
    <div class="display">Total:<span id="display-total"></span></div>
    <div class="display"">Each:<span id="display-each"></span></div>
  </div>

  <div class="input right-side">
    <div class="input-container">
      <span class="label">Bill Amount</span>
      <div class="input-with-buttons">
        <button>-</button>
        <input 
          id="input-bill" 
          value="10"
          type="number">
        <button>+</button>
    </div>

    <div class="input-container">
      <span class="label">Tip %</span>
      <div class="input-with-buttons">
        <button>-</button>
        <input 
          id="input-tip" 
          type="number" 
          name="tip-percent" 
          value="15">
        <button>+</button>
      </div>
    </div>

    <div class="input-container">
      <span class="label">Number of People</span>
      <div class="input-with-buttons">
        <button>-</button>
        <input 
          id="input-people" 
          type="number" 
          value="1">
        <button>+</button>
      </div>
    </div>
  </div>
</main>
```
<!-- > -->

## After Class - Homework

Continue to work on the the next assignment: [Shopping Cart](../Assignments/08-JS-Shopping-Cart.md)! **This will be due next class!**