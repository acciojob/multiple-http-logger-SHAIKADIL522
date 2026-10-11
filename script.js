const urls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3",
];
const fetchAll = async () => {
  try {
    const responses = await Promise.all(urls.map((url) => fetch(url)));
    const data = await Promise.all(responses.map((res) => res.json()));
    data.forEach((item) => console.log(item));
  } catch (err) {
    console.error("Error:", err);
  }
};

fetchAll();

// Don't change the above line
// Write your code here
