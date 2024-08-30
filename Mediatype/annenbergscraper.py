from bs4 import BeautifulSoup
import requests
from datetime import datetime, timedelta, timezone

# Define the URL of the website to scrape
page_to_scrape = requests.get("https://www.uscannenbergmedia.com/allnews/")

# Create a BeautifulSoup object to parse the HTML content of the webpage
soup = BeautifulSoup(page_to_scrape.text, "html.parser")

# Set the date limit to two weeks ago
date_limit = datetime.now(timezone.utc) - timedelta(weeks=2)

# Initialize article count
article_count = 0

# Find all divs with class "list-item"
divs = soup.find_all('div', class_='list-item')

for div in divs:
    # Find the <a> tag within the div
    a_tag = div.find('a', title=True)
    
    # Find the <time> tag within the div
    time_tag = div.find('time', class_="primary-font__PrimaryFontStyles-o56yd5-0 NJAAh date story-date")
    
    # Find the <img> tag within the div with class "results-list--image-container"
    img_tag = div.find('img', src=True)

    # Extract the title, link, datetime attributes, and the text inside the <time> tag
    if a_tag and 'title' in a_tag.attrs and 'href' in a_tag.attrs and time_tag and 'datetime' in time_tag.attrs:
        title = a_tag['title']
        link = a_tag['href']
        datetime_value = time_tag['datetime']
        time_text = time_tag.get_text()
        
        # Extract the image URL if img_tag exists
        if img_tag:
            image_url = img_tag['src']
        else:
            image_url = "Image URL not found"
        # Parse the datetime string
        article_date = datetime.fromisoformat(datetime_value.replace('Z', '+00:00'))
        
        # Compare the article date with the date limit
        if article_date > date_limit:
            print(f"Title: {title}")
            print(f"Link: https://www.uscannenbergmedia.com{link}")
            #print(f"Datetime: {datetime_value}")
            print(f"Date Text: {time_text}")
            print(f"Image URL: {image_url}")
            print("-----------")
            article_count += 1

print(f"Total articles found: {article_count}")
