

const ServiceHealthStatus = {
    Ok: "OK",
    Warning: "WARNING",
    Error: "ERROR"
}

const ServiceNames = {
  master: "virtualization_supervisor",
  worker: "virtualization_worker",
  //worker: "directory",
  listener: "virtualization_listener"
}

const longRunningDetailStatus = {
    finished: "FINISHED",
    error: "ERROR",
    running: "RUNNING",
    inqueue: "INQUEUE",
    processing: "PROCESSING"
}
const longRunningIdsTransitionStates = [
  longRunningDetailStatus.processing, longRunningDetailStatus.inqueue, longRunningDetailStatus.running, longRunningDetailStatus.finished
]

const ServiceStateStatus = {
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
  const customNodes = [
    { 
      node: "node1.atscale.com",
      // ip: "10.10.10.1",
      services: [
        { service: ServiceNames.worker, health: ServiceHealthStatus.Ok, state: ServiceStateStatus.Running },
        { service: "Ethereum node", health: ServiceHealthStatus.Warning, state: ServiceStateStatus.Running },
        { service: "Health monitoring", health: ServiceHealthStatus.Ok, state: ServiceStateStatus.Running },
      ] 
    }
  ]
const now = new Date();
const longRunningIds = [
  {
    long_running_id: "sadfasdf",
    status: longRunningDetailStatus.inqueue,
    last_update_time: now.setSeconds(now.getSeconds() - 20),
    submitted_time: now.setMinutes(now.getMinutes() - 1),
    nodes: "node9.atscale.com",
    services: ServiceNames.worker, 
    task: "start"
  }
]
const nodes = [
    { 
      node: "node1.atscale.com",
      // ip: "10.10.10.1",
      services: [
        { service: ServiceNames.worker, health: ServiceHealthStatus.Ok, state: ServiceStateStatus.Running },
        { service: "Ethereum node", health: ServiceHealthStatus.Warning, state: ServiceStateStatus.Running },
        { service: "Health monitoring", health: ServiceHealthStatus.Ok, state: ServiceStateStatus.Running },
      ] 
    },
    { 
      node: "node2.atscale.com",
      services: [
        { service: ServiceNames.master, health: ServiceHealthStatus.Ok, state: ServiceStateStatus.Running },
        { service: "Bitcoin miner", health: ServiceHealthStatus.Warning, state: ServiceStateStatus.Running },
        { service: "Periodic Command Scheduler", health: ServiceHealthStatus.Error, state: ServiceStateStatus.Running },
        { service: "Hardware Monitoring System", health: ServiceHealthStatus.Error, state: ServiceStateStatus.Running },
      ] 
    },
    { 
      node: "node3.atscale.com",
      services: [
        { service: ServiceNames.master, health: ServiceHealthStatus.Error, state: ServiceStateStatus.Running },
        { service: "Periodic Command Scheduler", health: ServiceHealthStatus.Ok, state: ServiceStateStatus.Running },
        { service: "Health monitoring", health: ServiceHealthStatus.Error, state: ServiceStateStatus.Running },
  
      ] 
    },
    { 
      node: "node4.atscale.com",
      services: [
        { service: ServiceNames.master, health: ServiceHealthStatus.Warning, state: ServiceStateStatus.Running },
        { service: "System Monitoring daemon", health: ServiceHealthStatus.Ok, state: ServiceStateStatus.Running },
        { service: "BitTorrent Client", health: ServiceHealthStatus.Error, state: ServiceStateStatus.Stopped }
      ] 
    },  
    { 
      node: "node5.atscale.com",
      // ip: "192.168.1.234",
      services: [
        { service: ServiceNames.worker, health: ServiceHealthStatus.Warning, state: ServiceStateStatus.Running },
        { service: "Periodic Command Scheduler", health: ServiceHealthStatus.Error, state: ServiceStateStatus.Running },
        { service: "Ethereum node", health: ServiceHealthStatus.Warning, state: ServiceStateStatus.Running },
      ] 
    },
    { 
      node: "node6.atscale.com",
      services: [
        { service: ServiceNames.worker, health: ServiceHealthStatus.Error, state: ServiceStateStatus.Stopped },
        { service: "Health monitoring", health: "Unknown", state: ServiceStateStatus.Running },
        { service: "Periodic Command Scheduler", health: ServiceHealthStatus.Warning, state: ServiceStateStatus.Running },
      ] 
    },
    { 
      node: "node26.atscale.com",
      services: [
        { service: ServiceNames.master, health: ServiceHealthStatus.Ok, state: ServiceStateStatus.Running }
      ] 
    },
    { 
      node: "node25.atscale.com",
      services: [
        { service: ServiceNames.listener, health: ServiceHealthStatus.Ok, state: ServiceStateStatus.Running }
      ] 
    },
    { 
      node: "node7.atscale.com",
      services: [
        { service: "torrent client", health: ServiceHealthStatus.Error, state: ServiceStateStatus.Stopped }
      ] 
    },
    { 
      node: "node8.atscale.com",
      // ip: "192.168.1.234",
      services: [
        { service: "another service running client running", health: ServiceHealthStatus.Error, state: ServiceStateStatus.Stopped }
      ]
    },
    { 
      node: "node9.atscale.com",
      services: [
        { service: ServiceNames.worker, health: ServiceHealthStatus.Warning, state: ServiceStateStatus.Starting },
        { service: "Atscale oracle", health: ServiceHealthStatus.Ok, state: ServiceStateStatus.Starting },
      ] 
    },
    { 
      node: "node10.atscale.com",
      services: [
        { service: ServiceNames.worker, health: ServiceHealthStatus.Error, state: ServiceStateStatus.Fatal }
      ] 
    },
    { 
      node: "node11.atscale.com",
      // ip: "10.0.1.23",
      services: [
        { service: "Periodic Command Scheduler", health: ServiceHealthStatus.Error, state: ServiceStateStatus.Running },
        { service: "AI prediction service", health: ServiceHealthStatus.Error, state: ServiceStateStatus.Stopped }
      ] 
    },
    { 
      node: "node12.atscale.com",
      services: [
        { service: "another service running client running", health: ServiceHealthStatus.Error, state: ServiceStateStatus.Stopped },
        { service: "AI prediction service", health: ServiceHealthStatus.Error, state: ServiceStateStatus.Stopped }
      ] 
    },
    { 
      node: "node15.atscale.com",
      services: []
    },
  ]


  
  const defaultTimeout = 200
  const longRunningOperationMinTimeout = 3 * 1000
  const longRunningOperationMaxTimeout = 8 * 1000
  let calledOnce = false
  
  const getLongRunningOperationTimeout = () => {
    const result = Math.floor(Math.random() * (longRunningOperationMaxTimeout - longRunningOperationMinTimeout + 1)) + longRunningOperationMinTimeout
    console.log("Long running timeout", result)
    return result
  }
  
  const performDelayedOperation = (action, timeout = defaultTimeout) => new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        var result = action()
        resolve(result)  
      } catch (error) {
        reject(error)
      }    
    }, timeout)
  })
  const wait = async (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }
  const performLongRunningBackgroud = async (action, id = null) => {
    if (id) {
      //get id
      let idObject = longRunningIds.find(i => i.long_running_id === id)
      let processed = false
      let value = ""
      let timeout = getLongRunningOperationTimeout()
      timeout /= 4 
      for (let i = 0; i < longRunningIdsTransitionStates.length; i++) {
        value = await processNextIdStatusDetail(idObject.status, timeout)
        console.log("Task Status: ", value);
        idObject.status = value
        if (value == longRunningDetailStatus.finished) {
          processed = true;
          break;
        }
      }
      if (processed) {
        action()
      }     
    } else {
      setTimeout(()=> {
        action()
      }, getLongRunningOperationTimeout())
    }
  }
    // returns a promise
    const startService = ({ nodeName, serviceName, longRunningId = null }) => performDelayedOperation(() => {
      nodeNames = nodeName.split(",")
      if (nodeNames.length > 1) {
        if (longRunningId) {
          longRunningIdNext(longRunningId)
        }
        for (let i = 0; i < nodeNames.length; i++) {
          const element = nodeNames[i];
          const service = getService({ nodeName: element, serviceName })
          
          service.state = ServiceStateStatus.Starting
          service.health = ServiceHealthStatus.Warning
        }
        performLongRunningBackgroud(() => { 
          console.log("Before: ", nodes);
        
          for (let i = 0; i < nodeNames.length; i++) {
            const element = nodeNames[i];
            const service = getService({ nodeName: element, serviceName })
            service.state = ServiceStateStatus.Running
            service.health = ServiceHealthStatus.Ok
          }
          console.log("After: ", nodes)
        }, longRunningId)
      } else {
        const service = getService({ nodeName, serviceName })
        if (service.state === ServiceStateStatus.Running) {
          console.log(`Can't start service ${serviceName} for node${nodeName}, because it is already in running state`)
        }
        if (service.state === ServiceStateStatus.Starting) {
          console.log(`Can't start service ${serviceName} for node${nodeName}, because it is in Starting mode`)
        }
        service.state = ServiceStateStatus.Starting
        service.health = ServiceHealthStatus.Warning
        performLongRunningBackgroud(() => { 
          service.state = ServiceStateStatus.Running
          service.health = ServiceHealthStatus.Ok
        }, longRunningId)  
      }
    })
    
  //returns a promise
  const stopService = ({ nodeName, serviceName, callback, longRunningId = null }) => performDelayedOperation(() => {  
    nodeNames = nodeName.split(",")
    if (nodeNames.length > 1) {
      //MultiNodes run
      if (longRunningId) {
        longRunningIdNext(longRunningId)
      }
      for (let i = 0; i < nodeNames.length; i++) {
        const element = nodeNames[i];
        const service = getService({ nodeName: element, serviceName })
        if (service.state !== ServiceStateStatus.Running) {
          console.log(`Can't stop service ${serviceName} for node${nodeName}, because it is not in running state. Current state is ${service.state}`)
        }
        service.state = ServiceStateStatus.Stopping
        service.health = ServiceHealthStatus.Warning
      }
      performLongRunningBackgroud(() => { 
        console.log("Before: ", nodes);
      
        for (let i = 0; i < nodeNames.length; i++) {
          const element = nodeNames[i];
          const service = getService({ nodeName: element, serviceName })
          service.state = ServiceStateStatus.Stopped
          service.health = ServiceHealthStatus.Error
        }
        console.log("After: ", nodes)
        if (callback) {
          callback()
        }
      }, longRunningId)
    } else {
    //single run 
      const service = getService({ nodeName, serviceName })
      if (service.state !== ServiceStateStatus.Running) {
        throw Error(`Can't stop service ${serviceName} for node${nodeName}, because it is not in running state. Current state is ${service.state}`)
      }
      service.state = ServiceStateStatus.Stopping
      service.health = ServiceHealthStatus.Warning
      performLongRunningBackgroud(() => { 
        console.log("Before: ", nodes);
        service.state = ServiceStateStatus.Stopped
        service.health = ServiceHealthStatus.Error
        if (callback) {
          callback()
        }
      }, longRunningId)
    }
  })

  const processLongRunningId = ({node, service, task}) => {
    //Generate id
    const id = new Date().getUTCMilliseconds().toString();
    const creationTime = new Date()
    //create longRunningId object
    const longRunningIdObject = {
        long_running_id: id,
        status: longRunningDetailStatus.processing,
        last_update_time: creationTime,
        submitted_time: creationTime,
        nodes: node ? node : "",
        services: service ? service : "",
        task: task ? task : ""
       
    }
    longRunningIds.push(longRunningIdObject)
    //return the generated id
    return id;
  }
  getNextidStatusDetail = (currentIdDetail) => {
    const currentIndex = longRunningIdsTransitionStates.indexOf(currentIdDetail)
    if (currentIndex == longRunningIdsTransitionStates.length -1) {
       return currentIdDetail
    }  else {
      return longRunningIdsTransitionStates[currentIndex + 1]
    }
  }
  longRunningIdNext = (id) => {
    let idObject = longRunningIds.find(i => i.long_running_id === id)
    idObject.status = getNextidStatusDetail(idObject.status)
  }
   processNextIdStatusDetail = async ( currentIdDetail, timeout ) => {
    return performDelayedOperation(() => {
      return getNextidStatusDetail(currentIdDetail)
    }, timeout)
    
  }

  getSuccessMessage = ({root, node, service, task}) => {
      return {
        "long_running_id": processLongRunningId({node, service, task}),
        "message": root !== undefined ? root : "",
        "status": "SUCCESS"
    }
  }
  getLongRunningIdById = ({id}) => {
    return longRunningIds.find(i => i.long_running_id === id.toString())
  }
  getAllLongRunningIds = () => {
    return longRunningIds;
  }

  const getNode = (nodeName ) => {
    const node = nodes.find(x => x.node == nodeName )
    if (!node) {
      throw Error(`Cannot find node ${nodeName}`)
    }
    return node
  }
  
  const getService = ({ nodeName, serviceName }) => {
    return getNodeAndService({ nodeName, serviceName }).service
  }
  
  const getNodeAndService = ({ nodeName, serviceName }) => {
    const node = getNode(nodeName)
    const service = node.services.find(item => item.service == serviceName )
    if (!service) {
      throw Error(`Can't find service ${serviceName} for node${nodeName}`)
    }
    return { node, service }
  }
  async function orchestratorGetCustomNodes() {
    return performDelayedOperation(() => {
      return customNodes
    })
  }
   async function orchestratorGetAllNodes() {
    return performDelayedOperation(() => {
      if (!calledOnce) {
        //intentionally not waiting
        performLongRunningBackgroud(() => {
          const node = nodes.find(n => n.node === "node9.atscale.com")
          node.services[0].state = ServiceStateStatus.Running
          node.services[0].health = ServiceHealthStatus.Ok
          calledOnce = true
        }, "sadfasdf")
      }
      return  nodes
    }, 2000)     
  }
  
   async function orchestratorGetNode(nodeName) {
    return performDelayedOperation(() => {
      const node = nodes.find(n => n.node === nodeName)
      if (!node) {
        throw Error(`cannot find node ${nodeName}`)
      }
      return node
    })     
  }
  
   async function orchestratorStopService({ nodeName, serviceName, longRunningId }) {
    await stopService( { nodeName, serviceName, longRunningId })
  }
  
   async function orchestratorStartService({ nodeName, serviceName, longRunningId }) {
    await startService({ nodeName, serviceName, longRunningId })
  }
  
   async function orchestratorReStartService({ nodeName, serviceName, longRunningId }) {
    const callback = () => {startService({ nodeName, serviceName,longRunningId  })}
    await stopService({ nodeName, serviceName, callback })
  }
  
   async function orchestratorDeleteService({ nodeName, serviceName, longRunningId }) {
    //intentionally we DO NOT wait for the operation
    const { node, service } = getNodeAndService({ nodeName, serviceName })
    service.state = ServiceStateStatus.Stopping;
    performLongRunningBackgroud(() => {
      const { node } = getNodeAndService({ nodeName, serviceName })
      node.services = node.services.filter( s => s.service !== serviceName )
    }, longRunningId)
    return performDelayedOperation(() => "hurray, we do nto expect response really")
  }
  
   async function orchestratorCreateService({ nodeName, serviceName, longRunningId }) {
    //intentionally we DO NOT wait for the operation

    performLongRunningBackgroud(() => {
      const node = getNode(nodeName)
      const newService = { service: serviceName, health: ServiceHealthStatus.Ok, state: ServiceStateStatus.Starting  }
      node.services.push(newService)
      performLongRunningBackgroud(() => {
        newService.state = ServiceStateStatus.Running
      }, longRunningId)
    })
    return performDelayedOperation(() => "hurray, we do nto expect response really")
  }
  
   async function orchestratorGetInstances() {
    return performDelayedOperation(() => rules.flatMap(rule => { 
      return rule.instances.map(instance => {
        return { 
          ruleName: rule.name,
          ruleVersion: rule.version,
          id: instance.id,
          name: instance.name,
          active: instance.active,
          parameters: instance.parameters
        }
      }) 
    }))
  }
  
   async function orchestratorActivateRuleInstance(instanceId) {
    return performDelayedOperation(() => changeActiveRuleInstance(instanceId, true))
  }
  
   async function orchestratorDeactivateRuleInstance(instanceId) {
    return performDelayedOperation(() => changeActiveRuleInstance(instanceId, false))
  }
  
   async function orchestratorUpdateRuleInstance(instanceId, parameters) {
    return performDelayedOperation(() => updateRuleInstance(instanceId, parameters), 1000)
  }
  
   async function orchestratorGetStatusResults(instanceId, fromDate, toDate) {
    return performDelayedOperation(() => {
      return getViolationData()
        .find(item => item.id === instanceId)
        .statusResults
        .filter(sr => fromDate <= sr.date && sr.date <= toDate)
    })
  }
  module.exports = {
    orchestratorStopService: orchestratorStopService,
    orchestratorStartService:orchestratorStartService,
    orchestratorGetAllNodes: orchestratorGetAllNodes,
    orchestratorGetCustomNodes:orchestratorGetCustomNodes,
    getSuccessMessage: getSuccessMessage,
    orchestratorCreateService: orchestratorCreateService,
    orchestratorDeleteService: orchestratorDeleteService,
    orchestratorReStartService: orchestratorReStartService,
    getAllLongRunningIds: getAllLongRunningIds,
    getLongRunningIdById: getLongRunningIdById
  }
  
//   export async function orchestratorGetNodeLatestViolations(nodeName) {
//     return performDelayedOperation(() => {
//       const result = getViolationData()
//         .flatMap(item => item
//           .statusResults
//           .filter(sr => sr.nodeName === nodeName && sr.status === RuleExecutionStatus.error)
//           .map(sr => {
//             sr.ruleInstance = item.name
//             return sr
//           }))
//       result.sort((a, b) => (a.date > b.date) ? -1 : (b.date > a.date) ? 1 : 0)
//       return result.slice(0, 6)
//     })
//   }
  