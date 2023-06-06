const puppeteer = require("puppeteer");

const handler = async (req, res) => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    console.log(req.query)
    await page.goto(req.query.webpage);
    
    const extractedText = await page.$eval('*', (el) => el.innerText);

    res.status(200).json({ text: extractedText });
    await browser.close();
};

export default handler;
