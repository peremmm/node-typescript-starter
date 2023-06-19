import * as fs from 'fs'

// Blocking
export function blocking() {
    console.log('~~ before read sync')
    const data = fs.readFileSync('D:/Bootcamp2/3.0 NodeJs/message.txt')
    console.log('~~ after read sync', data.toString())
    console.log('~~ end')
}

// Non-Blocking
export function nonBlocking() {
    console.log('~~ before read async')
    const data = fs.readFile(
        'D:/Bootcamp2/3.0 NodeJs/message.txt',
        function (err, data) {
            if (err) {
                console.error('~~ error reading file', err)
                return
            }
            console.log('~~ message.txt', data.toString())
        }
    )
    console.log('~~ after read async')
    console.log('~~ end')
}