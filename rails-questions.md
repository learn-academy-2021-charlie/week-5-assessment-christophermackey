# ASSESSMENT 5: Database and Active Record Practical Questions

1. What is SQL?
    SQL stands for structured query language and is a domain-specific language used in programming to manipulate and retrieve data from relational databases. 

2. What *is* the PostgreSQL query that would return all the content in a particular table?
    If we have a database with a table called uspresidents we could use the query => SELECT * from uspresidents <= to return all of its content. 

3. What is the command to create a new Rails application with a PostgreSQL database?
    rails new my_app -d postgresql -T

4. What is the command to generate a Rails model for a meals table with columns named breakfast, lunch, and dinner?
    rails g model Meals breakfast:string lunch:string dinner:string

5. What is a migration? Why would you use one?
    A rails migration is a tool used to change an application's database schema. We would use a migration if we want to edit a column's name or data type, or add or remove a column from the table. 

6. What is the command to generate a migration file?    
    rails g migration add_columns_to_list
    *or*
    rails g migration AddColumnsToList

7. What is the naming convention for generating a Rails model? What is the naming convention for the table that is generated with this command?
    The name for a model is singular and PascalCase, whereas the name for the table is snake_cased and plural.

8. What is the schema file in a Rails application? Can you modify the schema directly? Why or why not?
    The schema.rb file found in the db folder of the rails app and is the shape of the database containing column names and datatypes. The schema should never be directly modified because that is the purpose of using migrations.

9. What is the Rails console?
    The rails console is used to interact with the Active Record. We can use this console to perform CRUD actions.

10. What is the Rails console command to see all the content in a particular table?
    This would fall under Read in the CRUD acronym. To do this we would open the rails console with *rails c* and type Dog.all if we want to look at content in the Dog table.
