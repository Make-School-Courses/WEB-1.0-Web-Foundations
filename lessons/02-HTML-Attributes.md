# FEW 1.1 - HTML Attributes

➡️ [**Slides**](https://make-school-courses.github.io/FEW-1.1-Web-Foundations/Slides/02-Forms-Links-Images/README.html ':ignore')

<!-- > -->

## Learning Objectives <!--(3 min)-->

1. Describe Attributes 
1. Use HTML tags and their attributes
1. Use HTML forms and form elements
1. Use the validator to write better HTML

<!-- > -->

### Why you should know this

The ability to generate well written and valid HTML is a requirement for any front end developer. You want to be solving bigger problems rather than tripping over HTML syntax. 

<!-- > -->

## Code Review <!--(30 min)-->

Code review is a process of reviewing code before it is released. This is an important step used on the job. 

### Activity: Read and Discuss

Read the following article on [What Is Code Review](https://smartbear.com/learn/code-review/what-is-code-review/)

With a partner, discuss the 4 code review approaches, and write out the pros/cons to each. Which one is your favorite, and why?

**Further Discussion** read up on these [10 best practices for code reviews](https://smartbear.com/learn/code-review/best-practices-for-peer-code-review/), and discuss why you think these are best practices? Why should we follow these?

### Pair up and review

As review you should look closely for semantic use of HTML elements. Especially these tages: 

- base html
    - html, head, title, and body
- semantic structure
    - section, article, header, footer
- semantic organization, and communication
    - h1-6, p, strong, em, etc.

With a partner, define how you would use each of these above HTML elements. What other elements could you use, and how would you use them?

<!-- > -->

## Validation <!--(10 min)-->

Besides using humans to review your work software systems can also be used. The HTML Validator will look at your files and check your work against the expected syntax. 

Use the https://validator.w3.org to validate your work. You can upload a file, or type in the code directly, and it will return a list of syntax errors/warnings that it finds.

Try it out! Use one of your own HTML files, or go copy/paste HTML from your favorite website and see what it says!

<!-- > -->

## Attributes <!--(10 min)-->

<!-- > -->

### What are attributes?

We use attributes to add meaning to elements marked up with tags. While a tag might mark something up as a time/date we might not know exactly when. Consider: 

`<time>Next Wednesday</time>`HTML

vs 

`<time datetime="2020-08-05">Next Wednesday</time>`HTML

Or imagine you have a link that says "Contact" the actual address might be something more complex and less readble. Without the URL the link would be useless!

`<a href="http://mysite.com/contact.html">Contact</a>`HTML

An attribute goes in the opening tag and is always in the form `name="value"`. Values are always quoted.

```html
<div class="warning">Help!</div>
```

<!-- > -->

**Multiple Attributes**

Tags can have as many attributes as you care to include. 

```html
<img src="alien.png" width="64" height="64">
<input type="text" name="first-name" id="input-name">
```

Values are _always_ quoted even if they are numbers!

The order doesn't matter.

Many tags have attributes specific to them. 

<!-- > -->

## Activity: Attribute Practice <!--(15 min)-->

As we go through the rest of this section, utilize the trinkets below to get some extra practice with adding attributes yourself!

[https://trinket.io/html/81a953369e](https://trinket.io/html/81a953369e)

<!-- > -->

## Images <!--(5 min)-->

<!-- > -->

### The img tag

The `img` tag displays an image. 

Semantically by using the `<img>` tag you saying there is a picture of something. This is different from images that are part of the design. 

<!-- > -->

The `<img>` has a few attributes: 

<div class="compact">
- src
- alt
- width & height
</div>

```html
<img src="apples.png" width="400" height="200" alt="Apple Tree">
```

<!-- > -->

## the input tag <!--(10 min)-->

<!-- > -->

The input tag is used to create a form input. It can appear in many different ways. It's important attributes are: 

- type
- name

```html
<input type="text" name="query">
```

<!-- > -->

`<input>` has a lot of possible types: 

- text - a text input

```html
<input type="text">
```

<input type="text" style="font-size:1.5em">

<!-- > -->

`<input>` has a lot of possible types: 

- **email** - email input

<form style="display:flex; margin: auto">
  <input type="email" style="font-size:1.5em">
  <button type="submit" style="font-size: 1em">Submit</button>
</form>

`<input type="email">`

<!-- > -->

`<input>` has a lot of possible types: 

- **password** - password input

<form style="display: flex; margin: auto">
  <input type="password" style="font-size:1.5em">
  <button type="submit" style="font-size:1em">Submit</button>
</form>

`<input type="password">`

<!-- > -->

`<input>` can also use placeholder

- text - a text input

<input type="text" style="font-size:1.5em" placeholder="Enter your name">

`<input type="text" placeholder="Enter your name">`

<!-- > -->

`<input>` has a lot of possible types: 

- number - numeric input

<form style="display: flex; margin: auto">
  <input type="number" style="font-size:1.5em">
  <button type="submit" style="font-size:1em">Submit</button>
</form>

`<input type="number">`

<!-- > -->

`<input>` has a lot of possible types: 

- range - a numeric range
- min - minimum value of the range
- max - maximum value of the range

<form>
  <input type="range" min="1" max="6" style="width:200px;height:40px">
</form>

`<input type="number" min="1" max="6">`

<!-- > -->

`<input>` has a lot of possible types: 

- color - color picker input

<form>
  <input type="color" style="width:100px; height:50px">
</form>

`<input type="color">`

<!-- > -->

Radio buttons are groups of buttons where only one of the group can be selected at any time. 

`<input>` has a lot of possible types: 

- radio - choose one

<form style="border:1px solid;padding:0.5em;margin:0.5em">
  <input type="radio" name="size" style="font-size:1.5em">
  <input type="radio" name="size" style="font-size:1.5em">
  <input type="radio" name="size" style="font-size:1.5em">
</form>

```html
<input type="radio" name="size">
<input type="radio" name="size">
<input type="radio" name="size">
```

<!-- > -->

## Forms <!--(10 min)-->

**Form** elements are how we collect information from users! We collect that information through the `input` elemetns that we've been building so far. Think of a `form` as a container that we will put all of our `input` elements in, and the form will also signal where to send the form data. But we'll revisit that later.

Each input within a form should have a label:

`<label>Medium</label>`

Labels make your checkboxes and radio buttons make more sense. They also help clarify your text inputs. 

<!-- > -->

<div style="display:flex">
<form style="width:250px; border:2px solid; padding:0.5em">
  <p>
    <label>
      <input type="radio" name="size" style="font-size:1em">
      Small
    </label>
  </p>
  
  <p>
    <label>
      <input type="radio" name="size" style="font-size:1em">
      Medium
    </label>
  </p>

  <p>
    <label>
      <input type="radio" name="size" style="font-size:1em">
      Large
    </label>
  </p>
</form>

```html
<form>
  <p>
    <label>
      <input type="radio" name="size">
      Small
    </label>
  </p>
  
  <p>
    <label>
      <input type="radio" name="size">
      Medium
    </label>
  </p>

  <p>
    <label>
      <input type="radio" name="size">
      Large
    </label>
  </p>
</form>
```
</div>

<!-- > -->

<div style="display:flex">
<form style="width:250px;border: 2px solid;padding: 0.5em">
  <p>
    <label>
      <input type="checkbox" name="size" style="font-size:1em">
      Caffeinated
    </label>
  </p>
  
  <p>
    <label>
      <input type="checkbox" name="size" style="font-size:1em">
      Notified
    </label>
  </p>

  <p>
    <label>
      <input type="checkbox" name="size" style="font-size:1em">
      Soulful
    </label>
  </p>
</form>

```html
<form>
  <p>
    <label>
      <input type="checkbox">
      Caffeinated
    </label>
  </p>
  
  <p>
    <label>
      <input type="checkbox">
      Notified
    </label>
  </p>

  <p>
    <label>
      <input type="checkbox">
      Soulful
    </label>
  </p>
</form>
```

</div>

<!-- > -->

<div style="display:flex">
<form style="width:250px; border:2px solid; padding:0.5em">
  <p>
      <input id="small" type="radio" name="size" style="font-size:1em">
      <label for="small">Small</label>
  </p>
  
  <p>
      <input id="medium" type="radio" name="size" style="font-size:1em">
      <label for="medium">Small</label>
  </p>

  <p>
      <input id="large" type="radio" name="size" style="font-size:1em">
      <label for="large">Small</label>
  </p>
</form>

```html
<form style="width:250px; border:2px solid; padding:0.5em">
  <p>
    <input id="small" type="radio" name="size">
    <label for="small">Small</label>
  </p>
  
  <p>
    <input id="medium" type="radio" name="size">
    <label for="medium">Medium</label>
  </p>

  <p>
    <input id="large" type="radio" name="size">
    <label for="large">Large</label>
  </p>
</form>
```
</div>

<!-- > -->

## Anchors <!--(5 min)-->

<!-- > -->

Anchors are text links that load new documents. These are the proverbial **hyperlinks**.

`<a href="http://google.com">Google</a>`

The `href` attribute sets the URL the link loads. 

<!-- > -->

Anchors/hyperlinks can link to elements in the same document. 

```html
<a href="#weather-report">Todays Weathwer</a>

...

<article id="weather-report">...</article>
```

The `href="#weather-report"` moves the element with the `id="weather-report"` to the top of the page. 

<!-- > -->

<!-- .slide: data-background="#087CB8" -->

## BREAK <!--[10 min]-->

<!-- > -->

### Homework

Complete [assignment 2](../assignment-02.md)

<!-- > -->

### Wrap Up

1. What is an attribute?
1. What is the syntax for attributes?
1. How to display an image? 
  - What are the attributes involved?
1. What is an `<input>`? 
  - What types are there?

<!-- > -->

### Additional Resources

1. https://smartbear.com/learn/code-review/what-is-code-review/
1. https://smartbear.com/learn/code-review/best-practices-for-peer-code-review/
1. https://validator.w3.org

