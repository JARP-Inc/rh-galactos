import json
import pandas as pd

def main():
    with open('historicaleventtable.json', 'r') as f:
        event_data = json.load(f) 
    
    df = pd.DataFrame(event_data)
    #unique_events = sorted(df["start_date_days"].unique())
    #print(unique_events)

    event_log = df[df["event_type"] == "first_contact"]
    event_log = event_log[:10]

    #print(event_log)

    #print(type(event_log))

    log_out = event_log[["country_id", "leader_id", "target_country_id"]]

    def generate_sentence(row):
       #return row['country_id']
       return f"{row['country_id']} ruled by {row['leader_id']} made first contact with {row['target_country_id']}"

    print(log_out.apply(generate_sentence, axis = 1))

    



if __name__ == '__main__':
    main()