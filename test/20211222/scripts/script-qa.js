// Load the model.
use.loadQnA().then(model => {
  // Embed a dictionary of a query and responses. The input to the embed method
  // needs to be in following format:
  // {
  //   queries: string[];
  //   responses: Response[];
  // }
  // queries is an array of question strings
  // responses is an array of following structure:
  // {
  //   response: string;
  //   context?: string;
  // }
  // context is optional, it provides the context string of the answer.

  // 你家那隻大狗是什麼品種？
  // What is the breed of your big dog?
  // 德國牧羊犬。
  // German Shepherd.

  const input = {
    queries: [
      'How are you feeling today?', 
      'What is captial of China?',
      'Do you like puppy?',
      'What do you think of a kitten?',
      'What is the breed of your big dog?'
    ],
    responses: [
      'I\'m not feeling very well.',
      'Beijing is the capital of China.',
      'You have five fingers on your hand.',
      'Yes, I love dog.',
      'The cat is very cute!',
      'German Shepherd.'
    ]
  };
  var scores = [];
  const embeddings = model.embed(input);
  /*
    * The output of the embed method is an object with two keys:
    * {
    *   queryEmbedding: tf.Tensor;
    *   responseEmbedding: tf.Tensor;
    * }
    * queryEmbedding is a tensor containing embeddings for all queries.
    * responseEmbedding is a tensor containing embeddings for all answers.
    * You can call `arraySync()` to retrieve the values of the tensor.
    * In this example, embed_query[0] is the embedding for the query
    * 'How are you feeling today?'
    * And embed_responses[0] is the embedding for the answer
    * 'I\'m not feeling very well.'
    */
  const embed_query = embeddings['queryEmbedding'].arraySync();
  const embed_responses = embeddings['responseEmbedding'].arraySync();
  // compute the dotProduct of each query and response pair.
  for (let i = 0; i < input['queries'].length; i++) {
    console.log('-[QA: ' + i + ']----------------------------------')
    console.log(input.queries[i])
    let maxScoreIndex = 0
    let maxScore = null
    let scoreList = []
    for (let j = 0; j < input['responses'].length; j++) {
      let score = dotProduct(embed_query[i], embed_responses[j])
      scores.push(score);
      if (maxScore === null) {
        maxScore = score
      }
      if (j > 0 && score > maxScore) {
        maxScore = score
        maxScoreIndex = j
      }
      scoreList.push(score)
    }
    console.log(scoreList)
    console.log(input.responses[maxScoreIndex])
  }
  
  console.log(scores)
});

// Calculate the dot product of two vector arrays.
const dotProduct = (xs, ys) => {
  const sum = xs => xs ? xs.reduce((a, b) => a + b, 0) : undefined;

  return xs.length === ys.length ?
    sum(zipWith((a, b) => a * b, xs, ys))
    : undefined;
}

// zipWith :: (a -> b -> c) -> [a] -> [b] -> [c]
const zipWith =
    (f, xs, ys) => {
      const ny = ys.length;
      return (xs.length <= ny ? xs : xs.slice(0, ny))
          .map((x, i) => f(x, ys[i]));
    }