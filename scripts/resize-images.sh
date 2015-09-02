#!/bin/bash -

if [ $# != 2 ]; then
  echo
  echo "Usage: $0 <input_dir> <output_dir>"
  echo
  exit 1
fi

function is_not_directory {
   [[ ! -d $1 ]]
}

function is_not_jpg {
  file "$1" | grep --quiet JPEG
  [[ $? -eq 1 ]]
}

input_dir="$1"
output_dir="$2"

if is_not_directory $input_dir; then
  echo "$input_dir" is not a directory
  exit 1
fi

if is_not_directory "$output_dir"; then
  echo "$output_dir" is not a directory
  exit 1
fi

for file in $(ls "$input_dir"); do
  input_file="${input_dir}/${file}"
  output_file="${output_dir}/${file}"

  if is_not_jpg "$input_file"; then
    echo "${input_file} is not a jpeg image."
    continue
  fi

  echo "Converting $input_file to $output_file"
  convert "$input_file" -resize 15% "$output_file"
done
echo "Done."
