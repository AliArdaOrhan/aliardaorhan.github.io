#!/bin/bash

# Define the directory containing the files
DIRECTORY="./notes"

# Get the list of filenames matching the pattern
FILES=$(ls "$DIRECTORY" | grep -E '^[0-9]+-[0-9]{12}-.*$')
echo "$FILES"

# Extract the IDs from the filenames and sort them
IDS=$(echo "$FILES" | cut -d'-' -f1 | sort -n)

# Get the maximum ID and calculate the next ID
MAX_ID=$(echo "$IDS" | tail -n1)
NEXT_ID=$((MAX_ID + 1))

echo "Next ID: $NEXT_ID"

TIMESTAMP=$(date "+%d%m%Y%H%M")

TITLE=$1
TAGS=$2

filename="./notes/${NEXT_ID}-${TIMESTAMP}-${TITLE}-[${TAGS}].md"

touch "$filename"
echo "File created: $filename"