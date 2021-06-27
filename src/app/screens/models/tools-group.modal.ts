/**
 * Model to store Tools Group information.
 * It'll have the IDs of tools that are comes under this group.
 * Many groups can have the same tool.
 */
export class ToolsGroup {
  // to display in UI.
  label: string;
  // holds ID of tools which comes under this group.
  tools: string[] = [];

  /**
   * @param _id should be unique among groups.
   */
  constructor(private _id: string) {
    this.label = _id;
  }

  // getters
  get id() {
    return this._id;
  }
}
