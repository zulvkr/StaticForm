// must return strings or template literals

module.exports = function(forId) {
    return `
    class="block tracking-wide text-gray-600 text-sm font-semibold mb-2"
    for="${forId}"
    `
}