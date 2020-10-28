// -- Scripped -- //

var errortext = "An error occurred.";

console.log();
console.log("ROBLOX Game Rating.");
console.log("This was built by Scripped.");
console.log();
console.log("Contact:");
console.log();
console.log("GitHub: https://github.com/Scripped.");
console.log("Roblox: https://www.roblox.com/users/1957038621/profile.");
console.log();

const prompt = require('prompt-sync')({sigint: true});

var gameid = prompt('Enter a game ID (Right click to paste):');

const puppeteer = require('puppeteer');
const $ = require('cheerio');
const url = "https://www.roblox.com/games/"+ gameid +"/";
const open = require('open');


puppeteer
.launch()
.then(function(browser) {
    return browser.newPage();
})
.then(function(page) {
    return page.goto(url).then(function() {
        return page.content();
    });
})
.then(function(html) {
    $('.game-name', html).each(function() {
        console.log("Game Name: " + $(this).text());
    })
    $('.game-creator > .text-name', html).each(function() {
        console.log("Game Creator: " + $(this).text());
    })
    $('#vote-up-text', html).each(function() {
        console.log( "Likes: " + $(this).text());
    })
    $('#vote-down-text', html).each(function() {
        console.log( "Dislikes: " + $(this).text());

        

            var gameoption = prompt("Would you like to join the game? (Y/N)");
            if (gameoption === "N" ||  gameoption === "no" ||  gameoption === "No" ||  gameoption === "NO" ||  gameoption === "n") {
                console.log();
                console.log("Alright.");
                console.log("Click CTRL + C to quit since there isn't really anything else to do on this.");
                console.log("If you're still reading, pls follow me on roblox: ");
                console.log("https://www.roblox.com/users/1957038621/profile");
                console.log()

                    var follow = prompt("Should I open the link for you? (Y/N)");

                    if (follow === "N" || follow === "no" ||  follow === "No" ||  follow === "NO" || follow === "n") {
                    console.log();
                    console.log("Okay, then lol bye.");
                    process.exit(1);
                    }
                    else if (follow === "y" ||  follow === "Y" ||  follow === "Yes" ||  follow === "yes" ||  follow === "YES") {
                        
                            open('https://www.roblox.com/users/1957038621/profile');

                        }
                        else {
                            open('https://www.roblox.com/users/1957038621/profile');
                        }

            }

            else if (gameoption === "y" ||  gameoption === "Y" ||  gameoption === "Yes" ||  gameoption === "yes" ||  gameoption === "YES")  {
                open(url)
            }

            else {
                process.exit(1);
            }


        })    

})

.catch(function(err) {
    console.log(errortext);
    process.exit(1);
})
console.log('TIP: Click CTRL + C to quit.')
