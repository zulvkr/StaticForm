// this components is deprecated in favor of tailwind @apply
//
module.exports = function(forId) {
    return `
    class="label"
    for="${forId}"
    `
}