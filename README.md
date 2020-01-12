# Coming-Soon-Countdown-HTML-Node
Sample Coming soon page in Node.js with timer. Just give a timestamp and you will have a countdown until that timestamp.

This uses the jquery.classycountdown.js as a nice circular / round count down timer.

Clone the repo.

Install dependency with npn install.

Make changes to the public/index.html file.

All files in public/* are accessible to the web site.

Find the Unix timestamp that you want for the final time. Look at sites like this:  https://www.unixtimestamp.com

Edit the file index.html.

Search for data-end-sec and set it to the Unix Time for the end date you want.

Note: This is a Unix timestamp which is the number of seconds since 1970 NOT the Javascript milliseconds.

This timestamp is in UTC so if you want to show based for a specific Timezone you will need to make the adjustments in the number of seconds. For PST I would add 28,800 (8 hrs = 8 * 60 * 60)

For example for Jan 16, 2020 : 
data-end-sec="1579161600"

You also want to change the Title Meta tag that is currenly set to "Your site name here" and add a big message where you see "Some big message" and a smaller message at "Smaller message!".

Save the changes.

Run the server on the default port 8080 or change the port.

node comingsoonapp.js

If you push to a server then you can use something like PM2 to keep this running or use your favorite cloud server and it should all work with no changes.

This is what it should look like.

--------------------
![Sample Page](/sample.png)
--------------------

Feel free to ask if you have questions.

Thanks, Tom





