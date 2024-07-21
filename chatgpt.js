<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        #todo-list {
            list-style-type: none;
            padding: 0;
        }
        .todo-item {
            display: flex;
            justify-content: space-between;
            margin: 5px 0;
            padding: 5px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
    </style>
</head>
<body>
    <h1>To-Do List</h1>
    <input type="text" id="new-todo" placeholder="Add a new task">
    <button id="add-todo">Add</button>
    <ul id="todo-list"></ul>

    <script src="app.js"></script>
</body>
</html>
