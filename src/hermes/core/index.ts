//--------------------
// External Libs
//--------------------
import { uuid } from "uuidv4";

//--------------------
// Types
//--------------------
export interface HermesInitConfig {
  queryKey: string;
  config?: any;
  retry?: number;
  notifyGlobalListeners?: (query: any) => void;
}

export interface PropsHermes {
  query: string;
  queryUniqueId: string;
  retry: number | undefined;
}

enum RequestType {
  GET = "GET",
  POST = "POST"
}

export enum ActionType {
  Failed = "Failed",
  MarkStale = "MarkStale",
  Fetch = "Fetch",
  Success = "Success",
  Error = "Error",
  SetState = "SetState"
}

interface FaileAction {
  type: ActionType.Failed;
}

//--------------------
// Class
//--------------------
export class Hermes<PropsHermes> {
  //--------------------
  // Private Members
  //--------------------
  private readonly queryUniqueId: string;

  //--------------------
  // Public Members
  //--------------------
  public readonly queryKey: string;
  public readonly retry: number;
  public readonly timeout: number;

  //--------------------s
  // Constructors
  //--------------------
  public constructor(queryKey: string, init: HermesOptions) {
    if (!queryKey || typeof queryKey !== "string") {
      throw new Error("queryKey must be provided and it must be a string");
    }

    if (typeof init?.retry !== "number") {
      throw new Error("retry value must be a number.");
    }
    if (init?.retry < 1) {
      throw new Error("retry value must be a number greater than 1.");
    }

    this.queryKey = init.queryKey;
    this.queryUniqueId = uuid();
    this.retry = init.retry || 0;
    this.timeout = init.timeout;
  }

  // -------------------
  // Getters & Setters
  // -------------------
  public getQueryUniqueId() {
    return this.queryUniqueId;
  }

  private setData(data: any) {
    this.data = data;
  }

  public getData() {
    return this.data;
  }

  private setRetry(value: number) {
    this.retry = value;
  }

  public getRetry() {
    return this.retry;
  }

  //--------------------
  // HTTP Methods
  //--------------------
  public get(url: string, options?: any) {
    if (!url) {
      throw new Error("Error: A url must be provided.");
    }

    this.makeRequest(RequestType.GET, url);
  }

  private async makeRequest(
    requestType: RequestType,
    url: string,
    options?: any
  ) {
    // Fire the FETCH Action

    const response = await fetch(url);
    const json = await response.json();
    this.setData(json);
  }

  // private dispatchAction =
}
