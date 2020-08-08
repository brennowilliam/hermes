//--------------------
// External Libs
//--------------------
import { uuid } from "uuidv4";

// Constants
// const GET = 'GET'
// const POST = 'POST'

// Types
export interface HermesInitConfig {
  queryKey: string;
  config?: any;
  retry?: number;
  notifyGlobalListeners?: (query: any) => void;
}

export interface PropsHermes {
  query: string;
  queryUniqueId: string;
}

enum RequestType {
  GET = "GET",
  POST = "POST"
}

// type GET = 'GET'
// type POST = 'POST'

// export type RequestType = GET | POST

const DEFAULT_CONFIG = {
  queryKey: "test"
};

//--------------------
// Types
//--------------------
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

// Class
export class Hermes<PropsHermes> {
  //--------------------
  // Private Members
  //--------------------
  // private readonly config: HermesInitConfig;
  private readonly queryUniqueId: string;

  //--------------------
  // Public Members
  //--------------------
  public readonly queryKey: string;
  public readonly retry: number;
  // public data: Object | Array<Object> | null;
  // public state: Object | null;

  //--------------------
  // Constructors
  //--------------------
  public constructor(init: HermesInitConfig = DEFAULT_CONFIG) {
    if (!init.queryKey || typeof init.queryKey !== "string") {
      throw new Error("a query property must be provided.");
    }

    this.queryKey = init.queryKey;
    this.queryUniqueId = uuid();
    this.retry = init.retry || 0;

    // this.config = init.config;
    // this.queryKey = init.queryKey;
    // this.data = null;
    // this.queryInternalId = uuid();
    // this.state = {
    //   data: null
    // }
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