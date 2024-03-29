import { ToolsGroup } from './tools-group.modal';

/**
 * Tools model to store a tool information (like pdf compresser).
 */
export class Tool {
  // label will be displayed in the UI.
  label: string;
  // to use while searching and also to find related tools.
  keywords = new Set<string>();
  // name of material icon to use (default to file_copy)
  icon: string = 'file_copy';
  // whether to diisabled this tool or not
  disabled: boolean = false;
  // related tools
  relatedTools: ToolsGroup;
  // path of the api-end-point assigned for this tool.
  apiPath?: string;
  // router path
  path: string = '';

  // getters
  public get id(): string {
    return this._id;
  }

  /**
   * @param id - unique Id of this tool.
   * @param path - url path of this tool's home page (mainly used for routing).
   */
  constructor(private _id: string) {
    this.label = _id;
    this.keywords.add(this.label);
    this.relatedTools = new ToolsGroup(_id + '-relatedtools');
    this.relatedTools.label = 'Related Tools';
    // construct path url from id
    this.constructPath();
  }

  constructPath() {
    let path = '';
    let segs = this._id.split('-');
    segs?.forEach((s) => {
      if (s.trim()) path += `${s.trim()}/`;
    });
    // remove trailing slash
    path = path.length ? path.slice(0, path.length - 1) : path;
    this.path = path;
  }

  hasRelatedTools() {
    return !!this.relatedTools?.tools?.size;
  }
}
