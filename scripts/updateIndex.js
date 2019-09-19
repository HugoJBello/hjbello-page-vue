const fs = require('fs');

const extractTag = (str) => {
    if (str.indexOf("<!--") > -1 && str.indexOf("-->") > -1) {
        const metadataBlock = str.split("<!--")[1].split("-->")[0]

        const result = {}
        metadataBlock.split("\n").forEach(line => {
            if (line && line !== "" && line.indexOf(":") > -1) {
                const field = line.split(":")[1].trim();
                const value = line.split(":")[0].trim()
                result[value] = field;
            }
        })
        return result
    }
}



filesPath = './src/assets/entries/';
outputFile = './src/assets/entries.json';

const configFile = []

const files = fs.readdirSync(filesPath);

files.forEach((file) => {
    console.log(file);
    const data = extractTag(fs.readFileSync(filesPath + file, 'utf8'))
    if (data.config !== "true"){
        configFile.push(data);
    }    
});

configFile.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
});

fs.writeFile(outputFile, JSON.stringify({entries:configFile}), 'utf8');

console.log(configFile);