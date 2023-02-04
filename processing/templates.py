Army_Combat = """Invasion of planet {{ links[event["planet"]] | safe }} in the {{ links[event["system"]] | safe }} system:
                    Attackers {{ event["attackers"] | safe }} ({{event["attacker_exhaustion"]}} exhaustion)
                    {% if event["attacker_victory"] %} defeated {% else %} were defeated by {% endif %}
                    {{ event["defenders"] | safe }} (exhaustion {{event["defender_exhaustion"]}}) in the
                    {{ links[event["war"]] | safe }}."""
Fleet_Combat = """Space battle in the {{ links[event["system"]] | safe }} system:
                    Attackers {{ event["attackers"] | safe }} ({{event["attacker_exhaustion"]}} exhaustion)
                    {% if event["attacker_victory"] %} defeated {% else %} were defeated by {% endif %}
                    {{ event["defenders"] | safe }} (exhaustion {{event["defender_exhaustion"]}}) in the
                    {{ links[event["war"]] | safe }}."""
Conquered_System = """The {{ links[event["country"]] | safe }} conquered the {{ links[event["system"]] | safe }} system from the
                    {{ links[event["target_country"]] | safe }}{% if event["war"] %} during the {{ links[event["war"]] | safe }} {% endif %}."""
War_Declared = """{% if "leader" in event %} Under ruler {{ links[event["leader"]] | safe}}, the
                    {% else %} The
                    {% endif %}
                    {{ links[event["country"]] | safe }} entered the {{ links[event["war"]] | safe }} war{{ event["description"] }}{% if event["target_country"] %} {{ links[event["target_country"]] | safe}}{% endif %}."""
Peace_Declared = """{% if "leader" in event %} Under ruler {{ links[event["leader"]] | safe}}, the
                    {% else %} The
                    {% endif %}
                    {{ links[event["country"]] | safe }} made peace in the {{ links[event["war"]] | safe }} conflict."""
Defense_Pact = """{% if "leader" in event %} Under ruler {{ links[event["leader"]] | safe}}, the
                    {% else %} The
                    {% endif %}
                    {{ links[event["country"]] | safe }} entered a defensive pact with the {{ links[event["target_country"]] | safe }}."""
Commercial_Pact = """{% if "leader" in event %} Under ruler {{ links[event["leader"]] | safe}}, the
                    {% else %} The
                    {% endif %}
                    {{ links[event["country"]] | safe }} entered a commercial pact with the {{ links[event["target_country"]] | safe }}."""
Non_Aggression_Pact = """{% if "leader" in event %} Under ruler {{ links[event["leader"]] | safe}}, the
                    {% else %} The
                    {% endif %}
                    {{ links[event["country"]] | safe }} entered a non-aggression pact with the {{ links[event["target_country"]] | safe }}."""
Formed_Federation = """{% if "leader" in event %} Under ruler {{ links[event["leader"]] | safe}}, the
                    {% else %} The
                    {% endif %}
                    {{ links[event["country"]] | safe }} and {{ links[event["target_country"]] | safe }} are now allied in the  "{{ event["description"] }}" federation."""
