import re

with open('products.js', 'r', encoding='utf-8') as f:
    content = f.read()

# We want to replace each `id: <number>,` with a sequential `id: <new_number>,`
counter = 1
def replace_id(match):
    global counter
    replacement = f'id: {counter},'
    counter += 1
    return replacement

new_content = re.sub(r'id:\s*\d+,', replace_id, content)

with open('products.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"Updated {counter - 1} products with unique IDs.")
