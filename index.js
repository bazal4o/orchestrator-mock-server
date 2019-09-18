var express = require("express")
const app = express()
var api = require("./apiOrchestrator")

//import  * as api  from './apiOrchestrator'
const defaultAgentQueueDelay = 3000;
app.listen(3000,async  () => {
  console.log("Server running on port 3000");
  
});

sendSuccess = (req, res, data) => {
  console.log("Path: " + req.originalUrl)
  console.log("Response")
  console.log(data)
  res.status(200).send(data)
}

app.get("/v1/longrunningid", async (req, res) => {
  const response = {
    long_running_ids: api.getAllLongRunningIds(),
  "message": "",
  "status": "SUCCESS"
  }
  sendSuccess(req, res, response)
})
app.get("/v1/longrunningid/:id", async (req, res) => {
  let params = req.params
  const response = {
  long_running_ids: [ api.getLongRunningIdById({ id: params.id })  ],
  message: "",
  status: "SUCCESS"
  }
  sendSuccess(req, res, response)
})
app.get("/orchestratorGetNodes",async (req, res) => 
{
  const nodes = await api.orchestratorGetCustomNodes()
  const response = {
    message: "/v1/nodes",
    nodes: [],
    status: ""
  }
  if (nodes) {
    response.nodes = nodes
    response.status = "SUCCESS"
  } else {
    response.status = "FAIL"
  }
  sendSuccess(req, res, {"response": response})
})
app.put("/v1/nodes/:node/services/:service/start", async (req, res) => {
  let params = req.params;
  const resp = api.getSuccessMessage({root: req.originalUrl,node: params.node, service: params.service, task: "start"})
  sendSuccess(req, res, resp)
  setTimeout( () => {
    api.orchestratorStartService({nodeName: params.node, serviceName: params.service, longRunningId: resp.long_running_id})
  }, defaultAgentQueueDelay)
})
app.put("/v1/nodes/:node/services/:service/stop", async (req, res) => {
  let params = req.params;
  const resp = api.getSuccessMessage({root: req.originalUrl,node: params.node, service: params.service, task: "stop"})
  sendSuccess(req, res, resp)
  setTimeout( () => {
    api.orchestratorStopService({nodeName: params.node, serviceName: params.service, longRunningId: resp.long_running_id})
  }, defaultAgentQueueDelay)
})
app.put("/v1/nodes/:node/services/:service/restart", async (req, res) => {
  let params = req.params;
  const resp = api.getSuccessMessage({root: req.originalUrl,node: params.node, service: params.service, task: "restart"})
  sendSuccess(req, res, resp)
  setTimeout( () => {
    api.orchestratorReStartService({nodeName: params.node, serviceName: params.service, longRunningId: resp.long_running_id })
  }, defaultAgentQueueDelay)
})
// app.put("/v1/nodes/:node/services/:service/stop", async (req, res) => {
//   let params = req.params;
//   console.log(params);
//   const resp = await api.orchestratorStopService()
//   res.status(200).send({"long_running_id": resp.long_running_id, "message": resp.message, "status": resp.status})
// });
//Create service
app.post("/v1/nodes/:node/service/:serviceName", async (req, res) =>{
  let params = req.params;
  
  const resp = api.getSuccessMessage({root: req.originalUrl,node: params.node, service: params.serviceName, task: "create"})
  sendSuccess(req, res, resp)
  setTimeout( () => {
    api.orchestratorCreateService({nodeName: params.node, serviceName: params.serviceName, longRunningId: resp.long_running_id})
  }, defaultAgentQueueDelay)
})
//Remove service
app.delete("/v1/nodes/:node/service/:serviceName", async (req, res) => {
  let params = req.params;
  const resp = api.getSuccessMessage({root: req.originalUrl,node: params.node, service: params.serviceName, task: "remove"})
  res.status(200).send(resp)
  setTimeout( () => {
    api.orchestratorDeleteService({nodeName: params.node, serviceName: params.serviceName, longRunningId: resp.long_running_id})
  }, defaultAgentQueueDelay )
})
app.get("/v1/nodes", async (req, res) => 
{
    const nodes = await api.orchestratorGetAllNodes()
    const response = {
      message: "/v1/nodes",
      nodes: [],
      status: ""
    }
    if (nodes) {
      response.nodes = nodes
      response.status = "SUCCESS"
    } else {
      response.status = "FAIL"
    }
    sendSuccess(req, res, response)
})