const fs = require('fs');

const extractTag = (str) => {
    if (str.indexOf("<!--") > -1 && str.indexOf("-->") > -1) {
        const metadataBlock = str.split("<!--")[1].split("-->")[0]

        const result = {}
        metadataBlock.split("\n").forEach(line => {
            if (line && line !== "" && line.indexOf(":") > -1) {
                let value = line.split(":").slice(1).join(":").trim();
                const field = line.split(":")[0].trim()
                if (field ==="tags"){
                    value = value.split(",")
                    value = value.map(tag => tag.trim())
                }
                result[field] = value;
            }
        })
        return result
    }
}



filesPath = './src/assets/entries/';
outputFile = './src/assets/entries.json';

let configFile = []

const files = fs.readdirSync(filesPath);

files.forEach((file) => {
    console.log(file);
    const data = extractTag(fs.readFileSync(filesPath + file, 'utf8'))
    if (data.config !== "true"){
        data.id = file.replace(".md","")
        configFile.push(data);

    }    
});

const getDate = (string) => {
    const parts = string.split('/');
    return new Date(parts[2], parts[1] - 1, parts[0]); 
}

configFile = configFile.sort((a, b) => {
    console.log(getDate(b.date))
    return getDate(b.date) - getDate(a.date);
});

fs.writeFile(outputFile, JSON.stringify({entries:configFile}), 'utf8', ()=>{});

console.log(configFile);