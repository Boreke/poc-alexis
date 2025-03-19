export class PromptModel {
    constructor(sessionId, fileType, jsonData) {
        this.sessionId = sessionId; 
        this.fileType = fileType;
        this.jsonData = jsonData;
    }

    toJSON() {
        return {
            sessionId: this.sessionId,
            fileType: this.fileType,
            jsonData: JSON.stringify(this.jsonData)
        };
    }
}
