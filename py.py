import requests

def submit_url_set(url_list, key, key_location, host="https://api.indexnow.org"):
    data = {
        "host": "https://threelittleducklings.github.io/rik",
        "key": key,
        "keyLocation": key_location,
        "urlList": url_list
    }

    headers = {
        "Content-type": "application/json",
        "charset": "utf-8"
    }

    response = requests.post(f"{host}/IndexNow", json=data, headers=headers)
    return response.status_code

# Example usage:
url_list = [
    "https://threelittleducklings.github.io/rik/index.html",
    "https://threelittleducklings.github.io/rik/HTML/mobile.html",
    "https://threelittleducklings.github.io/rik/HTML/desktop.html"
]
key = "b614a3b10144458eaa2f5bc13ecf8648"
key_location = "https://threelittleducklings.github.io/rik/b614a3b10144458eaa2f5bc13ecf8648.txt"

status_code = submit_url_set(url_list, key, key_location)
print(f"Server response code: {status_code}")
