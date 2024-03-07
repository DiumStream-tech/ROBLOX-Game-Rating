const errortext = "Une erreur s'est produite.";

console.log("ROBLOX Game Rating.");
console.log("Cela a été construit par Scripped.");
console.log("Contact :");
console.log("GitHub : https://github.com/Scripped.");
console.log("Roblox : https://www.roblox.com/users/1320435442/profile.");
console.log();

const prompt = require('prompt-sync')({ sigint: true });
const cheerio = require('cheerio');

function openLink(link) {
    const follow = prompt("Voulez-vous que j'ouvre le lien pour vous ? (O/N) : ").toLowerCase();
    if (follow === "o" || follow === "oui") {
        import('open').then((open) => open(link)).catch((error) => console.error(error));
    }
}

function joinGame(url) {
    const gameoption = prompt("Voulez-vous rejoindre le jeu ? (O/N) : ").toLowerCase();
    if (gameoption === "o" || gameoption === "oui") {
        import('open').then((open) => open(url)).catch((error) => console.error(error));
    } else {
        console.log("D'accord.");
        console.log("Cliquez sur CTRL + C pour quitter, car il n'y a vraiment rien d'autre à faire ici.");
        console.log("Si vous lisez encore, veuillez me suivre sur Roblox : ");
        console.log("https://www.roblox.com/users/1320435442/profile");
        console.log();
        openLink('https://www.roblox.com/users/1320435442/profile');
        process.exit(1);
    }
}

const gameid = prompt("Entrez un ID de jeu (faites un clic droit pour coller) : ");

const puppeteer = require('puppeteer');
const url = `https://www.roblox.com/games/${gameid}/`;

puppeteer
    .launch()
    .then((browser) => browser.newPage())
    .then((page) => page.goto(url).then(() => page.content()))
    .then((html) => {
        const $ = cheerio.load(html);

        $('.game-name').each(function () {
            console.log("Nom du jeu : " + $(this).text());
        });
        $('.game-creator > .text-name').each(function () {
            console.log("Créateur du jeu : " + $(this).text());
        });
        $('#vote-up-text').each(function () {
            console.log("J'aime : " + $(this).text());
        });
        $('#vote-down-text').each(function () {
            console.log("Je n'aime pas : " + $(this).text());
        });

        joinGame(url);
    })
    .catch((err) => {
        console.log(errortext);
        console.error(err);
        process.exit(1);
    })
    .finally(() => {
        console.log("CONSEIL : Cliquez sur CTRL + C pour quitter.");
    });
