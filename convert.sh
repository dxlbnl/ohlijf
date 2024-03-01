#!/bin/bash

# Check if a directory is provided as an argument
if [ $# -eq 0 ]; then
    echo "Usage: $0 <directory>"
    exit 1
fi

# Set the desired widths
widths=(1920 1200 800 400)

# Get the directory from the command line argument
search_directory="$1"

# Find all .jpg and .png files recursively in the specified directory
find "$search_directory" -type f \( -name "*.jpg" -o -name "*.png" \) | while read -r file; do
    # Loop over each width
    for width in "${widths[@]}"; do
        # Get the current dimensions of the image
        current_dimensions=($(identify -format "%w %h" "$file"))

        # Check if the image is smaller than the target width
        if (( ${current_dimensions[0]} >= $width )); then
            # Output file names
            webp_output="${file%.*}_${width}.webp"
            avif_output="${file%.*}_${width}.avif"

            # Check if the output files already exist
            if [[ ! -f $webp_output && ! -f $avif_output ]]; then
                # Convert to the current width in webp format in the background
                convert "$file" -resize ${width}x -quality 85 "$webp_output" &

                # Convert to the current width in avif format in the background
                avifenc "$file" -o "$avif_output" &
            else
                echo "Skipping conversion for ${file} at width ${width} as output files already exist."
            fi
        else
            echo "Skipping upscaling for ${file} at width ${width}."
        fi
    done
done

# Wait for all background processes to finish
wait
