const sentence = "Never gonna run around and desert you.";



let n = 1000;
for (const char of sentence) {
  n = n + 50;
  setTimeout(() => {
    process.stdout.write(char);
  }, n);
}


  
setTimeout(() => {
  console.log("\n");
}, n);

