<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <title>File Upload Example</title>
</head>
<body>
    <h2>Upload File</h2>
    <form method="POST" action="/uploadFile" enctype="multipart/form-data">
        <input type="file" name="file" /><br/><br/>
        <h3>Name</h3>
        <input type="text" name="name" />
        <h3>Age</h3>
        <input type="number" name="age" id="age" min="0" required/><br/><br/>
        <label for="gender">Gender:</label>
        <select name="gender">
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
        </select></br></br>
        <input type="submit" value="Submit" />
    </form>
</body>
</html>