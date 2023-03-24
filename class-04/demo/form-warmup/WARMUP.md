# Warmup

In this warmup, we will remember how forms worked in Code 201 (the non-React way). Look at this HTML code snippet.

```html
<html>
  <head> ... </head>
  <body>
    <h2 id="nameHeader">Welcome, user!</h2>
    <main>
      <form id="myForm">
        <label for="name">Name</label>
        <input type="text" name="name" id="name" />
        <br />
        <label for="dob">Date of Birth</label>
        <input type="date" name="dob" id="dob" />
        <br />
        <input type="submit" />
      </form>
    </main>
  </body>
</html>
```

1. What will this form look like? Draw a picture.
2. Write the JavaScript to implement this feature: When the user clicks the submit button, we `console.log('submitted')`.
3. Write the JavaScript to implement this feature: Every time the user types a character into the `name` text box, we update the `h2` to display `Welcome, <username>!`.
