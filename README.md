# OpenAI Assist

openai-assist is a npm package that simplifies integration with the ChatGPT API. It provides a convenient function `query` to retrieve responses from the OpenAI API using just a few lines of code.

## Installation

To install the package, use the following command:

```shell
npm install openai-assist
```

## Usage

To use this package, follow the steps below:

1. Import the `query` function from the package:

   ```javascript
   import { query } from "openai-assist";
   ```

2. Set your OpenAI API key:

   ```javascript
   const apiKey = "YOUR_API_KEY";
   ```

   Replace `"YOUR_API_KEY"` with your actual OpenAI API key.

3. Define the prompt for which you want to receive a response:

   ```javascript
   const prompt = "Your prompt goes here";
   ```

   Replace `"Your prompt goes here"` with your desired input prompt.

4. Call the `query` function with your API key and prompt:

   ```javascript
   query(apiKey, prompt)
     .then((result) => {
       console.log(result);
     })
     .catch((error) => {
       console.error(error);
     });
   ```

That's it! With these few lines of code, you can now easily retrieve responses from the ChatGPT API.

## Example

Here's an example that demonstrates how to use the package:

```javascript
import { query } from "openai-assist";

const apiKey = "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";
const prompt = "Hi, what is OpenAI?";

query(apiKey, prompt)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
```

Make sure to replace `"YOUR_API_KEY"` with your actual OpenAI API key.

## License

This package is released under the [MIT License](https://opensource.org/licenses/MIT).

## Contributing

Contributions are welcome! If you encounter any issues or have suggestions for improvements, please open an issue on the [GitHub repository]([https://github.com/ayushgupta4002/openai-assist]).

## About

This package is maintained by [Ayush Gupta]. You can find more of my projects on [GitHub](https://github.com/ayushgupta4002).

## Support

For any questions or support regarding this package, please contact [ayush4002gupta@gmail.com].

---

