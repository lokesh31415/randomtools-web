import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToolsDataResponse } from '../interfaces';
import { Tool, ToolsGroup } from '../models';
import { ToolParseStatus } from '../type';
import { TOOLS_STORE } from './tools.store';

const MAX_KEYWORDS = 5;

@Injectable({
  providedIn: 'root',
})
export class ToolsService {
  private _toolsDataCache: string;
  private _toolsGroupsArr: ToolsGroup[] = [];
  private _toolsGroupsMap: { [props: string]: ToolsGroup } = {};
  private _toolsArr: Tool[] = [];
  private _toolsMap: { [props: string]: Tool } = {};
  private _keywordToolsMap: { [keyword: string]: string[] } = {};

  constructor() {
    this._toolsDataCache = JSON.stringify(TOOLS_STORE);
  }

  // getters
  public get toolsGroupArr() {
    return this._toolsGroupsArr;
  }

  public get toolsGroupMap() {
    return this._toolsGroupsMap;
  }

  public get toolsArr() {
    return this._toolsArr;
  }

  public get toolsMap() {
    return this._toolsMap;
  }

  public get keywordToolsMap() {
    return this._keywordToolsMap;
  }

  // other methods
  /**
   * Async function that Loads data from the store object into easily accessable data structures.
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
            ? new Set(keywords.slice(0, MAX_KEYWORDS))
            : new Set(keywords || id?.split('-') || []);
        this._toolsArr.push(tool);
        this.toolsMap[id] = tool;
        keywords.forEach((kw) => {
          if (this._keywordToolsMap[kw]) {
            this._keywordToolsMap[kw].push(id);
          } else {
            this._keywordToolsMap[kw] = [id];
          }
        });
      });

      // create groups object and array
      toolsData.groups?.forEach((g) => {
        const { id, label, tools } = g;
        const group = new ToolsGroup(id);
        group.label = label;
        group.tools = tools;
        this._toolsGroupsArr.push(group);
        this._toolsGroupsMap[id] = group;
      });

      subscriber.next('done');
    });
  }

  /**
   * function to create related tools
   */
  calculateRelatedTools(tool: Tool) {
    const relatedToolIds: string[] = [];
    tool.keywords.forEach((kw) => {
      relatedToolIds.push(...(this._keywordToolsMap[kw] || []));
    });
    const currToolIndex = relatedToolIds.indexOf(tool.id);
    if (currToolIndex !== -1) relatedToolIds.splice(currToolIndex, 1);
    tool.relatedTools.tools = relatedToolIds;
  }
}
