https://github.com/banlong/D3.git

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
1. Open up a new terminal window.
2. Via the command line, navigate into the directory that you want served. For example,
if your project folder is in your Desktop folder on your Mac, you could type:
cd ~/Desktop/project-folder.
3. Enter python -m SimpleHTTPServer 8888 &.