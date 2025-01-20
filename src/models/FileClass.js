export class FileClass {
    constructor(name, key) {
        this.name = name;
        this.key = key;
        this.type= 'FileClass';
    }
    generateFileHTML() {
        return `
                <div class="flex flex-row space-x-2 text-primary-300">
                    ${this.key.length>2?'L&nbsp;':''}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                    </svg>
                    <button name="button-${this.name}" aria-label=${this.key} class="flex items-center text-primary-200 space-x-2 cursor-pointer">
                        ${this.name}
                    </button>
                </div>
        `;
    }
}