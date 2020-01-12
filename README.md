# Coming-Soon-Countdown-HTML-Node
Sample Coming soon page in Node.js with timer. Just give a timestamp and you will have a countdown until that timestamp.

This uses the jquery.classycountdown.js as a nice circular / round count down timer.

Clone the repo.

Install dependency with npn install.

Make changes to the public/index.html file.

All files in public/* are accessible to the web site.

Find the unit timestamp that you want for the final time. Look at sites like this:  https://www.unixtimestamp.com

Edit the file index.html.

Search for data-end-sec and set it to the Unix Time for the end date you want.

For example: 
data-end-sec="1579161600"

You also want to change the Title Meta tag that is currenly set to "Your site name here" and add a big message where you see "Some big message" and a smaller message at "Smaller message!".

Save the changes.

Run the server on the default port 8080 or change the port.

node comingsoonapp.js

If you push to a server then you can use something like PM2 to keep this running or use yoru favorite cloud server and it should all work with no changes.

This is what is should look like.
![Working page](https://github.com/ThomasJay/Coming-Soon-Countdown-HTML-Node/sample.png)


Feel free to ask if you have questions.

Thanks, Tom





