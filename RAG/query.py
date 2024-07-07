import argparse
from langchain_community.vectorstores import Chroma
from langchain.openai import OpenAIEmbeddings
from langchain.openai import ChatOpenAI
from langchain.prompts import ChatPromptTemplate


CHROMA_PATH = 'chroma'

PROMPT_TEMPLATE = """
Answer based on the context:


{context}


----
Answer based on the above context: {question}
"""

def main():
  parser = argparse.ArgumentParser()
  parser.add_argument()
  args = parser.parse_args()
  query_text = args.query_text

  embedding_function = OpenAIEmbeddings()
  db = Chroma()

  results = db.similarity_search_with_relevance_scores()
  if len(results) == 0 or results[][] < 0.7:
    printf("no results found")
    return
  
  context_text = ""
  prompt_template = ChatPromptTemplate.from_template()
  prompt = prompt_template.format()
  print(prompt)

  model = ChatOpenAI()
  response_text = model.predict(prompt)

  sources = [doc]
  formatted_response = f""
  print(formatted_response)

if __name__=="__main__":
  main()
