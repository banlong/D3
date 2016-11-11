
## Setting Up a Web Server
In some cases, you can view local HTML files directly in your web browser. However,
some browsers have restrictions that prevent them from loading local files via JavaScript,
for security reasons. That means if your D3 code is trying to pull in any external datafiles
(like CSVs or JSON), it will fail with no good explanation. 

For this reason, it is much more reliable to load your page via a web server. Although
you could use a remote web server, it is much, much faster to store and host everything
locally (meaning, on the same computer, the one right in front of you). 

It is a strange idea, to use your local computer to host and serve files to itself, but you can think about
it as the different programs talking to each other: the browser program requests files
from the server program, which responds by serving them back.
The good news is that it’s quite easy to get a local server up and running. Here are a
couple of ways to do that.
## Terminal with Python
If you’re using Mac OS X or Linux, then you already have Python installed. As long as
you’re comfortable entering commands in the terminal, then running a miniserver with
Python is definitely the quickest option. (If you’re on Windows, you’ll need to install
Python first.)
To use Python, you’ll need to open up a terminal window on your system. On a Mac,
open the Terminal application. You can find it in the Utilities folder, or by typing
Terminal into Spotlight (the magnifying glass menu item in the upper-right corner of
your screen). Linux users are born knowing how to open a terminal window, so I won’t
waste your time explaining it here.
To run a Python web server:
### 1. Open up a new terminal window.
### 2. Via the command line, navigate into the directory that you want served. For example,
if your project folder is in your Desktop folder on your Mac, you could type:
cd ~/Desktop/project-folder.
### 3. Enter python -m SimpleHTTPServer 8888 &.

This will activate the server on port 8888. Switch back to your web browser and visit
the following URL:<b> http://localhost:8888/ </b>. Yes, instead of www.something.com, you just
use localhost, which tells the browser to request a page from this machine.

Notice: if you install python v3.x, using the below command to start the server
(http://angusjune.github.io/blog/2014/08/16/python-3-dot-x-no-module-named-simplehttpserver/)
1. Move into the folder
2. Type command "python -m http.server 8888" to start http service in the current dir

D:\gows\src\D3>python -m http.server 8888
Serving HTTP on 0.0.0.0 port 8888 ...
127.0.0.1 - - [26/Oct/2016 12:03:26] "GET / HTTP/1.1" 200 -
127.0.0.1 - - [26/Oct/2016 12:03:27] "GET /css/div.css HTTP/1.1" 200 -
127.0.0.1 - - [26/Oct/2016 12:03:27] "GET /d3/d3.v3.min.js HTTP/1.1" 200 -
127.0.0.1 - - [26/Oct/2016 12:03:27] "GET /js/div.js HTTP/1.1" 200 -
127.0.0.1 - - [26/Oct/2016 12:03:27] code 404, message File not found
127.0.0.1 - - [26/Oct/2016 12:03:27] "GET /favicon.ico HTTP/1.1" 404 -

Can also use httpster at the root directory
