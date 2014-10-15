# Oavea Blank Theme

This is a starter theme for Prestashop based on the default theme for 1.6 but without the bloat.

- All SASS files have been emptied.
- Bootstrap is disabled by default except for the grid.

## What's Included

- Header.tpl has been modified to speed up first byte time. Using Filament Groups enhance.js workflow.
- Gulpfile (for sass and browser sync).

## Requirements

To use this theme your development environment will require the following tools:
- Nodejs
- Ruby (sass)
- Git

If you don't have the above you can use our Vagrant box which comes with the above pre-installed.
https://github.com/oavea/prestadev

For more information on Vagrant visit https://www.vagrantup.com/

## Installation & Usage

Download or Clone this repo into your themes folder. 

Enable the theme in the back office.

Change the following options in Back Office:

On "Advanced Parameters > Performance" page
 - Smart cache for CSS = Yes
 - Smart cache for Javascript = Yes
 - Move Javascript to the end = No
 
In a terminal navigate to the themes directory and type:
npm install

Open the Gulpfile.js in your favorite editor and change the url to your local Prestashop install.

Then you should be ready to run gulp.

From your themes folder in a Terminal type:
gulp

This will run the default task and begin to watch your sass files for changes.