Create a new HTML form to accept the information for a new cookie stand. Be sure to utulize the <fieldset> tag to help you style it.

Upon submission of the HTML form, create an event handler that creates a new instance of a cookie stand that appends to the table upon form submission.

Use the constructor function as your guide to determine what input fields your form needs (hint: also consider what is passed in when creating instances!).

If not complete from lab 7, write a stand-alone function to generate a footer row which will display the total number of cookies sold per hour for all locations. When a new store is added using your form, the totals in the footer row should update to include these new sales numbers.

HINT: The document.querySelectorAll() method might be useful when re-rendering your footer row Document.querySelectorAll().

Run your Lighthouse Accessibility report looking for a score between 65-80. Make adjustments as needed. Add a screenshot of your score to your README.md.

Anywhere you have repeated chunks of code, apply some DRY principles. Generally, once some chunk of code is appearing for a 3rd time or so, that's when you want to consider refactoring.

Validate your html through HTML5 validation.

Confirm that your code is following the single responsibility rule. Each function should only do one thing, with the capability to break it out further as needed.
