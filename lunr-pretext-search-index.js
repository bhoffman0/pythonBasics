var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "io",
  "level": "1",
  "url": "io.html",
  "type": "Section",
  "number": "1.1",
  "title": "Python Input\/Output",
  "body": " Python Input\/Output   Python is a very popular programming language used in software development, web development, cybersecurity, data analysis, AI, and automation, etc. Python is a great language for beginners to learn because it is easy to read and understand. In this chapter, we will learn the basics of input and output (I\/O) in Python, which are essential for interacting with users and displaying information.    Output with print()  The print() function is used to display output to the screen in Python. Inside the parenthesis of the function, you can put in any message in quotes to be printed out, for example:   print(\"Hello World!\")   Try running this code in the exercise below. Notice that every Python command to the computer must be on a separate line.    Run the following code. Then, change \"World\" to your name and run the code again.    print(\"Hello World!\") print(\"Good bye!\")  from unittest.gui import TestCaseGui class myTests(TestCaseGui): def test1(self): self.assertIn(\"Hello\",self.getOutput(),\"Says hello\") self.assertNotIn(\"World\",self.getOutput(),\"Change World to your name\") myTests().main()      Drag or click on the blocks you need to move them from the top section into the yellow area to create a print statement that will print “Hi!”. There are extra blocks that you don’t need.     print    (    \"Hi!\"    )    ;    Print       Debugging   Syntax errors are bugs or mistakes in the way the code is written. For example, the following code has a syntax error because the quotes and parenthesis are not closed. Try running the code and see what happens. Try fixing the errors to debug the code.    Run the following code. Fix the errors and run again.    print(\"Hello World!  from unittest.gui import TestCaseGui class myTests(TestCaseGui): def test1(self): self.assertIn(\"Hello World!\",self.getOutput(),\"output\") myTests().main()      Variables   Variables are names for memory locations to store values. In Python, a variable is created when a value is assigned to it. For example, the following code creates a variable named name and assigns it the value \"Carlos\". Then, it creates a variable named age and assigns it the value 20 . Multiple values can be printed out separated by commas. The variables, name and age, are never put inside quotes because we do not want to literally print the variable names; we want to print the values stored in the variables.    Run the following code. Change the variable values and run again.    name = \"Carlos\" age = 20 print(name, \" is \", age, \" years old.\")  from unittest.gui import TestCaseGui class myTests(TestCaseGui): def test1(self): self.assertIn(\"years old\",self.getOutput(),\"output\") self.assertNotIn(\"Carlos\",self.getOutput(),\"Change Carlos to a different name\") myTests().main()      Drag or click on the blocks you need to move them from the top section into the yellow area to create a print statement with the variable name . For example, if name = \"Alex\" , it will print \"Hello Alex!\". There are extra blocks that you don't need.     print    (    \"Hello \"    ,    name    ,    \"!\"    )    \"Hello name!\"    \"name\"       Naming variables  Although you can name a variable almost anything you want, there are some rules and conventions to follow.     It must start with a letter or an underscore _    It can also contain digits, like 1 or 9 , just not as the first character    It can’t have spaces, or special symbols other than _   It can’t be a Python keyword . Keywords are words that have special meaning in the language(see below for examples).   Case matters. A variable named result is not the same as one named Result .     Python has a few dozen keywords that you can’t use as variable names. Here is a list of the most common ones. If you ever have an error based on one of your variable names and do not know why, compare your name to this list to make sure you are not using a keyword as your name.   Python keywords    and  as  assert  break  class  continue    def  del  elif  else  except  exec    finally  for  from  global  if  import    in  is  lambda  nonlocal  not  or    pass  raise  return  try  while  with    yield  True  False  None           Which of the following is not a legal variable name?      _a1    You can use an underscore as the first character in a variable name      my_name    You can use an underscore between words in a variable name.      amountOfStuff    You can use both uppercase and lowercase letters in a variable name.      BMP    You can use only uppercase letters in a variable name.      1A    You can't use a digit as the first letter in a variable name.        Input  Python has an input function that can be used to get input from the typed in by user. This input must be saved into a variable. The syntax for an input statement is:   variable_name = input(\"Input prompt or question? \")   The following code will ask the user for their name and then print out a greeting. Try it out by clicking the \"Run\" button.    Run the following code. Enter your name in the pop up input box and then scroll down to see the output.    name = input(\"What is your name? \") print(\"Hello\", name)  from unittest.gui import TestCaseGui class myTests(TestCaseGui): def test1(self): self.assertIn(\"Hello\",self.getOutput(),\"output\") myTests().main()      Drag or click on the blocks you need to move them from the top section into the yellow area to create an input statement that will ask for the user's age. There are extra blocks that you don't need.     age    =    input    (    \"What is your age?\"    )     Let's make a poem or a story using input and variables. Ask the user to input different nouns and verbs, and weave together a story.   Mad Libs Poem   Finish the input statements below to ask the user for 2 colors and a food item. Run to see the silly poem. Then, ask the user for more input words and create your own poem or story using the variables in print statements.    # Get user input pluralnoun1 = input(\"Enter a plural noun: \") pluralnoun2 = input(\"Enter another plural noun: \") # Complete 3 input statements below color1 = input( ) color2 = food = # create 2 more variables and input statements # Run to see the silly poem print(\"Here's my silly poem!\") print(\"Roses are \" + color1) print(pluralnoun1 + \" are \" + color2) print(\"I like \" + food) print(\"Do \" + pluralnoun2 + \" like them too?\") # Add at least 2 more lines to the poem # using print and your last 2 variables  from unittest.gui import TestCaseGui class myTests(TestCaseGui): def test1(self): self.assertIn(\"I like\",self.getOutput(),\"output\") input_count = self.getEditorText().count(\"input(\") self.assertGreaterEqual(input_count, 7, \"at least 7 input statements\") myTests().main()      Data Types and Hungarian Notation  In Python, the data type of a variable is determined by the value assigned to it. The input() function always returns a string, even if the user enters a number. For example, if the user enters \"25\", the variable will be a string containing \"25\", not the integer 25. But sometimes, you need it to be a number and not a string so that you can do math with it.  To convert a string to an integer or a float, you can use the int() or float() functions. We will need this in the next lesson to do math with or compare these variables. For example:   sAge = input(\"Enter your age: \") iAge = int(age) # Convert the string to an integer   Hungarian Notation is a naming convention where the variable name starts with a letter that indicates its data type. For example, you might use s for string, i for integer, and f for float. This can help you remember what type of data the variable holds.  To convert an int into a string, you can use the str() function. For example:   sAge = str(iAge) # Convert the integer back to a string   Python has several built-in data types, including:   int - for integers (whole numbers)  float - for floating-point numbers (decimals)  str - for strings (text)  bool - for boolean values (True or False)   You can check the data type of a variable using the type() function. For example:   print(type(iAge)) # This will print int print(type(sAge)) # This will print str     Run the following code to see that there are some errors caused by the data types. Try using int or str functions to convert the variables to the correct data type.    score = 10 print(\"Type of score:\", type(score)) # This will cause an error because score needs to be a string print(\"Score: \" + score + \" points\") bonus = input(\"Enter the bonus points (5-10): \") print(\"Type of bonus after input:\", type(bonus)) # This will also cause an error because bonus needs to be an int to be added total = score + bonus print(\"Total score: \", total)  from unittest.gui import TestCaseGui class myTests(TestCaseGui): def test1(self): self.assertIn(\"Total score\",self.getOutput(),\"output\")) self.assertIn(\"int(\", self.getEditorText(), \"Used int(\" ) self.assertIn(\"str(\", self.getEditorText(), \"Used str(\" ) myTests().main()      I\/O Exercises  These are mostly borrowed from the CSP and Hello CS books on Runestone.    There are 2 syntax errors (errors that prevent the code from running) in the following code. There is also a missing space in one of the strings that will be printed. Fix the code so that it prints exactly this: Your name is Carly and your favorite color is red. .    color = \"red' name = 'Carly' print(\"Your name is \" + name + and your favorite color is\" + color + \".\")  from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(color, \"red\", \"Testing that color has the correct value.\" ) self.assertEqual(name, \"Carly\", \"Testing that name has the correct value.\" ) self.assertEqual(self.getOutput().strip(), \"Your name is Carly and your favorite color is red.\", \"Testing output. Make sure you have spaces in all the right places!\") myTests().main()      You will get an error if you try to run the following code. Fix the code to print correctly without errors. It should print, Your name is Carly and your age is 19.  Note: Don’t forget that to turn an int into a string you do something like str(x) where x is the int you want to turn into a string.    age = 14 + 5 name = 'Carly' print(\"Your name is\" + name + \"and your age is\" + age + \".\")  from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(age, 19, \"Testing that age has the correct value.\" ) self.assertEqual(name, \"Carly\", \"Testing that name has the correct value.\" ) self.assertEqual(self.getOutput().strip(), \"Your name is Carly and your age is 19.\", \"Testing that you have the right output - make sure your spaces are correct!\") self.assertNotIn(\"19\", self.getEditorText(), \"Testing that you didn't hardcode the answer.\") myTests().main()      Which of the following is not a legal variable name?      _my_name    This is legal, but you don't usually start a variable name with an underscore.      my name    You can't have a space in a variable name.      myname    This may be hard to read, but it is legal.      myName    Since you can't have spaces in names, one way to make variable names easier to read is to use camel case (uppercase the first letter of each new word).      my_name    Since you can't have spaces in names, one way to make variable names easier to read is to use an underscore between two words.       "
},
{
  "id": "print1",
  "level": "2",
  "url": "io.html#print1",
  "type": "Activity",
  "number": "1.1.1",
  "title": "",
  "body": "  Run the following code. Then, change \"World\" to your name and run the code again.    print(\"Hello World!\") print(\"Good bye!\")  from unittest.gui import TestCaseGui class myTests(TestCaseGui): def test1(self): self.assertIn(\"Hello\",self.getOutput(),\"Says hello\") self.assertNotIn(\"World\",self.getOutput(),\"Change World to your name\") myTests().main()   "
},
{
  "id": "printMixedUp",
  "level": "2",
  "url": "io.html#printMixedUp",
  "type": "Activity",
  "number": "1.1.2",
  "title": "",
  "body": "  Drag or click on the blocks you need to move them from the top section into the yellow area to create a print statement that will print “Hi!”. There are extra blocks that you don’t need.     print    (    \"Hi!\"    )    ;    Print    "
},
{
  "id": "debugging-2",
  "level": "2",
  "url": "io.html#debugging-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Syntax errors debug "
},
{
  "id": "debug1",
  "level": "2",
  "url": "io.html#debug1",
  "type": "Activity",
  "number": "1.1.3",
  "title": "",
  "body": "  Run the following code. Fix the errors and run again.    print(\"Hello World!  from unittest.gui import TestCaseGui class myTests(TestCaseGui): def test1(self): self.assertIn(\"Hello World!\",self.getOutput(),\"output\") myTests().main()   "
},
{
  "id": "variables-2",
  "level": "2",
  "url": "io.html#variables-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Variables "
},
{
  "id": "printVars",
  "level": "2",
  "url": "io.html#printVars",
  "type": "Activity",
  "number": "1.1.4",
  "title": "",
  "body": "  Run the following code. Change the variable values and run again.    name = \"Carlos\" age = 20 print(name, \" is \", age, \" years old.\")  from unittest.gui import TestCaseGui class myTests(TestCaseGui): def test1(self): self.assertIn(\"years old\",self.getOutput(),\"output\") self.assertNotIn(\"Carlos\",self.getOutput(),\"Change Carlos to a different name\") myTests().main()   "
},
{
  "id": "mixedUpPrintVars",
  "level": "2",
  "url": "io.html#mixedUpPrintVars",
  "type": "Activity",
  "number": "1.1.5",
  "title": "",
  "body": "  Drag or click on the blocks you need to move them from the top section into the yellow area to create a print statement with the variable name . For example, if name = \"Alex\" , it will print \"Hello Alex!\". There are extra blocks that you don't need.     print    (    \"Hello \"    ,    name    ,    \"!\"    )    \"Hello name!\"    \"name\"    "
},
{
  "id": "naming-3",
  "level": "2",
  "url": "io.html#naming-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "keyword "
},
{
  "id": "python-keywords",
  "level": "2",
  "url": "io.html#python-keywords",
  "type": "Table",
  "number": "1.1.6",
  "title": "Python keywords",
  "body": " Python keywords    and  as  assert  break  class  continue    def  del  elif  else  except  exec    finally  for  from  global  if  import    in  is  lambda  nonlocal  not  or    pass  raise  return  try  while  with    yield  True  False  None        "
},
{
  "id": "rulesfornames1",
  "level": "2",
  "url": "io.html#rulesfornames1",
  "type": "Activity",
  "number": "1.1.7",
  "title": "",
  "body": "  Which of the following is not a legal variable name?      _a1    You can use an underscore as the first character in a variable name      my_name    You can use an underscore between words in a variable name.      amountOfStuff    You can use both uppercase and lowercase letters in a variable name.      BMP    You can use only uppercase letters in a variable name.      1A    You can't use a digit as the first letter in a variable name.     "
},
{
  "id": "input-2",
  "level": "2",
  "url": "io.html#input-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "input "
},
{
  "id": "input1",
  "level": "2",
  "url": "io.html#input1",
  "type": "Activity",
  "number": "1.1.8",
  "title": "",
  "body": "  Run the following code. Enter your name in the pop up input box and then scroll down to see the output.    name = input(\"What is your name? \") print(\"Hello\", name)  from unittest.gui import TestCaseGui class myTests(TestCaseGui): def test1(self): self.assertIn(\"Hello\",self.getOutput(),\"output\") myTests().main()   "
},
{
  "id": "mixedUpInput",
  "level": "2",
  "url": "io.html#mixedUpInput",
  "type": "Activity",
  "number": "1.1.9",
  "title": "",
  "body": "  Drag or click on the blocks you need to move them from the top section into the yellow area to create an input statement that will ask for the user's age. There are extra blocks that you don't need.     age    =    input    (    \"What is your age?\"    )    "
},
{
  "id": "madlib",
  "level": "2",
  "url": "io.html#madlib",
  "type": "Project",
  "number": "1.1.1",
  "title": "Mad Libs Poem.",
  "body": " Mad Libs Poem   Finish the input statements below to ask the user for 2 colors and a food item. Run to see the silly poem. Then, ask the user for more input words and create your own poem or story using the variables in print statements.    # Get user input pluralnoun1 = input(\"Enter a plural noun: \") pluralnoun2 = input(\"Enter another plural noun: \") # Complete 3 input statements below color1 = input( ) color2 = food = # create 2 more variables and input statements # Run to see the silly poem print(\"Here's my silly poem!\") print(\"Roses are \" + color1) print(pluralnoun1 + \" are \" + color2) print(\"I like \" + food) print(\"Do \" + pluralnoun2 + \" like them too?\") # Add at least 2 more lines to the poem # using print and your last 2 variables  from unittest.gui import TestCaseGui class myTests(TestCaseGui): def test1(self): self.assertIn(\"I like\",self.getOutput(),\"output\") input_count = self.getEditorText().count(\"input(\") self.assertGreaterEqual(input_count, 7, \"at least 7 input statements\") myTests().main()   "
},
{
  "id": "DataTypes-5",
  "level": "2",
  "url": "io.html#DataTypes-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Hungarian Notation "
},
{
  "id": "dataTypesDebug",
  "level": "2",
  "url": "io.html#dataTypesDebug",
  "type": "Activity",
  "number": "1.1.10",
  "title": "",
  "body": "  Run the following code to see that there are some errors caused by the data types. Try using int or str functions to convert the variables to the correct data type.    score = 10 print(\"Type of score:\", type(score)) # This will cause an error because score needs to be a string print(\"Score: \" + score + \" points\") bonus = input(\"Enter the bonus points (5-10): \") print(\"Type of bonus after input:\", type(bonus)) # This will also cause an error because bonus needs to be an int to be added total = score + bonus print(\"Total score: \", total)  from unittest.gui import TestCaseGui class myTests(TestCaseGui): def test1(self): self.assertIn(\"Total score\",self.getOutput(),\"output\")) self.assertIn(\"int(\", self.getEditorText(), \"Used int(\" ) self.assertIn(\"str(\", self.getEditorText(), \"Used str(\" ) myTests().main()   "
},
{
  "id": "cspnamestrings_exercises1",
  "level": "2",
  "url": "io.html#cspnamestrings_exercises1",
  "type": "Activity",
  "number": "1.1.11",
  "title": "",
  "body": "  There are 2 syntax errors (errors that prevent the code from running) in the following code. There is also a missing space in one of the strings that will be printed. Fix the code so that it prints exactly this: Your name is Carly and your favorite color is red. .    color = \"red' name = 'Carly' print(\"Your name is \" + name + and your favorite color is\" + color + \".\")  from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(color, \"red\", \"Testing that color has the correct value.\" ) self.assertEqual(name, \"Carly\", \"Testing that name has the correct value.\" ) self.assertEqual(self.getOutput().strip(), \"Your name is Carly and your favorite color is red.\", \"Testing output. Make sure you have spaces in all the right places!\") myTests().main()   "
},
{
  "id": "cspnamestrings_exercises2",
  "level": "2",
  "url": "io.html#cspnamestrings_exercises2",
  "type": "Activity",
  "number": "1.1.12",
  "title": "",
  "body": "  You will get an error if you try to run the following code. Fix the code to print correctly without errors. It should print, Your name is Carly and your age is 19.  Note: Don’t forget that to turn an int into a string you do something like str(x) where x is the int you want to turn into a string.    age = 14 + 5 name = 'Carly' print(\"Your name is\" + name + \"and your age is\" + age + \".\")  from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(age, 19, \"Testing that age has the correct value.\" ) self.assertEqual(name, \"Carly\", \"Testing that name has the correct value.\" ) self.assertEqual(self.getOutput().strip(), \"Your name is Carly and your age is 19.\", \"Testing that you have the right output - make sure your spaces are correct!\") self.assertNotIn(\"19\", self.getEditorText(), \"Testing that you didn't hardcode the answer.\") myTests().main()   "
},
{
  "id": "cspnamenumbers_rulesfornames2",
  "level": "2",
  "url": "io.html#cspnamenumbers_rulesfornames2",
  "type": "Activity",
  "number": "1.1.13",
  "title": "",
  "body": "  Which of the following is not a legal variable name?      _my_name    This is legal, but you don't usually start a variable name with an underscore.      my name    You can't have a space in a variable name.      myname    This may be hard to read, but it is legal.      myName    Since you can't have spaces in names, one way to make variable names easier to read is to use camel case (uppercase the first letter of each new word).      my_name    Since you can't have spaces in names, one way to make variable names easier to read is to use an underscore between two words.     "
},
{
  "id": "math",
  "level": "1",
  "url": "math.html",
  "type": "Section",
  "number": "1.2",
  "title": "Python Data Types, Math, and Expressions",
  "body": " Python Data Types, Math, and Expressions   Computers are great at math! Let's learn how to make Python do mathematical calculations.    Expressions  In Python, an expression is a combination of values, variables, operators, and function calls that evaluates to a value. For example, the expression 2 + 3 evaluates to the value 5 .  Expressions can be used in various contexts, such as in assignments, function calls, and control flow statements. For example:   x = 2 + 3 print(x)   In this example, the expression 2 + 3 is evaluated and assigned to the variable x , which is then printed.    Mathematical operators   "
},
{
  "id": "ifs",
  "level": "1",
  "url": "ifs.html",
  "type": "Section",
  "number": "2.1",
  "title": "Python Conditionals (ifs)",
  "body": " Python Conditionals (ifs)       "
},
{
  "id": "loops",
  "level": "1",
  "url": "loops.html",
  "type": "Section",
  "number": "2.2",
  "title": "Python Loops",
  "body": " Python Loops       "
},
{
  "id": "functions",
  "level": "1",
  "url": "functions.html",
  "type": "Section",
  "number": "3.1",
  "title": "Python Functions",
  "body": " Python Functions   Text before the first subsection.    Defining Functions  Functions are defined using the def keyword, followed by the function name and parentheses.  def my_function(): print(\"Hello, World!\")  To call the function, simply use its name followed by parentheses:  my_function()  This will output:  Hello, World!    Function Parameters  Functions can take parameters, which are specified within the parentheses in the function definition.  def greet(name): print(\"Hello, \" + name + \"!\")  To call this function, pass an argument:  greet(\"Alice\")  This will output:  Hello, Alice!    Return Values  Functions can return values using the return statement.  def add(a, b): return a + b  To use the return value, assign it to a variable:  result = add(5, 3) print(result)  This will output:  8   "
},
{
  "id": "lists",
  "level": "1",
  "url": "lists.html",
  "type": "Section",
  "number": "4.1",
  "title": "Python Lists",
  "body": " Python Lists      "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": " Index   "
},
{
  "id": "backmatter-3",
  "level": "1",
  "url": "backmatter-3.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
