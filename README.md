
![MicrosoftTeams-image](https://user-images.githubusercontent.com/68879499/226104191-926563d8-b8b3-4862-80c3-999376d51e3a.png)

# Legal-ADs
**A platform using ChatGPT to verify that ads comply with legal regulations and regulations for advertising on social media platforms in the Kingdom of Saudi Arabia and knowing their fines in case of violation.**
![MicrosoftTeams-image (2)](https://user-images.githubusercontent.com/68879499/226104410-cb580814-7b11-464d-b280-6a40858c6c76.png)

>
* This code defines a chatbot that checks whether an advertisement is valid according to certain rules. It uses the GPT-3 language model to generate responses. The chatbot takes input text as a parameter and returns a JSON object indicating whether the advertisement is valid, which rules it violates (if any), and the corresponding financial penalty ranges. 
<p align="center">
 <img src="https://user-images.githubusercontent.com/68879499/226104928-e2160e72-1dac-40bb-9d50-cd80a5c87d26.png" />
</p>
* The code imports various modules, including `SimpleDirectoryReader`, `GPTListIndex`, `GPTSimpleVectorIndex`, `LLMPredictor`, `PromptHelper`, `OpenAI`, `gradio`, `sys`, and `os`. It also defines a `rule_map` dictionary that maps rule numbers to their corresponding descriptions. 

* The `construct_index` function constructs an index for the GPT-3 model using a directory of documents. It sets various parameters such as `max_input_size`, `num_outputs`, `max_chunk_overlap`, and `chunk_size_limit`. It then creates a `PromptHelper` object, an `LLMPredictor` object, and a `SimpleDirectoryReader` object to load the data. It creates a `GPTSimpleVectorIndex` object using the loaded data and the previously defined objects. It saves the index to disk and returns it. 

* The `chatbot` function takes an input text as a parameter, loads the index from disk, and sets the prompt using the input text and the `rule_map` dictionary. It queries the index using the prompt and stores the response in a JSON object. If the input text does not contain the words "ad" or "advertisement", the chatbot adds "Rule1.24" to the list of violated rule numbers. It returns the response. 

Finally, the code creates a Gradio interface for the chatbot, sets the input to a text box, and sets the output to text. It constructs the index using the `construct_index` function and launches the interface.
![MicrosoftTeams-image (4)](https://user-images.githubusercontent.com/68879499/226106569-d2036979-c6a1-4b55-aefd-46a7db480a61.png)
