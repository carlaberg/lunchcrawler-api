const cheerio = require('cheerio');
const fetch = require('node-fetch');
const validator = require('validator');


const LunchCrawler = () => {
    
    async function crawl() {
        const html = await fetchHTML();
        return await getLunches(html);
    }
    
    async function fetchHTML() {
        try {
            const response = await fetch('http://www.kvartersmenyn.se/find/_/city/19/area/lorensberg_129');
            const html = await response.text();
            return new Promise(resolve => resolve(html));
        } catch (e) {
            console.error(e.message);
        }
    }

    async function getLunches(html) {
        try {
            const $ = cheerio.load(html);
            const lunches = []; 
            $('.row.t_lunch').each((i, elem) => {
                lunches.push({
                    date: new Date(),
                    lunch: sanatizeLunchData($(elem).find('.rest-menu p.t_lunch').html()),
                    restaurant: $(elem).attr('data-name')
                });
            });
            
            return new Promise(resolve => resolve(lunches));
        } catch (e) {
            console.error(e.message);
        }
    }
    
    function sanatizeLunchData(data) {        
        data = validator.trim(data);
        return validator.escape(data);
    }
    
    return Object.freeze({
        crawl
    });
    
}

module.exports = LunchCrawler();