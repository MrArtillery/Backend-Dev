const os = require("os");
const fs = require("fs");

setInterval(() => {
  const log = `
OS: ${os.type()}
Free Memory: ${os.freemem()}
Total Memory: ${os.totalmem()}
---------------------------
`;
  fs.appendFile("systemLog.txt", log, (err) => {
    if (err) console.error("Error logging data");
  });
}, 3000);
