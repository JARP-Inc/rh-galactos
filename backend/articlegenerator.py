import openai
import os
from dotenv import load_dotenv

load_dotenv()

openai.api_key = os.getenv('OPENAI_API_KEY')


def generate_newsarticle(prompt, author):

    headline_response = openai.Completion.create(
        engine="text-davinci-003",
        prompt="generate a headline for a news article about this event: {}, written by {}".format(
            prompt, author),
        temperature=0,
        max_tokens=1200,
        top_p=1.0,
        frequency_penalty=0.0,
        presence_penalty=0.0
    )

    body_response = openai.Completion.create(
        engine="text-davinci-003",
        prompt="generate a news article, without a headine about this event: {}, written by {}".format(
            prompt, author),
        temperature=0,
        max_tokens=1200,
        top_p=1.0,
        frequency_penalty=0.0,
        presence_penalty=0.0
    )

    return (headline_response["choices"][0]["text"], body_response["choices"][0]["text"])
