import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToolsDataResponse } from '../interfaces';
import { Tool, ToolsGroup } from '../models';
import { ToolParseStatus } from '../type';
import { TOOLS_STORE } from './tools.store';

const MAX_KEYWORDS = 10;

@Injectable({
  providedIn: 'root',
})
export class ToolsService {
  private _toolsDataCache: string;
  private _toolsGroupsArr: ToolsGroup[] = [];
  private _toolsGroupsObj: { [props: string]: ToolsGroup } = {};
  private _toolsArr: Tool[] = [];
  private _toolsObj: { [props: string]: Tool } = {};

  constructor() {
    this._toolsDataCache = JSON.stringify(TOOLS_STORE);
  }

  // getters
  get toolsGroupArr() {
    return this._toolsGroupsArr;
  }

  get toolsGroupObj() {
    return this._toolsGroupsObj;
  }

  get toolsArr() {
    return this._toolsArr;
  }

  get toolsObj() {
    return this._toolsObj;
  }

  // other methods
  /**
   * Loads data from the store object into easily accessable data structures.
   * Make sure to call this method only once.
   * @returns an observable with status messages / errors.
   */
  loadToolsData(): Observable<ToolParseStatus> {
    return new Observable((subscriber) => {
      const toolsData: ToolsDataResponse = JSON.parse(this._toolsDataCache);
      if (!toolsData) subscriber.error('toolsData not found');
      // create tools object and array first
      toolsData.tools?.forEach((t) => {
        const { id, label, path, keywords, apiPath, icon, disabled } = t;
        const tool = new Tool(id, path || '');
        tool.label = label;
        tool.apiPath = apiPath;
        tool.icon = icon;
        tool.disabled = !!disabled;
        tool.keywords =
          keywords?.length > MAX_KEYWORDS
            ? new Set(keywords.slice(0, 10))
            : new Set(keywords || [id]);
        this._toolsArr.push(tool);
        this.toolsObj[id] = tool;
      });

      // create groups object and array
      toolsData.groups?.forEach((g) => {
        const { id, label, tools } = g;
        const group = new ToolsGroup(id);
        group.label = label;
        group.tools = tools;
        this._toolsGroupsArr.push(group);
        this._toolsGroupsObj[id] = group;
      });
      subscriber.next('done');
    });
  }
}
