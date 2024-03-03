#!/bin/bash

# Check if a file is provided as the first argument
if [ $# -eq 0 ]; then
    echo "Usage: $0 <image_file> [width1 width2 width3 ...]"
    exit 1
fi

# Get the image file from the command line argument
image_file="$1"

# Set the default widths or use the provided widths
widths=("${@:2}")  # If no widths are provided, use the defaults (1920, 1200, 800, 400)
if [ ${#widths[@]} -eq 0 ]; then
    widths=(1920 1200 800 400)
fi

# Loop over each width
for width in "${widths[@]}"; do
    # Get the current dimensions of the image
    current_dimensions=($(identify -format "%w %h" "$image_file"))

    # Check if the image is smaller than the target width
    if (( ${current_dimensions[0]} >= $width )); then
        # Output file names
        webp_output="${image_file%.*}_${width}.webp"
        jpeg_output="${image_file%.*}_${width}.jpeg"
        avif_output="${image_file%.*}_${width}.avif"

        # Check if the output files already exist
        if [[ ! -f $jpeg_output ]]; then
            # Convert to the current width in webp format in the background
            convert "$image_file" -resize ${width}x -quality 85 "$jpeg_output"
        else
            echo "Skipping conversion for ${image_file} at width ${width} as output files already exist."
        fi

        # Check if the output files already exist
        if [[ ! -f $webp_output ]]; then
            # Convert to the current width in webp format in the background
            convert "$image_file" -resize ${width}x -quality 85 "$webp_output"
        else
            echo "Skipping conversion for ${image_file} at width ${width} as output files already exist."
        fi

        if [[ ! -f $avif_output ]]; then
            # Convert to the current width in avif format in the background
            avifenc "$jpeg_output" -o "$avif_output"
        else
            echo "Skipping conversion for ${image_file} at width ${width} as output files already exist."
        fi
    else
        echo "Skipping upscaling for ${image_file} at width ${width}."
    fi
done

# Wait for all background processes to finish
