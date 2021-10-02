const fs = require("fs");

const content = `{"name": "Employee 1 Name", "salary": 2000}`;

fs.writeFile(__dirname + "/employees.json", content, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Dosya oluşturuldu");
});

fs.readFile(__dirname + "/employees.json", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

fs.appendFile(__dirname + "/employees.json", `\n s.a canim eklendim`, (err) => {
  if (err) throw err;
  console.log("Ekleme Yapıldı");
});

// fs.unlink(__dirname + "/employees.json", (err) => {
//   if (err) throw err;
//   console.log("employees.json Silindi");
// });
