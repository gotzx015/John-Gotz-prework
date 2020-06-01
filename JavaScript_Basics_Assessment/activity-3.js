const nameList = ['John', 'Zach', 'Jacob'];

for (let i = 0; i < 3; i++) {
    const name = prompt('Enter a student name:');
    nameList.push(name);
}

for (let i = 0; i < nameList.length; i++) {
    console.log(nameList[i]);
}