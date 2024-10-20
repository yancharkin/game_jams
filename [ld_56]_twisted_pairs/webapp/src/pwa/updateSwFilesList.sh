#!/bin/bash

if [ "$#" -ne 2 ]; then
    echo -e "Not enough arguments.\n"
    echo -e "Usage:"
    echo -e "\tmakeFilesList.sh [directory] [prefix]\n"
    echo -e "  directory - directory which content should be listed"
    echo -e "  prefix    - name of the repo if uploaded to github else empty\n"
    exit
fi

rm "${1}/serviceWorker.js.new" > /dev/null 2>&1
cp "${1}/serviceWorker.js" "${1}/serviceWorker.js.bak"
FL_LINE_FOUND='false'
readarray -t SW_FILE < "${1}/serviceWorker.js"
IFS=$'\n'
for LINE in "${SW_FILE[@]}"; do
    if [ "${FL_LINE_FOUND}" == 'false' ]; then
        if [[ "${LINE}" =~ 'const filesList' ]]; then
            FL_LINE_FOUND='true'
        else
            echo "${LINE}" >> "${1}/serviceWorker.js.new"
        fi
    fi
done

cd "${1}"

PATH_PREFIX="${2}"
OWN_NAME=$(echo ${0} | cut -b 3-)
CUR_DIR=$(pwd)
N_CHAR_TO_REMOVE=$(("${#CUR_DIR}"+2))

LIST=()
function list() {
    DIR="${1}"
    DIR_PATH=$(echo "$(pwd)" | cut -b "${N_CHAR_TO_REMOVE}-")
    for FILE_NAME in $(ls "${DIR}"); do
        if [ "${FILE_NAME}" != "${OWN_NAME}" ] \
                && [ "${FILE_NAME}" != 'manifest.json' ] \
                && [[ ! "${FILE_NAME}" =~ 'serviceWorker.js' ]]; then
            if [ -f "${FILE_NAME}" ]; then
                if [ "${DIR_PATH}" == '' ]; then
                    LIST+=("${PATH_PREFIX}/${FILE_NAME}")
                else
                    LIST+=("${PATH_PREFIX}/${DIR_PATH}/${FILE_NAME}")
                fi
            fi
            if [ -d "${FILE_NAME}" ]; then
                cd "${FILE_NAME}"
                list "."
                cd ".."
                DIR_PATH=$(echo "$(pwd)" | cut -b "${N_CHAR_TO_REMOVE}-")
            fi
        fi
    done
}

list .

LIST_LENGTH=${#LIST[@]}
echo "const filesList = [" >> "./serviceWorker.js.new"
echo '    "'"${PATH_PREFIX}/"'",' >> "./serviceWorker.js.new"
for i in "${!LIST[@]}"; do
    echo -n '    "'${LIST[$i]}'"' >> "./serviceWorker.js.new"
    if (( $i < $((${LIST_LENGTH}-1)) )); then
        echo ',' >> "./serviceWorker.js.new"
    fi
done
echo -e "\n]" >> "./serviceWorker.js.new"
mv "./serviceWorker.js.new" "./serviceWorker.js"
