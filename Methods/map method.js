const souravArray = [
  { hobby: "singer" },
  { hobby: "dancer" },
  { hobby: "writer" }
];

const updatedArray = souravArray.map(person => {
  return {
    ...person, // Spread the existing properties
    profession: "Engineer" // Add or override properties
  };
});

console.log(updatedArray);

