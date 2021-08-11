# ASSESSMENT 5: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. Rails follows an MVC pattern. What does that mean?

  Your answer: MVC stands for Model View Controller.

  Researched answer: MVC is a pattern commonly used for developing modern user interfaces. A model is data used by a program such as a database, file, or object. A view is the means of displaying objects wihtin an application. A controller updates both models and views. The three parts of MVC are interconnected. The view displays the model for the user while the controller accepts user input and updates the model and view accordingly. 



2. What is a relational database? Are there other kinds of databases?

  Your answer: A relational database is a table of rows and columns that contain data. Yes, there are other kinds of databases. An example would be object databases which is based on objects in OOP.

  Researched answer: A relational database, or SQL database, is similar to an Excel spreadsheet with information displayed in rows and columns. This database works by linking information from multiple tables through the use of keys. Another type of database is a non-relational database, or NoSQL database. This does not use a table schema of rows and columns and are more specific in the type of data they support and how data can be queried. 



3. What is object-relational mapping?

  Your answer: Object-relational mapping, or ORM, is a way to interact with a database in a programming language.

  Researched answer: ORM is a programming technique used for writing SQL queries in object-oriented programming languages. An example of an ORM is Active Record which is used in Rails.



4. What is a gem?

  Your answer: A gem is a package manager for Ruby. 

  Researched answer: A Ruby gem is a package of user-contributed Ruby files that we can implement in a rails application. Gems are built by the Ruby community and contain classes and modules. 



5. What are primary keys? Why are they important?

  Your answer: A primary key is a unique way to identify a row in a table. This is important because it is used to create a relationship with other tables in a database. 

  Researched answer: A primary key is a unique ID for each row of a table in Rails. This prevents two rows with similar names from being conflated which could have unintended consequenses. 



## Looking Ahead: Terms for Next Week
Research and define the following terms to the best of your ability.

1. RESTful routes: REST stands for Representational State Transfer and is a pattern to follow when structuring routes between the server and the client. RESTful routes are an attempt to bring the operations that can be applied to an object into HTTP requests.

2. JSON: Javascript Object Notation. An open standard file format and data interchange format that uses human-readable text to store and transmit data objects consisting of attribute-value pairs and arrays. It is commonly used to send data from the server to the client, so it can be displayed on a web page, or vice versa.

3. ERB: Embedded Ruby. A Ruby feature that enables us to generate any kind of text, in any quantitiy, from templates. It is often used to embed Ruby code in an HTML doc.

4. Params: A named variable that is passed into a function. Param variables are used to import arguments into functions. A best practice is to name your param as the data type of the argument being passed in for an easier workflow. 

5. API: Application Programming interface. A type of software interface that acts as a connection between computers and computer programs. Basically, it allows two applications to talk to eachother and access data. An example would be checking the weather on your phone. The app receives data from weather.com to display up-to-date weather information directly on your phone. 
