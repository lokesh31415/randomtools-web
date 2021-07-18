import { Injectable } from '@angular/core';
import { UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { ToolsDataResponse } from '../interfaces';
import { Tool, ToolsGroup } from '../models';
import { ToolParseStatus } from '../type';
import { getToolIdFromUrl } from '../utils';
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
  private _keywordToolsMap: { [keyword: string]: Set<string> } = {};

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
        const { id, label, keywords, apiPath, icon, disabled } = t;
        const tool = new Tool(id);
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
            this._keywordToolsMap[kw].add(id);
          } else {
            this._keywordToolsMap[kw] = new Set(id);
          }
        });
      });

      // create groups object and array
      toolsData.groups?.forEach((g) => {
        const { id, label, tools } = g;
        const group = new ToolsGroup(id);
        group.label = label;
        group.tools = new Set(tools);
        this._toolsGroupsArr.push(group);
        this._toolsGroupsMap[id] = group;
      });

      subscriber.next('done');
    });
  }

  /**
   * function to create related tools, updates related tools inforation in the tools instance itself.
   * @param tool tool for which related to has to be created.
   */
  public calculateRelatedTools(tool: Tool) {
    const relatedToolIds: Set<string> = new Set();
    tool.keywords.forEach((kw) => {
      this._keywordToolsMap[kw].forEach((toolId) => relatedToolIds.add(toolId));
    });
    relatedToolIds.delete(tool.id);
    tool.relatedTools.tools = relatedToolIds;
  }

  /**
   * Returns tool information for the given toolId
   * @param toolId id of the tools
   * @returns tool information
   */
  public getTool(toolId: string): Tool {
    return this.toolsMap[toolId];
  }

  /**
   * Parses last two sengments of the given router url and combines them with '-',
   * checks if a tool exist with that id and returns it.
   * @param url router url segments as UrlSegment[]
   * @returns tool information if exist else undefined.
   */
  public getToolFromUrl(url: UrlSegment[]) {
    let toolData: Tool;
    const toolId = getToolIdFromUrl(url);
    toolData = this.getTool(toolId);
    // calculate related tools
    if (toolData && !toolData?.hasRelatedTools()) {
      this.calculateRelatedTools(toolData);
    }
    return toolData;
  }
}
