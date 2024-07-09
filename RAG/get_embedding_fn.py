from langchain_openai import OpenAIEmbeddings
from langchain.evaluation import load_evaluator
from dotenv import load_dotenv
import openai
import os

load_dotenv()
openai.api_key = os.environ['OPENAI_API_KEY']
print(openai.api_key)

def main():
  embedding_fn = OpenAIEmbeddings()
  vector = embedding_fn.embed_query("apple")
  print(f"vector:{vector}")
  print(f"len:{len(vector)}")

if __name__ == "__main__":
  main()
