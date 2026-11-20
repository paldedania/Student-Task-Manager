var marks = [85, 90, 75, 92, 88];

// Add a new student's marks
marks.push(80);

// Remove lowest marks (last student)
marks.pop();

// Sort (string-based in Unit 1)
marks.sort();

console.log(marks); 
console.log("Top 3:", marks.slice(0, 3));

const student = {
    name: "Arjun",
    age: 18,
    course: "CSE"
};