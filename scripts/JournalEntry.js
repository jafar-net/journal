/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
        <section class="journalEntryContainer" id="entry--${entry.id}" class="journalEntry">
            <div class="journalEntry">   
                <p>Date: ${entry.date}</p>
                <p>Concepts Covered: ${entry.concept}</p>
                <p>Journal Entry: ${entry.entry}</p>
                <p>Mood: ${entry.mood}</p>
            </div>
        </section>
    `
}

export const postEntry = () => {
    return `
    <div class="newPost">
        <div>
            <input value=""
                   name="postTitle"
                   class="newPost__input"
                   type="text"
                   placeholder="Title" />
        </div>
        <div>
            <input value=""
                   name="postURL"
                   class="newPost__input"
                   type="text"
                   placeholder="URL of gif" />
        </div>
        <textarea name="postDescription"
            class="newPost__input newPost__description"
            placeholder="Story behind your gif..."></textarea>
        <button id="newPost__submit">Save</button>
        <button id="newPost__cancel">Cancel</button>
    </div>
    `
}