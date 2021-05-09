const { uniqueNamesGenerator, adjectives, colors, animals } = require('unique-names-generator');

export default function generateName() : string {
    return uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] });
}