const AMOUNT_OF_COMMENTS = 4;

const express = require("express");
const commentsGenerator = require("./commentsGenerator");

const app = express();

const PORT = process.env.PORT || 3001;

app.get("/comments", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*")
  const cursor = parseInt(req.query.cursor) || 0;
  // console.log('page: ', cursor)
  res.json({
    comments: commentsGenerator(AMOUNT_OF_COMMENTS, cursor),
    nextCursor: cursor + 1,
  });
// res.json({
//     id: 1212, name: '33', text: '44'
//   });
});

app.listen(PORT, () => {
  console.log(`server is started on port ${PORT}`);
});
