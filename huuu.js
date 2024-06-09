<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Example</title>
</head>
<body>
    <h1>JavaScript Example</h1>
    <p id="myParagraph">This is a paragraph.</p>
    <button id="myButton">Click Me</button>

    <script>
        // Function to change the text of the paragraph
        function changeText() {
            var paragraph = document.getElementById("myParagraph");
            paragraph.innerHTML = "The text has been changed!";
        }

        // Add event listener to the button
        var button = document.getElementById("myButton");
        button.addEventListener("click", changeText);
    </script>
</body>
</html>
