#!/bin/bash

# Define the source directory
SRC_DIR="notes"

# Define the destination file
INDEX_FILE="public/index.json"

# Remove existing index.json file
rm -f "$INDEX_FILE"

# Create the beginning of the JSON array
echo "[" > "$INDEX_FILE"

# Loop through all JSON files in the source directory
while IFS= read -r -d '' file; do
    # Remove double slashes from file path
    file="${file//\/\//\/}"
    # Add each file to the index.json file
    printf '{"file": "%s"},\n' "$file" >> "$INDEX_FILE"
done < <(find "$SRC_DIR" -type f -name '*.md' -print0)

# Remove the trailing comma if it exists
sed -i '' '$s/,$//' "$INDEX_FILE"

# Close the JSON array
echo "]" >> "$INDEX_FILE"

echo "Index file created at $INDEX_FILE"
