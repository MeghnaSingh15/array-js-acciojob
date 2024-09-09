let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    arr.map(person => {
      if (person.profession === "developer") {
        console.log(person);
      }
    });
  
  }
  
  function PrintDeveloperbyForEach() {
    arr.forEach(person => {
      if (person.profession === "developer") {
        console.log(person);
      }
    });
  }
  
  function addData() {
    let arr2 = { id: 4, name: "susan", age: "20", profession: "intern" };
    arr.push(arr2);  
    console.log(arr);  
  }
  
  function removeAdmin() {
    arr = arr.filter(person => person.profession !== "admin");
    console.log(arr);
}

  function concatenateArray() {
    let newarr = [
      { id: 5, name: "james", age: "19", profession: "intern" },
      { id: 6, name: "jacky", age: "21", profession: "developer" },
      { id: 7, name: "kajal", age: "20", profession: "admin" },
    ];
    let arr3 = arr.concat(newarr);
    console.log(arr3);
  }