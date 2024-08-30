from typing import List, Dict

# Define keywords for each category
#users_preferences = {technology, sports}
#make this a hashmap
keywords = {
    "technology/science": ["AI", "technology", "computer", "research", "innovation", "tech"],
    "entertainment": ["actor", "movie", "music", "celebrity", "film", "show", "art", "singer"],
    "USC": ["University of Southern California", "Trojans", "campus", "USC", "student", "Carol", "Folt", "DPS"],
    "politics": ["election", "government", "policy", "congress", "senate", "representatives", "voters", "president", "govenor", "democratic", "republican"],
    "sports": ["baseball", "basketball", "volleyball", "football", "soccer", "swimming", "olympics" "athlete", "score", "match"],
}
   
#pull the most recent articles
articles = [    
    {"title": "Tech Innovation at USC"},
    {"title": "USC Wins Championship"},
    {"title": "Dodger's vs Giant's Baseball"},
    {"title": "Breakthrough in Quantum Physics"},
    {"title": "New Discoveries in Medicine"}
]


#user's preferences: the various preferences selected by the user will be listed here 

class PreferencesModel(BaseModel):
    preferences: List[str]

#Need to check if the article title/content match any of the keywords in the most recent articles. 


#Need to store the articles that do have a match in a list to recommend them later 


