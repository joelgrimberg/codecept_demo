# Casus Bol.com


## Running the tests on the desktop
To get going, you'll need Chrome (or Chromium) installe, and you'll also need the Chromedriver executable available on your path. You can get Chromedriver from <here> and then, in Linux / MacOS you can add the directory to your path like this:

`export PATH=$PATH:~/path/to/directory/containing/chromedriver`

Verify it is orking by opening a terminal and typing 'chromedriver'. You should see:

`Starting ChromeDriver (v2.10) on port 9515
Only local connections are allowed.
`

you can quit this terminal.

## installation

unzip file in folder 'x'
cd folder 'x'
type from CLI:
`npm install`

## running
to run the script, type from CLI:
`rm output/*; codeceptjs run --steps; open output/*
`
