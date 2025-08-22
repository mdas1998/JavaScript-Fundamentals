const randomDelay = () => {
  return new Promise((resolve, reject) => {
    timeout = 1 + 6 * Math.random();
    setTimeout(() => {
      resolve();
    }, timeout * 1000);
  });
};

const addItem = async (item) => {
  await randomDelay();
  let div = document.createElement("div");
  div.innerHTML = item;
  document.body.append(div);
};

async function main() {
  let text = [
    "Initialize Hacking",
    "Reading your Files",
    "Password file detected",
    "Sending the password files and folders to the server",
    "Cleaning up",
  ];

  let t = setInterval(() => {
    let last = document.body.lastElementChild;
    if (last.innerHTML.endsWith("...")) {
      last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 3);
    } else {
      last.innerHTML = last.innerHTML + ".";
    }
  }, 100);

  for (const item of text) {
    await addItem(item);
  }

  await randomDelay()
  clearInterval(t)
}

main();
