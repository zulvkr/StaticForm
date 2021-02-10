#this is a helper to generate markdown posts for testing, inspired by laravel factory
#credits to tshiono for answering my stupid question in Stack Overflow

#!/bin/bash

# show usage on improper arguments
usage() {
    echo "usage: $1 filename.md number"
    exit 1
}

file=$1                         # obtain filename
[[ -n $file ]] || usage "$0"    # filename is not specified
num=$2 || usage "$0"            # obtain end number
(( num > 0 )) || usage "$0"     # number is not specified or illegal

for (( i = 1; i <= num; i++ )); do
    new="${file%.md}$i.md"      # new filename with the serial number
    cp -p -- "$file" "$new"     # duplicate the file
    sed -i "s/_INCREMENT_/$i/" "$new"
                                # replace "_INCREMENT_" with the serial number
done 
