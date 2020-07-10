# FEW 1.1 - Semantic HTML

➡️ [**Slides**](https://make-school-courses.github.io/FEW-1.1-Web-Foundations/Slides/01-Semantic-Html/README.html ':ignore')

<!-- > -->

## Learning Objectives <!--(2 min)-->

- Describe semantic HTML
- Use Semantic HTML
- Write HTML with correct syntax
- Markup content and preserve context and meaning

<!-- > -->

## HTML and Homes <!--(5 min)-->

While HTML is just one piece of how websites are built, it is the _foundation_ upon which we build our websites. Without it, our websites would have no structure, or elements that we could style. Consider the following:

![html house](./images/html_house.gif)

<!-- v -->

We construct our websites by first laying down the foundation (our HTML elements) and then providing it with aesthetics and style (CSS). You can't style a house before you have the foundation and outline of it, so let's get started on learning how to build out our HTML elements!

<!-- > -->

### Why is this important?

- Without a knowledge of how to properly use HTML, we can't build out our websites! If you want to build a custom website, or even do any customization on website builders like Squarespace or Wix, you need to know HTML
- Knowing HTML is one thing, but using it properly is another. Knowing which elements to use for which scenario not only improves your website's structure, but also improves its SEO (Search Engine Optimization). By utilizing semantic HTML, you have a better chance of drawing users to your website by improving your appearance in search results!

<!-- > -->

## How do we use HTML? <!--(5 min)-->

HTML uses tags to "markup" a document. Tags describe and provide context to content. 

Below the `p`, or paragraph, tag describes the text Hello World as a paragraph. 

```html
<p>Hello World.</p>
```

The opening tag `<p>` is followed by a closing tag `</p>` which has a slash `/`.

<!-- > -->

### Combining Tags

Many different tags can be combined and nested one within another. 

```html
<article>
  <h1>HTML</html>
  <p><abbr>HTML</abbr> is the best!</p>
</article>
```

<!-- > -->

### Tags cannot overlap!

Good:

```HTML
<p><abbr>HTML</abbr> is the best!</p>
```

Bad: 
```HTML
<p><abbr>HTML</p></abbr> is the best!
```

(the `</p>` closes before the inner `</abbr>`)
<!-- .element: class="fragment" -->

<!-- > -->

## Combining Tags Activity <!--(15 min)-->

Translate the following tag combinations from english into HTML. When you're done, check your answers with a partner:

1. Within a `div`, put an `h2` with the text "Hello World" and a `p` that says "Nice To Meet You"
1. Within a `p`, put an `abbr` with the text `ACE`, then within the rest of the `p`, put the text "is a hardware store"
1. Within an `article`, put a `p` with the text "do not forget the " followed by a `mark` that says "flowers ", and ending with "tonight" before closing out the `p`

<!--
Question 1:
<div>
    <h2>Hello World</h2>
    <p>Nice To Meet You</p>
</div>

Question 2:
<p><abbr>ACE</abbr> is a hardware store</p>

Question 3:
<article>
    <p>do not forget the <mark>flowers</mark> tonight </p>
</article>
 -->

<!-- > -->

## Semantic HTML <!--(15 min)-->

<!-- > -->

### What is semantic HTML?

**Semantic** (adj.): of or relating to meaning in language

To use a *word* semantically is to use a word in a way that properly aligns with its meaning.
<!-- .element: class="fragment" -->

**Semantic markup** is to use tags that properly align with the **content** the tags mark up.
<!-- .element: class="fragment" -->

<!-- > -->

### Some Examples

<!-- > -->

#### "Valentines day! ♥️"

How would you mark this up?
<!-- .element: class="fragment" -->

A time or date uses the `time` tag.
<!-- .element: class="fragment" -->

```html
<time>Valentines day! ♥️</time>
```
<!-- .element: class="fragment" -->

Or better
<!-- .element: class="fragment" -->
```html
<time datetime="2020-02-14">Valentines day! </time>
```
<!-- .element: class="fragment" -->

<!-- > -->

#### "HTML"

How would you mark this up? (seriously)
<!-- .element: class="fragment" -->

Abbreviations and acronyms use the `abbr` tag.
<!-- .element: class="fragment" -->

```html
<abbr>HTML</abbr>
```
<!-- .element: class="fragment" -->

Or, better
<!-- .element: class="fragment" -->

```html
<abbr title="Hyper Text Markup Language">HTML</abbr>
```
<!-- .element: class="fragment" -->

<!-- > -->

<abbr title="Hyper Text Markup Language">HTML</abbr> was invented by Tim Berners Lee.

<!-- > -->

#### "How would you mark this up? (seriously)"

```HTML
<p>How would <em>you</em> mark this up? <strong>(seriously)</strong></p>
```
<!-- .element: class="fragment" -->

`em` and `strong` are inline tags that control the voice of what you are saying.
<!-- .element: class="fragment" -->

<em>Always</em> use inline tags <strong>inside a block!</strong>
<!-- .element: class="fragment" -->

<!-- > -->

### Sarcasm

What about a sarcasm tag?  
<!-- .element: class="fragment" -->

Would this be useful? Discuss... 
<!-- .element: class="fragment" -->

What tags would find useful for communication? Discuss... 
<!-- .element: class="fragment" -->

<!-- > -->

### Some Rules

<!-- > -->

- Pairs end with / - `<p>...</p>`
- Some tags don't have a pair - `<hr>`
- Tags can't overlap! - `<p><time>Valentines day!</time></p>`
- Attributes are name value pairs the value is always in quotes - `<img src="./picture.png">`

<!-- > -->

## Activity <!--(20 min)-->

Pair up and research tags. 

https://developer.mozilla.org/en-US/docs/Web/HTML/Element

Take a look at what the HTML5 Dr has to say about your tags: http://html5doctor.com

Choose **one tag from each category** to present to your classmates. Include an example of the tags in use to show context.

<!-- > -->

1.
- address
- article, section, aside
- nav, main
- footer, header
- h1-6, hgroup

2.
- blockquote
- dd, dl, dt, ul, ol, li
- figure, figcaption
- pre, code

3.
- a
- abbr, time, 
- dfn
- i, b, u, strong, em, sup, sub
- mark, del, ins, q

4.
- area
- audio, video, source, img, track

- embed, iframe, object

- canvas
- details, dialog, menu, menuitem, summary

<!-- > -->

## BREAK <!--(10 min)-->

Take a ten minute break and wrap a tag around everything you see. 

<!-- > -->

## Lab

Mark up challenges 1-4 here: https://github.com/soggybag/learn-semantic-markup. Choose the bext tags to describe the content of the text in each of these documents. 

Write a description for intensive project. Include the following information: 

- When you made it and a date
- Title or name of the project
- Why you made it, what is the rationale for creating this project. What problems does it solve? 
- Short description of the process and tools used. 
- Meta info, where is it hosted, where is the code, how to get started etc. 

<!-- > -->

- Markup your project description 
- Use semantic markup, use tags:
    - article
    - headings
    - Parargraphs
    - List
    - etc. 

<!-- > -->

## After Lab

Questions?

Pair up and markup the example text.

https://github.com/soggybag/learn-semantic-markup

<!-- > -->

### Homework 

[Assignment 1](../assignments/assignment-01.md) will be due at the beginning of next class. We'll submit it together during class.

<!-- > -->

### Wrap-Up 

- What were the learning objectives? 
- What is a learning Objective? 
- How would you check your understanding of the learning objectives? 

<!-- > -->

### What are learning Objectives? 

learning Objectives are the concepts and ideas that you need to know to claim mastery of a subject. When you have mastered a learning objective you will be able to explain it and put into practice. 

<!-- > -->

Test your knowledge by explaining the concept to someone else. 

Some learning objects you will implement in code. 

Others learning objects are ideas that exist in the world at larger or are overaching ideas. 

<!-- > -->

### Additional Resources

1. http://html5doctor.com
1. https://en.wikipedia.org/wiki/HTML
1. https://developer.mozilla.org/en-US/docs/Web/HTML/Element
