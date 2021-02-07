/**
 * Eleventy Paired Shortcode
 * @param {string} content Return content between paired shortcodes
 * @param {string} forId 
 * @param {string} label 
 * @param {Boolean} required 
 */

module.exports = (content, forId, label, required) => {
    return `
    <div class="mb-6">
        <label class="basic-label" for="${forId}">
            ${label}
            ${required ? "<span class='text-red-500'>*</span>" : "" }
        </label>
        ${content}
    </div>
    `
}