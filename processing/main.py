import json
import pandas as pd
from jinja2 import Environment, FileSystemLoader

from templates import *

def main():
    with open('historicaleventtable.json', 'r') as f:
        event_data = json.load(f) 
    
    df = pd.DataFrame(event_data)
    #unique_events = sorted(df["start_date_days"].unique())
    #print(unique_events)

    event_log = df[df["event_type"] == "government_reform"]
    event_log = event_log[:10]

    # print(event_log)

    #print(type(event_log))

    #log_out = event_log[["country_id", "leader_id", "target_country_id"]]

    #def generate_sentence(row):
    #   #return row['country_id']
    #   return f"{row['country_id']} ruled by {row['leader_id']} made first contact with {row['target_country_id']}"

    #print(log_out.apply(generate_sentence, axis = 1))

    enviroment = Environment(loader=FileSystemLoader("/"))
    template = enviroment.from_string(Army_Combat)

    filename = "output.txt"

    event = event_log

    content = template.render(
        event
    )
    
    with open(filename, mode="w", encoding="utf-8") as message:
        message.write(content)
        print(f"... wrote {filename}")



if __name__ == '__main__':
    main()