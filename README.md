# pando-web-form
Website files for Pando web app

This is a reactive multistep form for users to request lawn-care service through a portal on client's website.

Form submission triggers a PHP script that formats submission in a text document. Text document
write prompts an incrontab job on the Ubuntu server that hosts the site (Apache). This cron job provides 
the company owner with a formatted email when a client submits a new service request.

While not currently live, this project tested my skills in HTML, CSS, JS, PHP, and Linux Command Line.
This project also taught me a good bit regarding networking and hosting, as I was able to host this
webapp on my personal domain for remote testing.
