export const ResponseStatus = {
    Success: "SUCCESS",
    Error: "ERROR",
    ErrorAuthentication: "ERROR_AUTH",
    ErrorTimeout: "ERROR_TIMEOUT"
  }
  
  export const NodeServiceCommands = {
    Stop: "Stop",
    Start: "Start",
    Restart: "Restart",
    Deactivate: "Deactivate",
    AssigningAsSlave: "Assign As Slave",
    AssigningAsMaster: "Assign As Master"
  }
  
  export const PanelNodesCommands = {
    StartAll: "Start All",
    StopAll: "Stop All",
    RestartAll: "Restart All",
    ClearAllViolations: "Clear all violations"
  }
  
  export const ServiceHealthStatus = {
    Ok: "OK",
    Warning: "WARNING",
    Error: "ERROR"
  }
  
  /*
  http://supervisord.org/subprocess.html#process-states
  */
  export const ServiceStateStatus = {
    /**
     * The process has been stopped due to a stop request or has never been started.
     */
    Stopped: "STOPPED",
    /**
     * The process is starting due to a start request.
     */
    Starting: "STARTING",
    /**
     * The process is running.
     */
    Running: "RUNNING",
    /**
     * The process entered the STARTING state but subsequently exited too quickly to move to the RUNNING state.
     */
    Backoff: "BACKOFF",
    /**
     * The process is stopping due to a stop request.
     */
    Stopping: "STOPPING",
    /**
     * The process exited from the RUNNING state (expectedly or unexpectedly).
     */
    Exited: "EXITED",
    /**
     * The process could not be started successfully.
     */
    Fatal: "FATAL",
    /**
     * The process is in an unknown state (supervisord programming error).
     */
    Unknown: "UNKNOWN"
  }
  
  export const ServiceNames = {
    master: "federation-master",
    worker: "federation-worker",
    listener: "federation-thrift-service"
  }
  
  export const NodeType = {
    master: "master",
    slave: "slave",
    listener: "listener",
    inactive: "inactive"
  }
  
  export const RuleParamVisibility = {
    user: "user",
    system: "system"
  }
  
  export const RuleParamType =  {
    string: "string",
    integer: "integer"
  }
  
  export const RuleExecutionStatus = {
    success: "Success",
    warning: "Warning",
    error: "Error"
  }
  
  export const ClusterNodeName = "cluster"